import { createSelector } from '@ngrx/store';

import { Cart } from '../model';

export interface AppState {
    cart: Cart
}

export interface CartState {
    count: number
    items: string[]
}

interface ItemProps {
    item: string
}

const getItem = (_: AppState, props: ItemProps): string => props.item;
const getCart = (state: AppState): Cart => state.cart

export const getCount = createSelector(getCart, (cart: Cart): number => cart.count);

export const getAllItems = createSelector(getCart, (cart: Cart): string[] => cart.items);

export const getQuantityByItem: (state: AppState, props: ItemProps) => number = createSelector(
    getAllItems,
    getItem,
    (items: string[], item: string) => items.filter(i => i === item).length
);
