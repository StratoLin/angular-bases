import { Injectable } from '@angular/core';
import { v4 as uuid  } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    constructor() { }
    
    public characters: Character[] = [{
        id: uuid(),
        name : 'Goku',
        power : 1000
    },{
        id: uuid(),
        name : 'Krilin',
        power : 9500
    },{
        id: uuid(),
        name : 'Vegeta',
        power : 6000
    }]; 


    addCharacter( character: Character): void {
        const newCharacter = {id: uuid(), ...character};
        this.characters.push(newCharacter);

    }

    // onDeleteId(i: number): void{
    //     this.characters.splice(i, 1);

    // }

    deleteCharacterById(id: string): void{      
        this.characters = this.characters.filter(character => character.id !== id);
    }
}