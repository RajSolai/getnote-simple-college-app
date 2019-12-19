import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Platform } from '@ionic/angular'

@Component({
  selector: 'app-csemain',
  templateUrl: './csemain.page.html',
  styleUrls: ['./csemain.page.scss'],
})
export class CsemainPage implements OnInit {

  constructor( private r : Router , private p : Platform) { }

  ngOnInit() {
    this.p.backButton.subscribe(()=>{
      this.r.navigate(['/home'])
    })
  }

}
