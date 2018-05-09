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


//Factories Import

//services Import
import { DomainsService } from './domains.service';
import { ContactsService } from './contacts.service';
import { UsersService } from './users.service';
import { ProjectService } from './project.service';

//Component Import
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DomainsComponent } from './domains/domains.component';
import { DomainComponent } from './domain/domain.component';
import { DomainJobsComponent } from './domain-jobs/domain-jobs.component';
import { DomainContactsComponent } from './domain-contacts/domain-contacts.component';
import { DomainRedirectionComponent } from './domain-redirection/domain-redirection.component';
import {DomainHeaderComponent } from './domain-header/domain-header.component';
import { DomainDashboardComponent } from './domain-dashboard/domain-dashboard.component';
// import { DomainNewComponent } from './domain-new/domain-new.component';
import { DomainEditComponent } from './domain-edit/domain-edit.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AccountComponent } from './account/account.component';
import { UsersComponent } from './users/users.component';
import { SubAccountsComponent } from './sub-accounts/sub-accounts.component';
import { AccountHeaderComponent } from './account-header/account-header.component';
import { BasicDataComponent } from './basic-data/basic-data.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { SubNewComponent } from './sub-new/sub-new.component';
import { NotfoundComponent } from './notfound/notfound.component';

//guards 
import { AuthGuard } from './authguard.guard';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';
import { DevelopersComponent } from './developers/developers.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';


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
}
,{
  path:'dashboard',canActivate:[AuthGuard],
	component:DashboardComponent,
  children:[
{
  path:'contacts',
  component:ContactsComponent
},{
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
}
,{
   path:'account',
   component:AccountComponent,
   children:[
  {path:'', redirectTo:'users/new', pathMatch:'full'},
  {path:'basicData', component:BasicDataComponent},
  {path:'settings', component:AccountSettingsComponent},
  {path:'users', component:UsersComponent},
  {path:'newUser', component:UserNewComponent},
  {path:'details/:id', component:UserDetailsComponent},
  {path:'subAccounts', component:SubAccountsComponent},
  {path:'newSub', component:SubNewComponent},]
  
},{
  path:'domains',
  component:DomainsComponent,
  children:[
   { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
   { path: 'login', component: LoginComponent,data:{route:'dashboard'}},
   { path: 'dashboard', component: DomainDashboardComponent,data:{route:'dashboard'}},
   { path: 'domain', component: DomainComponent,data:{route:'domain'} },
  //  { path: 'new', component: DomainNewComponent,data:{route:'domain New'} },
   { path: 'Edit', component: DomainEditComponent,data:{route:'domain Edit',id:'111'} },
   { path: 'jobs', component: DomainJobsComponent,data:{route:'jobs'} },
   { path: 'contacts', component: DomainContactsComponent,data:{route:'contacts'} },
   { path: 'redirections', component: DomainRedirectionComponent,data:{route:'redirections'} }
   ]},
   {
  path:'',
  redirectTo:'home',
  pathMatch:'full'
},
 ] //closing Dashboards Child
}//closing dashboard

];//closing routes

//Declaring All modules
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent, 
    DomainsComponent, /*starting domain Components*/
    DomainComponent,
    DomainHeaderComponent,
    DomainJobsComponent,
    DomainContactsComponent,
    DomainDashboardComponent,
    DomainRedirectionComponent,
    // DomainNewComponent,
    DomainEditComponent,
    UserNewComponent,
    UserDetailsComponent,
    AccountComponent,
    AccountHeaderComponent,
    BasicDataComponent,
    UsersComponent,
    AccountSettingsComponent,
    SubAccountsComponent,
    SubNewComponent,
    NotfoundComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    LandingComponent,
    ProjectComponent,
    TaskComponent,
    DevelopersComponent,
  
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    HttpModule,
    FormsModule,
    CookieModule.forRoot(),
    Ng2SearchPipeModule

  ],
  providers: [ContactsService, DomainsService, UsersService,AuthGuard,ProjectService,
   // {
   //          provide: Http,
   //          useFactory: httpFactory,
   //          deps: [XHRBackend, RequestOptions]
   //      }
        ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
