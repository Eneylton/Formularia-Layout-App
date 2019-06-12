import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CepServiceProvider } from '../../providers/cep-service/cep-service';


@IonicPage({})
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

  cep:string ="65054530";

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: CepServiceProvider ) {
  }

  ionViewDidLoad() {

   this.getEndereco();

  }

  getEndereco(){
      this.service.buscarCEP(this.cep).subscribe(data=>{
        console.log(data);
      })
  }

}
