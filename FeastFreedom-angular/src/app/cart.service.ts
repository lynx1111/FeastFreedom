import { Injectable } from '@angular/core';
import { Cart } from './cart';
import { Menu } from './menu';


@Injectable({
  providedIn: 'root'
})
export class CartService {

public cart = new Cart();



  constructor() { }


addcart(menu: Menu){
this.cart.menus.push(menu);
}

getmenus(){
  return this.cart.menus;
}

totalprice(){
  let tp:number = 0;
  for (let i of this.cart.menus){
    tp=tp+i.price;
  }
  return tp;
}

reset(){
  this.cart = new Cart();
}

getcountbymenuname(mname: String){
  console.log(this.cart);
let c: number = 0;
for (let i of this.cart.menus){
  if(i.name==mname){
    c=c+1;
  } 
}
return c;
}

getnodulmenu(){
  
  let nmenu: Array<Menu> = [];
  nmenu.push(this.cart.menus[0]);
  for(var i =1; i<this.cart.menus.length;i++){
   
    for(var j = 0; j<nmenu.length; j++){
      
      if(nmenu[j].name == this.cart.menus[i].name){
        break;
      }
      if (j==nmenu.length-1){
        nmenu.push(this.cart.menus[i]);
      }
    }   
  }
  
  return nmenu;
}

}
