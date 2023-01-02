import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PensionerInputService {

  aadhaarNumber:number;

  constructor() { }

  setAadhaarNumber(aadhaarNumber:number){
    console.log('START - setAadhaarNumber() of PensionerInputService');
    console.log('Aadhaar Number from setAadhaarNumber() : ',aadhaarNumber);
    this.aadhaarNumber=aadhaarNumber;

    console.log('END - setAadhaarNumber() of PensionerInputService');

  }

  getAadhaarNumber():number{
    console.log('START - getAadhaarNumber() of PensionerInputService');
    console.log('Aadhaar Number from getAadhaarNumber() : ',this.aadhaarNumber)
    console.log('END - getAadhaarNumber() of PensionerInputService');
    return this.aadhaarNumber;
  }
}
