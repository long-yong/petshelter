
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PetComponent } from './pet/pet.component';
import { NewpetComponent } from './pet/newpet/newpet.component';
import { DetailComponent } from './pet/detail/detail.component';
import { EditpetComponent } from './pet/editpet/editpet.component';


@NgModule({
  declarations: [

    AppComponent,

    PetComponent,
    NewpetComponent,
    DetailComponent,
    EditpetComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
  ],

  providers: [HttpService],
  
  bootstrap: [AppComponent]

})
export class AppModule { }
