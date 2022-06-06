import React from 'react'

export type FCWC<Props = Record<string, unknown>> = React.FC<
  Props & { children?: React.ReactNode | React.ReactNode[] }
>
