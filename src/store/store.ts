import { configureStore } from "@reduxjs/toolkit";
import { demoDataReducer } from "./demoData/demoDataSlice";

export const store = configureStore({
    reducer: {
        demoData: demoDataReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;