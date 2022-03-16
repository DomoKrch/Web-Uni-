import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

import { AppComponent } from './app.component';
import { ProductItemsComponent } from './product-items/product-items.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProductItemsComponent,
    ProductListComponent
  ],
    imports: [
        BrowserModule,
        ShareButtonsModule,
        ShareIconsModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
