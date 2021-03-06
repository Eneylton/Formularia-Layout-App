import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CepServiceProvider } from '../../providers/cep-service/cep-service';
import { ValidateConfirmPassword } from '../../validators/confirmPassword';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@IonicPage({})
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {
 
  registerForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formbuilder: FormBuilder,
    public alertCtrl: AlertController,
    private service: CepServiceProvider
  ){

    this.registerForm = this.formbuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      sobrename: [null, [Validators.required, Validators.email]],
      email: [null, [Validators.required, Validators.minLength(3)]],
      telefone: [null, [Validators.required, Validators.minLength(3)]],
      celular: [null, [Validators.required, Validators.minLength(3)]],
      login: [null, [Validators.required, Validators.minLength(3)]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      cep: [null, [Validators.required, Validators.minLength(3)]],
      endereco: [null, [Validators.required, Validators.minLength(3)]],
      numero: [null],
      bairro: [null, [Validators.required, Validators.minLength(3)]],
      municipio: [null, [Validators.required, Validators.minLength(3)]],
      uf: [null, [Validators.required, Validators.minLength(3)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(3), ValidateConfirmPassword]],
      password: [null, [Validators.required, Validators.minLength(3)]],
    })

  }

  ionViewDidLoad() {

   this.buscarEndereco();

  }

  buscarEndereco(){
      let cepValue = this.registerForm.controls['cep'].value;
      this.service.buscarCEP(cepValue).subscribe(data=>{
        this.preecherCampos(data);

        console.log(data);
      })
  }

  preecherCampos(dados){
    this.registerForm.controls['endereco'].setValue(dados.logradouro);
    this.registerForm.controls['bairro'].setValue(dados.bairro);
    this.registerForm.controls['municipio'].setValue(dados.localidade);
    this.registerForm.controls['uf'].setValue(dados.uf);
  }

}
