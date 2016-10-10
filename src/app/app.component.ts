import { Component, ElementRef, AfterViewInit } from '@angular/core';

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
  constructor(el: ElementRef) {
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
