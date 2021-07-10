import { createSlice } from '@reduxjs/toolkit'
import reduxu, { PayloadAction } from 'redux-use'
import { create } from 'service'
import { createUrls, createUpdateToList, createRemoveFromList } from './helper'

const urls = createUrls('group')

type Some = Record<string, any>

interface ListData {
  data: Some[]
}
type SaveParams = Some
type SaveData = Some
type RemoveParams = Some
type RemoveData = Some

const save = reduxu.async(create<SaveData, SaveParams>(urls.save, 'post'))
export const useSomeSave = save.hook

const remove = reduxu.async(
  create<RemoveData, RemoveParams>(urls.remove, 'post')
)
export const useSomeRemove = remove.hook

export const useSomeList = reduxu.async(create<ListData>(urls.list), {
  extraReducers: (builder) => {
    builder
      .addCase(
        save.thunk.fulfilled,
        createUpdateToList<ListData, SaveData>('data')
      )
      .addCase(
        remove.thunk.fulfilled,
        createRemoveFromList<ListData, RemoveData>('data')
      )
  }
}).hook
