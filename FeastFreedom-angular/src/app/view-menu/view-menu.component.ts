import { Component, OnInit } from '@angular/core';
import { KitchenService } from '../kitchen.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NavService } from '../nav.service';

import { Cart } from '../cart';
import { MenuService } from '../menu.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent implements OnInit {
  public kitchenId;
  public kitchen;
  public errorMsg;
  public menus;
  public cart;
  public menu;
  public cs;

  constructor(private empService: KitchenService, private route: ActivatedRoute, private router: Router,public nav: NavService,
    private menuService: MenuService, private cartServuce: CartService) { }

  ngOnInit(): void {
    this.nav.show();
    this.cs=this.cartServuce;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      console.log(id)
      this.kitchenId = id;
      console.log(this.kitchenId);
    });
    this.menuService.getMenusByKitchenId(this.kitchenId).subscribe(
      (data) => {
        this.kitchen = data; 
        console.log(data); 
        this.menus=this.kitchen;
      },
      (error) => {this.errorMsg = error; console.log(error); }
      
    );
    //this.menus=data.menu;
  }
  onSelect(menu){
    console.log(this.menu);
    
    this.menuService.postCart(this.cart.value).subscribe(
      (data) => this.cart = data,
      (error) => this.errorMsg = error
    )};

  goBack(){
      this.router.navigate(['/kitchens']);
  }

}
