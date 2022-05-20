import { ERROR_MESSAGES } from '@/constants'

import { Actions } from './actions'
import { State } from './state'
import { Types as T } from './types'

const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case T.TOGGLE_DARK_MODE:
      return { ...state, theme: { dark: !state.theme.dark } }

    default:
      throw new Error(ERROR_MESSAGES.UNKNOWN_ACTION)
  }
}

export { reducer }
