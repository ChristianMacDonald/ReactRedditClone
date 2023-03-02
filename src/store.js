import { configureStore } from "@reduxjs/toolkit";
import ribbitApi from './slices/ribbitApi'

const store = configureStore({
  reducer: {
    [ribbitApi.reducerPath]: ribbitApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(ribbitApi.middleware)
});

export default store;