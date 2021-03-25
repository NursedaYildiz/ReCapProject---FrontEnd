import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { PaymentComponent } from './components/payment/payment.component';

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

  {path: "cars/add", component:CarAddComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
