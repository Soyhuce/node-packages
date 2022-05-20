import React, { FC, ReactNode, useContext, useEffect } from 'react'

import { AppContext } from '@/stores'

import { MainHeaderLayout } from './header'
import { MainContentLayout } from './content'
import { MainFooterLayout } from './footer'

const MainLayout: FC<{ children?: ReactNode }> = ({ children }) => {
  const appCtx = useContext(AppContext)
  const isDarkMode = appCtx.state.theme.dark

  useEffect(() => {
    isDarkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark')
  }, [isDarkMode])

  return (
    <div className='h-full'>
      <div className='flex flex-col h-full dark:text-white dark:bg-slate-900'>
        <MainHeaderLayout />
        <MainContentLayout>{children}</MainContentLayout>
        <MainFooterLayout />
      </div>
    </div>
  )
}

export { MainLayout }
