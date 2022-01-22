import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BunnyComponent } from './bunny/bunny.component';
import { BunniesComponent } from './bunnies/bunnies.component';

@NgModule({
  declarations: [
    AppComponent,
    BunnyComponent,
    BunniesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
