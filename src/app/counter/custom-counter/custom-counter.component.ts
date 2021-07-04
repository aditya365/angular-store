import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent implements OnInit {

  value: number;
  constructor(private store: Store<{ counter: CounterState }>) { }

  ngOnInit(): void {

  }

  onAdd() {
    this.store.dispatch(customIncrement({ incrementValue: +this.value }))
  }

}
