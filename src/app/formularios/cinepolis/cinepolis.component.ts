import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {

  nombre:string='';
  cantidadCom:number=0;
  tarCine:string='';
  cantBole:number=0;
  valorPagar:number=0;
  mensajeError:string='';

  procesar():void{
    const maxBoletos = this.cantidadCom * 7;

    if(this.cantBole >= 1 && this.cantBole > maxBoletos){
      this.mensajeError = (this.cantidadCom) + ' comprador/es no pueden adquirir más de ' + (maxBoletos) + ' boletos.';
      return;
    }
    if(this.cantBole > 5 ){
      this.valorPagar=(this.cantBole*12)*0.85;
    }
    if(this.cantBole >= 3 && this.cantBole <= 5){
      this.valorPagar=(this.cantBole*12)*0.90;
    }
    if(this.cantBole <= 2){
      this.valorPagar=this.cantBole*12;
    }
    if(this.tarCine == "si"){
      this.valorPagar=this.valorPagar*0.90;
    }
  }
  salir():void{

  }


}
