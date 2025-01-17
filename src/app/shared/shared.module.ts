/*
 * Copyright (c) 2021 The Trébol eCommerce Project
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { AddressesEditorFormComponent } from './components/addresses-editor-form/addresses-editor-form.component';
import { CartProductUnitsControlComponent } from './components/cart-product-units-control/cart-product-units-control.component';
import { CenteredMatProgressSpinnerComponent } from './components/centered-mat-spinner/centered-mat-spinner.component';
import { CompanyFormComponent } from './components/company-form/company-form.component';
import { DialogSwitcherButtonComponent } from './components/dialog-switcher-button/dialog-switcher-button.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ImageUploadFormComponent } from './components/image-upload-form/image-upload-form.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { ProductFiltersPanelComponent } from './components/product-filters-panel/product-filters-panel.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { SalespersonFormComponent } from './components/salesperson-form/salesperson-form.component';
import { SellFormComponent } from './components/sell-form/sell-form.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { AddressFormDialogComponent } from './dialogs/address-form/address-form-dialog.component';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';
import { EditProfileFormDialogComponent } from './dialogs/edit-profile-form-dialog/edit-profile-form-dialog.component';
import { ImagesArrayDialogComponent } from './dialogs/images-array/images-array-dialog.component';
import { InformationDialogComponent } from './dialogs/information-dialog/information-dialog.component';
import { FormGroupOwnerOutletDirective } from './directives/form-group-owner-outlet/form-group-owner-outlet.directive';
import { AddressPipe } from './pipes/address/address.pipe';


const PUBLIC_COMPONENTS = [
  CenteredMatProgressSpinnerComponent,
  ConfirmationDialogComponent,
  AddressFormComponent,
  AddressFormDialogComponent,
  AddressesEditorFormComponent,
  FileUploadComponent,
  CartProductUnitsControlComponent,
  CompanyFormComponent,
  PersonFormComponent,
  ProductFormComponent,
  SalespersonFormComponent,
  SellFormComponent,
  UserFormComponent,
  ProductFiltersPanelComponent,
  EditProfileFormDialogComponent,
  DialogSwitcherButtonComponent,
  InformationDialogComponent,
  SlideshowComponent,
  FormGroupOwnerOutletDirective,
  AddressPipe,
  ImagesArrayDialogComponent,
  ImageUploadFormComponent
];

@NgModule({
  declarations: [
    ...PUBLIC_COMPONENTS
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,

    ...PUBLIC_COMPONENTS
  ]
})
export class SharedModule { }
