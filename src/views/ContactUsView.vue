<template>
  <div class="contact-us" :class="{ ready: isLoaded }">
    <PageTemplate>
      <div class="relative">
        <div class="contact-wrapper text-40 font-bold">
          <div>
            <label>
              Type your <br />
              beautiful name
            </label>
            <input placeholder="in here of course :)" />
          </div>
          <div class="mt-12">
            <label>Protect your email address</label>
            <input placeholder="but not in here :)" />
          </div>
          <div class="mt-12">
            <button class="bg-ffb800 text-white w-full text-24">Submit</button>
          </div>
        </div>
        <div class="absolute left-semi-border"></div>
        <div class="absolute right-semi-border"></div>
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
input {
  text-align: center;
  font-size: 24px;
  width: 100%;
  margin-top: 30px;
}
button,
input {
  padding: 22px 0;
  border-radius: 15px;
}
button:hover {
  filter: grayscale(1);
}
.left-semi-border {
  border-left: 0 solid var(--cog-color-orange);
  border-top: 0 solid var(--cog-color-orange);
  position: absolute;
  width: 0;
  height: 0;
  top: -30px;
  left: -30px;
  transition:
    width 0.5s ease,
    height 0.5s ease;
}
.right-semi-border {
  border-right: 0 solid var(--cog-color-orange);
  border-bottom: 0 solid var(--cog-color-orange);
  position: absolute;
  width: 0;
  height: 0;
  bottom: -30px;
  right: -30px;
  transition:
    width 0.5s ease,
    height 0.5s ease;
}
.contact-wrapper {
  opacity: 0;
  padding: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}
.ready {
  .contact-wrapper {
    animation: fadeInForward 0.5s ease-out forwards;
  }
  .left-semi-border {
    border-left-width: 14px;
    border-top-width: 14px;
  }
  .right-semi-border {
    border-right-width: 14px;
    border-bottom-width: 14px;
  }
  .left-semi-border,
  .right-semi-border {
    width: 84px;
    height: 84px;
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
  background-image: url('../assets/images/aurora-bg.png');
  animation: slideInBottom 0.5s forwards;
}
</style>
