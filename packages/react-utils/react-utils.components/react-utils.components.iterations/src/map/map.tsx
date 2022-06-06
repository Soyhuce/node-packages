import React from 'react'

interface Props {
  data: unknown[]
  children?: React.ReactNode
}

const Map = ({ data, children }: Props) => {
  return data.map((el: unknown | number | string, i) => (
    <React.Fragment key={i}>{children}</React.Fragment>
  ))
}

export { Map }
export default Map
