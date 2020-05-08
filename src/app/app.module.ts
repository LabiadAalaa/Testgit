import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { CarteComponent } from './carte/carte.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ContactComponent } from './contact/contact.component';
import { MainDashComponent } from './main-dash/main-dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { DishTableComponent } from './dish-table/dish-table.component';
import { MatTableModule } from '@angular/material/table';
import {
   MatDatepickerModule,
   MatFormFieldModule,
   MatNativeDateModule,
  MatInputModule,
  MAT_DATE_LOCALE,
  MatSelectModule} from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScheduleComponent } from './schedule/schedule.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '' , component: HomeComponent}, // localHost:4200
  {path: 'Carte', component : CarteComponent},  // localHost:4200/Carte
  {path: 'Reserve', component : ReserveComponent}, // localHost:4200/Reserve
  {path : 'Contact', component : ContactComponent}, // localHost:4200/Contact
  {path : 'Schedule', component : ScheduleComponent}  // localHost:4200/Schedule
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    CarteComponent,
    ReserveComponent,
    ContactComponent,
    MainDashComponent,
    DishTableComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDatepickerModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSortModule
  ],
  providers: [{provide: MAT_DATE_LOCALE , useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
