<template>
  <template v-if="locale === 'de'">
    <h2>Impressum</h2>
    <p>
      <app-address /><br />
      Deutschland
    </p>

    <h3>Kontakt</h3>
    <p>
      E-Mail: {{ personalData.email }}<br />
      Telefon: {{ personalData.phoneNumber }}<br />
    </p>

    <h3>Redaktionell verantwortlich gemäß § 55 Abs. 2 RStV</h3>
    <p>
      <app-address /><br />
      Deutschland
    </p>
  </template>
  <template v-else>
    <h2>Legal Notice</h2>
    <p>
      <app-address /><br />
      Germany
    </p>

    <h3>Contact</h3>
    <p>
      Email: {{ personalData.email }}<br />
      Phone: {{ personalData.phoneNumber }}<br />
    </p>

    <h3>Person responsible for content in accordance with § 55 Abs. 2 RStV</h3>
    <p>
      <app-address /><br />
      Germany
    </p>
  </template>
</template>

<script setup lang="ts">
import * as personalData from '@dword-design/personal-data';

import AppAddress from './app-address.vue';

defineProps({ locale: { required: true, type: String } });
</script>
