import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { TransactionsPage } from '../transactions/transactions';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TransactionsPage; // camibado el home 
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
