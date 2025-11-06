<template>
  <div class="navbar bg-base-100 shadow-lg">
    <div class="container mx-auto flex justify-between items-center">
      <div class="navbar-start">
        <NuxtLinkLocale to="/" class="btn btn-ghost normal-case text-xl font-display">
          <Logo />
        </NuxtLinkLocale>
      </div>
      <!-- Mobile menu button -->
      <div class="navbar-end lg:hidden">
        <button @click="isMenuOpen = !isMenuOpen" class="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <!-- Desktop menu -->
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <NuxtLinkLocale to="how-it-works" class="btn btn-ghost font-display"
              >{{ $t('navbar.howitworks') }}</NuxtLinkLocale
            >
          </li>
          <li>
            <NuxtLinkLocale to="pricing" class="btn btn-ghost font-display"
              >{{ $t('navbar.pricing') }}</NuxtLinkLocale
            >
          </li>
          <li>
            <a :href="loginUrl" class="btn btn-ghost font-display"
              >{{ $t('navbar.login') }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Mobile menu (overlay) -->
  <div v-if="isMenuOpen" class="fixed inset-0 z-50 lg:hidden">
    <div
      class="fixed inset-0 bg-black opacity-50"
      @click="isMenuOpen = false"
    ></div>
    <div class="fixed right-0 top-0 w-64 h-full bg-base-100 shadow-xl p-4">
      <div class="flex justify-end mb-4">
        <button @click="isMenuOpen = false" class="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ul class="menu">
        <li>
          <NuxtLinkLocale
            to="how-it-works"
            class="btn btn-ghost font-display"
            @click="isMenuOpen = false"
            >{{ $t('navbar.howitworks') }}</NuxtLinkLocale
          >
        </li>
        <li>
          <NuxtLinkLocale
            to="pricing"
            class="btn btn-ghost font-display"
            @click="isMenuOpen = false"
            >{{ $t('navbar.pricing') }}</NuxtLinkLocale
          >
        </li>
        <li>
          <a
            :href="loginUrl"
            class="btn btn-ghost font-display"
            @click="isMenuOpen = false"
            >{{ $t('navbar.login') }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);
const { loginUrl } = useAppUrl();
</script>
