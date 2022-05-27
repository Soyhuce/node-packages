import React from 'react'

const useMounted = () => {
  const isMounted = React.useRef(false)

  React.useEffect(() => {
    isMounted.current = true

    return () => {
      isMounted.current = false
    }
  }, [])

  return React.useCallback(() => isMounted.current, [])
}

export { useMounted }
export default useMounted
