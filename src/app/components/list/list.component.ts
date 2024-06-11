import { Component } from '@angular/core';
import { ItemListComponent } from '../item-list/item-list.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemListComponent, FormComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  cities: any[] = [


  ]

  addCity(city : any){

    this.cities.push(city);

  }
}
