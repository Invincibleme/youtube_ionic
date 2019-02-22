import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ConfigService } from './config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public cat: any;
  public catlist:any;

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private config: ConfigService,
    private navCtrl : NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#f44336');
      this.splashScreen.hide();
      this.getCat();
    });
  }

  home(){
    this.navCtrl.navigateRoot('/home');
  }

  getCat(){
    this.config.getCat()
    .subscribe(
      response=>{
        this.cat = response.items;
        console.log(this.cat);
      },
      error =>{
        console.log(error);
      }
    );
  }

}

    