import carReducer from './carSlice'
import { configureStore }  from "@reduxjs/toolkit"


export const store = configureStore({
    reducer: {
      car: carReducer
    },
});
