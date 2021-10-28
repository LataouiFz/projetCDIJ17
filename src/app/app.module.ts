import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'; 
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatRadioModule } from '@angular/material/radio'; 

import { ForumsService } from './services/forums.service';

import { Debats } from './Models/Debats';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { MenuBareComponent } from './menu-bare/menu-bare.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForumComponent } from './forum/forum.component';
import { TestComponent } from './test/test.component';
import { FormFComponent } from './form-f/form-f.component';
import { CmpDebatComponent } from './cmp-debat/cmp-debat.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuBareComponent,
    ForumComponent,
    TestComponent,
    FormFComponent,
    CmpDebatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [ForumsService,Debats],
  bootstrap: [AppComponent]
})
export class AppModule { }
