import * as self from './index.js'

export default {
  de() {
    expect(self.de).toMatchSnapshot(this)
  },
  en() {
    expect(self.en).toMatchSnapshot(this)
  },
}
