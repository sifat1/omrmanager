import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GetOmrdata, Questions } from '../service/get-omrdata'; 


@Component({
  selector: 'app-omr-settings',
  imports: [ReactiveFormsModule,FormsModule, CommonModule],
  templateUrl: './omr-settings.html',
  styleUrl: './omr-settings.css',
  providers: [GetOmrdata]
})

export class OmrSettings {
  constructor(private getdata: GetOmrdata) {}
  questionno = new FormControl(0);

  questions: Questions[] = [];

  enterQuestionSize()
  {
    const size = this.questionno.value ?? 0;
    this.questions = this.getdata.getQuestions(size);
  }
  
  submitQuestions() {
    console.log('Questions:', this.questions);
  }
}
