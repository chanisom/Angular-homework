import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Grade {
  subject: string;
  score: number;
}

@Component({
  selector: 'app-grades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grades.component.html',
  styleUrl: './grades.component.css'
})
export class GradesComponent {
array: Grade[] = [
  { subject: 'Math', score: 85 },
  { subject: 'Science', score: 50 },
  { subject: 'English', score: 78 },
  { subject: 'History', score: 88 },
  { subject: 'Art', score: 58 }
];

trackGrade(index: number, grade: Grade) {
  return grade.subject;
}

getAverage() {
  const total = this.array.reduce((sum, grade) => sum + grade.score, 0);
  return (total / this.array.length).toFixed(2);
}
}
