/*
 * Copyright (c) 2021 The Trébol eCommerce Project
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Injectable } from '@angular/core';
import { Image } from 'src/app/models/entities/Image';
import { MOCK_IMAGES } from '../mock/mock-images.datasource';
import { TransactionalEntityDataLocalMemoryApiService } from '../transactional-entity-data.local-memory-api.abstract.service';

@Injectable()
export class ImagesDataLocalMemoryApiService
  extends TransactionalEntityDataLocalMemoryApiService<Image> {

  protected items: Image[] = MOCK_IMAGES.map(n => Object.assign(new Image(), n));

  constructor() {
    super();
  }

  protected itemExists(image: Partial<Image>) {
    return this.items.some(image2 => (image.filename === image2.filename));
  }

  protected getIndexOfItem(image: Partial<Image>) {
    return this.items.findIndex(image2 => (image.filename === image2.filename));
  }
}
