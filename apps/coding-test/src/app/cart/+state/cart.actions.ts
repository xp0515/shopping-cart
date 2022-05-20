export enum CartActionType {
    AddItem = 'Add item',
    RemoveItem = 'Remove item',
    Reset = 'Reset'
}

export interface AddItemPayload {
    item: string;
}

export interface AddItem {
    type: CartActionType.AddItem
    payload: AddItemPayload
}

export interface RemoveItemPayload {
    item: string;
}

export interface RemoveItem {
    type: CartActionType.RemoveItem
    payload: RemoveItemPayload
}

export interface Reset {
    type: CartActionType.Reset
}
