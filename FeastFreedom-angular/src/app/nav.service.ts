import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  visible: boolean;
  cartv: boolean;

  constructor() { this.visible = false; this.cartv =true}

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  cartshow() {this.cartv =true;}

  carthide() {this.cartv =false;}


}
