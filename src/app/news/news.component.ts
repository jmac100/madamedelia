import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MadamedeliaService } from '../services/madamedelia.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  announcement: any;

  constructor
  (
    private _service: MadamedeliaService, 
    private _sanitizer: DomSanitizer,
    private auth: AuthService
  ) { }

  public get Announcement() : SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(this.announcement.body);
  }

  ngOnInit() {
    this.getAnnouncement();
  }

  getAnnouncement(){
    this._service.getAnnouncements()
      .subscribe(announcements => {
        this.announcement = announcements[0];        
      });
  }
  
  changed($event){
    this._service.saveAnnouncement(this.announcement.id, this.announcement.body);
  }
}
