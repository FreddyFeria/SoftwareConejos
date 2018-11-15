import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class itemMenu {
  icono: string;
  nombre: string;
  ruta: string;
}

export class CatalogService {
	private items: itemMenu[];
	constructor() { }

	getMenuLateral(): itemMenu[]{
		this.items = [{icono: 'dashboard', nombre: 'Dashboard', ruta: ''}, {icono: 'pets', nombre: 'Animales', ruta: ''}]
		return this.items;
	}
}
