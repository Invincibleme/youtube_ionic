import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public catlist:any;
  public id = this.route.snapshot.paramMap.get('id');
  
  constructor( private config:ConfigService, private youtube: YoutubeVideoPlayer, private route: ActivatedRoute) { }

  ngOnInit() {
     
  }
  ionViewWillEnter() {
   
    this.categorylists(this.id);
  }
  categorylists(id){
    this.config.categoryList(id)
    .subscribe(
      response => {
        this.catlist = response.items;
        console.log(this.catlist);
       },
      error =>{
        console.log(error);
      }
    );
  }

  play(watch){
    this.youtube.openVideo(watch);
  }
}
