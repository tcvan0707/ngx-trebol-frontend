/*
 * Copyright (c) 2021 The Trébol eCommerce Project
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { API_SERVICE_INJECTION_TOKENS } from 'src/app/api/api-service-injection-tokens';
import { ILoginPublicApiService } from 'src/app/api/login-public-api.iservice';
import { AuthorizedAccess } from 'src/app/models/AuthorizedAccess';
import { IAccessApiService } from 'src/app/api/access-api.iservice';

@Injectable({ providedIn: 'root' })
export class CustomerManagerAccessResolver
  implements Resolve<AuthorizedAccess> {

  constructor(
    @Inject(API_SERVICE_INJECTION_TOKENS.access) private apiAccessService: IAccessApiService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<AuthorizedAccess>|Promise<AuthorizedAccess>|AuthorizedAccess {
    return this.apiAccessService.getResourceAuthorizedAccess('customers');
  }
}
