import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ClassComponent } from './class/class.component';
import { ResourcesComponent } from './resources/resources.component';
import { LearningPlanComponent } from './learning-plan/learning-plan.component';
import { ChatComponent } from './chat/chat.component';
import { SettingComponent } from './setting/setting.component';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavbarComponent,
    DashboardComponent,
    HomeComponent,
    ClassComponent,
    ResourcesComponent,
    LearningPlanComponent,
    ChatComponent,
    SettingComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
