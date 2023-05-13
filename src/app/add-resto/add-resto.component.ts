import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoService } from '../resto.service';
@Component({ 
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css'],
})
export class AddRestoComponent {
  alert: boolean = false;
  addResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });
  constructor(private resto: RestoService) {}

  ngOnInit(): void {}
  collectResto() {
    console.warn(this.addResto.value);
    this.resto.saveData(this.addResto.value).subscribe((value) => {
      console.warn('result', value);
      this.alert = true;
      this.addResto.reset({});
    });
  }
  closeAlert() {
    this.alert = false;
  }
}
