import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public formRegister: FormGroup;
  newskill: string ;
  array_skill : any = ["creative"];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formRegister = this.formBuilder.group({
      name: this.formBuilder.group({ first: '', last: '' }),
      email: '',
      phone: this.formBuilder.group({ mobile: '' }),
      skills: this.formBuilder.array(['skill 1', 'skill 2'])
    });
  }

  item : FormArray;

  newtag(){  
    if( (this.newskill!="") ){
      this.array_skill.push(this.newskill);
    }
  }

  delete(index:number){
    this.array_skill.splice(index, 1);
  }

}
