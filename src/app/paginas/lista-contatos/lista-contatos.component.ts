import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { FormsModule } from '@angular/forms';
import { FormularioContatoComponent } from '../formulario-contato/formulario-contato.component';

import agenda from '../../agenda.json'

interface Contato {
  id: number 
  nome: string
  telefone: string
}

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent, 
    CabecalhoComponent, 
    SeparadorComponent, 
    ContatoComponent, 
    FormsModule,
    FormularioContatoComponent
  ],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent {
  alfabeto = 'abcdefghijklmnopqrstuvwxyz'
  contatos: Contato[] = agenda

  filtroPorTexto: string = ''

  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }

  filtrarContatosPorTexto(): Contato[] {
    if(!this.filtroPorTexto) {
      return this.contatos
    }
    return this.contatos.filter(contato => {
      return contato.nome.toLowerCase().includes(this.filtroPorTexto.toLowerCase())
    })
  }

  filtrarContatosPorLetraInicial(letra: string) : Contato[] {
    return this.filtrarContatosPorTexto().filter( contato => {
      return this.removerAcentos(contato.nome).toLowerCase().startsWith(this.removerAcentos(letra).toLowerCase())
    })
  }
}
