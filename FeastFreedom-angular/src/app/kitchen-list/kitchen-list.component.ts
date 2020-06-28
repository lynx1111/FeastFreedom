import { Component, OnInit } from '@angular/core';
import { KitchenService } from '../kitchen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kitchen-list',
  templateUrl: './kitchen-list.component.html',
  styleUrls: ['./kitchen-list.component.css']
})
export class KitchenListComponent implements OnInit {
  public kitchens;
  public errorMsg;
  public dataFromChild;
  constructor(private _kitchenService:KitchenService, private router: Router) { }

  ngOnInit(): void {
    this._kitchenService.getKitchens().subscribe(
      (data) => {this.kitchens = data; console.log(data)},
      (error) => this.errorMsg = error
    );
  }

  handleNotify(eventData){
    this.dataFromChild=eventData;
  }

  onSelect(kitchens){
    console.log(kitchens)
    this.router.navigate(['/kitchens/', kitchens.id]);
}

selectkitchen(kitchen){
  console.log(kitchen)
  this.router.navigate(['/kitchens/', kitchen.id]);
}

editKitchen(kitchen){
  this.router.navigate(['/editkitchens', kitchen.id]);
}

deleteKitchen(kitchen){
  this._kitchenService.deleteKitchen(kitchen.id).subscribe(() => {
    this._kitchenService.getKitchens().subscribe(
      (data) => this.kitchens = data,
      (error) => this.errorMsg = error
    )
  })
}

}
