import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styles: [
  ]
})
export class FilterInputComponent implements OnInit, OnDestroy {
  @Input() placeHolder = '';
  @Input() help = '';
  @Input() debounceInput = 300;
  @Input() minValue = 0;
  @Output() changeSearch = new EventEmitter();
  searchInput$ = new Subscription();

  searchOrder: UntypedFormGroup = this.formBuilder.group({
    search: ['']
  });

  constructor(
    protected formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.onInitSearchInput();
  }

  ngOnDestroy(): void {
    this.searchInput$.unsubscribe();
  }

  onInitSearchInput(): void {
    this.searchInput$ = this.searchOrder.valueChanges.pipe(
      debounceTime(this.debounceInput),
      filter(
        value => value.search.length >= this.minValue || !value.search.length
      ),
      distinctUntilChanged(),
      switchMap(value => this.filterEmitter(value.search))
    )
    .subscribe();
  }

  filterEmitter($event: string): Observable<any> {
    this.changeSearch.emit($event);
    return of($event);
  }

}
