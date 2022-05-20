import React, { FC, ReactNode, ComponentProps } from 'react'
import { AppProvider, AppContext, AppTypes } from './app'
import { I18nProvider, I18nContext, I18nTypes } from './i18n'

const combineComponents = (
  ...components: FC<{ children?: ReactNode }>[]
): FC<{ children?: ReactNode }> => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return function ({ children }: ComponentProps<FC<{ children?: ReactNode }>>): JSX.Element {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        )
      }
    },
    ({ children }) => <>{children}</>
  )
}

const types = { ...AppTypes, ...I18nTypes }
const providers = [AppProvider, I18nProvider]

const Stores = combineComponents(...providers)

export { Stores, types as Types, AppContext, I18nContext }
