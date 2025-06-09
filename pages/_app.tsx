import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { ThemeProvider } from './theme-provider';

const pretendard = localFont({
  src: '/font/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className={`${pretendard.variable} font-[family-name:var(--font-pretendard)]`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
