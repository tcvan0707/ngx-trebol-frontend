// Copyright (c) 2020 Benjamin La Madrid
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/models/entities/Product';
import { Receipt } from 'src/app/models/entities/Receipt';
import { API_SERVICE_INJECTION_TOKENS } from '../../api-service-injection-tokens';
import { EntityDataLocalMemoryApiService } from '../entity-data.local-memory-api.abstract.service';
import { IReceiptPublicApiService } from '../../receipt-public-api.iservice';
import { MOCK_SALES } from '../data/sources/mock-sales.datasource';
import { map } from 'rxjs/operators';

@Injectable()
export class ReceiptPublicLocalMemoryApiService
  implements IReceiptPublicApiService {

  protected items: Product[] = [];

  constructor(
    @Inject(API_SERVICE_INJECTION_TOKENS.dataProducts) private dataService: EntityDataLocalMemoryApiService<Product>
  ) {
    this.dataService.fetchPage().subscribe(response => {
      this.items = response.items;
    });
  }

  fetchTransactionReceiptById(id: number): Observable<Receipt> {
    return of(MOCK_SALES[0]).pipe(
      map(s => ({
        buyOrder: s.id,
        amount: s.subtotalValue,
        details: s.details,
        date: new Date().toUTCString(),
        status: 'Testing'
      }))
    );
  }
}
