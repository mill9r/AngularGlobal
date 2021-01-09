import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private _loading = false;

  get loading(): boolean {
    return this._loading;
  }

  public onRequestStarted(): void {
    this._loading = true;
  }

  public onRequestStopped(): void {
    this._loading = false;
  }
}
