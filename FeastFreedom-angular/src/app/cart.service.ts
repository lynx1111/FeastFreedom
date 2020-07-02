import { Injectable } from '@angular/core';
import { Cart } from './cart';
import { Menu } from './menu';


@Injectable({
  providedIn: 'root'
})
export class CartService {

public cart = new Cart();
public nmenu: Array<Menu> = [];



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

let c: number = 0;
for (let i of this.cart.menus){
  if(i.name==mname){
    c=c+1;
  } 
}
return c;
}

getnodulmenu(){
  
  /*if(this.nmenu.length == 0){
  this.nmenu.push(this.cart.menus[0]);
}*/

  for(var i =0; i<this.cart.menus.length;i++){
   let b: boolean = true;
    for(var j = 0; j<this.nmenu.length; j++){
      
      if(this.nmenu[j].name == this.cart.menus[i].name){
        b=false;
        break;
      }
    
    }   
    if (b == true){
      this.nmenu.push(this.cart.menus[i]);
    }
  }
  
  return this.nmenu;
}

deleteMenu(menun: string){
  for (var i =0; i<this.cart.menus.length;i++){
    if (menun ==this.cart.menus[i].name){
      this.cart.menus.splice(i,1);
      break;
      //this.nmenu.splice(i,1);
    }
  }
}

resetnmenu(){
  this.nmenu = [];
}

}
