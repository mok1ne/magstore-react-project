import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const findItem = state.items.find((obj) =>
                obj.id === action.payload.id &&
                obj.rom === action.payload.rom &&
                obj.color === action.payload.color
            );

            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                })
            }
            state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
        },

        minusItem(state, action) {
            const { id, rom, color } = action.payload;
            const findItem = state.items.find((obj) =>
                obj.id === id && obj.rom === rom && obj.color === color
            );
        
            if (findItem) {
                if (findItem.count > 1) {
                    findItem.count--; //
                } else {
                    state.items = state.items.filter(
                        (obj) => !(obj.id === id && obj.rom === rom && obj.color === color)
                    );
                }
            }
        
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum;
            }, 0);
        },
        


        removeItem(state, action) {
            const { id, rom, color } = action.payload;
            state.items = state.items.filter(
                (obj) => obj.id !== id || obj.rom !== rom || obj.color !== color
            );
            state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
        },
    }
})

export const { addItem, removeItem, minusItem } = cartSlice.actions

export default cartSlice.reducer