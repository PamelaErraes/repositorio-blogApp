import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  
  getDataForm(blogForm: NgForm) {
    if (blogForm.invalid) {

    }
    
   


}
}