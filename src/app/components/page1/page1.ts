import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { AllFormsModule } from '../../modules/all-forms-module/all-forms-module';
import { Firebase } from '../../services/firebase';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  id?: string;
}

@Component({
  selector: 'app-page1',
  imports: [MatTableModule, CommonModule, AllFormsModule, MatIconModule],
  templateUrl: './page1.html',
  styleUrl: './page1.css',
})
export class Page1 implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
  // dataSource = ELEMENT_DATA;

  data: PeriodicElement[] = [];
  editingElementId: string | undefined = undefined;
  editedRow: PeriodicElement = {} as PeriodicElement;

  constructor(protected firebase: Firebase) {}

  ngOnInit(): void {
    this.getData();
  }

  saveEdit(id: string | undefined, form: NgForm) {
    this.firebase.patchData(this.firebase.url, id, form.value).subscribe((data) => {
      console.log(data);
      this.editingElementId = undefined;
    });
  }

  onDelete(id: string | undefined) {
    this.firebase.deleteData(this.firebase.url, id).subscribe(() => {
      this.getData();
    });
  }

  startEdit(id: string | undefined) {
    console.log('start');
    this.editingElementId = id;
  }

  closeEdit() {
    console.log('cancel');
    this.editingElementId = undefined;
  }

  getData() {
    this.firebase.getData(this.firebase.url).subscribe((data: any) => {
      console.log(data);
      this.data = Object.keys(data).map((key) => {
        data[key]['id'] = key;
        return data[key];
      });
    });
  }

  onAdd() {
    this.data.map((el) => {
      this.firebase.insertData(this.firebase.url, el).subscribe((data) => {
        this.getData();
      });
    });
  }
}
