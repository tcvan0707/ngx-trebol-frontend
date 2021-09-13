// Copyright (c) 2020 Benjamin La Madrid
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpApiService } from 'src/app/api/http/http-api.abstract.service';
import { Receipt } from 'src/app/models/entities/Receipt';
import { environment } from 'src/environments/environment';
import { IReceiptPublicApiService } from '../../receipt-public-api.iservice';

@Injectable()
export class ReceiptPublicHttpApiService
  extends HttpApiService
  implements IReceiptPublicApiService {

  protected baseUrl = `${environment.apiUrls.public}/receipt`;

  constructor(http: HttpClient) {
    super(http);
  }

  fetchTransactionReceiptById(id: number) {
    return this.http.get<Receipt>(
      `${this.baseUrl}/${id}`
    );
  }
}
