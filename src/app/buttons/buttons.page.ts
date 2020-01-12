import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'buttons.page.html',
  styleUrls: ['buttons.page.scss'],
})
export class ButtonsPage {

  constructor(public alertCtrl: AlertController) {}

  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alarm!',
      message: 'Durftest du wirklich Cicken?',
      buttons: ['Yes']
    });
  await alert.present();
  }

}
