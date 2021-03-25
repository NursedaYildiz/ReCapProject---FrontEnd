import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  carDetails: CarDetail[] = [];
  dataLoaded = false;
  filterText="";

  constructor(
      private carService: CarService,
      private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      
      if(params["brandId"]){
        this.getCarDetailsByBrand(params["brandId"])
      } else if (params["colorId"]) {
        this.getCarDetailsByColor(params["colorId"])
      }
      else {
        this.getCarDetails();
      }

    })
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByBrand(brandId:number) {
    this.carService.getCarDetailsByBrand(brandId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByColor(colorId:number) {
    this.carService.getCarDetailsByColor(colorId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    })
  }

}
