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
      <div class="absolute arrow-wrapper flex items-center">
        <div
          class="text-72 text-ffb800 font-bold"
          :class="{ 'slide-in': isHover, 'slide-out': !isHover }"
        >
          AWESOME THINGS
        </div>
        <div
          :class="{ 'right-slide-in': isHover, 'right-slide-out': !isHover }"
        >
          <img :src="arrow" />
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

let isHover = ref(false)
function onHover() {
  isHover.value = true
}
function onLeave() {
  isHover.value = false
}
</script>

<style scoped>
.image-wrapper {
  padding: 120px 0;
}
.title-wrapper {
  top: -20px;
  z-index: 2;
}
.arrow-wrapper {
  bottom: 70px;
  left: 66px;
  gap: 78px;
}
.image {
  filter: grayscale(100%);
}
.image-wrapper .image:hover {
  filter: grayscale(0%);
}
</style>
