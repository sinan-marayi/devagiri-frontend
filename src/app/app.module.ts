import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileCreationComponent } from './components/profile-creation/profile-creation.component';
import { WorkerListingComponent } from './dashboard/userDashboard/worker-listing/worker-listing.component';
import { HistoryComponent } from './dashboard/userDashboard/history/history.component';
import { SettingsComponent } from './dashboard/userDashboard/settings/settings.component';
import { DashboardComponent } from './dashboard/workerDashboard/dashboard/dashboard.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SearchFilterPageComponent } from './search-filter-page/search-filter-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ProfileCreationComponent,
    WorkerListingComponent,
    HistoryComponent,
    SettingsComponent,
    DashboardComponent,
    CategoriesComponent,
    SearchFilterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
