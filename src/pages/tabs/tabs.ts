import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ListaServiciosComponent } from '../listaServicios/listaServicios.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListaServiciosComponent;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
