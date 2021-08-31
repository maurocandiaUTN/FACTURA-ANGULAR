import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura } from 'src/app/Entity/Factura';
import { FacturaService } from 'src/app/services/factura.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  facturaDetalle!: Factura;

  constructor(
    private activatedRoute:ActivatedRoute,
    private facturaService: FacturaService,
    private router: Router,
    protected route: ActivatedRoute) { }

  
  ngOnInit(): void {
    
    var params = +this.route.snapshot.paramMap.get('detalleVal')!;
    
    this.facturaService.getFacturas().subscribe( facturas => {

      facturas.map(factura => {
        if(factura.nroDocRec == params){
          this.facturaDetalle = factura;

        }
      });
      
    });
    
    
  }

  
}

 


