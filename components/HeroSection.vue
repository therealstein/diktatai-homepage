<template>
  <!-- Heldenbereich mit Hintergrundbild -->
  <div class="hero min-h-[80vh] relative bg-cover bg-center flex items-center justify-center" style="background-image: url('/herobg.webp');">
    <div class="hero-content text-center w-full px-4 py-6 md:py-12 flex flex-col md:flex-row md:justify-center items-center gap-8">
      <!-- Hauptinhalt Box -->
      <div class="backdrop-blur-sm bg-white/20 p-6 md:p-10 rounded-3xl shadow-2xl border border-white/30 w-full md:w-3/5 lg:w-3/5">
        <div class="relative w-full flex justify-center mb-6 md:mb-8 px-4 md:px-8">
          <h1 class="font-display text-2xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight leading-tight" style="text-shadow: 0 3px 6px rgba(0,0,0,0.4);">
            {{ $t('hero.title') }}
          </h1>
          <div class="absolute -inset-1 bg-gradient-to-r from-accent to-secondary opacity-30 blur-lg rounded-lg">
          </div>
        </div>
        <p class="py-6 md:py-8 text-lg md:text-xl font-medium text-white leading-relaxed tracking-wide max-w-2xl mx-auto" style="text-shadow: 0 0 6px rgba(0,0,0,0.8);">
          {{ $t('hero.description') }}
        </p>
        <div class="flex flex-col items-center mt-6">
          <a :href="registerUrl">
            <button class="font-display bg-pink-500 text-white text-lg md:text-xl font-bold py-3 px-10 md:py-4 md:px-14 rounded-full hover:bg-pink-600 transition-all shadow-xl tracking-wide">{{ $t('hero.startNow') }}</button>
          </a>
        </div>
      </div>
      
      <!-- Logo Container -->
      <div class="backdrop-blur-sm bg-white/20 p-8 md:p-10 rounded-3xl shadow-2xl border border-white/30 w-full md:w-1/5 mt-8 md:mt-0">
        <div class="logo-container flex justify-center">
          <a :href="registerUrl">
            <div class="logo-wrapper">
              <LogoSingle class="logo-animation" />
            </div>
            <span class="tooltip font-display font-medium">Diktat AI</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LogoSingle from './LogoSingle.vue';

const { registerUrl } = useAppUrl();
</script>

<style scoped>
/* Logo animation styles */
.logo-container {
  position: relative;
  display: inline-block;
}

.logo-wrapper {
  width: 100px;
  height: 100px;
  border: 4px solid #9D4EDD;
  border-radius: 50%;
  cursor: pointer;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .3s ease;
  background: rgba(157, 78, 221, 0.1);
}

@media (min-width: 768px) {
  .logo-wrapper {
    width: 140px;
    height: 140px;
    border-width: 6px;
    padding: 20px;
  }
}

.logo-wrapper:hover {
  transform: scale(1.05);
  background: rgba(157, 78, 221, 0.2);
}

.logo-animation {
  animation: scale 3s ease-in-out infinite;
}

.tooltip {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translate(-50%);
  background: transparent;
  color: #9D4EDD;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  opacity: 0;
  transition: opacity .2s ease;
  white-space: nowrap;
}

@media (min-width: 768px) {
  .tooltip {
    bottom: -35px;
    font-size: 16px;
  }
}

.logo-container:hover .tooltip {
  opacity: 1;
}

@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
</style> 