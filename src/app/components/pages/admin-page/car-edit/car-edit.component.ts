import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.scss']
})
export class CarEditComponent implements OnInit {
  
  car: CarDetail[];
  carDataLoaded: boolean = false;
  carEditForm: FormGroup;
  errorMessages:string[]=[];
  brands:Brand[];
  colors:Color[];

  constructor(
    private formBuilder:FormBuilder,
    private carService:CarService,
    private brandService:BrandService,
    private colorService:ColorService,
    private toastr:ToastrService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.createCarEditForm();
        this.getCurrentCar(params["carId"]);
        this.getColors();
        this.getBrands();
      }
    });
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data
    })
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{ 
      this.brands=response.data
    })
  }

  createCarEditForm(){
    this.carEditForm = this.formBuilder.group({
      brandId: ["", Validators.required],
      carName:["", [Validators.required, Validators.minLength(2)]],
      colorId: ["", Validators.required],
      modelYear: [0, [Validators.required, Validators.min(1950)]],
      descriptions: ["", Validators.required],
      dailyPrice: [0,[Validators.required, Validators.min(0)]]
    })
  }

  getCurrentCar(carId: number) {
    this.carService.getById(carId).subscribe((response) => {
      this.car = response.data;
      this.carDataLoaded = true;
      this.createCarEditForm();
    });
  }

}
