import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular'

@Component({
  selector: 'app-eee',
  templateUrl: './eee.page.html',
  styleUrls: ['./eee.page.scss'],
})
export class EeePage implements OnInit {

  constructor( private rs : Router , private ps : Platform) {  }

  ngOnInit() {

    this.ps.backButton.subscribe(()=>{
      this.rs.navigate(['/home'])
    })
  }

}
