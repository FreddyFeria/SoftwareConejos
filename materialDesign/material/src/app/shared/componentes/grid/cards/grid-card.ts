import { InjectionToken } from '@angular/core';

export class GridCard {
  static metadata: any = {
    NAME: new InjectionToken<string>('name'),
    ROUTERLINK: new InjectionToken<string>('routerLink'),
    ICONCLASS: new InjectionToken<string>('iconClass'),
    COLOR: new InjectionToken<string>('color')
  };

  constructor(private _input: {
    name: {
      key: InjectionToken<string>,
      value: string
    },
    routerLink: {
      key: InjectionToken<string>,
      value: string
    },
    iconClass: {
      key: InjectionToken<string>,
      value: string
    },
    color: {
      key: InjectionToken<string>,
      value: string
    }
  }, private _component: any) {
  }

  get input(): {
    name: {
      key: InjectionToken<string>;
      value: string
    };
    routerLink: {
      key: InjectionToken<string>;
      value: string
    };
    iconClass: {
      key: InjectionToken<string>;
      value: string
    };
    color: {
      key: InjectionToken<string>;
      value: string
    }
  } {
    return this._input;
  }

  get component(): any {
    return this._component;
  }
}
