import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import * as data from '../../assets/data/catalog-data.json';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root',
})
export class FormValueService {

  public data: any = [];
  public cap: any = data[0];
  public plant: any = data[1];

    // loading data from service
  constructor(private api: ApiService) {
    this.api.getData()
    .subscribe(data => {
      this.data = data;
      console.log(this.data)
    });
  }

  public searched_value: string = '';
  public product_id: string = '';
  public type: string = '';
  public isNavBars: boolean = true;

  // maintaining searched_value
  public subject = new Subject<any>();
  private searchedValueSource = new BehaviorSubject(this.searched_value);
  currentValue = this.searchedValueSource.asObservable();

  // observing the value of searched_value
  changeMessage(value: string) {
    this.searchedValueSource.next(value);
    this.searched_value = value;

    // setting the product type
    if (
      this.searched_value === 'hats' ||
      this.searched_value === 'caps' ||
      this.searched_value === 'hat' ||
      this.searched_value === 'cap'
    ) {
      this.type = 'cap';
    } else if (
      this.searched_value === 'plants' ||
      this.searched_value === 'plant'
    ) {
      this.type = 'plants';
    }
  }

  // setting the product ID
  setProductId(value: string) {
    this.product_id = value;
  }

  // maintaining the product ID
  private prodIdSource = new BehaviorSubject(this.product_id);
  currentProdId = this.prodIdSource.asObservable();

  // observing the value of product ID
  changeID(value: string) {
    this.prodIdSource.next(value);
    this.product_id = value;
  }

  // hiding navbar in ar/vr
  private navBarSource = new BehaviorSubject(this.isNavBars);
  currentNavbar = this.navBarSource.asObservable();

  // observing the value of searched_value
  hideNavBar(value: boolean) {
    this.navBarSource.next(value);
    this.isNavBars = value;
    console.log(this.isNavBars);
  }
}
