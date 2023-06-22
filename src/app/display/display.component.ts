import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent {
  @Input('chunk') chunk!: {
    title: string;
    list: { question: string; answer: string }[];
    mode: string;
  };
  answers: string[] = [];
  passExam: null | boolean = null;

  checkAnswers() {
    this.passExam = this.chunk.list.every(
      (item, index) => item.answer === this.answers[index]
    );
  }
}