import * as self from '.'

export default {
  de() {
    expect(self.de).toMatchSnapshot(this)
  },
  en() {
    expect(self.en).toMatchSnapshot(this)
  },
}
