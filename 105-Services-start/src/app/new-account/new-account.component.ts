import { Component } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => {
        alert('New Status: ' + status)
      }
    )
  }

  onCreateAccount(accountName: string, accountStatus: string) {

    this.accountsService.onAccountAdded({
      name: accountName,
      status: accountStatus
    });
    // this.loggingService.logStatusChange(accountStatus);

  }
}
