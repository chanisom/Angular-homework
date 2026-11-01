import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {
  email = '';
  isHovering = false;
  hebrewChars = [
  'ת', 'ץ', 'ף',
  '/', "'", 'ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ',
  'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך',
  'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ'
];

englishChars = [
  ',', '/', ';',
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
  'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
  'z', 'x', 'c', 'v', 'b', 'n', 'm'
];


  onHover() {
    this.isHovering = true;
  }
  onLeave() {
    this.isHovering = false;
  }
  
  changeToEnglish(event: KeyboardEvent) {
    this.email = [...this.email].map(char => {
      const index = this.hebrewChars.indexOf(char);
      return index === -1 ? char : this.englishChars[index];
    }).join('');
  }
  isEnter = false;
  EnterClick(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.isEnter = true;
    } 
}
end(){
  this.email = this.email + '@gmail.com';
}
}
