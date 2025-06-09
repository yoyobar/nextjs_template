import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
dayjs.extend(relativeTime);
dayjs.locale('ko');

//! 클래스 병합 함수
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//! 날짜 형식 유틸리티 함수
//? 날짜 포맷 함수
export const formatDate = (date: string | Date, format = 'YYYY-MM-DD') => {
  return dayjs(date).format(format);
};
//? 오늘 날짜여부 확인
export const isToday = (date: string | Date) => {
  return dayjs(date).isSame(dayjs(), 'day');
};
//? 현재 로케일 시간 정보
export const getRelativeTime = (date: string | Date) => {
  return dayjs(date).fromNow();
};
//? 클립보드 복사 함수
export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

//? 디바운스 함수
export const debounce = (func: (...args: any[]) => void, wait: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<typeof func>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
