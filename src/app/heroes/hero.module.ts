import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListaHeroesComponent } from "./lista-heroes/lista-heroes.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations : [
        HeroeComponent,
        ListaHeroesComponent
    ],
    exports: [
        HeroeComponent,
        ListaHeroesComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule { }
