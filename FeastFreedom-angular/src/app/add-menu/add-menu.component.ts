import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { MatSidenav } from '@angular/material/sidenav';
import { NavService } from '../nav.service';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  public userForm;
  menu;
  errorMsg;
  uf;
  navcheck: boolean;
  selectedFile = null;

  constructor(private ms: MenuService ,private fb: FormBuilder, private userService: UserService, private router: Router, public nav: NavService) { }

  opened = true;
  
  @ViewChild('sidenav',  { static: true }) sidenav: MatSidenav;
  ngOnInit(): void {
     this.nav.hide();
     this.userForm = this.fb.group({
       //id: ['', [Validators.required, Validators.minLength(1)]],
      name: ['', [Validators.required, Validators.minLength(1)]],
      veg: ['', [Validators.required, Validators.minLength(1)]],
      price: ['',[Validators.required,Validators.minLength(1)]],
      kitchenid: ['',[Validators.required,Validators.minLength(1)]],
      photo: ['',[Validators.required,Validators.minLength(1)]]
    });
  }

  onSubmit(userForm){

    console.log(this.userForm.value);
    this.uf = this.fb.group({
      name:[this.userForm.value.name],
      veg:[this.userForm.value.veg],
      price:[this.userForm.value.price],
      kitchenid:[this.userForm.value.kitchenid],
      photo:[this.userForm.value.photo]
    })
    console.log(this.uf.value);
    this.ms.postMenu(this.uf.value).subscribe(
      (data) => {
        this.menu = data; 
        console.log(this.menu);
        this.ms.getMenus().subscribe(
          (data) => this.menu = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => this.errorMsg = error
    )
    this.router.navigate(['/userhome']);
    this.userForm.reset();
  }
onFileSelected(event){
  this.selectedFile = event.target.files[0];
}

onUpload(){

}

onCancel(){
  this.nav.show();
  this.router.navigate(['/userhome']);
}

  get id() {
    return this.userForm.get('id');
  }

  get name() {
    return this.userForm.get('name');
  }

  get veg() {
    return this.userForm.get('veg');
  }

  get price() {
    return this.userForm.get('price');
  }

  get kitchenid() {
    return this.userForm.get('kitchenid');
  }
  get photo() {
    return this.userForm.get('photo');
  }
}
