export abstract class AbstractGridCard {
  constructor(private _name: string,
              private _routerLink: string,
              private _color: string,
              private _col: string,
              private _row: string,) {
  }

  get name(): string {
    return this._name;
  }

  get routerLink(): string {
    return this._routerLink;
  }

  get col(): string {
    return this._col;
  }

  get row(): string {
    return this._row;
  }

  get color(): string {
    return this._color;
  }
}
