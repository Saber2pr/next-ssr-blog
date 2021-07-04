import createPlainRedux from '@saber2pr/plain-redux'

import { User } from '../api'

const {
  useStore,
  useDispatchState,
  useSelectState,
  getStore,
  initState,
  useFetchState,
} = createPlainRedux<{
  userInfo: User
  blogScrollTop: number
}>({
  userInfo: null,
  blogScrollTop: 0,
})

export { useStore, useDispatchState, useSelectState, initState, useFetchState }

export const store = getStore()
