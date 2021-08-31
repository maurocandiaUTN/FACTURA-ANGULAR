import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura } from 'src/app/Entity/Factura';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ordenar: boolean = false;
  ordenarBandera: string = "";
  facturasData: Factura[] = [];

  constructor(
    private activatedRoute:ActivatedRoute,
    private facturaService: FacturaService,
    private router: Router
    ) { }

  ngOnInit(): void {
    const valorBuscador = this.activatedRoute.snapshot.paramMap.get('valor')!;

    if(valorBuscador){

      this.facturaService.getFacturas().subscribe( facturas => {

        var arrBuscador:any[] = [];
        
        facturas.map(factura => {
          
          var idx = (factura.nroDocRec.toString()).indexOf(valorBuscador);
          
          if(idx != -1){
            arrBuscador.push(factura);
          }
        });
        
        this.facturasData =arrBuscador as Factura[];
      });

    }else{

      this.facturaService.getFacturas().subscribe( facturas => {
        this.facturasData = facturas as Factura[];
      });
    }

    
  }

  ordenarFacturas() {
      
    if (this.ordenar == true) {
      this.facturasData.sort((a, b) => a.importe - b.importe);
      this.ordenarBandera = "ASC";
      this.ordenar = false;
      //esto lo hago para que corte la funcion, sino pasa abajo y siempre hace en DESC
      return null;
    }
    if (this.ordenar == false) {
      this.facturasData.sort((a, b) => b.importe - a.importe);
      this.ordenarBandera = "DESC";
      this.ordenar = true;
      return null;
    }
    return null;
  }

}
