'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="absolute top-4 right-4 cursor-pointer hover:opacity-50">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white dark:bg-slate-950">
        <DropdownMenuItem
          className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
          onClick={() => setTheme('light')}
        >
          기본 설정
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
          onClick={() => setTheme('dark')}
        >
          다크모드 설정
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
          onClick={() => setTheme('system')}
        >
          시스템 설정
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
