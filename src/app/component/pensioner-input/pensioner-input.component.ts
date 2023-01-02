import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PensionerInputService } from 'src/app/service/pensioner-input/pensioner-input.service';
import {MatTableDataSource} from '@angular/material/table';
import { isTypeQueryNode } from 'typescript';

@Component({
  selector: 'app-pensioner-input',
  templateUrl: './pensioner-input.component.html',
  styleUrls: ['./pensioner-input.component.css']
})
export class PensionerInputComponent implements OnInit {

  calculatePension:FormGroup;
  invalidAadhaarNumber:boolean;
  

  constructor(
    private pensionerInputService:PensionerInputService,
    private router:Router
  ) { }

  ngOnInit() {

    console.log('START - ngOnInit() of PensionerInputComponent');

    this.calculatePension = new FormGroup({
      'aadhaarNumber': new FormControl(null,Validators.required)
    })

    console.log('END - ngOnInit() of PensionerInputComponent');
  }

  onCalculatePension(){

    console.log('START - onCalculatePension() of PensionerInputComponent');
    let aadhaarNumber = this.calculatePension.get('aadhaarNumber').value;
    if(aadhaarNumber!='' && aadhaarNumber.length ==12){
      this.invalidAadhaarNumber = false
      this.pensionerInputService.setAadhaarNumber(aadhaarNumber);
      this.router.navigate(['pensionDetails'])
    }
    else{
      this.invalidAadhaarNumber=true
    }
    
    console.log('END - onCalculatePension() of PensionerInputComponent');
  }
  
}


