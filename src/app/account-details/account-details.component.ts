import { Component, OnInit } from '@angular/core';
import { AccountDetailsService } from './services/account-details.service';
import { AccountDetails } from './models/account-details.model';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.sass']
})
export class AccountDetailsComponent implements OnInit {

  accountDetails: AccountDetails[];
  cols: any[];
  initialLoad = 3;
  sortAsc = true;
  order = 'accountName asc';
  constructor(private accountDetailsService: AccountDetailsService,
    private orderPipe: OrderPipe) {
    console.log(this.orderPipe.transform(this.accountDetails, this.order));
  }

  ngOnInit() {
    this.accountDetails = this.accountDetailsService.getAccountDetails();
    this.cols = [
      { field: 'accountName', header: 'Account' },
      { field: 'availableCash', header: 'Available Cash' },
    ];
  }

  loadMore() {
    this.initialLoad = 0;
  }

  toggleSort() {
    this.sortAsc = !this.sortAsc;
    if (this.sortAsc) {
      this.accountDetails.sort((a, b) => a.accountName.localeCompare(b.accountName));
    } else {
      this.accountDetails.reverse();
    }
  }
}
