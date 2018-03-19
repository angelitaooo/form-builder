import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  inputSelected = false;
  radioSelected = false;
  checkboxSelected = false;
  selectSelected = false;

  selectInput() {
    this.showInput();
  }
  selectRadio() {
    this.showRadio();
  }
  selectCheckbox() {
    this.showCheckbox();
  }
  selectSelect() {
    this.showSelect();
  }

  private showRadio() {
    this.radioSelected = true;
    this.inputSelected = false;
    this.checkboxSelected = false;
    this.selectSelected = false;
  }

  private showInput() {
    this.inputSelected = true;
    this.radioSelected = false;
    this.checkboxSelected = false;
    this.selectSelected = false;
  }
  private showCheckbox() {
    this.inputSelected = false;
    this.radioSelected = false;
    this.checkboxSelected = true;
    this.selectSelected = false;
  }
  private showSelect() {
    this.inputSelected = false;
    this.radioSelected = false;
    this.checkboxSelected = false;
    this.selectSelected = true;
  }
}
