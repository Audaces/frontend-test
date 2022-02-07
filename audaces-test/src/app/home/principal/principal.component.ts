import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Test } from '../shared/test.class';
import { TestService } from '../shared/test.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  formTest!: FormGroup;
  formTarget!: FormGroup;
  error = false;

  constructor(private formBuilder: FormBuilder, private testService: TestService) { }

  ngOnInit(): void {
    this.createForm(new Test());
    this.createFormTarget();
  }

  createForm(test: Test) {
    this.formTest = new FormGroup({
      "number1": new FormControl(test.number1),
      "number2": new FormControl(test.number2),
      "number3":new FormControl(test.number3),
      "number4": new FormControl(test.number4),
      "target": new FormControl(test.target)
    })
  }
  createFormTarget(){
    this.formTarget = new FormGroup({
      "resp1": new FormControl({value: '', disabled: true}),
      "resp2": new FormControl({value: '', disabled: true}),
      "resp3": new FormControl({value: '', disabled: true}),
      "resp4": new FormControl({value: '', disabled: true}),
    })
  }
  limpar() {
    this.formTest.reset();
    this.formTarget.reset();
    this.error = false;
  }
  processarTeste(){
    let test = new Test();
    test = Object.assign(this.formTest.value);
    this.error = false;

    const lista = [test.number1, test.number2, test.number3, test.number4]
   
    let targetList = this.testService.validaTarget(lista, test.target);
    console.log(targetList);
    if (targetList.length === 4){
      this.formTarget.controls['resp1'].setValue(targetList[0]);
      this.formTarget.controls['resp2'].setValue(targetList[1]);
      this.formTarget.controls['resp3'].setValue(targetList[2]);
      this.formTarget.controls['resp4'].setValue(targetList[3]);
    } else {
      this.formTarget.reset();
      this.error = true;
    }
    
  }
}
