import { Action } from "@ngrx/store";

import { AddItem, CartActionType, RemoveItem } from "./cart.actions";
import { Cart } from "../model";

type CartAction = AddItem | RemoveItem

const initialState: Cart = {
    count: 0,
    items: []
}

const addItem = (state: Cart, item: string): Cart => ({
    ...state,
    count: state.count + 1,
    items: [...state.items, item]
});

const removeItem = (state: Cart, item: string): Cart => {
    if (state.count > 0 && state.items.indexOf(item) !== -1)
        return {
            ...state,
            count: state.count - 1,
            items: state.items.filter((_, i) => i !== state.items.lastIndexOf(item))
        }
    return state
};

export function cartReducer(state: Cart = initialState, action: Action) {
    const cartAaction = action as CartAction
    switch (action.type) {
        case CartActionType.AddItem:
            return addItem(state, cartAaction.payload.item);
        case CartActionType.RemoveItem:
            return removeItem(state, cartAaction.payload.item);
        case CartActionType.Reset:
            return initialState;
        default:
            return state;
    }
}