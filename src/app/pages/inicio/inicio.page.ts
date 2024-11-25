import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoplay: true
  };

  constructor(private menu:MenuController,) { }

  mostrarMenu(){
    this.menu.open('first');
  }

}
