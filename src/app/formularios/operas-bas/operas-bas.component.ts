import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {

  num1:string='';
  num2:string='';
  resultado:number=0;
  operacion:string='';

  sumar():void{
    this.resultado=parseInt(this.num1)+parseInt(this.num2);
  }
  restar():void{
    this.resultado=parseInt(this.num1)-parseInt(this.num2);
  }
  multi():void{
    this.resultado=parseInt(this.num1)*parseInt(this.num2);
  }
  divi():void{
    this.resultado=parseInt(this.num1)/parseInt(this.num2);
  }
  calcular():void{
    if(this.operacion == 'suma'){
      this.sumar();
    }
    if(this.operacion == 'resta'){
      this.restar();
    }
    if(this.operacion == 'multi'){
      this.multi();
    }
    if(this.operacion == 'divi'){
      this.divi();
    }
  }
}
