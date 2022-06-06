import React from 'react'
import { useEventListener } from '@soyhuce/react-utils.hooks.use-event-listener'

const ReactUtils = {
  useEventListener
}

type Handler = (event: MouseEvent | Event) => void

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
): void => {
  ReactUtils.useEventListener(mouseEvent, (event: MouseEvent | Event) => {
    const el = ref?.current

    // Do nothing if clicking ref's element or descendent elements
    if (!el || el.contains(event.target as Node)) {
      return
    }

    handler(event)
  })
}

export { useOnClickOutside }
export default useOnClickOutside
