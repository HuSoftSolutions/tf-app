<template>
  <nav class="nav_container">
    <!-- desktop menu -->
    <div class="bg-dark">
      <div class="mx-2">
        <div class="flex justify-between">
          <!-- menu -->
          <div class="flex space-x-4">
            <!-- logo -->
            <div class="flex items-center py-5 px-2 cursor-pointer stroke-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="stroke-inherit"
                class="w-8 h-8 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
              <RouterLink class="text-2xl text-tertiary" to="/">TeeFindr</RouterLink>
            </div>

            <!-- menu -->
            <div class="nav_menu">
              <RouterLink to="/location/5">Settings</RouterLink>
              <RouterLink to="/">Settings</RouterLink>
              <RouterLink to="/">Settings</RouterLink>
            </div>
          </div>
          
          <!-- login -->
          <div class="hidden md:flex items-center mx-2">
            <RouterLink to="/location/5">Login</RouterLink>
          </div>
          <!-- button show mobile menu -->
          <div
            @click="showMobileMenu = !showMobileMenu"
            class="md:hidden flex items-center"
          >
            <button class="px-2 stroke-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="stroke-inherit"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile menu -->

    <div class="mbl_nav_menu" v-show="showMobileMenu">
      <RouterLink to="/location/1">Location 1</RouterLink>
      <RouterLink to="/">Settings</RouterLink>
      <RouterLink to="/">Settings</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const showMobileMenu = ref(false);

// onClickOutside(
//   navbarMenuRef,
//   () => {
//     showMobileNav.value = false;
//   },
//   {
//     ignore: [navbarHomeRef],
//   }
// );
</script>

<style>
.ease-custom {
  transition-timing-function: cubic-bezier(0.61, -0.53, 0.43, 1.43);
}
</style>
