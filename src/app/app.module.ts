import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicationsComponent } from './publications/publications.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EventsComponent } from './events/events.component';
import { HeaderComponent } from './events/header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecognitionComponent } from './recognition/recognition.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { ResearchComponent } from './research/research.component';
import { AcademicServiceComponent } from './academic-service/academic-service.component';
import { PhotoSlotComponent } from './shared/photo-slot/photo-slot.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkExperienceComponent,
    EventsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
    PublicationsComponent,
    NavbarComponent,
    RecognitionComponent,
    ProjectsComponent,
    EducationComponent,
    ResearchComponent,
    AcademicServiceComponent,
    PhotoSlotComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
