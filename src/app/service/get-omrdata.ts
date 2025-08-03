import { Injectable } from '@angular/core';

export interface Questions
{
  title : string;
  options : {
    A: boolean;
    B: boolean;
    C: boolean;
    D: boolean;
  };
}

export class Question{
  id: number;
  title : string;
  options : {
    A: boolean;
    B: boolean;
    C: boolean;
    D: boolean;
  };

  constructor(id: number,title: string, options: { A: boolean; B: boolean; C: boolean; D: boolean }) {
    this.id = id;
    this.title = title;
    this.options = options;
  }
}

@Injectable()
export class GetOmrdata {

  
  getOmrList()
  {
    return [
      { id: 1, title: 'OMR 1' },
      { id: 2, title: 'OMR 2' },
      { id: 3, title: 'OMR 3' }
    ];
  }


  getQuestions(numofquestion: number)
  {
    const questions: Question[] = [];

    for(let i=0; i<numofquestion; i++)
    {
      questions.push(new Question(i, "Question " + (i + 1), {A: false, B: false, C: false, D: false}));
    }
    return questions;
  }
}
