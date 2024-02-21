import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  public nombre: string = 'ironman';
  public edad: number = 40;

  get capitlizarNombre(): string{
    return this.nombre.toUpperCase();
  }

  getHeroeDescripcion():string{
    return `${this.nombre} - ${this.edad}`;
  }

  changeName():void{
    this.nombre = 'Superman'
  }

  changeAge(): void {
    this.edad = 30;
  }

  reset(): void{
    this.nombre = 'ironman';
    this.edad = 40;
  }
}
