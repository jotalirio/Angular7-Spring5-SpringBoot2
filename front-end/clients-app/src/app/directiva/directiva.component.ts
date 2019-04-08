import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  public courseList: string[] = null;
  public enable: boolean = true;

  constructor() {
    this.courseList = ['Typescript', 'Javascript', 'Java SE', 'C#', 'PHP'];
   }

  ngOnInit() {
  }

  public setEnable(): void {
    this.enable = (this.enable) ? false : true;
  }
}
