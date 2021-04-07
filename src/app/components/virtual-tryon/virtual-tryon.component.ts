import { Component, OnInit } from '@angular/core';
import { FormValueService } from 'src/app/services/data.service';

@Component({
  selector: 'app-virtual-tryon',
  templateUrl: './virtual-tryon.component.html',
  styleUrls: ['./virtual-tryon.component.css'],
})
export class VirtualTryonComponent implements OnInit {
  type: string;
  selectedType: any;
  product: any;
  product_id: string;
  isNavBars: boolean = false;
  showContent: boolean = false;

  constructor(private formValueService: FormValueService) {}

  ngOnInit(): void {
    this.product_id = this.formValueService.product_id;
    // fetching the type of the product
    this.type = this.formValueService.type;

    // fetching data based on product type
    if (this.type === 'cap') {
      this.selectedType = this.formValueService.cap;
    } else if (this.type === 'plants') {
      this.selectedType = this.formValueService.plant;
    }

    if (this.selectedType) {
      // setting the product
      this.selectedType.products.forEach((element) => {
        if (element.id == this.product_id) {
          this.product = element;
        }
      });
      this.showContent = true;
    }
    // this.hideNavBar();
  }

  hideNavBar(): void {
    this.formValueService.hideNavBar(this.isNavBars);
    console.log(this.isNavBars);
  }
}
