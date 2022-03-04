import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgParticlesModule } from 'ng-particles';
import { BlogComponent } from './apps/blog/blog.component';
import { BlogDetailComponent } from './apps/blog/blog-detail/blog-detail.component';







@NgModule({
  declarations: [
    AppComponent,
    BlogDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgParticlesModule,
    HighlightModule,
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      // lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
      languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        css: () => import('highlight.js/lib/languages/css'),
        xml: () => import('highlight.js/lib/languages/xml')
      },
      // themePath: 'path-to-theme.css' // Optional, and useful if you want to change the theme dynamically
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
