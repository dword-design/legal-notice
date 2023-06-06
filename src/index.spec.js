import { endent } from '@dword-design/functions'
import tester from '@dword-design/tester'
import testerPluginPuppeteer from '@dword-design/tester-plugin-puppeteer'
import testerPluginTmpDir from '@dword-design/tester-plugin-tmp-dir'
import { execaCommand } from 'execa'
import fs from 'fs-extra'
import nuxtDevReady from 'nuxt-dev-ready'
import pretty from 'pretty'
import kill from 'tree-kill-promise'

export default tester(
  {
    async de() {
      await fs.outputFile(
        'pages/index.vue',
        endent`
          <template>
            <div class="self">
              <self locale="de" />
            </div>
          </template>

          <script setup>
          import Self from '../../src/index.vue'
          </script>
        `,
      )

      const nuxt = execaCommand('nuxt dev')
      try {
        await nuxtDevReady()
        await this.page.goto('http://localhost:3000')

        const self = await this.page.waitForSelector('.self')
        expect(
          self.evaluate(el => el.innerHTML) |> await |> pretty,
        ).toMatchSnapshot(this)
      } finally {
        await kill(nuxt.pid)
      }
    },
    async en() {
      await fs.outputFile(
        'pages/index.vue',
        endent`
          <template>
            <div class="self">
              <self locale="en" />
            </div>
          </template>

          <script setup>
          import Self from '../../src/index.vue'
          </script>
        `,
      )

      const nuxt = execaCommand('nuxt dev')
      try {
        await nuxtDevReady()
        await this.page.goto('http://localhost:3000')

        const self = await this.page.waitForSelector('.self')
        expect(
          self.evaluate(el => el.innerHTML) |> await |> pretty,
        ).toMatchSnapshot(this)
      } finally {
        await kill(nuxt.pid)
      }
    },
  },
  [
    testerPluginTmpDir(),
    testerPluginPuppeteer(),
    { before: () => execaCommand('base prepublishOnly') },
  ],
)
