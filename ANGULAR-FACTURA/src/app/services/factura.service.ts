import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_ENDPOINT } from '../config/config';
import { Factura } from '../Entity/Factura';
import { CommonService } from './common.service';


@Injectable({
  providedIn: 'root'
})
export class FacturaService extends CommonService<Factura>{

  constructor(http: HttpClient) {
    super(http);
   }

  protected baseEndPoint = BASE_ENDPOINT + '/instrumento';

  public getFacturas(): Observable<Factura[]>{
    return this.http.get<Factura[]>(`http://localhost:4200/filesjson/listado_facturas.json`);
  }

}
