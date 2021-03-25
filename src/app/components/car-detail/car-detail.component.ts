import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail[] = [];
  car:Car[] = [];
  carimages: CarImage[] = [];
  DateTimeNow: Date = new Date();
  rentStartDate: Date = this.DateTimeNow;
  rentEndDate: Date = this.DateTimeNow;

  constructor(
    private carService: CarService, 
    private carDetailService: CarDetailService,
    private rentalService: RentalService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.getById(params["carId"]);
        this.getImagesByCarId(params["carId"]);
      }
      else{
        this.getImagesByCarId(params["carId"]);
      }
    })
  }

  getById(carId: number){
    this.carService.getById(carId).subscribe(response => {
      this.carDetails = response.data;
    })
  }

  getImagesByCarId(carId: number){
    this.carDetailService.getImagesByCarId(carId).subscribe(response => {
      this.carimages = response.data;
    })
  }

  getCurrentImageClass(image: CarImage){
    if(image == this.carimages[0]){
      return "carousel-item active"
    }
    else{
      return "carousel-item"
    }
  }
  

}
