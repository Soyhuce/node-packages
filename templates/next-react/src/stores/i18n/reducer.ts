import { ERROR_MESSAGES } from '@/constants'

import { Actions } from './actions'
import { State } from './state'
import { Types as T } from './types'

const reducer = (state: State, { type, payload }: Actions) => {
  switch (type) {
    case T.SET_LOCALE:
      return { ...state, local: payload }

    default:
      throw new Error(ERROR_MESSAGES.UNKNOWN_ACTION)
  }
}

export { reducer }
