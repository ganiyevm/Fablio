import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { HttpService } from '@nestjs/axios'
import * as nodemailer from 'nodemailer'
import { lastValueFrom } from 'rxjs'
import { ContactDto } from './dto/contact.dto'

const esc = (s: unknown) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

@Injectable()
export class ContactService {
  private transporter: nodemailer.Transporter | null = null
  private mailTo = ''
  private tgToken = ''
  private tgChatId = ''

  constructor(private cfg: ConfigService, private http: HttpService) {
    const host = this.cfg.get<string>('SMTP_HOST')
    const port = Number(this.cfg.get<string>('SMTP_PORT') ?? 587)
    const user = this.cfg.get<string>('SMTP_USER')
    const pass = this.cfg.get<string>('SMTP_PASS')

    this.mailTo = this.cfg.get<string>('MAIL_TO') ?? ''
    // this.tgToken = this.cfg.get<string>('TG_BOT_TOKEN') ?? ''
    // this.tgChatId = this.cfg.get<string>('TG_CHAT_ID') ?? ''

    if (host && user && pass) {
      this.transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      })
    }
  }

  async handle(dto: ContactDto) {
    const channel = dto.channel ?? 'both'
    const results: any = { channel }

    if (channel === 'email' || channel === 'both') {
      try {
        results.email = await this.sendEmail(dto)
      } catch (e: any) {
        results.email = { ok: false, error: String(e?.message || e) }
      }
    }
    // if (channel === 'telegram' || channel === 'both') {
    //   try {
    //     results.telegram = await this.sendTelegram(dto)
    //   } catch (e: any) {
    //     results.telegram = { ok: false, error: String(e?.message || e) }
    //   }
    // }

    // hech bo'lmaganda bitta kanal muvaffaqiyatli bo'lsa ok=true
    const ok = Boolean(results.email?.ok || results.telegram?.ok)
    return { ok, results }
  }

  private async sendEmail(dto: ContactDto) {
    if (!this.transporter) return { ok: false, error: 'Mailer not configured' }

    const fromUser = this.cfg.get<string>('SMTP_USER')!
    const html = `
      <h2>New contact form</h2>
      <ul>
        <li><b>Name:</b> ${esc(dto.name)}</li>
        <li><b>Email:</b> ${esc(dto.email)}</li>
        <li><b>Phone:</b> ${esc(dto.phone)}</li>
        <li><b>Company:</b> ${esc(dto.company)}</li>
        <li><b>Subject:</b> ${esc(dto.subject)}</li>
      </ul>
      <p><b>Message:</b></p>
      <pre style="white-space:pre-wrap">${esc(dto.message)}</pre>
    `
    const info = await this.transporter.sendMail({
        from: `Website Contact <${fromUser}>`,
        to: this.mailTo,              // .env dagi qabul qiluvchi
        replyTo: dto.email,           // <<< javob shu mijoz emailiga boradi
        subject: `[Contact] ${dto.subject} — ${dto.name}`,
        html,
      })
    return { ok: true, messageId: info.messageId }
  }

//   private async sendTelegram(dto: ContactDto) {
//     if (!this.tgToken || !this.tgChatId) return { ok: false, error: 'Telegram not configured' }

//     const text =
//       `<b>🧵 New contact form</b>\n` +
//       `<b>Name:</b> ${esc(dto.name)}\n` +
//       `<b>Email:</b> ${esc(dto.email)}\n` +
//       `<b>Phone:</b> ${esc(dto.phone)}\n` +
//       `<b>Company:</b> ${esc(dto.company)}\n` +
//       `<b>Subject:</b> ${esc(dto.subject)}\n\n` +
//       `<b>Message:</b>\n${esc(dto.message)}`

//     const url = `https://api.telegram.org/bot${this.tgToken}/sendMessage`
//     const payload = { chat_id: this.tgChatId, text, parse_mode: 'HTML', disable_web_page_preview: true }

//     const resp = await lastValueFrom(this.http.post(url, payload))
//     return { ok: !!resp.data?.ok, messageId: resp.data?.result?.message_id }
//   }
}
