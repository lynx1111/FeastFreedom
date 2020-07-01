import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavService } from '../nav.service';
import { KitchenService } from '../kitchen.service';

@Component({
  selector: 'app-provider-home',
  templateUrl: './provider-home.component.html',
  styleUrls: ['./provider-home.component.css']
})
export class ProviderHomeComponent implements OnInit {

  public kitchens;
  public errorMsg;
  public dataFromChild;

  constructor(private _kitchenService:KitchenService, public nav: NavService) { }
  opened = true;
  @ViewChild('sidenav',  { static: true }) sidenav: MatSidenav;
  ngOnInit(): void {
    this.nav.hide();
    this._kitchenService.getKitchens().subscribe(
      (data) => {this.kitchens = data; console.log(data)},
      (error) => this.errorMsg = error
    );
  }

}
