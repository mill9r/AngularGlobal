import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageHelperService {
  constructor() {}

  public set<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    }catch (error) {
      console.error(error);
    }
  }

  public get<T>(key: string): T {
    let value;
    try {
      value = localStorage.getItem(key);
    }catch (error){
      console.error(error);
    }

    return value;
  }

  public reset(key: string): void {
    localStorage.removeItem(key);
  }
}
