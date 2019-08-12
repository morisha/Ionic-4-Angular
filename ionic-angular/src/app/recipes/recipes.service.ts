import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {

 private recipes: Recipe[] = [
      {
          id: 'r1',
          title: 'Schnitzel',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/220px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
          ingredients: ['French Fries', 'Pork Meat', 'Salad']
      },

      {
          id: 'r2',
          title: 'Spaghetti',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Spaghetti_draining.jpg/200px-Spaghetti_draining.jpg',
          ingredients: ['Spaghetti', 'meat', 'Tomatoes']
      }
  ];


  constructor() { }

  getAllRecipes() {
      return [...this.recipes];
  }

  getRecipe(recipeId: string) {
      return {...this.recipes.find(recipe => {
          return recipe.id === recipeId;
      })};
  }
}
