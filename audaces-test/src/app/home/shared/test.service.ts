import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  validaTarget(lista: string[], target: number){
    
    lista.sort((a,b) => parseInt(b) - parseInt(a));
    let orderTarget: number[] = [];
    let validTarget: number = 0;
    let compLista: string[] = [];
    let count = lista.length;
    
    lista.forEach((element) => {
        while(validTarget + parseInt(element) <= target){
          validTarget += parseInt(element);
          orderTarget.push(parseInt(element));
        }
    })
    if (orderTarget.length < 4 && lista.length > 1) {
      compLista = [];
      lista.forEach((el) => {
        if (count <= (lista.length - 1)) {
          compLista.push(el.toString());
        }
        count--;
      });
      orderTarget = this.validaTarget(compLista, target);
    }

    return orderTarget;
  }
  
}
