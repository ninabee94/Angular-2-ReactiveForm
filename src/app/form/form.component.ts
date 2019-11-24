import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public formRegister: FormGroup;
  newskill: string ;

  constructor(private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.formRegister = this.formBuilder.group({
      name: this.formBuilder.group({ first: '', last: '' }),
      email: '',
      phone: this.formBuilder.group({ mobile: '' }),
      skills: this.formBuilder.array(['skill 1', 'skill 2'])
    });
  }

  newtag(){  
    if( (this.newskill!="") ){
      const control = <FormArray>this.formRegister.get('skills');
      control.push(this.formBuilder.control(this.newskill));
      this.newskill="";
    }
  }

  delete(index:number){
    const control = <FormArray>this.formRegister.get('skills');
    control.removeAt(index);
  }

}
