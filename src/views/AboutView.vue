<template>
  <div class="about" :class="{ ready: isLoaded }">
    <PageTemplate>
      <div class="about-content-wrapper" :class="{ animate: isLoaded }">
        <div class="info-wrapper">
          <p class="font-bold text-64">Our People Come First</p>
          <p class="font-semibold text-36">
            We are independently owned, strategic creative agency forever
            curious and ready to transform the way business is done.
          </p>
        </div>
        <button class="learn-more-btn text-white text-24 font-bold">
          Learn more
        </button>
      </div>
    </PageTemplate>
  </div>
</template>

<script setup>
import PageTemplate from '@/components/shared/PageTemplate.vue'
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)

onMounted(async () => {
  await waitOneSecond()
  isLoaded.value = true
})

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}
</script>

<style lang="scss" scoped>
.ready {
  .info-wrapper {
    padding: 54px;
    display: block;
    animation: slideInRight 0.5s forwards;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .learn-more-btn {
    padding: 17px 35px;
    display: block;
    position: absolute;
    bottom: -7rem;
    right: 0;
    border-radius: 10px;
    background-color: var(--cog-color-orange);
    animation: slideInBottom 0.5s forwards;
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
.info-wrapper {
  display: none;
}
.about-content-wrapper {
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: -30px;
    left: -35px;
    width: 0;
    height: 0;
    border-left: 0 solid var(--cog-color-orange);
    border-top: 0 solid var(--cog-color-orange);
    transition:
      width 0.5s ease,
      height 0.5s ease;
  }
  &.animate:before {
    width: 17%;
    height: 17%;
    border-left-width: 14px;
    border-top-width: 14px;
  }
}
.learn-more-btn {
  display: none;
}
:deep(.content-wrapper::before) {
  content: '';
  position: absolute;
  max-width: 1440px;
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/rain-bg.png');
  animation: slideInTop 0.5s forwards;
}
</style>
