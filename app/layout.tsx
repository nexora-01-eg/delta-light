import type { Metadata } from 'next';
import { Amiri, IBM_Plex_Sans_Arabic, Manrope } from 'next/font/google';
import './globals.css';
import '@designcodeio/threeui/style.css';

const displayAr = Amiri({ subsets: ['arabic'], weight: ['400', '700'], variable: '--font-display-ar', display: 'swap' });
const bodyAr = IBM_Plex_Sans_Arabic({ subsets: ['arabic'], weight: ['300', '400', '500', '700'], variable: '--font-body-ar', display: 'swap' });
const latin = Manrope({ subsets: ['latin'], weight: ['400', '600', '800'], variable: '--font-latin', display: 'swap' });
import { StoreProvider } from '@/lib/store';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import LightCursor from '@/components/LightCursor';
import CartDrawer from '@/components/CartDrawer';
import SearchOverlay from '@/components/SearchOverlay';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import Smooth from '@/components/Smooth';

export const metadata: Metadata = {
  title: 'Delta Light — دلتا لايت | إضاءة تصنع الفرق',
  description: 'دلتا لايت — Delta Light شبين الكوم: نجف، أباليك، سبوتات، إضاءة ماجنتيك، LED وتشطيب كهرباء. إضاءة تصنع الفرق.',
  metadataBase: new URL('https://delta-light.example.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Delta Light — دلتا لايت',
    description: 'LIGHT CHANGES SPACE — إضاءة تصنع الفرق في كل تفاصيل بيتك.',
    type: 'website',
    locale: 'ar_EG'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Delta Light — دلتا لايت',
    telephone: '+201062528182',
    email: 'lotfy.elsabry0@gmail.com',
    address: { '@type': 'PostalAddress', streetAddress: 'Talaat Harb Street', addressLocality: 'Shebin El-Kom', addressRegion: 'Monufia', addressCountry: 'EG' }
  };
  return (
    <html lang="ar" dir="rtl" className={`${displayAr.variable} ${bodyAr.variable} ${latin.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <StoreProvider>
          <Smooth />
          <ScrollProgress />
          <Preloader />
          <LightCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <SearchOverlay />
          <WhatsAppButton />
        </StoreProvider>
      </body>
    </html>
  );
}
