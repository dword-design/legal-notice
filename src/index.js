import { endent } from '@dword-design/functions'
import * as personalData from '@dword-design/personal-data'

const addressMarkup = endent`
  ${personalData.name}<br>
  ${personalData.street}<br>
  ${personalData.postalCode} ${personalData.city}
`

export const en = endent`
  <h2>Legal Notice</h2>
  <p>
    ${addressMarkup}<br>
    Germany
  </p>

  <h3>Contact</h3>
  <p>
    Email: <a href="mailto:${personalData.email}">${personalData.email}</a><br>
    Phone: ${personalData.phoneNumber}<br>
  </p>

  <h3>Person responsible for content in accordance with § 55 Abs. 2 RStV</h3>
  <p>
    ${addressMarkup}<br>
    Germany
  </p>
`

export const de = endent`
  <h2>Impressum</h2>
  <p>
    ${addressMarkup}<br>
    Deutschland
  </p>

  <h3>Kontakt</h3>
  <p>
    E-Mail: <a href="mailto:${personalData.email}">${personalData.email}</a><br>
    Telefon: ${personalData.phoneNumber}<br>
  </p>

  <h3>Redaktionell verantwortlich gemäß § 55 Abs. 2 RStV</h3>
  <p>
    ${addressMarkup}<br>
    Deutschland
  </p>
`
