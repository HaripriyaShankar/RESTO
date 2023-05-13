import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css'],
})
export class UpdateRestoComponent {
  alert: boolean = false;
  editResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });
  constructor(private router: ActivatedRoute, private resto: RestoService) {}

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id']);
    this.resto
      .getCurrentResto(this.router.snapshot.params['id'])
      .subscribe((value: any) => {
        console.warn('value', value);
        this.editResto = new FormGroup({
          name: new FormControl(value['name']),
          email: new FormControl(value['address']),
          address: new FormControl(value['email']),
        });
      });
  }
  collection() {
    console.warn(this.editResto.value);
    this.resto
      .updateResto(this.router.snapshot.params['id'], this.editResto.value)
      .subscribe((value) => {
        console.warn(value);
      });
    this.alert = true;
  }
  closeAlert() {
    this.alert = false;
  }
}
