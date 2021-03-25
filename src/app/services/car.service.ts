import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDetail } from '../models/carDetail';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getall";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getById(carId:number):Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getbyid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getcardetailsbybrandid?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailsByColor(colorId:number):Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getcardetailsbycolorid?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetails():Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath); 
  }

  getCarImageList(carId: number): Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcarimagelist?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  add(car:CarDetail):Observable<ResponseModel>{
    let newPath = this.apiUrl+"cars/add";
    return this.httpClient.post<ResponseModel>(newPath,car);
  }
}
