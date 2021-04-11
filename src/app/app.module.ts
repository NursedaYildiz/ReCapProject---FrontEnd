import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';

import { ToastrModule } from "ngx-toastr";
import { RentalComponent } from './components/rental/rental.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentComponent } from './components/payment/payment.component';
import { CarAddComponent } from './components/pages/admin-page/car-add/car-add.component';
import { AdminPageComponent } from './components/pages/admin-page/admin-page.component';
import { CarListComponent } from './components/pages/admin-page/car-list/car-list.component';
import { CarEditComponent } from './components/pages/admin-page/car-edit/car-edit.component';
import { BrandListComponent } from './components/pages/admin-page/brand-list/brand-list.component';
import { AdminNaviComponent } from './components/pages/admin-page/admin-navi/admin-navi.component';
import { ColorListComponent } from './components/pages/admin-page/color-list/color-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CarComponent,
    ColorComponent,
    BrandComponent,
    CarDetailComponent,
    CarFilterPipe,
    BrandFilterPipe,
    ColorFilterPipe,
    CarFilterComponent,
    HomepageComponent,
    RentalComponent,
    PaymentComponent,
    CarAddComponent,
    AdminPageComponent,
    CarListComponent,
    CarEditComponent,
    BrandListComponent,
    AdminNaviComponent,
    ColorListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
