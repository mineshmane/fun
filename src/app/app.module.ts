import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { DisplaynoteComponent } from './components/displaynote/displaynote.component';
import {MatCardModule} from '@angular/material/card';
import { IonsComponent } from './components/ions/ions.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CommonDisplaynotesComponent } from './components/common-displaynotes/common-displaynotes.component';
import { FilternotePipe } from './customPipe/filterNotelistPipe/filternote.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    CreateNoteComponent,
    DisplaynoteComponent,
    IonsComponent,
    GetallnotesComponent,
    FilterPipe,
    CommonDisplaynotesComponent,
    FilternotePipe
  ],
  imports: [
    BrowserModule,MatSidenavModule,MatListModule,MatIconModule,MatCardModule,
    AppRoutingModule,MatButtonModule,MatToolbarModule,
    BrowserAnimationsModule,MatFormFieldModule,MatInputModule,FormsModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
