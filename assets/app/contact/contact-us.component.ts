import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})

export class ContactusComponent {
  constructor(private router: Router) {}
  myForm: FormGroup;
  Edit: boolean = false;

  onSubmit() {
    this.myForm.reset();
  }

}