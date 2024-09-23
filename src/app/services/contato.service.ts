import { Injectable } from '@angular/core';

interface Contato {
  id: number 
  nome: string
  telefone: string
}

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: Contato[] = []

  constructor() {
    // Tentar obter dados do localStorage
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null ;

    this.contatos = contatosLocalStorage || null ;

    //Salvar os contatos do localStorage
    localStorage.setItem('contatos', JSON.stringify(this.contatos))
  }

  obterContatos() {
    return this.contatos;
  }


}
