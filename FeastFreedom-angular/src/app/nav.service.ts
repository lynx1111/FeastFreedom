import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  visible: boolean;
  providerv: boolean;

  constructor() { this.visible = false; this.providerv =true}

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  cartshow() {this.providerv =true;}

  carthide() {this.providerv =false;}


}
