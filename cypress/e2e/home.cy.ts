describe('App Settings', () => {
  it('environment variables configured', () => {
    const { NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_API_URL, NEXT_PUBLIC_DEFAULT_SRC, NEXT_PUBLIC_IMAGE_SRC } = process.env

    const siteUrl = NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const apiUrl = NEXT_PUBLIC_API_URL || 'https://local.url.com'
    const defaultSrc = NEXT_PUBLIC_DEFAULT_SRC || 'local.url.com'
    const imageSrc = NEXT_PUBLIC_IMAGE_SRC || 'blob.url.com'

    cy.visit(siteUrl)

    cy.get('code').contains(`NEXT_PUBLIC_API_URL=${apiUrl}`)
    cy.get('code').contains(`NEXT_PUBLIC_DEFAULT_SRC=${defaultSrc}`)
    cy.get('code').contains(`NEXT_PUBLIC_IMAGE_SRC=${imageSrc}`)
  })
})
