import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CartActionType } from '../+state/cart.actions';
import { ApiService } from '../../api.service';
import { Cart, File } from '../model';

interface AppState {
    cart: Cart
}

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss']
})

export class ItemListComponent {
    cart: Observable<Cart>;
    items: string[];

    constructor(private store: Store<AppState>, private apiService: ApiService) {
        this.cart = this.store.select('cart');
        this.apiService.getArchives().subscribe(archives => this.items = archives.files.map((file: File) => file.format))
    }

    addItem(item: string) {
        this.store.dispatch({ type: CartActionType.AddItem, payload: { item } })
    }

    removeItem(item: string) {
        this.store.dispatch({ type: CartActionType.RemoveItem, payload: { item } })
    }

    reset() {
        this.store.dispatch({ type: CartActionType.Reset })
    }

}