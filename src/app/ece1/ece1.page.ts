import { Component, OnInit } from '@angular/core';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ece1',
  templateUrl: './ece1.page.html',
  styleUrls: ['./ece1.page.scss'],
})
export class Ece1Page implements OnInit {

  constructor(private foo : FileOpener , private file : File , private transfer : FileTransfer, private ts : ToastController) { }

  ngOnInit() {
  }

  async presentToast(message : String) {
    const toast = await this.ts.create({
      message: message+'downloading.',
      duration: 3000,
      color : 'danger',
      showCloseButton : true
    });
    toast.present();
  }

  download1() {
    let path = this.file.externalApplicationStorageDirectory+'/.itestemp/'
    const transfer = this.transfer.create()
    this.presentToast("English pdf")

   const url = 'https://www.srmvalliammai.ac.in/qb/English/1st%20Semester/1919101-Communicative%20English.pdf';
    transfer.download(url,path+'qb.pdf',true).then(entry=>{
      let url2 = entry.toURL()
      //show toast
      this.presentToast("English pdf")
      this.foo.open(url2, "application/pdf")
    }),
    (error)=>{
      alert(JSON.stringify(error))
    }
  }

  download2() {
    let path = this.file.externalApplicationStorageDirectory+'/.itestemp/'
    const transfer = this.transfer.create()
    this.presentToast("English pdf")

   const url = 'https://www.srmvalliammai.ac.in/qb/English/1st%20Semester/1919101-Communicative%20English.pdf';
    transfer.download(url,path+'qb.pdf',true).then(entry=>{
      let url2 = entry.toURL()
      //show toast
      this.presentToast("English pdf")
      this.foo.open(url2, "application/pdf")
    }),
    (error)=>{
      alert(JSON.stringify(error))
    }
  }

  download3() {
    let path = this.file.externalApplicationStorageDirectory+'/.itestemp/'
    const transfer = this.transfer.create()
    this.presentToast("English pdf")

   const url = 'https://www.srmvalliammai.ac.in/qb/English/1st%20Semester/1919101-Communicative%20English.pdf';
    transfer.download(url,path+'qb.pdf',true).then(entry=>{
      let url2 = entry.toURL()
      //show toast
      this.presentToast("English pdf")
      this.foo.open(url2, "application/pdf")
    }),
    (error)=>{
      alert(JSON.stringify(error))
    }
  }

  download4() {
    let path = this.file.externalApplicationStorageDirectory+'/.itestemp/'
    const transfer = this.transfer.create()
    this.presentToast("English pdf")

   const url = 'https://www.srmvalliammai.ac.in/qb/English/1st%20Semester/1919101-Communicative%20English.pdf';
    transfer.download(url,path+'qb.pdf',true).then(entry=>{
      let url2 = entry.toURL()
      //show toast
      this.presentToast("English pdf")
      this.foo.open(url2, "application/pdf")
    }),
    (error)=>{
      alert(JSON.stringify(error))
    }
  }

  download5() {
    let path = this.file.externalApplicationStorageDirectory+'/.itestemp/'
    const transfer = this.transfer.create()
    this.presentToast("English pdf")

   const url = 'https://www.srmvalliammai.ac.in/qb/English/1st%20Semester/1919101-Communicative%20English.pdf';
    transfer.download(url,path+'qb.pdf',true).then(entry=>{
      let url2 = entry.toURL()
      //show toast
      this.presentToast("English pdf")
      this.foo.open(url2, "application/pdf")
    }),
    (error)=>{
      alert(JSON.stringify(error))
    }
  }

  download6() {
    let path = this.file.externalApplicationStorageDirectory+'/.itestemp/'
    const transfer = this.transfer.create()
    this.presentToast("English pdf")

   const url = 'https://www.srmvalliammai.ac.in/qb/English/1st%20Semester/1919101-Communicative%20English.pdf';
    transfer.download(url,path+'qb.pdf',true).then(entry=>{
      let url2 = entry.toURL()
      //show toast
      this.presentToast("English pdf")
      this.foo.open(url2, "application/pdf")
    }),
    (error)=>{
      alert(JSON.stringify(error))
    }
  }

  download7() {
    let path = this.file.externalApplicationStorageDirectory+'/.itestemp/'
    const transfer = this.transfer.create()
    this.presentToast("English pdf")

   const url = 'https://www.srmvalliammai.ac.in/qb/English/1st%20Semester/1919101-Communicative%20English.pdf';
    transfer.download(url,path+'qb.pdf',true).then(entry=>{
      let url2 = entry.toURL()
      //show toast
      this.presentToast("English pdf")
      this.foo.open(url2, "application/pdf")
    }),
    (error)=>{
      alert(JSON.stringify(error))
    }
  }

  download8() {
    let path = this.file.externalApplicationStorageDirectory+'/.itestemp/'
    const transfer = this.transfer.create()
    this.presentToast("English pdf")

   const url = 'https://www.srmvalliammai.ac.in/qb/English/1st%20Semester/1919101-Communicative%20English.pdf';
    transfer.download(url,path+'qb.pdf',true).then(entry=>{
      let url2 = entry.toURL()
      //show toast
      this.presentToast("English pdf")
      this.foo.open(url2, "application/pdf")
    }),
    (error)=>{
      alert(JSON.stringify(error))
    }
  }

  download9() {
    let path = this.file.externalApplicationStorageDirectory+'/.itestemp/'
    const transfer = this.transfer.create()
    this.presentToast("English pdf")

   const url = 'https://www.srmvalliammai.ac.in/qb/English/1st%20Semester/1919101-Communicative%20English.pdf';
    transfer.download(url,path+'qb.pdf',true).then(entry=>{
      let url2 = entry.toURL()
      //show toast
      this.presentToast("English pdf")
      this.foo.open(url2, "application/pdf")
    }),
    (error)=>{
      alert(JSON.stringify(error))
    }
  }

  download10() {
    let path = this.file.externalApplicationStorageDirectory+'/.itestemp/'
    const transfer = this.transfer.create()
    this.presentToast("English pdf")

   const url = 'https://www.srmvalliammai.ac.in/qb/English/1st%20Semester/1919101-Communicative%20English.pdf';
    transfer.download(url,path+'qb.pdf',true).then(entry=>{
      let url2 = entry.toURL()
      //show toast
      this.presentToast("English pdf")
      this.foo.open(url2, "application/pdf")
    }),
    (error)=>{
      alert(JSON.stringify(error))
    }
  }

  download11() {
    let path = this.file.externalApplicationStorageDirectory+'/.itestemp/'
    const transfer = this.transfer.create()
    this.presentToast("English pdf")

   const url = 'https://www.srmvalliammai.ac.in/qb/English/1st%20Semester/1919101-Communicative%20English.pdf';
    transfer.download(url,path+'qb.pdf',true).then(entry=>{
      let url2 = entry.toURL()
      //show toast
      this.presentToast("English pdf")
      this.foo.open(url2, "application/pdf")
    }),
    (error)=>{
      alert(JSON.stringify(error))
    }
  }

  download12() {
    let path = this.file.externalApplicationStorageDirectory+'/.itestemp/'
    const transfer = this.transfer.create()
    this.presentToast("English pdf")

   const url = 'https://www.srmvalliammai.ac.in/qb/English/1st%20Semester/1919101-Communicative%20English.pdf';
    transfer.download(url,path+'qb.pdf',true).then(entry=>{
      let url2 = entry.toURL()
      //show toast
      this.presentToast("English pdf")
      this.foo.open(url2, "application/pdf")
    }),
    (error)=>{
      alert(JSON.stringify(error))
    }
  }

  download13() {
    let path = this.file.externalApplicationStorageDirectory+'/.itestemp/'
    const transfer = this.transfer.create()
    this.presentToast("English pdf")

   const url = 'https://www.srmvalliammai.ac.in/qb/English/1st%20Semester/1919101-Communicative%20English.pdf';
    transfer.download(url,path+'qb.pdf',true).then(entry=>{
      let url2 = entry.toURL()
      //show toast
      this.presentToast("English pdf")
      this.foo.open(url2, "application/pdf")
    }),
    (error)=>{
      alert(JSON.stringify(error))
    }
  }
}