// Copyright (c) 2020 Benjamin La Madrid
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Injectable, Inject } from '@angular/core';
import { Product } from 'src/app/models/entities/Product';
import { Subject, BehaviorSubject, Observable, merge } from 'rxjs';
import { ProductFilters } from 'src/app/shared/components/product-filters-panel/product-filters-panel.component';
import { API_SERVICE_INJECTION_TOKENS } from 'src/app/api/api-service-injection-tokens';
import { IEntityDataApiService } from 'src/app/api/entity.data-api.iservice';
import { concatMap, mapTo, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductsArrayService {

  protected productsArray: Product[] = [];

  protected productsArraySource: Subject<Product[]> = new BehaviorSubject([]);
  protected productFiltersSource: Subject<ProductFilters> = new BehaviorSubject({});

  public productsArray$: Observable<Product[]> = this.productsArraySource.asObservable();
  public loading$: Observable<boolean>;
  public filteredProductsArray$: Observable<Product[]>;

  constructor(
    @Inject(API_SERVICE_INJECTION_TOKENS.dataProducts) protected productDataService: IEntityDataApiService<Product>,
  ) {
    this.filteredProductsArray$ = this.productFiltersSource.asObservable().pipe(
      concatMap(
        (filters: ProductFilters) => {
          if (JSON.stringify(filters) !== '{}') {
            return this.productDataService.readFiltered(filters);
          } else {
            return this.productDataService.readAll();
          }
        }
      ),
      map(response => response.items)
    );

    this.loading$ = merge(
      this.productFiltersSource.asObservable().pipe(mapTo(true)),
      this.filteredProductsArray$.pipe(mapTo(false))
    );
  }

  public changeFiltersTo(filters: ProductFilters): void {
    this.productFiltersSource.next(filters);
  }

  public includeProduct(prod: Product): void {
    this.productsArray.push(prod);
    this.productsArraySource.next(this.productsArray);
  }

  public dropProductByIndex(index: number): void {
    this.productsArray.splice(index, 1);
    this.productsArraySource.next(this.productsArray);
  }
}
