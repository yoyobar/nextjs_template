import { ModeToggle } from '@/components/ui/theme-toggle';
import Image from 'next/image';

export default function Home() {
  return (
    <div
      className={`dark:bg-slate-950 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <ModeToggle />
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            작성시작은
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              pages/index.tsx
            </code>
            에서부터 진행해주세요.
          </li>
          <li className="tracking-[-.01em] mb-2">
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">TurboPack</code>및
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">Svgr/webpack</code>을
            사용하여 아이콘 컴포넌트, 핫로딩이 가능합니다.
          </li>
          <li className="tracking-[-.01em] mb-2">기본 폰트 및 테마 설정이 적용되어 있습니다.</li>
          <li className="tracking-[-.01em]">
            기본적인 날짜, 시간 관련 유틸리티 함수가 적용되어 있습니다.
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">lib/utils.ts</code>
          </li>
          <li>
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              Custom Pagination
            </code>
            컴포넌트,{' '}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">theme-toggle</code>{' '}
            컴포넌트를 커스텀하여 사용하세요.
          </li>
        </ol>
        <div className="w-full max-w-2xl">
          <h2 className="text-lg font-semibold mb-4 text-center bg-stone-50 dark:bg-stone-900 py-2 rounded-md">
            설치된 추가 라이브러리
          </h2>
          <div className="grid grid-cols-[1fr_2fr] gap-4 text-sm">
            <div className="font-medium">UI/UX</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="animate-pulse px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs">
                  UI
                </span>
                <span>Shadcn UI</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="animate-pulse px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs">
                  UI
                </span>
                <span>Next Themes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="animate-pulse px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-md text-xs">
                  Animation
                </span>
                <span>Framer Motion</span>
              </div>
            </div>

            <div className="font-medium">유틸리티</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="animate-pulse px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-md text-xs">
                  Date
                </span>
                <span>Day.js</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="animate-pulse px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-md text-xs">
                  I18n
                </span>
                <span>es-hangul</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            공식문서 확인
          </a>
        </div>
      </main>
    </div>
  );
}
