import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PensionDetailsService } from 'src/app/service/pension-details/pension-details.service';
import { PensionerInputService } from 'src/app/service/pensioner-input/pensioner-input.service';

@Component({
  selector: 'app-pension-details',
  templateUrl: './pension-details.component.html',
  styleUrls: ['./pension-details.component.css']
})
export class PensionDetailsComponent implements OnInit {


  aadhaarNumber: number;
  pensionAmount: number;
  bankServiceCharge: number;
  invalidPensionDetails: boolean;

  constructor(
    private pensionerInputService: PensionerInputService,
    private pensionDetailsService: PensionDetailsService,
    private router: Router
  ) { }

  ngOnInit(): void {

    console.log('START - ngOnInit() of PensionDetailsComponent');

    this.aadhaarNumber = this.pensionerInputService.getAadhaarNumber();
    this.pensionDetailsService.getPensionDetails(this.aadhaarNumber).subscribe(
      pensionDetails => {
        this.pensionAmount = pensionDetails.pensionAmount;
        this.bankServiceCharge = pensionDetails.bankServiceCharge;
        if (this.pensionAmount === 0 && this.bankServiceCharge === 0) {
          this.invalidPensionDetails = true;
        }
        else {
          this.invalidPensionDetails = false;
        }
      }
    );



    console.log('END - ngOnInit() of PensionDetailsComponent');

  }

  OnClickingBack() {
    this.router.navigate(['calculatePension']);
  }

  onLogout() {
    this.router.navigate(['logout']);
  }



}
