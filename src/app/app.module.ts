import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { WhyfrenchComponent } from './whyfrench/whyfrench.component';
import { ParentsComponent } from './parents/parents.component';
import { SuppliesComponent } from './supplies/supplies.component';
import { HomeworkComponent } from './homework/homework.component';
import { LinksComponent } from './links/links.component';
import { TribesComponent } from './tribes/tribes.component';
import { NewsComponent } from './news/news.component';
import { Grade1homeComponent } from './grade1home/grade1home.component';
import { Grade1mediaComponent } from './grade1media/grade1media.component';
import { CKEditorModule } from 'ng2-ckeditor';

// Services
import { MadamedeliaService } from './services/madamedelia.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    WhyfrenchComponent,
    ParentsComponent,
    SuppliesComponent,
    HomeworkComponent,
    TribesComponent,
    LinksComponent,
    NewsComponent,
    Grade1homeComponent,
    Grade1mediaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CKEditorModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'why-french-is-important', component: WhyfrenchComponent },
      { path: 'announcements', component: NewsComponent },
      { path: 'information-for-parents', component: ParentsComponent },
      { path: 'supplies', component: SuppliesComponent },
      { path: 'no-homework', component: HomeworkComponent },
      { path: 'useful-links', component: LinksComponent },
      { path: 'tribes', component: TribesComponent },
      { path: 'grade-1-home', component: Grade1homeComponent },
      { path: 'grade-1-media', component: Grade1mediaComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ])
  ],
  providers: [
    MadamedeliaService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
