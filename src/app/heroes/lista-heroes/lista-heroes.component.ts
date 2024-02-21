import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista-heroes.component.html',
  styleUrls: ['./lista-heroes.component.css']
})
export class ListaHeroesComponent {

  public heroeNames: string[] = ['Spiderman', 'Thor', 'hulk', 'She hulk'];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroeNames.pop();
    
  }
}
