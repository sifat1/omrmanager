import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetOmrdata } from '../service/get-omrdata';
import { Questions } from '../service/get-omrdata'; 

@Component({
  selector: 'app-edit-omr',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './edit-omr.html',
  styleUrl: './edit-omr.css'
})


export class EditOmr {

questions: Questions[] = [];

updateform() {
throw new Error('Method not implemented.');
}

  constructor(private getOmrdata: GetOmrdata) {}

  ngOnInit() {
    this.questions = this.getOmrdata.GetQuestions();
    if (!this.questions || this.questions.length === 0) {
      this.questions = [
        { title: 'No questions available', options: { A: false, B: false, C: false, D: false } }
      ];
    }
  }
}
