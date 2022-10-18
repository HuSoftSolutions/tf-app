<template>
  <div class="" @click="show = !show">
    <h1 v-if="show">Location Page</h1>
    <h2>Location: {{ locationName }}</h2>
    <p class="">The quick brown fox ...</p>
    <p class="">The quick brown fox ...</p>
    <p class="">The quick brown fox ...</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const locationName = ref("");

const show = ref(false);

const route = useRoute();
const router = useRouter();

locationName.value = route.params.id;
</script>
