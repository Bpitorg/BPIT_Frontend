import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { XHRBackend, RequestOptions, HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DomSanitizer} from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { Configuration } from './app.constants';
import { LoggedInGuard } from './login-guard';
import { LoggedInGuardP } from './login-guardP';
import { PnfComponent } from './pnf/pnf.component';
import { FootComponent } from './foot/foot.component';
import { ASbaComponent } from './sba/sba.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentsService } from './departments/departments.service';
import { AcComponent } from './departments/children/ac/ac.component';
import { AmComponent } from './departments/children/am/am.component';
import { ApComponent } from './departments/children/ap/ap.component';
import { MeComponent } from './departments/children/me/me.component';
import { huComponent } from './departments/children/hu/hu.component';

import { CseComponent } from './departments/children/cse/cse.component';
import { EceComponent } from './departments/children/ece/ece.component';
import { EeeComponent } from './departments/children/eee/eee.component';
import { ItComponent } from './departments/children/it/it.component';
import { BbaComponent } from './departments/children/bba/bba.component';
import { MbaComponent } from './departments/children/mba/mba.component';
import { DaboutComponent } from './departments/children/common/about/about.component';
import { DfpubsComponent } from './departments/children/common/fpubs/fpubs.component';
import { DlabComponent } from './departments/children/common/lab/lab.component';
import { DlessonPlanComponent } from './departments/children/common/lessonPlan/lessonPlan.component';
import { DnoticeComponent } from './departments/children/common/notice/notice.component';
import { DstudyMaterialComponent } from './departments/children/common/studyMaterial/studyMaterial.component';
import { DtimetableComponent } from './departments/children/common/timetable/timetable.component';
import { DfacultyComponent } from './departments/children/common/faculty/faculty.component';
import { DNewsComponent } from './departments/children/common/news/news.component';
import { DEventsComponent } from './departments/children/common/events/events.component';

import { DselfLearningComponent } from './departments/children/common/selfLearning/selfLearning.component';

import { SbaComponent } from './departments/children/sba/sba.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { FLibraryComponent } from './facilities/f-library/f-library.component';
import { FHostelComponent } from './facilities/f-hostel/f-hostel.component';
import { FMedComponent } from './facilities/f-med/f-med.component';
import { FBookComponent } from './facilities/f-book/f-book.component';
import { FSemhallComponent } from './facilities/f-semhall/f-semhall.component';
import { FSportsComponent } from './facilities/f-sports/f-sports.component';
import { FCanteenComponent } from './facilities/f-canteen/f-canteen.component';
import { FEduComponent } from './facilities/f-edu/f-edu.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { StudentComponent } from './student/student.component';
import { PlacementsComponent } from './placements/placements.component';
import { AProfileComponent } from './about/children/a-profile/a-profile.component';
import { ATrustComponent } from './about/children/a-trust/a-trust.component';
import { AVmComponent } from './about/children/a-vm/a-vm.component';
import { APillarsComponent } from './about/children/a-pillars/a-pillars.component';
import { ACertiComponent } from './about/children/a-certi/a-certi.component';
import { ACMessageComponent } from './about/children/a-c-message/a-c-message.component';
import { APMessageComponent } from './about/children/a-p-message/a-p-message.component';
import { PTeamComponent } from './placements/children/p-team/p-team.component';
import { SafePipe} from './placements/children/p-placed/p-placed-pipe.service';
import { PTrainingComponent } from './placements/children/p-training/p-training.component';
import { PRecComponent } from './placements/children/p-rec/p-rec.component';
import { PTalkComponent } from './placements/children/p-talk/p-talk.component';
import { PTourComponent } from './placements/children/p-tour/p-tour.component';
import { PPlacedComponent } from './placements/children/p-placed/p-placed.component';
import { SExamComponent } from './student/children/s-exam/s-exam.component';
import { SEventsComponent } from './student/children/s-events/s-events.component';
import { SPubsComponent } from './student/children/s-pubs/s-pubs.component';
import { SProjectsComponent } from './student/children/s-projects/s-projects.component';
import { SAchieveComponent } from './student/children/s-achieve/s-achieve.component';
import { SSocietyComponent } from './student/children/s-society/s-society.component';
import { SSportsComponent } from './student/children/s-sports/s-sports.component';
import { BtechComponent } from './btech/btech.component';
import { DisclosuresComponent } from './disclosures/disclosures.component';
import { NbaComponent } from './nba/nba.component';
import { NirfComponent } from './nirf/nirf.component';

import { FacultyComponent } from './faculty/faculty.component';

//after faculty login
import { FacultyHomeComponent } from './faculty/children/home/home.component';
import { EventsComponent } from './faculty/children/events/events.component';
import { FacultyPubComponent } from './faculty/children/facultyPub/facultyPub.component';
import { MaterialComponent } from './faculty/children/material/material.component';
import { NewsComponent } from './faculty/children/news/news.component';
import { NoticesComponent } from './faculty/children/notices/notices.component';
import { StudentProjComponent } from './faculty/children/studentProj/studentProj.component';
import { StudentPubComponent } from './faculty/children/studentPub/studentPub.component';
import { TimetableComponent } from './faculty/children/timetable/timetable.component';

import { CustomHttpService } from "./default.header.service";
import { LessonPlanComponent } from './faculty/children/lesson-plan/lesson-plan.component';
import { SelfLearningComponent } from './faculty/children/self-learning/self-learning.component';
import { ArraySortPipe} from './departments/children/common/faculty/order-by.pipe';

//services=====================================
import { CommonService } from './faculty/providers/common.service';
import { EventService } from './faculty/providers/event.service';
import { FacultyPubService } from './faculty/providers/facultyPub.service';
import { StudyMaterialService } from './faculty/providers/material.service';
import { NoticeService } from './faculty/providers/notice.service';
import { NewsService } from './faculty/providers/news.service';
import { SelfLearningService } from './faculty/providers/selfLearning.service';
import { StudentProjService } from './faculty/providers/studentProj.service';
import { StudentPubService } from './faculty/providers/studentPub.service';
import { TimetableService } from './faculty/providers/timetable.service';
import { LessonPlanService } from './faculty/providers/lessonPlan.service';
import { PlacementhomeComponent } from './placementhome/placementhome.component';
import { ExperttalksComponent } from './placementhome/children/experttalks/experttalks.component';
import { IndustourComponent } from './placementhome/children/industour/industour.component';
import { StudentplacedComponent } from './placementhome/children/studentplaced/studentplaced.component';
import { RecruitersComponent } from './placementhome/children/recruiters/recruiters.component';
import { TrainingComponent } from './placementhome/children/training/training.component';
import { PlacementteamComponent } from './placementhome/children/placementteam/placementteam.component';
import { PlacehomeComponent } from './placementhome/children/placehome/placehome.component';
import { GalleryComponent } from './gallery/gallery.component';



export var AuthToken:any;

export const firebaseConfig = {
  apiKey: "AIzaSyCUjbJaDoJGl09DQa96j3EVXSjJgIbVQU4",
  authDomain: "bpit-8740d.firebaseapp.com",
  databaseURL: "https://bpit-8740d.firebaseio.com",
  storageBucket: "bpit-8740d",
  messagingSenderId: "835679118973"
};

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'btech', component: BtechComponent },
  { path: 'sba', component: ASbaComponent },
  { path: 'aboutus', component: AboutComponent,
    children: [
      {path: 'collegeprofile', component:AProfileComponent},
      {path: 'trust', component:ATrustComponent},
      {path: 'visionandmission', component:AVmComponent},
      {path: 'pillars', component:APillarsComponent},
      {path: 'certifications', component:ACertiComponent},
      {path: 'chairmansmessage', component:ACMessageComponent},
      {path: 'principalsmessage', component:APMessageComponent},
      { path: '',
        redirectTo: '/aboutus/collegeprofile',
        pathMatch: 'full'
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contactus', component: ContactComponent },
  { path: 'disclosures', component: DisclosuresComponent },
  { path: 'nba', component: NbaComponent },
  { path: 'nirf', component: NirfComponent },
  { path: 'student', component: StudentComponent,
    children: [
      {path: 'examinations', component:SExamComponent},
      {path: 'events', component:SEventsComponent},
      {path: 'publications', component:SPubsComponent},
      {path: 'projects', component:SProjectsComponent},
      {path: 'achievments', component:SAchieveComponent},
      {path: 'societies', component:SSocietyComponent},
      {path: 'sports', component:SSportsComponent},
      { path: '',
        redirectTo: '/student/events',
        pathMatch: 'full'
      },
    ]
  },
  { path: 'placements', component: PlacementsComponent,
    children: [
      {path: 'team', component:PTeamComponent},
      {path: 'training', component:PTrainingComponent},
      {path: 'recruiters', component:PRecComponent},
      {path: 'talksandseminars', component:PTalkComponent},
      {path: 'toursandworkshops', component:PTourComponent},
      {path: 'studentsplaced', component:PPlacedComponent},
      { path: '',
        redirectTo: '/placements/team',
        pathMatch: 'full'
      },
    ]
  },


  { path: 'departments', component: DepartmentsComponent,

    children: [
      // {path: 'about', component:DAboutComponent},
      // {path: 'faculty', component:DFacultyComponent},
      // {path: 'lab', component:DLabComponent},
      // {path: 'faculty-publications',component:DFpubsComponent},
      // { path: '',
      //   redirectTo: '/departments/about',
      //   pathMatch: 'full'
      // },
      {path: 'cse',component:CseComponent,
      children:[
        { path: '',
          redirectTo: '/departments/cse/about',
          pathMatch: 'full'
        },
        {path: 'about',component:DaboutComponent},
      {path: 'faculty',component:DfacultyComponent},
      {path: 'news',component:DNewsComponent},
      {path: 'events',component:DEventsComponent},
      {path: 'faculty-publication',component:DfpubsComponent},
      {path: 'lab-resources',component:DlabComponent},
      {path: 'lesson-plan',component:DlessonPlanComponent},
      {path: 'notice',component:DnoticeComponent},
      {path: 'self-learning',component:DselfLearningComponent},
      {path: 'study-material',component:DstudyMaterialComponent},
      {path: 'time-table',component:DtimetableComponent},
      ]},

      {path: 'ece',component:EceComponent,children:[
        { path: '',
          redirectTo: '/departments/ece/about',
          pathMatch: 'full'
        },
        {path: 'about',component:DaboutComponent},
        {path: 'faculty',component:DfacultyComponent},
        {path: 'news',component:DNewsComponent},
        {path: 'events',component:DEventsComponent},
        {path: 'faculty-publication',component:DfpubsComponent},
        {path: 'lab-resources',component:DlabComponent},
        {path: 'lesson-plan',component:DlessonPlanComponent},
        {path: 'notice',component:DnoticeComponent},
        {path: 'self-learning',component:DselfLearningComponent},
        {path: 'study-material',component:DstudyMaterialComponent},
        {path: 'time-table',component:DtimetableComponent},
      ]},
      {path: 'mba',component:MbaComponent,
        children:[
          { path: '',
            redirectTo: '/departments/mba/about',
            pathMatch: 'full'
          },
          {path: 'about',component:DaboutComponent},
          {path: 'faculty',component:DfacultyComponent},
          {path: 'news',component:DNewsComponent},
          {path: 'events',component:DEventsComponent},
          {path: 'faculty-publication',component:DfpubsComponent},
          {path: 'lab-resources',component:DlabComponent},
          {path: 'lesson-plan',component:DlessonPlanComponent},
          {path: 'notice',component:DnoticeComponent},
          {path: 'self-learning',component:DselfLearningComponent},
          {path: 'study-material',component:DstudyMaterialComponent},
          {path: 'time-table',component:DtimetableComponent}
      ]},
      {path: 'bba',component:BbaComponent,
        children:[
          { path: '',
            redirectTo: '/departments/bba/about',
            pathMatch: 'full'
          },
          {path: 'about',component:DaboutComponent},
          {path: 'faculty',component:DfacultyComponent},
          {path: 'news',component:DNewsComponent},
          {path: 'events',component:DEventsComponent},
          {path: 'faculty-publication',component:DfpubsComponent},
          {path: 'lab-resources',component:DlabComponent},
          {path: 'lesson-plan',component:DlessonPlanComponent},
          {path: 'notice',component:DnoticeComponent},
          {path: 'self-learning',component:DselfLearningComponent},
          {path: 'study-material',component:DstudyMaterialComponent},
          {path: 'time-table',component:DtimetableComponent}
      ]},
      {path: 'ac',component:AcComponent,
        children:[
          { path: '',
            redirectTo: '/departments/ac/about',
            pathMatch: 'full'
          },
          {path: 'about',component:DaboutComponent},
          {path: 'faculty',component:DfacultyComponent},
          {path: 'news',component:DNewsComponent},
          {path: 'events',component:DEventsComponent},
          {path: 'faculty-publication',component:DfpubsComponent},
          {path: 'lab-resources',component:DlabComponent},
          {path: 'lesson-plan',component:DlessonPlanComponent},
          {path: 'notice',component:DnoticeComponent},
          {path: 'self-learning',component:DselfLearningComponent},
          {path: 'study-material',component:DstudyMaterialComponent},
          {path: 'time-table',component:DtimetableComponent}
      ]},
      {path: 'am',component:AmComponent,
        children:[
          { path: '',
            redirectTo: '/departments/am/about',
            pathMatch: 'full'
          },
          {path: 'about',component:DaboutComponent},
          {path: 'faculty',component:DfacultyComponent},
          {path: 'news',component:DNewsComponent},
          {path: 'events',component:DEventsComponent},
          {path: 'faculty-publication',component:DfpubsComponent},
          {path: 'lab-resources',component:DlabComponent},
          {path: 'lesson-plan',component:DlessonPlanComponent},
          {path: 'notice',component:DnoticeComponent},
          {path: 'self-learning',component:DselfLearningComponent},
          {path: 'study-material',component:DstudyMaterialComponent},
          {path: 'time-table',component:DtimetableComponent}
      ]},
      {path: 'ap',component:ApComponent,
        children:[
          { path: '',
            redirectTo: '/departments/ap/about',
            pathMatch: 'full'
          },
          {path: 'about',component:DaboutComponent},
          {path: 'faculty',component:DfacultyComponent},
          {path: 'news',component:DNewsComponent},
          {path: 'events',component:DEventsComponent},
          {path: 'faculty-publication',component:DfpubsComponent},
          {path: 'lab-resources',component:DlabComponent},
          {path: 'lesson-plan',component:DlessonPlanComponent},
          {path: 'notice',component:DnoticeComponent},
          {path: 'self-learning',component:DselfLearningComponent},
          {path: 'study-material',component:DstudyMaterialComponent},
          {path: 'time-table',component:DtimetableComponent}
      ]},
      {path: 'me',component:MeComponent,
        children:[
          { path: '',
            redirectTo: '/departments/me/about',
            pathMatch: 'full'
          },
          {path: 'about',component:DaboutComponent},
          {path: 'faculty',component:DfacultyComponent},
          {path: 'news',component:DNewsComponent},
          {path: 'events',component:DEventsComponent},
          {path: 'faculty-publication',component:DfpubsComponent},
          {path: 'lab-resources',component:DlabComponent},
          {path: 'lesson-plan',component:DlessonPlanComponent},
          {path: 'notice',component:DnoticeComponent},
          {path: 'self-learning',component:DselfLearningComponent},
          {path: 'study-material',component:DstudyMaterialComponent},
          {path: 'time-table',component:DtimetableComponent}
      ]},
      {path: 'hu',component:huComponent,
        children:[
          { path: '',
            redirectTo: '/departments/hu/about',
            pathMatch: 'full'
          },
          {path: 'about',component:DaboutComponent},
          {path: 'faculty',component:DfacultyComponent},
          {path: 'news',component:DNewsComponent},
          {path: 'events',component:DEventsComponent},
          {path: 'faculty-publication',component:DfpubsComponent},
          {path: 'lab-resources',component:DlabComponent},
          {path: 'lesson-plan',component:DlessonPlanComponent},
          {path: 'notice',component:DnoticeComponent},
          {path: 'self-learning',component:DselfLearningComponent},
          {path: 'study-material',component:DstudyMaterialComponent},
          {path: 'time-table',component:DtimetableComponent}
      ]},
      {path: 'eee',component:EeeComponent,
      children:[
        { path: '',
          redirectTo: '/departments/eee/about',
          pathMatch: 'full'
        },
        {path: 'about',component:DaboutComponent},
        {path: 'faculty',component:DfacultyComponent},
        {path: 'news',component:DNewsComponent},
        {path: 'events',component:DEventsComponent},
        {path: 'faculty-publication',component:DfpubsComponent},
        {path: 'lab-resources',component:DlabComponent},
        {path: 'lesson-plan',component:DlessonPlanComponent},
        {path: 'notice',component:DnoticeComponent},
        {path: 'self-learning',component:DselfLearningComponent},
        {path: 'study-material',component:DstudyMaterialComponent},
        {path: 'time-table',component:DtimetableComponent}
    ]},
      {path: 'it',component:ItComponent,
      children:[
        { path: '',
          redirectTo: '/departments/it/about',
          pathMatch: 'full'
        },
        {path: 'about',component:DaboutComponent},
        {path: 'faculty',component:DfacultyComponent},
        {path: 'faculty-publication',component:DfpubsComponent},
        {path: 'news',component:DNewsComponent},
        {path: 'events',component:DEventsComponent},
        {path: 'lab-resources',component:DlabComponent},
        {path: 'lesson-plan',component:DlessonPlanComponent},
        {path: 'notice',component:DnoticeComponent},
        {path: 'self-learning',component:DselfLearningComponent},
        {path: 'study-material',component:DstudyMaterialComponent},
        {path: 'time-table',component:DtimetableComponent},
    ]}

    ]
  },
  { path: 'facilities', component: FacilitiesComponent,
    children: [
      {path: 'library', component:FLibraryComponent},
      {path: 'hostel', component:FHostelComponent},
      {path: 'medicalroom', component:FMedComponent},
      {path: 'bookbank', component:FBookComponent},
      {path: 'seminarhall', component:FSemhallComponent},
      {path: 'EDUSAT', component:FEduComponent},
      {path: 'sportsroom', component:FSportsComponent},
      {path: 'canteen', component:FCanteenComponent},
      { path: '',
        redirectTo: '/facilities/library',
        pathMatch: 'full'
      },
    ]
  },
  { path: 'faculty', component: FacultyComponent , canActivate:[LoggedInGuard],
  children: [
      {path: 'faculty-home', component:FacultyHomeComponent},
      {path: 'events', component:EventsComponent},
      {path: 'facultyPub', component:FacultyPubComponent},
      {path: 'material', component:MaterialComponent},
      {path: 'news', component:NewsComponent},
      {path: 'notices', component:NoticesComponent},
      {path: 'studentProj', component:StudentProjComponent},
      {path: 'studentPub', component:StudentPubComponent},
      {path: 'timetable', component:TimetableComponent},
      {path: 'selfLearning', component:SelfLearningComponent},
      {path: 'lessonPlan', component:LessonPlanComponent},
        { path: '',
          redirectTo: '/faculty/faculty-home',
          pathMatch: 'full'
        },
  ]

},
{ path: 'placement-home', component: PlacementhomeComponent, canActivate:[LoggedInGuardP],
children: [
    {path: 'placehome', component:PlacehomeComponent},
    {path: 'industour', component:IndustourComponent},
    {path: 'experttalks', component:ExperttalksComponent},
    {path: 'placementteam', component:PlacementteamComponent},
    {path: 'recruiters', component:RecruitersComponent},
    {path: 'studentplaced', component:StudentplacedComponent},
    {path: 'training', component:TrainingComponent},
      { path: '',
        redirectTo: '/placement-home/placehome',
        pathMatch: 'full'
      },
]

},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PnfComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PnfComponent,
    FootComponent,
    DepartmentsComponent,
    AcComponent,
    AmComponent,
    ApComponent,
    MeComponent,
    CseComponent,
    EceComponent,
    EeeComponent,
    ItComponent,
    DaboutComponent,
    DnoticeComponent,
    DfacultyComponent,
    DNewsComponent,
    DEventsComponent,
    DfpubsComponent,
    DlabComponent,
    DlessonPlanComponent,
    DselfLearningComponent,
    DstudyMaterialComponent,
    DtimetableComponent,

    FacilitiesComponent,
    FLibraryComponent,
    FHostelComponent,
    FMedComponent,
    FBookComponent,
    FSemhallComponent,
    FSportsComponent,
    FCanteenComponent,
    FEduComponent,
    AboutComponent,
    LoginComponent,
    ContactComponent,
    StudentComponent,
    PlacementsComponent,
    AProfileComponent,
    ATrustComponent,
    AVmComponent,
    APillarsComponent,
    ACertiComponent,
    ACMessageComponent,
    APMessageComponent,
    PTeamComponent,
    PTrainingComponent,
    PRecComponent,
    PTalkComponent,
    PTourComponent,
    PPlacedComponent,
    SExamComponent,
    SEventsComponent,
    SPubsComponent,
    SProjectsComponent,
    SAchieveComponent,
    SSocietyComponent,
    SSportsComponent,
    BtechComponent,
    SbaComponent,
    // MbaComponent,
    // BbaComponent,
    DisclosuresComponent,
    NbaComponent,
    NirfComponent,
    FacultyComponent,
    FacultyHomeComponent,
    EventsComponent,
    FacultyPubComponent,
    MaterialComponent,
    NewsComponent,
    NoticesComponent,
    StudentProjComponent,
    StudentPubComponent,
    TimetableComponent,
    LessonPlanComponent,
    SelfLearningComponent,
    ASbaComponent,
    ArraySortPipe,
    MbaComponent,
    BbaComponent,
    huComponent,
    PlacementhomeComponent,
    ExperttalksComponent,
    IndustourComponent,
    StudentplacedComponent,
    RecruitersComponent,
    TrainingComponent,
    PlacementteamComponent,
    PlacehomeComponent,
    GalleryComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true },
      { useHash: true }
    ),
  ],
  providers: [
    Configuration,
    DepartmentsService,
    LoggedInGuard,
    LoggedInGuardP,
    CustomHttpService,
    CommonService,
    EventService,
    FacultyPubService,
    LessonPlanService,
    StudentPubService,
    StudentProjService,
    StudyMaterialService,
    NewsService,
    NoticeService,
    TimetableService,
    SelfLearningService,

    //     {
    //   provide: CustomHttpService,
    //   useFactory: function(backend: XHRBackend, defaultOptions: RequestOptions){
    //     return new CustomHttpService(backend, defaultOptions);
    //   },
    //   deps: [XHRBackend, RequestOptions]
    // }
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
