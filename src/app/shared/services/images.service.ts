import { Inject, Injectable, OnDestroy } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';
import { API_SERVICE_INJECTION_TOKENS } from 'src/app/api/api-service-injection-tokens';
import { IEntityDataApiService } from 'src/app/api/entity.data-api.iservice';
import { Image } from 'src/app/models/entities/Image';

@Injectable({ providedIn: 'root' })
export class ImagesService
  implements OnDestroy {

  private imageCache: Image[] = [];
  private imagesSource = new ReplaySubject<Image[]>();

  images$ = this.imagesSource.asObservable();

  constructor(
    @Inject(API_SERVICE_INJECTION_TOKENS.imagesCrud) private imageDataService: IEntityDataApiService<Image>
  ) {
    this.fetch().subscribe();
  }

  ngOnDestroy(): void {
    this.imagesSource.complete();
  }

  fetch(): Observable<void> {
    return this.imageDataService.readAll().pipe(
      tap(payload => {
        this.imageCache = payload.items;
        this.imagesSource.next(this.imageCache);
      }),
      mapTo(void 0)
    );
  }
}
