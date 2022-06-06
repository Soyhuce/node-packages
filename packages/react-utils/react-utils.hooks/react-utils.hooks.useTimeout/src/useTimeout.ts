import React from 'react'
import { useIsomorphicLayoutEffect } from '@soyhuce/react-utils.hooks.use-isomorphic-layout-effect'

const ReactUtils = {
  useIsomorphicLayoutEffect
}

const useTimeout = (callback: () => void, delay: number | null) => {
  const savedCallback = React.useRef(callback)

  // Remember the latest callback if it changes.
  ReactUtils.useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the timeout.
  React.useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!delay && delay !== 0) {
      return
    }

    const id = setTimeout(() => savedCallback.current(), delay)

    return () => clearTimeout(id)
  }, [delay])
}

export { useTimeout }
export default useTimeout
