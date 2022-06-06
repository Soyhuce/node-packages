import React from 'react'
import { useEventListener } from '@soyhuce/react-utils.hooks.use-event-listener'
import { useIsomorphicLayoutEffect } from '@soyhuce/react-utils.hooks.use-isomorphic-layout-effect'

const ReactUtils = {
  useEventListener,
  useIsomorphicLayoutEffect
}

interface Size {
  width: number
  height: number
}

const useElementSize = <T extends HTMLElement = HTMLDivElement>(): [
  (node: T | null) => void,
  Size
] => {
  // Mutable values like 'ref.current' aren't valid dependencies
  // because mutating them doesn't re-render the component.
  // Instead, we use a state as a ref to be reactive.
  const [ref, setRef] = React.useState<T | null>(null)
  const [size, setSize] = React.useState<Size>({
    width: 0,
    height: 0
  })

  // Prevent too many rendering using useCallback
  const handleSize = React.useCallback(() => {
    setSize({
      width: ref?.offsetWidth || 0,
      height: ref?.offsetHeight || 0
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetHeight, ref?.offsetWidth])

  ReactUtils.useEventListener('resize', handleSize)

  ReactUtils.useIsomorphicLayoutEffect(() => {
    handleSize()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetHeight, ref?.offsetWidth])

  return [setRef, size]
}
export { useElementSize }
export default useElementSize
