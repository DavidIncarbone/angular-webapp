import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Firebase } from '../../services/firebase';

@Component({
  selector: 'app-page2',
  imports: [MatCardModule, NgFor],
  templateUrl: './page2.html',
  styleUrl: './page2.css',
})
export class Page2 implements OnInit {
  data!: any;

  constructor(protected firebase: Firebase) {}

  ngOnInit(): void {
    this.firebase.getData(this.firebase.url).subscribe((data: any) => {
      this.data = Object.keys(data).map((key) => {
        data[key]['id'] = key;
        return data[key];
      });
    });
  }
}
