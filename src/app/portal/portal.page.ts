import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular'
import { Router } from '@angular/router'

@Component({
  selector: 'app-portal',
  templateUrl: './portal.page.html',
  styleUrls: ['./portal.page.scss'],
})
export class PortalPage implements OnInit {

  constructor(
    private p : Platform,
    private r : Router
  ) { }

  ngOnInit() {
    //navigating back
    this.p.backButton.subscribe(()=>{
      this.r.navigate(['/home'])
    })
    //to load the portal
  }

}
