import localFont from 'next/font/local'

// Didot - premium serif for display/headlines
export const Didot = localFont({
  src: [
    { path: '../public/fonts/didot-regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/didot-italic.woff2', weight: '400', style: 'italic' },
    { path: '../public/fonts/didot-bold.woff2', weight: '700', style: 'normal' },
    { path: '../public/fonts/didot-semibold.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-display',
  display: 'swap',
  preload: true,
})

// Bodoni - alternative display serif
export const Bodoni = localFont({
  src: '../public/fonts/bodoni-bold.woff2',
  weight: '700',
  variable: '--font-display-alt',
  display: 'swap',
})

// Grotesk / Grotesque - sans-serif for body/text
export const Grotesk = localFont({
  src: [
    { path: '../public/fonts/grotesk-regular.woff2', weight: '400' },
    { path: '../public/fonts/grotesk-medium.woff2', weight: '500' },
    { path: '../public/fonts/grotesk-semibold.woff2', weight: '600' },
    { path: '../public/fonts/grotesk-bold.woff2', weight: '700' },
  ],
  variable: '--font-body',
  display: 'swap',
  preload: true,
  adjustFontFallback: 'Inter',
})