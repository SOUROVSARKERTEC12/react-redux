import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slice/Todo.js'
export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
})
