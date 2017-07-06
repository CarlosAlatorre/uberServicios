import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ServiceComponent } from '../service/service.component';

@Component({
  selector: 'page-listaServicios',
  templateUrl: 'listaServicios.component.html'
})
export class ListaServiciosComponent {

  items: FirebaseListObservable<any[]>;
  search:boolean = false;
  titleOfSearch:string = "Servicios"
  textOfSearch:string = "";
  mycolor:string = "#C8C8C8"
  rating:number = 3.5;


  constructor(public navCtrl: NavController, db: AngularFireDatabase) {
    this.items = db.list('/items');
  }
  
  openOrCloseSearchBar(){
    this.search = !this.search;
    
    if(this.search){
      this.textOfSearch = "";
    }
  }

  searchService(){
    this.titleOfSearch = this.textOfSearch;
  }

  openService(){
    this.navCtrl.push( ServiceComponent );
  }
}
