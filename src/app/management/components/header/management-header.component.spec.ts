/*
 * Copyright (c) 2021 The Trébol eCommerce Project
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { ManagementService } from 'src/app/management/management.service';
import { Person } from 'src/app/models/entities/Person';
import { ManagementHeaderComponent } from './management-header.component';

describe('ManagementHeaderComponent', () => {
  let component: ManagementHeaderComponent;
  let fixture: ComponentFixture<ManagementHeaderComponent>;
  let mockManagementService: Partial<ManagementService>;
  let mockAppService: Partial<AppService>;
  let mockSnackBarService: Partial<MatSnackBar>;
  let mockDialogService: Partial<MatDialog>;

  beforeEach(waitForAsync(() => {
    mockManagementService = {
      switchSidenav() {},
      currentPageName$: of('')
    };
    mockAppService = {
      getUserProfile() { return of(new Person()); },
      closeCurrentSession() {}
    };
    mockSnackBarService = {
      open(m: string, a: string) { return void 0; }
    };
    mockDialogService = {
      open() { return void 0; }
    };

    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule
      ],
      declarations: [ ManagementHeaderComponent ],
      providers: [
        { provide: ManagementService, useValue: mockManagementService },
        { provide: AppService, useValue: mockAppService },
        { provide: MatSnackBar, useValue: mockSnackBarService },
        { provide: MatDialog, useValue: mockDialogService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
