import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product, Category } from '../interface/product';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


  @Component({
    selector: 'app-addproduct',
    templateUrl: './addproduct.component.html',
    styleUrls: ['./addproduct.component.scss']
  })
  export class AddproductComponent {
    errorMessage: string = '';
    product: Product = {
      productID: 0,
      productName: '',
      productDesc: '',
      price: 0,
      productImgURL: '',
      productImageFile: null,
      quantityInStock: 0,
      category: {
        categoryID: 0,
        categoryName: '',
        parentCategory: null
      },
    };
    categories: Category[] = []; // Add an empty array to hold the retrieved categories

    constructor(private productService: ProductService, private router: Router) { }

    ngOnInit() {
      this.getCategories(); // Call the method to fetch the categories when the component is initialized
    }

    getCategories() {
      this.productService.getCategories().subscribe(
        (categories: Category[]) => {
          this.categories = categories;
        },
        (error) => {
          console.error('Error fetching categories:', error);
        }
      );
    }

    onFileSelected(event: any) {
      const file: File = event.target.files[0];
      this.product.productImageFile = file;
    }

    addProduct(addProductForm: NgForm) {
      console.log(addProductForm)
      // Create a new FormData object
      const formData = new FormData();

      // Append the form data to the FormData object
      formData.append('productName', this.product.productName);
      formData.append('productDesc', this.product.productDesc);
      formData.append('price', String(this.product.price));
      formData.append('quantityInStock',String(this.product.quantityInStock));
      formData.append('category.categoryID', String(this.product.category.categoryID));

      formData.append('productImage', this.product.productImageFile as File);

      if (addProductForm.invalid) {
        // Loop through each form control
        Object.keys(addProductForm.controls).forEach(controlName => {
          const control = addProductForm.controls[controlName];

          // Check if the control is invalid and has been touched or submitted
          if (control.invalid && (control.touched || addProductForm.submitted)) {
            console.log(`${controlName} is required`);
            // Display error message or perform any other action
          }
        });

        return;
      }

      // Call the createProduct method of the ProductService with the FormData
      this.productService.createProduct(formData).subscribe(
        (response: any) => {

          // Handle success response
          console.log('Product successfully added:', response);
          Swal.fire({
            icon: 'success',
            title: 'Product Added',
            text: 'The product has been successfully added.',
            confirmButtonText: 'OK'
          }).then(() => {
            // Redirect to success result page or perform any other necessary actions
          });
        },
        (error) => {
          // Handle error response
          console.error('Error creating product:', error);
          // Show an error message to the user
        }
      );
    }
  }
