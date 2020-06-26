import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { MustMatch } from '../must-match.validator';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  public userForm;
  users;
  errorMsg;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
     this.userForm = this.fb.group({
       //id: ['', [Validators.required, Validators.minLength(1)]],
      name: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['',[Validators.required,Validators.minLength(3)]],
      confirmpass: ['', Validators.required]
    },{
      validator: MustMatch('password', 'confirmpass')
  });
  }

  onSubmit(employeeForm){
    console.log(this.userForm.value);
    this.userService.postUser(this.userForm.value).subscribe(
      (data) => {
        this.users = data; 
        console.log(this.users);
        this.userService.getUsers().subscribe(
          (data) => this.users = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => this.errorMsg = error
    )
    this.router.navigate(['/userhome']);
    this.userForm.reset();
  }

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
          passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
          return passwordConfirmationInput.setErrors(null);
      }
    }
  }

  get id() {
    return this.userForm.get('id');
  }

  get name() {
    return this.userForm.get('name');
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  get confirmpass() {
    return this.userForm.get('confirmpass');
  }

}
