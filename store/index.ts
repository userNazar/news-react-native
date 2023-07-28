import { configureStore } from '@reduxjs/toolkit'
import postsSlicer from './slicers/postsSlicer';


export const store = configureStore({
    reducer: {
        posts: postsSlicer,
    },
})




export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;




