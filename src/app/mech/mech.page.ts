import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mech',
  templateUrl: './mech.page.html',
  styleUrls: ['./mech.page.scss'],
})
export class MechPage implements OnInit {

  constructor( private platform : Platform , private r : Router) { }

  ngOnInit() {

    this.platform.backButton.subscribe(() => {
        this.r.navigate(['/home'])
    })
  }

}
