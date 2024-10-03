const {configureStore}= require('@reduxjs/toolkit');
import reducer from './formDataSlice'
export const store = configureStore({
    reducer :{
        formData:reducer,
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;