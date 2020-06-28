import { Component, OnInit } from '@angular/core';
import { KitchenService } from '../kitchen.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

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

  constructor(private empService: KitchenService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
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

  goBack(){
      this.router.navigate(['/kitchens']);
  }

}
