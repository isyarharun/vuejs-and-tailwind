<template>
  <div class="home">
    <div class="flex justify-end gap-20">
      <div
        class="w-[67px] h-[18px] bg-ffb800"
        :class="{ 'slide-from-right': isHover, 'hide-from-left': !isHover }"
      ></div>
      <div
        class="w-[140px] h-[18px] bg-ffb800"
        :class="{ 'slide-from-right': isHover, 'hide-from-left': !isHover }"
      ></div>
    </div>
    <div
      @mouseover="onHover"
      @mouseleave="onLeave"
      class="relative image-wrapper"
    >
      <div class="absolute title-wrapper text-175 text-ffb800 font-bold">
        We Create
      </div>
      <div class="flex items-center justify-center h-full">
        <img class="image" :src="lightBulb" />
      </div>
      <div
        @click="toAbout"
        class="cursor-pointer absolute arrow-wrapper flex items-center"
      >
        <div
          class="text-72 text-ffb800 font-bold"
          :class="{
            'slide-in': isHover,
            'slide-out': !isHover,
          }"
        >
          AWESOME THINGS
        </div>
        <div
          :class="{ 'right-slide-in': isHover, 'right-slide-out': !isHover }"
        >
          <img class="arrow-image" :src="arrow" />
        </div>
      </div>
    </div>
    <div class="flex justify-start gap-20">
      <div
        :class="{ 'slide-from-left': isHover, 'hide-from-right': !isHover }"
        class="w-[67px] h-[18px] bg-ffb800"
      ></div>
      <div
        :class="{ 'slide-from-left': isHover, 'hide-from-right': !isHover }"
        class="w-[140px] h-[18px] bg-ffb800"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import lightBulb from '@/assets/images/light-bulb.png'
import arrow from '@/assets/images/arrow.png'
import { useRouter } from 'vue-router'

const isHover = ref(false)
const router = useRouter()
function onHover() {
  isHover.value = true
}
function onLeave() {
  isHover.value = false
}
function toAbout() {
  router.push('/about')
}
</script>

<style scoped>
.home {
  margin: 50px;
}
.image-wrapper {
  margin: 100px 0;
}
.title-wrapper {
  top: -21%;
  left: 7%;
  z-index: 2;
}
.hide-from-left {
  animation: hideFromLeft 1s ease forwards;
}
.slide-from-right {
  animation: slideFromRight 1s ease forwards;
}
.arrow-wrapper {
  padding: 37px;
  border-radius: 15px;
  bottom: -10%;
  left: 5%;
  gap: 78px;
}
.image {
  filter: grayscale(100%);
}
.image-wrapper .image:hover {
  filter: grayscale(0%);
}
</style>
