import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Flight } from "./flight";
import { PageService } from 'src/app/share/page.service'

@Component({
  selector: 'app-bookaflight',
  templateUrl: './bookaflight.component.html',
  styleUrls: ['./bookaflight.component.css']
})
export class BookaflightComponent implements OnInit {

  fillin !: Flight[];
  formfill !: FormGroup;
  newDate: Date;
  nowDate: Date;
  country = [
    { id: 1, named: "China" },
    { id: 2, named: "India" },
    { id: 3, named: "Japan" },
    { id: 4, named: "Turkey" },
    { id: 5, named: "Denmark" },
    { id: 6, named: "Sweden" },
    { id: 7, named: "Italy" }
  ];

  constructor(private fb: FormBuilder, private pagesv: PageService) {
    this.nowDate = new Date(Date.now())
    this.newDate = new Date(this.nowDate.toLocaleString('th-TH'))
    this.formfill = this.fb.group({
      fullName: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      type: ['', Validators.required],
      departure: ['', Validators.required],
      arrival: [''],
      adults: ['', [Validators.pattern("[0-9]*$"), Validators.required]],
      children: ['', Validators.pattern("[0-9]*$")],
      infants: ['', Validators.pattern("[0-9]*$")],

    });
    this.getFlight();
  }
  ngOnInit(): void {}
  onSubmit(f: Flight): void {
    this.pagesv.addFlight(f);
    this.formfill.reset()
  }
  getFlight() {
    this.fillin = this.pagesv.getFlight();
  }
}



