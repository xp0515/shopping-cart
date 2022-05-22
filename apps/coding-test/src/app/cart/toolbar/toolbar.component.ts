import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CartActionType } from '../+state/cart.actions';
import { AppState, getCount } from '../+state/cart.selectors';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {
    count: Observable<number>;

    constructor(private store: Store<AppState>) {
        this.count = this.store.pipe(select(getCount));
    }

    reset() {
        this.store.dispatch({ type: CartActionType.Reset })
    }

}