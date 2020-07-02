import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NavService } from '../nav.service';
import { CartService } from '../cart.service';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public kitchenId;
  public cart;
  public errorMsg;
  public menus;

  constructor(public empService: CartService, private route: ActivatedRoute, private router: Router,public nav: NavService) { }

  ngOnInit(): void {
    this.nav.show();
    /*this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      console.log(id)
      this.kitchenId = id;
      console.log(this.kitchenId);
    });*/

    /*this.empService.getCartsByUserId(1).subscribe(
      (data) => {
        this.cart = data; 
        console.log(data); 
        this.menus=this.cart;
      },
      (error) => {this.errorMsg = error; console.log(error); }
    );*/
    //this.menus=data.menu;
    this.empService.resetnmenu();
    this.menus= this.empService.getnodulmenu();
    
  }

  deleteM(m: string){
    console.log(m);
    this.empService.deleteMenu(m);
    if(this.getcount(m) == 0){
      for (var i =0; i<this.menus.length;i++){
        if (m ==this.menus[i].name){
          this.menus.splice(i,1);
          break;
      }
    }
  }
  }

  goBack(){
      this.router.navigate(['/kitchens']);
  }

  getcount(name: string){
    return this.empService.getcountbymenuname(name);
}

gettotal(){
  return this.empService.totalprice();
}

}
