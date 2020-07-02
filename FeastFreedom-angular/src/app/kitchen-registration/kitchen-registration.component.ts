import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { MustMatch } from '../must-match.validator';
import { User } from '../user';
import { NavService } from '../nav.service';
import { MatSidenav } from '@angular/material/sidenav';
import { KitchenService } from '../kitchen.service';

@Component({
  selector: 'app-kitchen-registration',
  templateUrl: './kitchen-registration.component.html',
  styleUrls: ['./kitchen-registration.component.css']
})
export class KitchenRegistrationComponent implements OnInit {

  public kitchenForm;
  kitchens;
  errorMsg;
  uf;
  nevcheck: boolean;

  constructor(private fb: FormBuilder, private kitchenService: KitchenService, private router: Router, public nav: NavService) { }

  ngOnInit(): void {
    this.nav.hide();
    this.kitchenForm = this.fb.group({
      workingDays: ['',[Validators.required]],
      workingTime: ['',[Validators.required]]
    })

  }

}
