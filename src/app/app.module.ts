
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './steen/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './steen/header/header.component';
import { HeadshotCardComponent } from './steen/header/headshot-card/headshot-card.component';
import { MatCardModule } from '@angular/material/card';
import { TextCardComponent } from './steen/header/text-card/text-card.component';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { MainContentComponent } from './steen/home/main-content/main-content.component';
import { ContactComponent } from './steen/contact/contact.component';
import { MatListModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const ROUTES = [
  { path: 'home', component: MainContentComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent }
 
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeadshotCardComponent,
    TextCardComponent,
    MainContentComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    RouterModule.forRoot(ROUTES),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
