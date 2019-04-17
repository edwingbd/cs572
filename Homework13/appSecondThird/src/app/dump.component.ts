import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dump',
  template: `
    <p>
      dump works!
    </p>
    <h2>Name: {{person.name}} </h2>
    <h2>zipcode: {{person.zipcode}} </h2>
  `,
  styles: []
})
export class DumpComponent implements OnInit {
  @Input() person: { name: string, zipcode: number };
  constructor() { }

  ngOnInit() {
  }

}
