import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from '../must-match.validator';
import { MatSidenav } from '@angular/material/sidenav';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NavService } from '../nav.service';
import { KitchenService } from '../kitchen.service';

@Component({
  selector: 'app-kitchen-registration',
  templateUrl: './kitchen-registration.component.html',
  styleUrls: ['./kitchen-registration.component.css']
})
export class KitchenRegistrationComponent implements OnInit {
  public userForm;
  users;
  errorMsg;
  uf;
  navcheck: boolean;
  selectedFile = null;

  constructor(private fb: FormBuilder, private kitchenService: KitchenService, private router: Router, public nav: NavService) { }

  opened = true;
  
  @ViewChild('sidenav',  { static: true }) sidenav: MatSidenav;
  ngOnInit(): void {
     this.nav.hide();
     this.userForm = this.fb.group({
       //id: ['', [Validators.required, Validators.minLength(1)]],
      name: ['', [Validators.required, Validators.minLength(1)]],
      day: ['', [Validators.required, Validators.minLength(1)]],
      starttime: ['',[Validators.required,Validators.minLength(1)]],
      stoptime: ['', [Validators.required,Validators.minLength(1)]],
      image: ['',[Validators.required,Validators.minLength(1)]]
    });
  }

  onSubmit(userForm){

    console.log(this.userForm.value);
    this.uf = this.fb.group({
      name:[this.userForm.value.name],
      day:[this.userForm.value.day],
      starttime:[this.userForm.value.starttime],
      stoptime:[this.userForm.value.stoptime],
      image:[this.userForm.value.image]
      
    })
    console.log(this.uf.value);
    this.kitchenService.postKitchen(this.uf.value).subscribe(
      (data) => {
        this.users = data; 
        console.log(this.users);
        this.kitchenService.getKitchens().subscribe(
          (data) => this.users = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => this.errorMsg = error
    )
    this.router.navigate(['/addmenu']);
    this.userForm.reset();
  }

  onFileSelected(event){
    this.selectedFile = event.target.files[0];
  }


  get id() {
    return this.userForm.get('id');
  }

  get name() {
    return this.userForm.get('name');
  }

  get day() {
    return this.userForm.get('day');
  }

  get starttime() {
    return this.userForm.get('starttime');
  }

  get stoptime() {
    return this.userForm.get('stoptime');
  }

  get image() {
    return this.userForm.get('image');
  }

}
