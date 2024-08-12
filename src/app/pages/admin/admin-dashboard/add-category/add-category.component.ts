import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from '../../../../service/apis/categoryApi/category.service';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css',
})
export class AddCategoryComponent {
  constructor(
    private categoryService: CategoryService,
    private snack: MatSnackBar
  ) {}

  category: any = {
    title: '',
    description: '',
  };

  addCategory() {
    if (this.category.title != '' && this.category.description != '') {
      this.categoryService
        .addCategory(this.category)
        .subscribe((response: any) => {
          console.log(response);
          this.snack.open('Category added successfully', 'ok', {
            duration: 3000,
          });
        });
        this.category.title = '';
        this.category.description = '';
    } else {
      this.snack.open('Please fill all the fields', 'ok', {
        duration: 3000,
      });
    }
  }
}
