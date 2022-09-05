import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ClassComponent } from './class/class.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LearningPlanComponent } from './learning-plan/learning-plan.component';
import { ResourcesComponent } from './resources/resources.component';
import { SettingComponent } from './setting/setting.component';



const routes: Routes = [
 
  {path:"",redirectTo:"dashboard",pathMatch:"full"},
  {path:"dashboard",component:DashboardComponent},
  {path:"class",component:ClassComponent},
  {path:"resources",component:ResourcesComponent},
  {path:"learningPlan",component:LearningPlanComponent},
  {path:"chat",component:ChatComponent},
  {path:"setting",component:SettingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
