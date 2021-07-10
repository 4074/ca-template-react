import { AsyncState } from 'redux-use'

export const createUrls = (prefix: string) => {
  return {
    list: `${prefix}/list`,
    save: `${prefix}/save`,
    remove: `${prefix}/remove`
  }
}

export const createUpdateToList = <
  State extends Record<string, any> | Payload[],
  Payload extends { id?: number }
>(
  key?: keyof State
) => {
  return (state: AsyncState<any, State>, { payload }: { payload: Payload }) => {
    if (!state.data) return
    let list: Payload[] = []
    if (Array.isArray(state.data)) {
      list = state.data
    } else if (key) {
      list = state.data[key] as any
    }
    const index = list.findIndex((item) => item.id === payload.id)
    if (index >= 0) {
      list[index] = payload
    } else {
      list.push(payload)
    }
  }
}

export const createRemoveFromList = <
  State extends Record<string, any> | Payload[],
  Payload extends { id?: number }
>(
  key?: keyof State
) => {
  return (state: AsyncState<any, State>, { payload }: { payload: Payload }) => {
    if (!state.data) return
    if (Array.isArray(state.data)) {
      ;(state as any).data = state.data.filter((g) => g.id !== payload.id)
    } else if (key && Array.isArray(state.data[key])) {
      state.data[key] = (state.data[key] as any).filter(
        (g: any) => g.id !== payload.id
      )
    }
  }
}
