import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { OrganiserdebatComponent } from './organiserdebat/organiserdebat.component';
import { TousdebatsComponent } from './tousdebats/tousdebats.component';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'; 
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatRadioModule } from '@angular/material/radio';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    OrganiserdebatComponent,
    TousdebatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
