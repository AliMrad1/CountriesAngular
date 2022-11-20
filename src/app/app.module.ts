import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CountriesComponent } from './countries/countries.component';
import { FormsModule } from '@angular/forms'
import { CountryService } from './Classes/CountryService';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AddCountryComponent } from './add-country/add-country.component';
import { MyInterceptor } from './Classes/MyInterceptor';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';

const routes:Routes=[
  {path:'',component:AppComponent,canActivate:[AuthGuard]},
  {path:'dashboard', component: DashboardComponent,outlet:'sidebar', canActivate:[AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'c3', component: C3Component,canActivate:[AuthGuard]},
  {path:'**',component: NotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    SearchbarComponent,
    CountriesComponent,
    AddCountryComponent,
    DashboardComponent,
    NotfoundComponent,
    LoginComponent,
    C1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CountryService,
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
