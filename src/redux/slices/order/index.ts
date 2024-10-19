import type{ IBook, THudud, TTuman } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    books: (IBook & {quantity: number})[];
    checkout: {
        hudud: THudud | null;
        tuman: TTuman | null;
        manzil: string;
        name: string;
        surname: string;
        phone: string;
    }

};

const initialState: InitialState = {
    books: [],
    checkout: {
        hudud: null,
        tuman: null,
        manzil: "",
        name: "",
        surname: "",
        phone: "",
    },
}; 

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setBooks: (state, {payload}: {payload: InitialState["books"]}) => {
            state.books = payload;
        },
        setCheckout: (state, {payload}: {payload: Partial<InitialState["checkout"]>},) => {
            state.checkout = {...state.checkout, ...payload};
        }
    }
})
export default orderSlice.reducer
export const { setBooks, setCheckout} = orderSlice.actions;
