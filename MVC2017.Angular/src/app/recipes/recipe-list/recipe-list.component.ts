import { Component, OnInit } from '@angular/core';
import * as models from "../../../models/DemoProject.Entities"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: models.TPApp.RecibeEntity[] = [
    { Id: 12, Name: "", Description: "", ImagePath: "" }
  ];
  constructor() { }

  ngOnInit() {
  }

}
