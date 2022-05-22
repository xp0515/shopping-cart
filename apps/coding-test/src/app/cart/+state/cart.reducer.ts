import { Action } from "@ngrx/store";

import { AddItem, CartActionType, RemoveItem } from "./cart.actions";
import { CartState } from "./cart.selectors";

type CartAction = AddItem | RemoveItem

const initialState: CartState = {
    count: 0,
    items: []
}

const addItem = (state: CartState, item: string): CartState => ({
    ...state,
    count: state.count + 1,
    items: [...state.items, item]
});

const removeItem = (state: CartState, item: string): CartState => {
    if (state.count > 0 && state.items.indexOf(item) !== -1)
        return {
            ...state,
            count: state.count - 1,
            items: state.items.filter((_, i) => i !== state.items.lastIndexOf(item))
        }
    return state
};

export function cartReducer(state: CartState = initialState, action: Action) {
    const cartAction = action as CartAction
    switch (action.type) {
        case CartActionType.AddItem:
            return addItem(state, cartAction.payload.item);
        case CartActionType.RemoveItem:
            return removeItem(state, cartAction.payload.item);
        case CartActionType.Reset:
            return initialState;
        default:
            return state;
    }
}