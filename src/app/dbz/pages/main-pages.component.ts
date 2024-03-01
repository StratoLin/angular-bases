import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';


@Component({
    selector: 'app-dbz-main-pages',
    templateUrl: './main-pages.component.html'
})

export class MainPagesComponent{
    constructor(public dbzService: DbzService) { }

    get characters(){
        return this.dbzService.characters;
    }

    deleteCharacterById(id: string): void{
        this.dbzService.deleteCharacterById(id);
    }

     addCharacter(character: Character): void{
        this.dbzService.addCharacter(character); 
}
}