import { Food } from './../models/food.interface';
import { QuickLunchService } from './../services/quick-lunch.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.scss']
})
export class MainDashComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'burgers', cols: 1, rows: 1, id: 'brg' },
          { title: 'galettes', cols: 1, rows: 1, id: 'glt' },
          { title: 'Pizzas', cols: 1, rows: 1, id: 'pzz' }
        ];
      }

      return [
          { title: 'burgers', cols: 2, rows: 1, id: 'brg' },
          { title: 'galettes', cols: 2, rows: 1, id: 'glt' },
          { title: 'Pizzas', cols: 2, rows: 1, id: 'pzz' }
      ];
    })
  );

  burgers: Food[];
  pizzas: Food[];
  galettes: Food[];

  constructor(private breakpointObserver: BreakpointObserver, private qls: QuickLunchService) {}

  ngOnInit() {
    this.burgers = this.qls.getBurgers();
    this.pizzas = this.qls.getPizza();
    this.galettes = this.qls.getGalettes();
  }
}
