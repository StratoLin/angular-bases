import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  //formulario de plantilla
  // public user: any = {
  //   name: '',
  //   email: ''
  // }
  formularioContacto: FormGroup
  tipoDni: string = 'DNI'

  ngOnInit(): void {
      this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value =>{
        this.tipoDni = value;
      })
  }

  constructor(private form: FormBuilder){
    this.formularioContacto = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.email, Validators.required]],
      dni: [''],
      tipoDni: ['']
    })
  }

   enviar(){
    console.log(this.formularioContacto);
   }

   hasErrors(controlName: string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
   }
}
