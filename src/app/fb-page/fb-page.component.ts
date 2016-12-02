import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-page',
  templateUrl: './fb-page.component.html',
  styleUrls: ['./fb-page.component.css'],
  inputs: ['sitename']
})
export class FbPageComponent implements OnInit {

  public sitename;

  public iframeurl;

  constructor() { }

  ngOnInit() {
    this.iframeurl = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F"+this.sitename+"%2F&tabs=timeline%2C%20events%2C%20messages&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId";
    console.log(this.iframeurl);
  }

}
