interface State {
  theme: {
    dark: boolean
  }
}

const initialState: State = {
  theme: {
    dark: false
  }
}

export type { State }
export { initialState }
