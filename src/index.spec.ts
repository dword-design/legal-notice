import pathLib from 'node:path';

import { expect, test } from '@playwright/test';
import endent from 'endent';
import { execaCommand } from 'execa';
import fs from 'fs-extra';
import getPort from 'get-port';
import nuxtDevReady from 'nuxt-dev-ready';
import pretty from 'pretty';
import kill from 'tree-kill-promise';

test('de', async ({ page }, testInfo) => {
  const cwd = testInfo.outputPath();

  await fs.outputFile(
    pathLib.join(cwd, 'pages', 'index.vue'),
    endent`
      <template>
        <div class="self">
          <self locale="de" />
        </div>
      </template>

      <script setup lang="ts">
      import Self from '../../src/index.vue';
      </script>
    `,
  );

  const port = await getPort();

  const nuxt = execaCommand('nuxt dev', {
    cwd,
    env: { PORT: String(port) },
    reject: false,
  });

  try {
    await nuxtDevReady(port);
    await page.goto(`http://localhost:${port}`);
    expect(pretty(await page.locator('.self').innerHTML())).toMatchSnapshot();
  } finally {
    await kill(nuxt.pid!);
  }
});

test('en', async ({ page }, testInfo) => {
  const cwd = testInfo.outputPath();

  await fs.outputFile(
    pathLib.join(cwd, 'pages', 'index.vue'),
    endent`
      <template>
        <div class="self">
          <self locale="en" />
        </div>
      </template>

      <script setup lang="ts">
      import Self from '../../src/index.vue'
      </script>
    `,
  );

  const port = await getPort();

  const nuxt = execaCommand('nuxt dev', {
    cwd,
    env: { PORT: String(port) },
    reject: false,
  });

  try {
    await nuxtDevReady(port);
    await page.goto(`http://localhost:${port}`);
    expect(pretty(await page.locator('.self').innerHTML())).toMatchSnapshot();
  } finally {
    await kill(nuxt.pid!);
  }
});
