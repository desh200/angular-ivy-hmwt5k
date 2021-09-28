import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StarComponent } from './star.component';
import {StarFillComponent} from './starfill.component';
import {RatingComponent} from './rating.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, StarComponent,StarFillComponent,RatingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
