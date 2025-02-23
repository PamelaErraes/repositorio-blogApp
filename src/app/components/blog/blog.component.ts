import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NoticiasService } from '../../services/noticias.service';
import { INoticia } from '../../interfaces/inoticia.interfaces';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  noticiasServices = inject(NoticiasService);

  getDataForm(blogForm: NgForm) {
    if (blogForm.invalid) {
      this.mostrarError("Todos los campos son obligatorios.");
      return;
    }
    
    let newNoticia: INoticia = blogForm.value;

    let response = this.noticiasServices.insert(newNoticia);

    if (response.status) {
      this.mostrarExito("Noticia agregada correctamente.");
      blogForm.reset(); // Limpia el formulario después de agregar la noticia
    } else {
      this.mostrarError(response.msg);
    }
  }

  mostrarExito(mensaje: string) {
    Swal.fire({
      title: "Éxito",
      text: mensaje,
      icon: "success",
      confirmButtonText: "Aceptar"
    });
  }

  mostrarError(mensaje: string) {
    Swal.fire({
      title: "",
      text: mensaje,
      icon: "warning",
      confirmButtonText: "Aceptar"
    });
  }
}