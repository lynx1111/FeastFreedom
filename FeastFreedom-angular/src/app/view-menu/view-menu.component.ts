import { Component, OnInit } from '@angular/core';
import { KitchenService } from '../kitchen.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NavService } from '../nav.service';
import { CartService } from '../cart.service';
import { Cart } from '../cart';

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

  constructor(private empService: KitchenService, private route: ActivatedRoute, private router: Router,public nav: NavService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.nav.show();
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      console.log(id)
      this.kitchenId = id;
      console.log(this.kitchenId);
    });
    this.empService.getKitchensById(this.kitchenId).subscribe(
      (data) => {
        this.kitchen = data; 
        console.log(data); 
        this.menus=this.kitchen.menu;
      },
      (error) => {this.errorMsg = error; console.log(error); }
      
    );
    //this.menus=data.menu;
  }
  onSelect(menu){
    console.log(this.menu);
    this.cart = new Cart(menu.value.name,menu.value.veg,menu.value.price,1);
    this.cartService.postCart(this.cart.value).subscribe(
      (data) => this.cart = data,
      (error) => this.errorMsg = error
    )};

  goBack(){
      this.router.navigate(['/kitchens']);
  }

}
