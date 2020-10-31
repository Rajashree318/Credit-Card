import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'creditCard';
  input1: any;
  input2: any;
  input3: any;
  input4: any;
  constructor() { }
  ngOnInit() {
  }
  onInputEntry(event, prevInput, nextInput) {
    let input = event.target;
    let length = input.value.length;
    let maxLength = input.attributes.maxlength.value;
    let inputType = event.inputType;
    if (length >= maxLength) {
      if (nextInput) {
        nextInput.focus();
      }
    }
    if (inputType === "deleteContentBackward") {
      if (prevInput) {
        if (length == 0) {
          prevInput.focus();
        }
      }
    }
  }
  onPaste(event, nextInput) {
    let clipboardData = event.clipboardData;
    let pastedText = clipboardData.getData('text');
    let pasteData = pastedText.match(/.{1,4}/g);
    if (pasteData.length > 0) {
      pasteData.forEach((element, i) => {
        if (i == 0) {
          this.input1 = element
        }
        if (i == 1 ) {
          this.input2 = element
        }
        if (i == 2) {
          this.input3 = element
        }
        if (i == 3) {
          this.input4 = element
        }
      });
    }
    nextInput.focus();
  }
}



