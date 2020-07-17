import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Client } from 'src/data/models/entities/Client';
import { DataManagerAbstractComponent } from '../../data-manager.abstract-component';
import { ClientManagerService } from './client-manager.service';

@Component({
  selector: 'app-client-manager',
  templateUrl: './client-manager.component.html',
  styleUrls: [ '../../data-manager.styles.css' ]
})
export class ClientManagerComponent
  extends DataManagerAbstractComponent<Client> {

  public tableColumns: string[] = [ 'name', 'idCard' ];

  constructor(
    protected service: ClientManagerService,
    protected dialogService: MatDialog
  ) {
    super();
  }

  public openFormDialog(item: Client): Observable<Client> {
    throw new Error('Method not implemented.');
  }

}