import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WorkerDashboardComponent } from './dashboard/worker-dashboard/worker-dashboard.component';
import { DashboardComponent } from './dashboard/workerDashboard/dashboard/dashboard.component';
import { HistoryComponent } from './dashboard/workerDashboard/history/history.component';
import { RequestsComponent } from './dashboard/workerDashboard/requests/requests.component';
import { SettingsComponent } from './dashboard/workerDashboard/settings/settings.component';
import { HomeComponent } from './home/home.component';
import { PdpViewComponent } from './pdp-view/pdp-view.component';
import { SearchFilterPageComponent } from './search-filter-page/search-filter-page.component';

const routes: Routes = [{path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'pdpView/:id',component:PdpViewComponent},
  {path:'searchPage',component:SearchFilterPageComponent},
  {path:'dashboard-worker',component:WorkerDashboardComponent,
  children:[
    {path:'',component:DashboardComponent},
    {path:'requests',component:RequestsComponent},
    {path:'history',component:HistoryComponent},
    {path:'settings',component:SettingsComponent},

  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
