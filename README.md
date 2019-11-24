
![alt](https://user-images.githubusercontent.com/57636419/69494148-f72cbc00-0ef2-11ea-9ccf-a5410b4cd474.JPG)

<b>1. form.component.ts</b>

     import { Component, OnInit } from '@angular/core';
     import { FormArray, FormGroup, FormBuilder } from '@angular/forms';

     @Component({ selector:'app-form', templateUrl:'./form.component.html', styleUrls:['./form.component.scss'] })
     
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
     
     
<b>2. form.component.html</b>

     <div class="container" style="margin-top: 6%;">
        <div class="row justify-content-center">
           <div class="col-5">
           
              <form novalidate [formGroup]="formRegister">
                 <div class="card">
                    <div class="card-header">Sample Form</div>
                    <div class="card-body">
                       <div class="form-group" formGroupName="name">
                          <label>Name</label>
                          <div class="row">
                             <div class="col-6"><input type="text" class="form-control" placeholder="First" formControlName="first"></div>
                             <div class="col-6"><input type="text" class="form-control" placeholder="Last" formControlName="last"></div>
                          </div>
                       </div>
                       <div class="form-group">
                          <label>Email</label>
                          <input type="email" class="form-control" placeholder="you@mail.com" formControlName="email">
                       </div>
                       <div class="form-group" formGroupName="phone">
                          <label>Phone</label>
                          <div class="input-group">
                             <div class="input-group-prepend"><span class="input-group-text">+60</span></div>
                             <input type="number" class="form-control" placeholder="Mobile" formControlName="mobile">
                          </div>
                       </div>
                    </div>
                 </div>
              </form>
              
              <div class="form-group">
                 <label>Skills</label>
                 <div class="skill">
                    <input type="text" class="form-control" [(ngModel)]="newskill">
                    <button (click)="newtag()">Submit</button>
                 </div>
                 <small class="form-text text-info"><b>Note:</b> Transform this input into a custom tagging input.</small>
                 <div class="tags">
                    <div *ngFor="let skill of formRegister.get('skills').controls; let i=index;" class="outer">
                       <div class="list">{{skill.value}}&nbsp;&nbsp;
                          <button type="button" class="close" aria-label="Close" (click)="delete(i)"><span aria-hidden="true">×</span></button>
                       </div>
                    </div>
                 </div>
              </div>
              
           </div>
              
           <div class="col-5">
              <div class="bg-light p-3 h-100 rounded">
                 <pre class="mb-0">{{ formRegister.value | json }}</pre>
              </div>
           </div>
          <iv>
  </div>
  


--------------------------------------------------------------------------------------------------


# ReactiveForm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
