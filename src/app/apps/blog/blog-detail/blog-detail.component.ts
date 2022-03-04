import { Component, OnInit } from '@angular/core';
import { ServiceblogService } from '../blog-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../blog-type';
import { HighlightLoader, HighlightAutoResult } from 'ngx-highlightjs';

const themeAndroidStudio: string =
  'node_modules/highlight.js/styles/androidstudio.css';
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  id: any;
  blogDetail: Blog | null = null;

  code = `function myFunction() {
    document.getElementById("demo1").innerHTML = "Test 1!";
    document.getElementById("demo2").innerHTML = "Test 2!";
  }`;

  currentTheme: string = themeAndroidStudio;

  constructor(activatedRouter: ActivatedRoute, public service: ServiceblogService, public router: Router, private hljsLoader: HighlightLoader) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.blogDetail = this.service.Blogs.filter(x => x.id === +this.id)[0];
    this.hljsLoader.setTheme(this.currentTheme);

  }

  loginClick() {
    this.router.navigate([('/login')]);
  }

  newPost() {
    this.service.showEdit=false;
    this.router.navigate([('/post')]);

  }

  editPost() {
    this.service.showEdit=false;
    this.router.navigate([('/editPost'), this.blogDetail?.id]);
  }

  // editPost(){
  //   this.router.navigate([('/editPost'), this.service?.detailId]);

  // }

}
