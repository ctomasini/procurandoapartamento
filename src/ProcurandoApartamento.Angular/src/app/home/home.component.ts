import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IApartamento } from 'src/models/apartamento';
import { ApartamentoRestService } from 'src/services/apartamento-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  enviado: boolean = false;
  aptos: IApartamento[] = [];
  opcoes: string[] = [];
  form: FormGroup = this.formBuilder.group({
    academia: new FormControl(''),
    escola: new FormControl(''),
    mercado: new FormControl('')
  });
  constructor(
    private formBuilder:FormBuilder,
    private aptoRestSrvc: ApartamentoRestService
  ) { }

  change(event:any, controlName:string){
    if(event.target.checked){
      this.opcoes.push(controlName)
    } else {
      this.opcoes.filter(x => x != controlName);
    }
  }

  submit(){
    if (this.opcoes.length == 0) {
      alert('É necessário marcar uma das opções para consulta.');
      return;
    }
    this.enviado = true;
    this.aptoRestSrvc
    .recuperarPorOpcao(this.opcoes)
    .subscribe({
      next:(result: IApartamento[])=> {
        this.aptos = result as IApartamento[];
      } ,
      error:(err:any)=>{
        console.log(err);
      }
    });

  }

  reset(){
    this.enviado = false;
    this.form.reset();
    // this.form.get('academia')?.setValue(false)
    // this.form.get('escola')?.setValue(false)
    // this.form.get('mercado')?.setValue(false)
  }



  ngOnInit() {
  }

}
