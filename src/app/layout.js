import './globals.css';
import localFont from 'next/font/local';
import Navbar from './components/Navbar';

const gilroy = localFont({
  src: [
    { path: '../../public/fonts/gilroy/Gilroy-Black.woff2', weight: '900', style: 'normal' },
    { path: '../../public/fonts/gilroy/Gilroy-Bold.woff2',  weight: '700', style: 'normal' },
    { path: '../../public/fonts/gilroy/Gilroy-Light.woff2', weight: '300', style: 'normal' },
    // add others as needed
  ],
  variable: '--font-gilroy', // optional: exposes a CSS variable you can use
  display: 'swap', // optional: adjust font-display
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={gilroy.variable}>
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  );
}