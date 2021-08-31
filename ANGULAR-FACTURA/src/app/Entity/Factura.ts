import { Base } from './Base';
export class Factura implements Base{
    id!: number;
    fecha!: string;
    cuit!: number;
    ptoVta!: number;
    tipoCmp!: number;
    nroCmp!: number;
    importe!: number;
    moneda!: string;
    tipoDocRec!: string;
    nroDocRec!: number;
    tipoCodAut!: string;
    codAut!: number;
}