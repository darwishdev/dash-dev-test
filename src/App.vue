<template>
  <router-view />
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import Api from "./api/api";
onBeforeMount(() => Api.getInstance())
</script>
