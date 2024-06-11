import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from '../list/list.component';
import { ItemListComponent } from '../item-list/item-list.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  @Output() cityEvent = new EventEmitter<any>();

  mForm = this.fb.group({

      name: [""],
      country: [""],
      month: [""]

  })
  constructor(private fb: FormBuilder){

  }
  sendForm(){

    this.cityEvent.emit(this.mForm.value)

    this.mForm.patchValue({

      name: "",
      country: "",
      month: ""
    })

  }
}


