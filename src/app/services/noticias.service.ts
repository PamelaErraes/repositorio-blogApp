import { Injectable } from '@angular/core';
import { INoticia } from '../interfaces/inoticia.interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private arrayNoticias: INoticia[] = [];

  insert(news: INoticia): { status: boolean; msg: string } {
    // Validación: comprobar si algún campo está vacío
    if (!news.titulo?.trim() || !news.imagen?.trim() || !news.texto?.trim() || !news.fecha?.trim()) {
      return {
        status: false, // Indica error
        msg: 'Todos los campos son obligatorios. Por favor, complétalos antes de continuar.'
      };
    }

    this.arrayNoticias.push(news);
   // console.log(this.arrayNoticias);

    return {
      status: true, // Indica éxito
      msg: 'Noticia agregada correctamente'
    };
  }
  getAll(): INoticia[]{
    return this.arrayNoticias;


  }
}
