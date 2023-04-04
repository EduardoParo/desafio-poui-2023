import { Injectable } from '@angular/core';
import { EntryService } from '../../../shared/services/entries/entries.service';
import { IEntry } from '../../../shared/interfaces/category';
import { PoNotificationService } from '@po-ui/ng-components';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntriesGuard implements Resolve<IEntry> {
  constructor(
    private entriesService: EntryService,
    private poNotification: PoNotificationService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IEntry> {
    return this.entriesService.getAll();
  }
}
