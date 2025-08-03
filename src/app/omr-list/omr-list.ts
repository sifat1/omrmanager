import { Component } from '@angular/core';
import { GetOmrdata } from '../service/get-omrdata';

@Component({
  selector: 'app-omr-list',
  imports: [],
  templateUrl: './omr-list.html',
  styleUrl: './omr-list.css',
  providers: [GetOmrdata]
})
export class OmrList {
  constructor(private getomrdata: GetOmrdata) {}

  omrList: { id: number; title: string }[] = [];

  ngOnInit() {
    this.omrList = this.getomrdata.getOmrList();
  }
}
