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
const Context = createContext<Store>(initializer)

const Provider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const store = useMemo<Store>(() => ({ state, dispatch }), [state])
  return <Context.Provider value={store}>{children}</Context.Provider>
}

export {
  Context as AppContext,
  Provider as AppProvider,
  Types as AppTypes,
  initialState as appInitialState,
  initializer as appInitializer,
  reducer as appReducer
}

export type { Store as AppStore, State as AppState, Actions as AppActions }
