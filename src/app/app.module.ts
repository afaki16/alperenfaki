import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './definition/navbar/navbar.component';
import { EducationComponent } from './definition/education/education.component';
import { AboutComponent } from './definition/about/about.component';
import { ExperienceComponent } from './definition/experience/experience.component';
import { SkillsComponent } from './definition/skills/skills.component';
import { AwardsComponent } from './definition/awards/awards.component';
import { InterestsComponent } from './definition/interests/interests.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    AwardsComponent,
    InterestsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
