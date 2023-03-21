import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.scss'],
})
export default class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  constructor() {}

  ngOnInit() {
    this.debouncer
    .pipe(
      debounceTime(300))
      .subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  // teclaPress(event: any){
  //   const valor = event.target.value;
  //   console.log(valor);
  //   console.log(this.termino)
  // }

  teclaPress() {
    this.debouncer.next(this.termino);
  }
}
