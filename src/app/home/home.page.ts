import { Component , OnInit } from '@angular/core';
import { Platform } from '@ionic/angular'
import { Router } from '@angular/router'
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(
    private r : Router,
    private p : Platform,
    private ts : ToastController,
  ) {}

  // code for exiting app
  async presentToast() {
    const toast = await this.ts.create({
      message: 'Tap again to exit app',
      duration: 2000,
      color : 'danger'
    });
    toast.present();
  }

  public counter = 0

    ngOnInit(){
      this.p.backButton.subscribe(()=>{
        if (this.counter == 0){
          this.counter++
          this.presentToast()
          setTimeout(() => { this.counter = 0 }, 2000)
        }else{
          navigator['app'].exitApp()
        }
      })
    }
}
