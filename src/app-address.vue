<template>
  {{ personalData.name }}<br />
  {{ personalData.street }}<br />
  {{ personalData.postalCode }} {{ personalData.city }}
</template>

<script setup>
import * as personalData from '@dword-design/personal-data'
</script>
