import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
class props{
  name:string;
  dob:string;
  addr:string;
}
@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  jsonData:props[];
  name:string;
  dob:string;
  addr:string;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      Name: ['', Validators.required],
      DateofBirth: ['', Validators.required],
      address: ['', [Validators.required]],
  });
  }
  get f() { 
    return this.registerForm.controls; }


  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
//       this.name=this.formBuilder.control['Name'].value;
// this.dob=this.formBuilder.control['DateofBirth'].value;;
// this.addr=this.formBuilder.control['address'].value;;
this.jsonData=[{name:this.name,dob:this.dob,addr:this.addr}];
      console.log(JSON.stringify(this.jsonData))

      alert('SUCCESS!')
  }

}
