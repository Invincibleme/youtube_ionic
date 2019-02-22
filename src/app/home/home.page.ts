import { Component } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private youtube: YoutubeVideoPlayer, private config: ConfigService) { }

   public data: any;
   
   

  ionViewWillEnter() {
    this.videos();
    
  }

  videos() {
    this.config.getVideos()
      .subscribe(
          response => {
          this.data = response.items;
          console.log(this.data);
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



  
 
  
  

  

