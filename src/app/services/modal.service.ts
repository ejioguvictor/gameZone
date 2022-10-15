import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private visible = false

  constructor( ) {}

    isModalOpen(){
      return this.visible;
    }

    toggleModal(){
      return this.visible = !this.visible;
    }
}
