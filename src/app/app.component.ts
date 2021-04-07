import { Component, OnInit } from '@angular/core';
import { FormValueService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'binary-beasts-myntra';

  isNavBars: boolean = true;

  constructor(private formValueService: FormValueService){}

  ngOnInit(): void {
    this.isNavBars = this.formValueService.isNavBars;
  }
}
