import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPagesComponent } from './pages/main-pages.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';



@NgModule({
  declarations: [
    MainPagesComponent,
    ListComponent,
    AddCharacterComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // formulario de tipo plantilla
    ReactiveFormsModule, // formulario de tipo reactivo
  ],
  exports: [
    MainPagesComponent,
  ]
})
export class DbzModule { }
