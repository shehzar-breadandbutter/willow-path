import localFont from 'next/font/local';

const avenir = localFont({
  src: [
    {
      path: '../../public/fonts/Avenir.otf',
      style: 'normal'
    }
  ],
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
  variable: '--font-avenir'
});

const bookmania = localFont({
  src: [
    {
      path: '../../public/fonts/Bookmania.otf',
      style: 'normal'
    }
  ],
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
  variable: '--font-bookmania'
});

export { avenir, bookmania };
