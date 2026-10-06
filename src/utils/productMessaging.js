export function buildProductMessage(product, selectedVariant, productUrl = '') {
  const variantText = selectedVariant ? `, en ${selectedVariant.toLocaleLowerCase('es-MX')}` : ''
  const urlText = productUrl ? `\n${productUrl}` : ''
  return `Hola, vi “${product.name}” en su catálogo${variantText} y quisiera más información.${urlText}`
}

export function buildWhatsAppUrl(whatsapp, message) {
  if (!whatsapp) return ''
  if (/^https?:\/\//i.test(whatsapp)) return `${whatsapp}${whatsapp.includes('?') ? '&' : '?'}text=${encodeURIComponent(message)}`
  const phone = whatsapp.replace(/\D/g, '')
  return phone ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}` : ''
}

export function buildBranchMessage(branch) {
  return `Hola, quisiera información de la sucursal D Davi ${branch.shortName}.`
}

export async function shareProduct({ title, text, url, navigatorRef = navigator, documentRef = document }) {
  if (typeof navigatorRef.share === 'function') {
    await navigatorRef.share({ title, text, url })
    return 'shared'
  }
  if (navigatorRef.clipboard?.writeText) {
    await navigatorRef.clipboard.writeText(url)
    return 'copied'
  }
  const textarea = documentRef.createElement('textarea')
  textarea.value = url
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  documentRef.body.appendChild(textarea)
  textarea.select()
  const copied = documentRef.execCommand('copy')
  textarea.remove()
  if (!copied) throw new Error('No se pudo copiar el enlace')
  return 'copied'
}
