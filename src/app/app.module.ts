import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgForm } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';
import { BooksComponent } from './components/books/books.component';
import { SearchComponent } from './components/search/search.component';
import { EditBookComponent } from './modal/edit-book/edit-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VehicleComponent } from './vehicle/vehicle.component';
import { QuarterComponent } from './quarter/quarter.component';
import { Editbook1Component } from './modal/editbook1/editbook1.component';
import { Home1Component } from './details/home1/home1.component';
import { Book1Component } from './details/book1/book1.component';
import { Books1Component } from './details/books1/books1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FileuComponent } from './components/fileu/fileu.component';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { TimetableComponent } from './components/timetable/timetable.component';
import { RegisterComponent } from './components/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    BooksComponent,
    SearchComponent,
    EditBookComponent,
    VehicleComponent,
    QuarterComponent,
    Editbook1Component,
    Home1Component,
    Book1Component,
    Books1Component,
    NavbarComponent,
    LandingComponent,
    LoginComponent,
    FileuComponent,
    TimetableComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
