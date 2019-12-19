import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular'
import { Router } from '@angular/router'

@Component({
  selector: 'app-ece',
  templateUrl: './ece.page.html',
  styleUrls: ['./ece.page.scss'],
})
export class EcePage implements OnInit {

  constructor( private r : Router , private p : Platform) { }

  ngOnInit() {
    this.p.backButton.subscribe(()=>{
        this.r.navigate(['/home'])
    })
  }

}
