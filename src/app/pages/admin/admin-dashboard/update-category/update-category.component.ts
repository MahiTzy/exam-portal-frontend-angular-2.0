import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../../service/apis/categoryApi/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'],
})
export class UpdateCategoryComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private snack: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  category: any = {};

  cid: any = null;

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.cid = params['cid'];
        this.categoryService.getCategory(this.cid).subscribe((data) => {
          // console.log(data);
          this.category = data;
        });
      },
      (error) => {
        this.snack.open('Error in fetching category', 'Close', {
          duration: 3000,
        });
      }
    );
  }

  updateCategory(category: any) {
    this.categoryService.updateCategory(category).subscribe(
      (data) => {
        // console.log(data);
        this.snack.open('Category Updated', 'Close', {
          duration: 3000,
        });
        this.router.navigate(['/admin/dashboard/categories']);
      },
      (error) => {
        // console.log(error);
        this.snack.open('Category Not Updated', 'Close', {
          duration: 3000,
        });
      }
    );
  }
}
