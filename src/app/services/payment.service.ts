import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl = environment.apiUrl;

  constructor( private httpClient:HttpClient) { } 

  pay(rental:Rental, amount:Number):Observable<ResponseModel>{
    let newPath = this.apiUrl + "rentals/paymentadd";
    rental.returnDate = undefined;
    return this.httpClient.post<ResponseModel>(newPath, {payment:{amount:amount}, rental:rental}); 
  }

}
