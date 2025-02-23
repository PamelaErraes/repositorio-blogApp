import { Component, inject } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interfaces';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-noticia-list',
  imports: [],
  templateUrl: './noticia-list.component.html',
  styleUrl: './noticia-list.component.css'
})
export class NoticiaListComponent {
  
  arrayNoticias: INoticia[]=[];  
  noticiasServices = inject(NoticiasService);

  ngOnInit(){
    this.arrayNoticias = this.noticiasServices.getAll();

  }

}
