import { Injectable } from '@angular/core';
import { AccountDetails } from '../models/account-details.model';

@Injectable({
  providedIn: 'root'
})
export class AccountDetailsService {

  constructor() { }

  getAccountDetails(): AccountDetails[] {
    // tslint:disable-next-line:prefer-const
    let accountDetails: AccountDetails[] = [];
    accountDetails.push(<AccountDetails>{
      accountId: 1,
      accountName: 'AAA - 029',
      availableCash: 39160334.42,
      percentChange: -.07,
      amountChange: 31435.87
    });
    accountDetails.push(<AccountDetails>{
      accountId: 2,
      accountName: 'IRA - 0146',
      availableCash: 15884302.39,
      percentChange: .03,
      amountChange: 7430.83
    });
    accountDetails.push(<AccountDetails>{
      accountId: 3,
      accountName: 'AAA - 1812',
      availableCash: 2010926.10,
      percentChange: -.21,
      amountChange: 38881.63
    });
    accountDetails.push(<AccountDetails>{
      accountId: 4,
      accountName: 'REG - 2019',
      availableCash: 13465679.34,
      percentChange: .00,
      amountChange: 0
    });
    accountDetails.push(<AccountDetails>{
      accountId: 5,
      accountName: 'AAA - 3810',
      availableCash: 1050054.07,
      percentChange: .07,
      amountChange: 8916.69
    });
    accountDetails.push(<AccountDetails>{
      accountId: 6,
      accountName: 'IRA - 5200',
      availableCash: 5763.36,
      percentChange: -.08,
      amountChange: 8916.69
    });
    return accountDetails;
  }
}
