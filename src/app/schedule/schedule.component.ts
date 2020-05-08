import { EveningEvent } from './../models/evening-event.interface';
import { ScheduleService } from './../services/schedule.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime , map, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  searchTerm = new FormControl();
  searchTerms$: Observable<string> = this.searchTerm.valueChanges;
  result: EveningEvent[] = [];

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.searchTerms$
    .pipe(
      debounceTime(1000),
      switchMap(word => this.scheduleService.srearch(word) ),
      tap(x => console.log('log info', x))
    )
    .subscribe(data => this.result = data);
  }

  reverse( word ) {
    return word.split('').reverse().join('');
  }

}
