import React from 'react'
import { useIsomorphicLayoutEffect } from '@soyhuce/react-utils.hooks.use-isomorphic-layout-effect'

const ReactUtils = {
  useIsomorphicLayoutEffect
}

type ReturnType = [boolean, (locked: boolean) => void]

const useLockedScroll = <T extends HTMLElement = HTMLDivElement>(
  initialLocked = false,
  node: T | null
): ReturnType => {
  const [locked, setLocked] = React.useState(initialLocked)

  // Do the side effect before render
  ReactUtils.useIsomorphicLayoutEffect(() => {
    if (!locked || !node) {
      return
    }

    // Save initial node style
    const originalOverflow = node.style.overflow

    // Lock node scroll
    node.style.overflow = 'hidden'

    return () => {
      node.style.overflow = originalOverflow
    }
  }, [locked])

  // Update state if initialValue changes
  React.useEffect(() => {
    if (locked !== initialLocked) {
      setLocked(initialLocked)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLocked])

  return [locked, setLocked]
}

export { useLockedScroll }
export default useLockedScroll
