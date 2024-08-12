import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from '../../../../service/apis/categoryApi/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  constructor(private category: CategoryService, private snack: MatSnackBar) {}

  categories: any = [];

  ngOnInit(): void {
    this.category.getCategories().subscribe(
      (data) => {
        // console.log(data);
        this.categories = data;
      },
      (error) => {
        this.snack.open('Error fetching categories', 'ok', {
          duration: 3000,
        });
      }
    );
  }

  deleteCategory(id: any) {
    this.category.deleteCategory(id).subscribe(
      (data) => {
        this.categories = this.categories.filter(
          (category: any) => category.cid != id
        );
        this.snack.open('Category deleted successfully', 'ok', {
          duration: 3000,
        });
      },
      (error) => {
        this.snack.open('Error deleting category', 'ok', {
          duration: 3000,
        });
      }
    );
  }
}
