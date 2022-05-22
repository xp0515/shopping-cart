import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CartActionType } from '../+state/cart.actions';
import { AppState, getQuantityByItem } from '../+state/cart.selectors';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
    @Input() item: string;
    quantity: Observable<number>;

    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {
        this.quantity = this.store.pipe(select(getQuantityByItem, { item: this.item }));
    }

    addItem(item: string) {
        this.store.dispatch({ type: CartActionType.AddItem, payload: { item } })
    }

    removeItem(item: string) {
        this.store.dispatch({ type: CartActionType.RemoveItem, payload: { item } })
    }
}