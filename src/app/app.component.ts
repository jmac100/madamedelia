import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { AuthService } from './services/auth.service';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = '';
  footerDate = new Date().getFullYear();

  private el: HTMLElement;
  constructor(el: ElementRef, public auth: AuthService) {
    auth.handleAuthentication();
    this.el = el.nativeElement;
  }

  ngAfterViewInit() {
    window.setTimeout(function() {
      $(this.el).find('img').siLoader(function(){
        $(this).fadeIn('fast');
      });
    });
  }
}
