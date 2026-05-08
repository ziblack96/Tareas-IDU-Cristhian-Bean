import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  imports: [CommonModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

  vDate: Date = new Date(2025,9,5);

  vStringNumber:number=31;

  vImagen: string = './assets/conductor-de-autobus.png';

  vNumeroImpar:number=0;

  Incrementar_Numero(): void{
    console.log("Se ha incrementado el numero");
    
      if(this.vNumeroImpar % 2 === 0)
        {
        this.vNumeroImpar++;
      } else {
        this.vNumeroImpar+=2;
      } 
        console.log("El numero es impar",this.vNumeroImpar);    
  }
}