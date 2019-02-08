import { Injectable, Injector } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageFacadeService {

  constructor(private injector: Injector) { }
}
