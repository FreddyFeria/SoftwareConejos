import { Injectable } from '@angular/core';
import { ItemMenu } from '../../entites/item-menu'

@Injectable({
  providedIn: 'root'
})

export class CatalogService {
	private items: ItemMenu[];
	constructor() { }

	getMenuLateral(): ItemMenu[]{
		this.items = [
			{icono: 'dashboard', nombre: 'Estadisticas', ruta: '/dashboard', seleccion: true, hijos: [
				{icono: 'pets', nombre: 'Individuos', ruta: '', seleccion: false, hijos: []}
			]}, 
			{icono: 'pets', nombre: 'Animales', ruta: '', seleccion: false, hijos: []}]
		return this.items;
	}
}
