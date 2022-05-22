import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { ItemComponent } from './cart/item/item.component';
import { ItemListComponent } from './cart/item-list/item-list.component';
import { ToolbarComponent } from './cart/toolbar/toolbar.component';
import { cartReducer } from './cart/+state/cart.reducer';

@NgModule({
  declarations: [AppComponent, ItemComponent, ItemListComponent, ToolbarComponent],
  imports: [BrowserModule,
    StoreModule.forRoot({ cart: cartReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
