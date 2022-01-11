import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor() {

  }

  createUsuarioDb() {
    const usuario = [
      {
        usuario: 'carlos.gomez',
        name: 'Carlos Gómez',
        cargo: 'Gerente de Relación'

      },
      {
        empresa: 'Flotas La Macarena',
        nit: '800.220.154-2',
        capa: 'Oro',
        segmento: 'A'
      }
    ];
    return { usuario };
  }

}
