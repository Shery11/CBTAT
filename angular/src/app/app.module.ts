import { Component } from '@angular/core';
//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed! 

//services Import
import { UsersService } from './users.service';
import { ProjectService } from './project.service';

//Component Import
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';

//guards 
import { AuthGuard } from './authguard.guard';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';
import { DevelopersComponent } from './developers/developers.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { DeveloperProfileComponent } from './developer-profile/developer-profile.component';


import { NgxSpinnerModule } from 'ngx-spinner';


//setting up routes
const ROUTES = [
{
  path:'',
  redirectTo:'landing',
  pathMatch:'full'
},
{
  path:'landing',
 component:LandingComponent
},
 {
   path:'login',
  component:LoginComponent
},
{
  path:'register',
 component:RegisterComponent
},
{
  path:'dashboard',
  canActivate:[AuthGuard],
	component:DashboardComponent,
  children:[
{
  path:'home',
  component:HomeComponent,
},{
  path:'project/:id',
  component:ProjectComponent,
},{
  path:'project/:pid/:tid',
  component:TaskComponent,
},
{
  path: 'developers',
  component: DevelopersComponent
},
{
  path: 'userProfile/:did',
  component: UserProfileComponent
},
{
  path:'',
  redirectTo:'home',
  pathMatch:'full'
},
{
  path:'developerProfile',
  component: DeveloperProfileComponent
},
{
  path:'report/:rid',
  component: ReportPageComponent
}
 ] //closing Dashboards Child
}//closing dashboard

];//closing routes

//Declaring All modules
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent, 
    NotfoundComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    LandingComponent,
    ProjectComponent,
    TaskComponent,
    DevelopersComponent,
    UserProfileComponent,
    ReportPageComponent,
    DeveloperProfileComponent,
  
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    HttpModule,
    FormsModule,
    CookieModule.forRoot(),
    Ng2SearchPipeModule,
    NgxSpinnerModule

  ],
  providers: [UsersService,AuthGuard,ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
