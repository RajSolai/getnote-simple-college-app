import { Component } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss' , 'mytheme.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'CSE',
      url: '/csemain',
      icon: 'home'
    },
    {
      title: 'IT',
      url: '/it',
      icon: 'home'
    },
    {
      title: 'MECH',
      url: '/mech',
      icon: 'home'
    },
    {
      title: 'EEE',
      url: '/eee',
      icon: 'home'
    },
    {
      title: 'ECE',
      url: '/ece',
      icon: 'home'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private admobFree : AdMobFree
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.overlaysWebView(false);
      //for showing admob ads
      const bannerConfig: AdMobFreeBannerConfig = {
        // add your config here
        // for the sake of this example we will just use the test config
        id : 'ca-app-pub-3940256099942544/6300978111',
        autoShow: true
       };
       this.admobFree.banner.config(bannerConfig);
       
       this.admobFree.banner.prepare()
         .then(() => {
           // banner Ad is ready
           // if we set autoShow to false, then we will need to call the show method here
           this.admobFree.banner.show()
         })
         .catch(e => console.log(e));
    });
    }
  }

