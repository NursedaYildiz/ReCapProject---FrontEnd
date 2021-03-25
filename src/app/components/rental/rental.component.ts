import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements OnInit {
  
  customers:Customer[];
  id:Number;
  rentDate:Date;
  returnDate: Date;
  @Input() car:CarDetail;

  constructor(
    private carService:CarService,
    private customerService:CustomerService,
    private rentalService:RentalService,
    private toastr:ToastrService,
    private router:Router,
    private activatedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getById(params["carId"])
      }
    })
    this.getCustomer();
  }

  getCustomer(){
    this.customerService.getCustomer().subscribe((response) =>{
      this.customers = response.data;
    })
  }

  getById(carId: number){
    this.carService.getById(carId).subscribe(response => {
      this.car = response.data[0];
    })
  }

  getRentMinDate(){
    var today  = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().slice(0,10)
  }
  getReturnMinDate(){
    var today  = new Date();
    today.setDate(today.getDate() + 2);
    return today.toISOString().slice(0,10)
  }
  createRental(){
    let MyRental:Rental = {
      rentDate: this.rentDate,
      returnDate: this.returnDate,
      carId: this.car.carId,
      customerId: parseInt(this.id.toString())
    }
    this.router.navigate(['/payment/', JSON.stringify(MyRental)]); 
    this.toastr.info("Ödeme sayfasına yönlendiriliyorsunuz.", "Yönlendiriliyorsunuz...");
  }
}