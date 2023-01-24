import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const dummyData = [
    {
        id: 0,
        value: 15
    },
    {
        id: 1,
        value: 23
    },
    {
        id: 2,
        value: -7
    },
    {
        id: 3,
        value: 33
    },
    {
        id: 4,
        value: 56
    },
    {
        id: 5,
        value: 27
    },
    {
        id: 6,
        value: 70
    },
    {
        id: 7,
        value: 11
    },
    {
        id: 8,
        value: -12
    },
    {
        id: 9,
        value: 42
    },
    {
        id: 10,
        value: 99
    },
    {
        id: 11,
        value: 153
    },
    {
        id: 12,
        value: 120
    }
];

interface IDemoDataState {
    data: { id: number, value: number }[]
}

const initialState: IDemoDataState = {
    data: dummyData,
};

export const demoDataSlice = createSlice({
    name: "demoData",
    initialState,
    reducers: {
        addEntry: (state, action: PayloadAction<number>) => {
            state.data = [...state.data, { id: new Date().getTime(), value: action.payload }];
        },
        removeEntry: (state, action: PayloadAction<number>) => {
            state.data = state.data.filter(x => x.id !== action.payload);
        }
    }
});

export const { addEntry, removeEntry } = demoDataSlice.actions;

export const selectData = (state: RootState) => state.demoData.data;

export const demoDataReducer = demoDataSlice.reducer;