import '../scss/App.scss'
import '../scss/custom.bootstrap.scss'
import Script from 'next/script'
import { Abril_Fatface, Old_Standard_TT, Open_Sans } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';

const abril = Abril_Fatface({
  subsets: ['latin'],
  variable: '--font-abril',
  display: 'swap',
  weight: ['400'],
})

const old_stand = Old_Standard_TT({
  subsets: ['latin'],
  variable: '--font-old-stand',
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})

const open = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
})

export const metadata = {
  title: {
    default: 'Key2Success Driving School',
    template: ' %s | Key2Success',
  },
  description: 'Unlock Your Journey to Excellence with Key2Success Driving School. Benefit from 34 Years of Expertise! Contact Us at (204) 999-2051 and enroll today for tailored driving programs that lead to confident driving skills.',
  keywords: ['driving', 'driving school', 'winnipeg driving', 'winnipeg school', 'winnipeg driving school', 'first time driver', 'driving school in Winnipeg', 'key 2 success driving school', 'key2success driving school', 'key to success driving school', 'chirag\'s driving school'],
  authors: [{name: 'Ann Ho', url: 'https://www.linkedin.com/in/ann-ho-1304/'}],
  type: 'website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* <!-- Google tag (gtag.js) --> */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-6CLJ2WRYNX" strategy="beforeInteractive"></Script>
        <Script id="google-analytic-tag" strategy="beforeInteractive" dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6CLJ2WRYNX');`,
        }} />
        {/* <!-- Google tag (gtag.js) --> */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11180674865" strategy="beforeInteractive"></Script>
        <Script id="google-ads-tag" strategy="beforeInteractive" dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-11180674865');`,
        }} />
      </head>
      <body className={`${abril.variable} ${old_stand.variable} ${open.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
