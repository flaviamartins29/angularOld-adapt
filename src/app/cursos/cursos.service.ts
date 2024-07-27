import { Injectable } from '@angular/core';


@Injectable ({
  providedIn: 'root'
})
export class CursosServices{
constructor() { }
  getCursos(){
    return  ['Java', 'Ext JS', 'Angular'];
  }
}
