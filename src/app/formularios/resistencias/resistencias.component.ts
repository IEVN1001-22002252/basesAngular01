import { Component } from '@angular/core';
import{Resi} from './operacionesresistencia';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resistencia-cal',
  standalone: false,
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciaCalComponent {
  banda1: number = 0;
  banda2: number = 0;
  banda3: number = 0;
  tolerancia: number = 0.05;

  calculadora = new Resi();
  mostrarResultados: boolean = false;

  coloresBanda: string[] = [
    "table-dark","table-cafe","table-rojo","table-naranja",
    "table-amarillo","table-verde","table-azul","table-morado",
    "table-gris","table-blanco"
  ];

  multiplicadores: number[] = [
    1,
    10,
    100,
    1000,
    10000,
    100000,
    1000000,
    10000000,
    100000000,
    1000000000
  ];

  calcular(): void {
  const b1 = Number(this.banda1);
  const b2 = Number(this.banda2);
  const b3 = Number(this.banda3);
  const tol = Number(this.tolerancia);


   this.tolerancia = tol;
  this.calculadora.calcular(b1, b2, b3, tol);
  this.mostrarResultados = true;
}

  getColorTolerancia(): string {
    return this.tolerancia === 0.05 ? 'table-dorado' : 'table-plata';
  }

  getTextoTolerancia(): string {
    return this.tolerancia === 0.05 ? 'Dorado 5%' : 'Plata 10%';
  }
}
