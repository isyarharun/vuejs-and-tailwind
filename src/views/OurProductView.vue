<template>
  <div class="our-product" :class="{ ready: isLoaded }">
    <PageTemplate>
      <div class="relative">
        <div class="flex product-wrapper text-64 font-bold">
          <div id="problem0" class="product-content-wrapper">
            <div>We Solve Your</div>
            <div class="animate-text">PROBLEM</div>
          </div>
          <div id="problem1" class="product-content-wrapper">
            <div>We Know You Have</div>
            <div class="animate-text">PROBLEM</div>
          </div>
        </div>
        <div @click="roll" class="cursor-pointer player-icon-wrapper absolute">
          <img :src="PlayerIcon" />
        </div>
      </div>
    </PageTemplate>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PageTemplate from '@/components/shared/PageTemplate.vue'
import PlayerIcon from '@/assets/images/player-icon.svg'

const isLoaded = ref(false)
const currentScrollIndex = ref(0)

onMounted(async () => {
  await waitOneSecond()
  isLoaded.value = true
})

function roll() {
  if(currentScrollIndex.value === 0) {
    currentScrollIndex.value = 1
  } else {
    currentScrollIndex.value = 0
  }
  var targetElement = document.getElementById(`problem${currentScrollIndex.value}`)
  targetElement.scrollIntoView({
    behavior: 'smooth',
  })
}

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}
</script>

<style lang="scss" scoped>
.player-icon-wrapper {
  display: none;
  right: 0;
  top: 33%;
}
.product-wrapper {
  display: none;
  margin-top: 27%;
  margin-left: 10%;
  width: 600px;
  overflow: auto;
}
.product-content-wrapper {
  padding: 50px;
  min-width: 520px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}
.ready {
  .player-icon-wrapper {
    display: block;
    animation: slideInLeft 0.5s forwards;
  }
  .animate-text {
    animation: fill-color 2s ease-in-out infinite;
  }
  .product-wrapper {
    display: flex;
    gap: 50px;
    animation: slideInLeft 0.5s forwards;
  }
  :deep(.arrow-wrapper) {
    animation: expandWidth 0.5s ease-out forwards;
    background-color: var(--cog-color-orange);
    color: var(--cog-color-white);
  }
  :deep(.left-arrow) {
    filter: brightness(100);
  }
  :deep(.content-wrapper::before) {
    filter: grayscale(1);
  }
}
:deep(.content-wrapper::before) {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/stars-bg.png');
  animation: slideInBottom 0.5s forwards;
}
</style>
