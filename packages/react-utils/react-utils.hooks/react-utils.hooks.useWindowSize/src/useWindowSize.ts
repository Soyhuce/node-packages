import React from 'react'
import { useEventListener } from '@soyhuce/react-utils.hooks.use-event-listener'
import { useIsomorphicLayoutEffect } from '@soyhuce/react-utils.hooks.use-isomorphic-layout-effect'

const ReactUtils = {
  useEventListener,
  useIsomorphicLayoutEffect
}
export interface WindowSize {
  width: number
  height: number
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState<WindowSize>({
    width: 0,
    height: 0
  })

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  ReactUtils.useEventListener('resize', handleSize)

  // Set size at the first client-side load
  ReactUtils.useIsomorphicLayoutEffect(() => {
    handleSize()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return windowSize
}

export { useWindowSize }
export default useWindowSize
