import React from 'react'

interface Props {
  condition: boolean
  children: React.ReactNode
}

const If = ({ condition, children }: Props) => {
  if (condition) {
    return children
  }

  return null
}

export { If }
export default If
