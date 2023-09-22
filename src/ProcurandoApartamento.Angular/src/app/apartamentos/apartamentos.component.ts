import { Component, OnInit } from '@angular/core';
import { IApartamento } from 'src/models/apartamento';
import { ApartamentoRestService } from 'src/services/apartamento-rest.service';

@Component({
  selector: 'app-apartamentos',
  templateUrl: './apartamentos.component.html',
  styleUrls: ['./apartamentos.component.css']
})
export class ApartamentosComponent implements OnInit {

  apartamentos: IApartamento[] = [];
  constructor(
    private aptoRestSrvc: ApartamentoRestService
  ) { }

  ngOnInit() {
    this.aptoRestSrvc.ListarTodos().subscribe({
      next:(result:IApartamento[])=>{
        this.apartamentos = result as IApartamento[];
      },
      error:(error:any)=>{
        console.log(error);
      }
    });
  }

}
