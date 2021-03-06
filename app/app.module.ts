import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
//import { ProductListComponent } from './products/product-list.component';
//import { ProductFilterPipe } from './products/product-filter.pipe';
//import { StarComponent } from './shared/star.component';
import { WelcomeComponent } from './home/welcome.component';
//import { ProductDetailComponent } from './products/product-detail.component';
//import { ProductDetailGuard } from './products/product-guard.service';
import { ProductModule } from './products/product.module';

@NgModule({
  imports: [ 
    BrowserModule,
    //FormsModule,
    HttpModule,
    RouterModule.forRoot([
      // { path: 'products', component: ProductListComponent },
      // { path: 'product/:id', 
      //   canActivate: [ ProductDetailGuard ],
      //   component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'}, //default url or page
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'} //wildcard:if others notfound
    ]),
    ProductModule 
  ],
  declarations: [ 
    AppComponent,
   // ProductListComponent,
   // ProductFilterPipe,
   // StarComponent,
    WelcomeComponent,
   // ProductDetailComponent
     ],
 // providers: [ ProductDetailGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

