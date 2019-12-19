import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular'
import { Router } from '@angular/router'

@Component({
  selector: 'app-civil',
  templateUrl: './civil.page.html',
  styleUrls: ['./civil.page.scss'],
})
export class CivilPage implements OnInit {

  constructor(
    private p : Platform,
    private r : Router
  ) { }

  ngOnInit() {
    this.p.backButton.subscribe(()=>{
      this.r.navigate(['/home'])
    })
  }

}
