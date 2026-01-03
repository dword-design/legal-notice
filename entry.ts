import type { App } from 'vue';

import component from './src/index.vue';

component.install = (app: App) => app.component('LegalNotice', component);

if (typeof globalThis !== 'undefined') {
  (globalThis as Record<string, unknown>).LegalNotice = component;
}

export default component;