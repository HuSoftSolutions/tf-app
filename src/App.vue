<script setup>
import { RouterLink, RouterView } from "vue-router";
import Variables from "variables";
import NavBar from "navbar";
import { ref } from "vue";
import EmployeePin from "./components/navigation/EmployeePin.vue";
const isModalOpen = ref(false);
</script>

<template>
  <NavBar />
  <div class="p-5">
    <RouterView />
  </div>
  <button @click="isModalOpen = true">Open Modal</button>
  <Teleport to="#modal">
    <Transition mode="out-in" name="fade">
      <EmployeePin v-if="isModalOpen" @close="isModalOpen = false" />
    </Transition>
  </Teleport>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(1.2);
}
</style>
