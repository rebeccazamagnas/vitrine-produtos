import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly _items$ = new BehaviorSubject<IProduct[]>([]);
  readonly items$ = this._items$.asObservable();
  readonly count$ = this.items$.pipe(map(items => items.length));

  add(product: IProduct) {
    const current = this._items$.value;
    this._items$.next([...current, product]);
  }

  remove(id: number) {
    this._items$.next(this._items$.value.filter(p => p.id !== id));
  }

  clear() {
    this._items$.next([]);
  }

  getSnapshot() {
    return this._items$.value;
  }
}
