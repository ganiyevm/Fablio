<template>
    <section class="bg-green-500 py-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="flex items-center mb-4 md:mb-0">
            <div class="bg-gray-800 p-3 rounded-lg mr-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </div>
            <span class="text-white text-xl font-semibold">New Services Fablio? No Problem</span>
          </div>
          <div class="text-white text-xl font-bold">
            Just Call Us! +1 (500) 123 45 67
          </div>
        </div>
      </div>
    </section>
   <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div>
            <div class="flex items-center mb-4">
              <img src="../public/logo/image.png" alt="Logo" class="h-10 " />
              <div class="text-2xl font-bold">
                
                <span class="inline-block w-3 h-3 bg-green-500 rounded-full ml-1"></span>
              </div>
            </div>
            <p class="text-gray-400 mb-6">
              Fablio is operating in the most of textile market, as the it is manufacture and trader. As years go by the range produced textiles products has increased.
            </p>
            <div class="flex space-x-3">
              <div class="text-lg font-semibold mb-4">Social Share:</div>
              <img src="../public/socialicons/facebook.png" alt="Logo" class="h-10" />
              <img src="../public/socialicons/twitter.png" alt="Logo" class="h-10" />
              <img src="../public/socialicons/linkedin.png" alt="Logo" class="h-10" />
              <img src="../public/socialicons/pinterest.png" alt="Logo" class="h-10" />
            </div>
         
          </div>

          <!-- Address -->
          <div>
            <div class="flex items-center mb-4">
              <div class="bg-green-500 p-2 rounded-lg mr-3">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <p class="font-semibold">Address: 66 Guild Street</p>
                <p class="text-gray-400">City 512B, Great NT</p>
              </div>
            </div>
          </div>

          <!-- Email -->
          <div>
            <div class="flex items-center mb-4">
              <div class="bg-green-500 p-2 rounded-lg mr-3">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <div>
                <p class="font-semibold">Have Any Questions</p>
                <p class="text-gray-400">Mail: info@example.com</p>
              </div>
            </div>
          </div>

          <!-- Gallery -->
          <div>
            <div class="grid grid-cols-3 gap-2">
              <div class="w-16 h-16 bg rounded"
              :style="footer1"></div>
              <div class="w-16 h-16 bg-gray-700 rounded"></div>
              <div class="w-16 h-16 bg-gray-700 rounded"></div>
              <div class="w-16 h-16 bg-gray-700 rounded"></div>
              <div class="w-16 h-16 bg-gray-700 rounded"></div>
              <div class="w-16 h-16 bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>

        <!-- Footer Links -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-800 text-sm">
          <a href="#" class="text-gray-400 hover:text-white">About Travel</a>
          <a href="#" class="text-gray-400 hover:text-white">Our Work</a>
          <a href="#" class="text-gray-400 hover:text-white">Latest News</a>
          <a href="#" class="text-gray-400 hover:text-white">About Us</a>
          <a href="#" class="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="#" class="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="#" class="text-gray-400 hover:text-white">Contact Us</a>
          <a href="#" class="text-gray-400 hover:text-white">FAQ</a>
        </div>

        <!-- Copyright -->
        <div class="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-gray-800">
          <p class="text-gray-400 text-sm">
            Copyright © 2025 ThemetechMount. All rights reserved. Powered by Preyan Technosys Pvt. Ltd.
          </p>
          <div class="flex space-x-2 mt-4 md:mt-0">
            <div class="w-8 h-5 bg-blue-600 rounded text-xs flex items-center justify-center">VISA</div>
            <div class="w-8 h-5 bg-red-600 rounded text-xs flex items-center justify-center">MC</div>
            <div class="w-8 h-5 bg-blue-500 rounded text-xs flex items-center justify-center">DISC</div>
            <div class="w-8 h-5 bg-blue-700 rounded text-xs flex items-center justify-center">AMEX</div>
          </div>
        </div>
      </div>
    </footer>
  </template>
  <script setup lang="ts">
import { computed } from 'vue'




const footer1BackgroundImage = `footer/footer1.jpg`

const footer1 = computed(() => ({ backgroundImage: `url('${footer1BackgroundImage}')` }))</script>
  