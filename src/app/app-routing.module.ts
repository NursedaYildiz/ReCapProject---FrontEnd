import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/pages/admin-page/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { CarListComponent } from './components/pages/admin-page/car-list/car-list.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarEditComponent } from './components/pages/admin-page/car-edit/car-edit.component';
import { AdminPageComponent } from './components/pages/admin-page/admin-page.component';
import { BrandListComponent } from './components/pages/admin-page/brand-list/brand-list.component';
import { ColorListComponent } from './components/pages/admin-page/color-list/color-list.component';

const routes: Routes = [
  {
    path: '', component: HomepageComponent, children: [
      { path: '', component: CarComponent },
      { path: 'cars', component: CarComponent },
      { path: 'cars/brand/:brandId', component: CarComponent },
      { path: 'cars/color/:colorId', component: CarComponent },
      { path: 'cars/filter/:colorId/:brandId', component: CarComponent },
    ]
  },

  {path:"carDetails/:carId", component:CarDetailComponent},
  {path:"payment/:rental",component:PaymentComponent},

  {path: "admin", component:AdminPageComponent},
  {path: "admin/carsList/add", component:CarAddComponent},
  {path: "admin/cars/edit", component:CarEditComponent}, 
  {path: "admin/carsList", component:CarListComponent},
  {path: "admin/brandsList", component:BrandListComponent},
  {path: "admin/colorsList", component:ColorListComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
