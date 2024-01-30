<template>
  <div class="page-template h-screen pb-24">
    <div class="flex flex-row h-full">
      <div class="basis-4/12 menu-wrapper">
        <div @click="toHome" class="cursor-pointer relative arrow-wrapper h-2/5">
          <div class="back-btn-wrapper flex items-center absolute pt-12 pl-12">
            <img class="left-arrow mr-2" :src="leftArrow" />
            Back
          </div>
        </div>
        <div class="absolute z-10 pt-24 pl-12 h-3/5 text-72 font-bold">
          <ul>
            <li
              @click="toLink('about')"
              :class="{ active: isActive('About') }"
              class="menu-item cursor-pointer flex items-center"
            >
              <div class="orange-rect bg-ffb800"></div>
              About Us
            </li>
            <li
              @click="toLink('our-product')"
              :class="{ active: isActive('Our Product') }"
              class="menu-item cursor-pointer flex items-center pt-8"
            >
              <div class="orange-rect bg-ffb800"></div>
              Our Product
            </li>
            <li
              @click="toLink('contact-us')"
              :class="{ active: isActive('Contact Us') }"
              class="menu-item cursor-pointer flex items-center pt-8"
            >
              <div class="orange-rect bg-ffb800"></div>
              Contact Us
            </li>
          </ul>
        </div>
      </div>
      <div class="basis-8/12 content-wrapper">
        <div class="pl-72 pt-12 pr-12">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import leftArrow from '@/assets/images/left-arrow.png'

const activeIndex = ref(0)
const router = useRouter()
const route = useRoute()

function toLink(link) {
  router.push(link)
}
function toHome() {
  router.push('/')
}
function isActive(name) {
  const routhName = route.name
  return routhName === name
}
</script>

<style scoped>
.arrow-wrapper {
  width: 0;
  background-color: transparent;
}
.orange-rect {
  width: 10rem;
  height: 1.5rem;
  margin-right: 50px;
  background-color: transparent;
}
.active .orange-rect {
  width: 10rem;
  animation: slideFromleft 0.5s forwards;
  background-color: var(--cog-color-orange);
}
.active {
  color: var(--cog-color-orange);
  opacity: 1;
}
.active.menu-item:hover {
  opacity: 1;
}
.menu-item:hover {
  opacity: 0.3;
}
</style>
