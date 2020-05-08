import { EveningEvent } from './../models/evening-event.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Schedule } from '../models/schedule.interface';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private client: HttpClient) {}

  srearch(term): Observable<EveningEvent[]> {

    return this.client
              .get<Schedule>('assets/schedules.json')
              .pipe(
                tap(res => console.log('res', res)),
                map(res => res.events.filter(x => x.title.indexOf(term) > -1)),
                tap( x => console.log('filterEvents', x))
              );
  }
}
