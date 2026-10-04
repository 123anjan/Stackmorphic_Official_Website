import { useEffect } from 'react'
import { site } from '../siteConfig.js'
// Sets the document title and meta description for each page.
export function usePage(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.brand}` : `${site.title} | ${site.developer}`
    let m = document.querySelector('meta[name="description"]')
    if (!m) { m = document.createElement('meta'); m.name = 'description'; document.head.appendChild(m) }
    if (description) m.content = description
  }, [title, description])
}
