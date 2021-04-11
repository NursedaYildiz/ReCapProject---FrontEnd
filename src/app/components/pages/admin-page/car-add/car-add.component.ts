import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.scss']
})
export class CarAddComponent implements OnInit {

  carAddForm: FormGroup;
  errorMessages:string[]=[];
  brands:Brand[];
  colors:Color[];

  constructor(
    private formBuilder:FormBuilder,
    private carService:CarService,
    private brandService:BrandService,
    private colorService:ColorService,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    this.createCarAddForm();
    this.getBrands();
    this.getColors();
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

  createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
      brandId: ["", Validators.required],
      carName:["", [Validators.required, Validators.minLength(2)]],
      colorId: ["", Validators.required],
      modelYear: [0, [Validators.required, Validators.min(1950)]],
      descriptions: ["", Validators.required],
      dailyPrice: [0,[Validators.required, Validators.min(0)]]
    })
  }

  add() {
    if (this.carAddForm.valid) {
      let carModel = Object.assign({}, this.carAddForm.value);
      this.carService.add(carModel).subscribe(
        (response) => {
          this.toastr.success(response.message, 'Başarılı!');
        },
        (responseError) => {
          if (responseError.error.ValudationErrors.length > 0) {
            for (
              let i = 0;
              i < responseError.error.ValudationErrors.length;
              i++
            ) {
              this.toastr.error(
                responseError.error.ValudationErrors[i].ErrorMessage,
                'Doğrulama Hatası'
              );
            }
            this.toastr.error(
              responseError.error.ValudationErrors,
              "Doğrulama Hatası"
            );
          }
        }
      );
    } else {
      this.toastr.error('Formunuz Eksik','Dikkat!')
    }
  }

}
