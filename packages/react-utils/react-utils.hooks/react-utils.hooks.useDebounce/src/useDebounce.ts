import React from 'react'
import debounce from 'lodash.debounce'

import type { DebouncedFunc, DebounceSettings } from 'lodash'

/**
 * Debounce hook
 * Debounces a function
 *
 * @param callback The callback to debounce
 * @param wait The duration to debounce
 * @param options The options object.
 * @param options.leading Specify invoking on the leading edge of the timeout.
 * @param options.maxWait The maximum time func is allowed to be delayed before it’s invoked.
 * @param options.trailing Specify invoking on the trailing edge of the timeout.
 * @returns Returns the new debounced function.
 */
const useDebounce = <T extends (...args: any[]) => unknown>(
  callback: T,
  wait?: number,
  options?: DebounceSettings
) => {
  const createDebouncedCallback = React.useCallback(
    (fn: T): DebouncedFunc<T> => {
      return debounce(fn, wait, options)
    },
    [wait, options]
  )

  const debouncedCallbackRef = React.useRef<DebouncedFunc<T>>(createDebouncedCallback(callback))

  React.useEffect(() => {
    debouncedCallbackRef.current = createDebouncedCallback(callback)
  }, [callback, createDebouncedCallback])

  return debouncedCallbackRef.current
}
export { useDebounce }
export default useDebounce
