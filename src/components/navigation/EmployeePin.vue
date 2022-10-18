<template>
  <div class="modal-bg">
    <div class="modal" ref="modal">
      <div class="mb-3 stroke-red-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="inheritStroke"
          class="w-6 h-6 close-btn"
          @click="emit('close')"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div class="num-pad">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>clear</div>
        <div>9</div>
        <div>submit</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref, Transition } from "vue";
import { onClickOutside } from "@vueuse/core";

const modal = ref(null);

const emit = defineEmits("close");

onClickOutside(modal, () => {
  emit("close");
});

function hide() {
  emit("close");
}
</script>

<style>
.modal-bg {
  @apply fixed top-0 left-0 w-screen h-screen flex justify-center items-center text-black;

  background-color: rbga(0, 0, 0, 0.5);
}

.modal {
  @apply relative bg-secondary px-4 py-8 rounded shadow-lg;
}

.modal .close-btn {
  @apply absolute top-[10px] right-[10px] bg-none border-none cursor-pointer;
}

.num-pad {
  @apply grid grid-cols-3 gap-4 text-center;
}

.num-pad div {
  @apply p-3 py-5 bg-gray-400 rounded font-bold text-dark cursor-pointer text-2xl;
}
</style>
