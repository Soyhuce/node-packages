import React, { FC, createContext, useReducer, useMemo, Dispatch, ReactNode } from 'react'

import { Actions } from './actions'
import { reducer } from './reducer'
import { State, initialState } from './state'
import { Types } from './types'

interface Store {
  state: State
  dispatch: Dispatch<Actions>
}

const initializer = { state: initialState, dispatch: () => null }
const Context = createContext<Store>({ state: initialState, dispatch: () => null })

const Provider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const store = useMemo<Store>(() => ({ state, dispatch }), [state])
  return <Context.Provider value={store}>{children}</Context.Provider>
}

export {
  Context as I18nContext,
  Provider as I18nProvider,
  Types as I18nTypes,
  initialState as i18nInitialState,
  initializer as i18nInitializer,
  reducer as i18nReducer
}

export type { Store as I18nStore, State as I18nState, Actions as I18nActions }
