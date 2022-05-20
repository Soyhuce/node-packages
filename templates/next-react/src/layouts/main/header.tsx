import React, { FC, ReactNode, useContext } from 'react'

import { AppContext, Types as T } from '@/stores'

const MainHeaderLayout: FC<{ children?: ReactNode }> = () => {
  const appCtx = useContext(AppContext)
  const isDarkMode = appCtx.state.theme.dark

  const handleBtnClick = () => {
    appCtx.dispatch({
      type: T.TOGGLE_DARK_MODE,
      payload: !appCtx.state.theme.dark
    })
  }

  return (
    <header>
      <button onClick={handleBtnClick}>Toogle {isDarkMode ? 'dark' : 'light'} mode</button>
    </header>
  )
}

export { MainHeaderLayout }
