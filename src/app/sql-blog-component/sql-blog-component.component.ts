import { Component, OnInit } from '@angular/core';
import { HighlightLoader, HighlightAutoResult } from 'ngx-highlightjs';

const themeAndroidStudio: string =
  'node_modules/highlight.js/styles/androidstudio.css';
@Component({
  selector: 'app-sql-blog-component',
  templateUrl: './sql-blog-component.component.html',
  styleUrls: ['./sql-blog-component.component.css']
})
export class SqlBlogComponentComponent implements OnInit {

  code1 = `  SELECT * FROM StockItems
  INNER JOIN ShelfLocations
  ON StockItems.ShelfLocationId = ShelfLocations.ShelfLocationId`;


  currentTheme: string = themeAndroidStudio;
  test: any

  constructor(private hljsLoader: HighlightLoader) { }

  ngOnInit(): void {
    this.hljsLoader.setTheme(this.currentTheme);

  }

}
