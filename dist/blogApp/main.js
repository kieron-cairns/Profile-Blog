(self["webpackChunkblog_app"] = self["webpackChunkblog_app"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [
    {
        path: '',
        children: [
            // { path: '', redirectTo: '/apps', pathMatch: 'full' },
            { path: '', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_apps_apps_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./apps/apps.module */ 9269)).then(m => m.AppsModule) }
        ]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);



class AppComponent {
    constructor() {
        this.title = 'blogApp';
        this.code = `function myFunction() {
    document.getElementById("demo1").innerHTML = "Test 1!";
    document.getElementById("demo2").innerHTML = "Test 2!";
  }`;
        this.Navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        // @ViewChild('sidenav') sidenav: MatSidenav;
        this.isOpened = true;
        this.desktopViewWidth = 950;
        this.profileImage = "../assets/images/me.jpg";
        this.myStyle = {};
        this.width = 100;
        this.height = 100;
        this.id = "tsparticles";
        /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
        this.particlesUrl = "http://foo.bar/particles.json";
        /* or the classic JavaScript object */
        this.particlesOptions = {
            background: {
                color: {
                    value: "#FFFFFF"
                }
            },
            // image: {
            //   src: "img/github.svg",
            //   width: 100,
            //   height: 100
            // },
            fpsLimit: 20,
            interactivity: {
                detectsOn: "canvas",
                events: {
                    onClick: {
                        enable: true,
                        mode: "push"
                    },
                    onHover: {
                        enable: false,
                        mode: "repulse"
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 800,
                        duration: 2,
                        opacity: 0.8,
                        size: 80
                    },
                    push: {
                        quantity: 4
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: "#70DBDB"
                },
                links: {
                    color: "#70DBDB",
                    distance: 175,
                    enable: true,
                    opacity: 0.5,
                    width: 1
                },
                collisions: {
                    enable: true
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 0.35,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 1275
                    },
                    value: 145
                },
                opacity: {
                    value: 0.4
                },
                shape: {
                    type: "circle"
                },
                size: {
                    random: true,
                    value: 2
                }
            },
            detectRetina: true
        };
    }
    particlesLoaded(container) {
        console.log(container);
    }
    particlesInit(main) {
        console.log(main);
        // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], outputs: { Navigate: "Navigate" }, decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-highlightjs */ 386);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var ng_particles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-particles */ 2349);
/* harmony import */ var _apps_blog_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apps/blog/blog-detail/blog-detail.component */ 2325);
/* harmony import */ var _sql_blog_component_sql_blog_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sql-blog-component/sql-blog-component.component */ 5089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [{
            provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_5__.HIGHLIGHT_OPTIONS,
            useValue: {
                lineNumbers: true,
                coreLibraryLoader: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_core_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/core */ 1633)),
                // themePath: 'node_modules/highlight.js/styles/dark.css', // Optional, and useful if you want to change the theme dynamically
                // lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
                languages: {
                    typescript: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_typescript_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/typescript */ 8633)),
                    css: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_css_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/css */ 5193)),
                    xml: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_xml_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/xml */ 6469))
                },
            },
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            ng_particles__WEBPACK_IMPORTED_MODULE_10__.NgParticlesModule,
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_5__.HighlightModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _apps_blog_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_2__.BlogDetailComponent,
        _sql_blog_component_sql_blog_component_component__WEBPACK_IMPORTED_MODULE_3__.SqlBlogComponentComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        ng_particles__WEBPACK_IMPORTED_MODULE_10__.NgParticlesModule,
        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_5__.HighlightModule] }); })();


/***/ }),

/***/ 8469:
/*!****************************************!*\
  !*** ./src/app/apps/blog/blog-data.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blogs": () => (/* binding */ blogs)
/* harmony export */ });
const blogs = [
    {
        id: 1,
        image: 'assets/images/blog/101.jpg',
        heading: 'Unit testing Asynchronous Methods With Guard Cluases',
        subHeading: '',
        blogDate: 'Mar 17, 2022',
        blogDetail: "Hello all. In this post, I will be demonstrating a way in which you can unit test asynchronous methods that have guard clauses in place for null arguments. The tests are written using Moq and Xunit. The example I will be working on is a simple .Net Core 6 CRUD web API project. The source code will be available for everyone. lets get straight into it.",
        blogDetail2: 'The following code snippet is part of a query service that calls a repository method for getting a stock item by its string identifier. I know a stirng would normally not be used for an identifier, but this is for demo purposes 🤫 :',
        blogDetail3: 'And to test this method, this is the unit test I have written:',
        blogDetail4: 'Using a builder pattern, a mocked version of the stock repository calls the GetStockItemById method, where an id is passed from the unit test, along with a list item of type StockItem so that the assertions can be made for each property within the list.',
        blogDetail5: 'This is all fine and well, but if there is a guard clause in place in the unit test class for testing the query service method for null arguments, then this is going to be an issue. This is what my guard clause looks like, based on this written piece on https://docs.educationsmediagroup.com/unit-testing-csharp/autofixture/idioms:',
        blogDetail6: 'Running this code now as it is will produce the following error:',
        blogDetail7: 'As discussed in the above GitHub thread, the reason this error is produced is because guard clause assertions do not detect guards on asynchronous method parameters because the exception does not throw until the returned task is waited or awaited.',
        blogDetail8: 'Additionally, this GitHub thread also demonstrates a simple workaround for this error by creating a method within the query service method of the same return type, and calling that method in the return statement of the query service method, as shown below:',
        blogDetail9: 'This workaround allows the task to be actually be returned, whereas before, the method was in a limbo state of waiting for the task to be waited or awaited.',
    },
];


/***/ }),

/***/ 2325:
/*!****************************************************************!*\
  !*** ./src/app/apps/blog/blog-detail/blog-detail.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogDetailComponent": () => (/* binding */ BlogDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _blog_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blog-service.service */ 9552);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-highlightjs */ 386);




const _c0 = function () { return ["typescript"]; };
const themeAndroidStudio = 'node_modules/highlight.js/styles/androidstudio.css';
class BlogDetailComponent {
    constructor(activatedRouter, service, router, hljsLoader) {
        this.service = service;
        this.router = router;
        this.hljsLoader = hljsLoader;
        this.blogDetail = null;
        this.code1 = `public class StockQueryService : IStockQueryService
  {
      private readonly IStockRepository stockRepository;

      public StockQueryService(IStockRepository stockRepository)
      {
          this.stockRepository = stockRepository;
      }

      public async Task<List<StockItem>> GetStockItemById(string id)
      {
          if (id == null) throw new ArgumentNullException(nameof(id));

          return await this.stockRepository.GetStockItemById(id).ConfigureAwait(false);
      }
  }`;
        this.code2 = `[Fact]
  public async Task GetStockItemById_Returns_Collection_Of_Stock_Item()
  {
      //Arrange
      var testBuilder = new TestFixtureBuilder();

      var expected = new List<StockItem>()
      {
          new StockItem {Id = "1", Name = "MacBook Pro 13inch", Quantity = 10, Price = 1300.0}
      };

      string expectedName = "MacBook Pro 13inch";
      string id = "1";

      //Act
      var sut = testBuilder.WithStockItemList(expected, id).BuildSut();

      var result = await sut.GetStockItemById(id);

      //Assert
      result.Should().BeOfType<List<StockItem>>();
      result.Should().HaveCount(1);
      result[0].Id.Should().Be(id);
      result[0].Name.Should().Be(expectedName);
  }`;
        this.code3 = `[Fact]
  public void GetStockItemsById_Is_Gaurded_Against_Null_Args()
  {

      //Arrange
      var fixture = new Fixture();
      var assertion = fixture.Create<GuardClauseAssertion>();

      fixture.Customizations.Add(
          new TypeRelay(
              typeof(TestingAsyncMethodsGuardClauses.Repositories.IStockRepository),
              typeof(TestingAsyncMethodsGuardClauses.Repositories.StockRepository)));

      //Act & Assert
      assertion.Verify(typeof(StockQueryService).GetMethod(nameof(StockQueryService.GetStockItemById)));
  }`;
        this.code4 = ` AutoFixture.Idioms.GuardClauseException : A Guard Clause test was performed on a method that returns a Task, Task<T> (possibly in an 'async' method), but the test failed. See the inner exception for more details. However, because of the async nature of the task, this test failure may look like a false positive. Perhaps you already have a Guard Clause in place, but inside the Task or inside a method marked with the 'async' keyword (if you're using C#); if this is the case, the Guard Clause is dormant, and will first be triggered when a client accesses the Result of the Task. This doesn't adhere to the Fail Fast principle, so should be addressed.
  See https://github.com/AutoFixture/AutoFixture/issues/268 for more details.
  ---- AutoFixture.Idioms.GuardClauseException : An attempt was made to assign the value null to the parameter "id" of the method "GetStockItemById", and no Guard Clause prevented this. Are you missing a Guard Clause?`;
        this.code5 = ` public Task<List<StockItem>> GetStockItemById(string id)
  {
      if (id == null) throw new ArgumentNullException(nameof(id));

      async Task<List<StockItem>> DoWork()
      {
          return await this.stockRepository.GetStockItemById(id).ConfigureAwait(false);
      }

      return DoWork();
  }`;
        this.currentTheme = themeAndroidStudio;
        this.id = activatedRouter.snapshot.paramMap.get('id');
        this.myScriptElement = document.createElement('script');
        this.myScriptElement.innerHTML = run();
        document.body.appendChild(this.myScriptElement);
        this.test = __webpack_require__(/*! html-loader!./Word_Art_2.html */ 157);
        this.test = this.test.default;
    }
    ngOnInit() {
        this.blogDetail = this.service.Blogs.filter(x => x.id === +this.id)[0];
        this.hljsLoader.setTheme(this.currentTheme);
        run();
    }
    loginClick() {
        this.router.navigate([('/login')]);
    }
    newPost() {
        this.service.showEdit = false;
        this.router.navigate([('/post')]);
    }
    editPost() {
        var _a;
        this.service.showEdit = false;
        this.router.navigate([('/editPost'), (_a = this.blogDetail) === null || _a === void 0 ? void 0 : _a.id]);
    }
}
BlogDetailComponent.ɵfac = function BlogDetailComponent_Factory(t) { return new (t || BlogDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_blog_service_service__WEBPACK_IMPORTED_MODULE_0__.ServiceblogService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__.HighlightLoader)); };
BlogDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BlogDetailComponent, selectors: [["app-blog-detail"]], decls: 57, vars: 33, consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-6", "align-self-center", "text-center"], [1, "title"], [1, "col-md-8", "no-trans"], [1, "mini-spacer"], ["alt", "wrapkit", 1, "img-fluid", 3, "src"], [1, "d-flex", "align-items-center", "text-uppercase", "m-t-40", "font-13", "font-medium"], ["routerLink", "", 1, "link"], [1, "ml-auto"], [1, "title", "font-light"], ["href", "https://github.com/AutoFixture/AutoFixture/issues/268"], [1, "m-t-30", "m-b-30", 2, "font-size", "17.5px"], [1, "m-t-30", "m-b-30", 3, "highlight", "languages", "lineNumbers"], [3, "highlight", "languages", "lineNumbers"], ["href", "www.GitHub.com"], [1, "m-t-30"]], template: function BlogDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Kieron's Development Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Kieron Cairns");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "GitHub Thread");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "code", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "https://github.com/AutoFixture/AutoFixture/issues/268");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.blogDetail == null ? null : ctx.blogDetail.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.blogDetail == null ? null : ctx.blogDetail.blogDate, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.blogDetail == null ? null : ctx.blogDetail.heading, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.blogDetail == null ? null : ctx.blogDetail.subHeading, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.blogDetail == null ? null : ctx.blogDetail.blogDetail, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.blogDetail == null ? null : ctx.blogDetail.blogDetail2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.code1)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](28, _c0))("lineNumbers", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.blogDetail == null ? null : ctx.blogDetail.blogDetail3, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.code2)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c0))("lineNumbers", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.blogDetail == null ? null : ctx.blogDetail.blogDetail4, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.blogDetail == null ? null : ctx.blogDetail.blogDetail5, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.code3)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c0))("lineNumbers", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.blogDetail == null ? null : ctx.blogDetail.blogDetail6, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.code4)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c0))("lineNumbers", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.blogDetail == null ? null : ctx.blogDetail.blogDetail7, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.blogDetail == null ? null : ctx.blogDetail.blogDetail8, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.code5)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c0))("lineNumbers", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.blogDetail == null ? null : ctx.blogDetail.blogDetail9, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__.Highlight], styles: ["pre[_ngcontent-%COMP%]   code.hljs[_ngcontent-%COMP%]{display:block;overflow-x:auto;padding:1em}code.hljs[_ngcontent-%COMP%]{padding:3px 5px}.hljs[_ngcontent-%COMP%]{color:#a9b7c6;background:#282b2e}.hljs-bullet[_ngcontent-%COMP%], .hljs-literal[_ngcontent-%COMP%], .hljs-number[_ngcontent-%COMP%], .hljs-symbol[_ngcontent-%COMP%]{color:#6897bb}.hljs-deletion[_ngcontent-%COMP%], .hljs-keyword[_ngcontent-%COMP%], .hljs-selector-tag[_ngcontent-%COMP%]{color:#cc7832}.hljs-link[_ngcontent-%COMP%], .hljs-template-variable[_ngcontent-%COMP%], .hljs-variable[_ngcontent-%COMP%]{color:#629755}.hljs-comment[_ngcontent-%COMP%], .hljs-quote[_ngcontent-%COMP%]{color:grey}.hljs-meta[_ngcontent-%COMP%]{color:#bbb529}.hljs-addition[_ngcontent-%COMP%], .hljs-attribute[_ngcontent-%COMP%], .hljs-string[_ngcontent-%COMP%]{color:#6a8759}.hljs-section[_ngcontent-%COMP%], .hljs-title[_ngcontent-%COMP%], .hljs-type[_ngcontent-%COMP%]{color:#ffc66d}.hljs-name[_ngcontent-%COMP%], .hljs-selector-class[_ngcontent-%COMP%], .hljs-selector-id[_ngcontent-%COMP%]{color:#e8bf6a}.hljs-emphasis[_ngcontent-%COMP%]{font-style:italic}.hljs-strong[_ngcontent-%COMP%]{font-weight:700}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2ctZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxhQUFhLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxVQUFVLGVBQWUsQ0FBQyxNQUFNLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxxREFBcUQsYUFBYSxDQUFDLGdEQUFnRCxhQUFhLENBQUMsa0RBQWtELGFBQWEsQ0FBQywwQkFBMEIsVUFBVSxDQUFDLFdBQVcsYUFBYSxDQUFDLDRDQUE0QyxhQUFhLENBQUMscUNBQXFDLGFBQWEsQ0FBQyxrREFBa0QsYUFBYSxDQUFDLGVBQWUsaUJBQWlCLENBQUMsYUFBYSxlQUFlIiwiZmlsZSI6ImJsb2ctZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwcmUgY29kZS5obGpze2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3cteDphdXRvO3BhZGRpbmc6MWVtfWNvZGUuaGxqc3twYWRkaW5nOjNweCA1cHh9LmhsanN7Y29sb3I6I2E5YjdjNjtiYWNrZ3JvdW5kOiMyODJiMmV9LmhsanMtYnVsbGV0LC5obGpzLWxpdGVyYWwsLmhsanMtbnVtYmVyLC5obGpzLXN5bWJvbHtjb2xvcjojNjg5N2JifS5obGpzLWRlbGV0aW9uLC5obGpzLWtleXdvcmQsLmhsanMtc2VsZWN0b3ItdGFne2NvbG9yOiNjYzc4MzJ9LmhsanMtbGluaywuaGxqcy10ZW1wbGF0ZS12YXJpYWJsZSwuaGxqcy12YXJpYWJsZXtjb2xvcjojNjI5NzU1fS5obGpzLWNvbW1lbnQsLmhsanMtcXVvdGV7Y29sb3I6Z3JleX0uaGxqcy1tZXRhe2NvbG9yOiNiYmI1Mjl9LmhsanMtYWRkaXRpb24sLmhsanMtYXR0cmlidXRlLC5obGpzLXN0cmluZ3tjb2xvcjojNmE4NzU5fS5obGpzLXNlY3Rpb24sLmhsanMtdGl0bGUsLmhsanMtdHlwZXtjb2xvcjojZmZjNjZkfS5obGpzLW5hbWUsLmhsanMtc2VsZWN0b3ItY2xhc3MsLmhsanMtc2VsZWN0b3ItaWR7Y29sb3I6I2U4YmY2YX0uaGxqcy1lbXBoYXNpc3tmb250LXN0eWxlOml0YWxpY30uaGxqcy1zdHJvbmd7Zm9udC13ZWlnaHQ6NzAwfVxuIl19 */"] });


/***/ }),

/***/ 9552:
/*!***************************************************!*\
  !*** ./src/app/apps/blog/blog-service.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceblogService": () => (/* binding */ ServiceblogService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var _blog_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog-data */ 8469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3882);




class ServiceblogService {
    constructor(http) {
        this.http = http;
        this.Blogs = [];
        this.loginStatusService = false;
        this.detailId = -1;
        this.showEdit = false;
    }
    getBlog() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(_blog_data__WEBPACK_IMPORTED_MODULE_0__.blogs);
    }
    addPost(bl) {
        this.Blogs.splice(0, 0, bl);
    }
    deletePost(id) {
        this.Blogs = this.Blogs.filter(b => b.id !== id);
    }
}
ServiceblogService.ɵfac = function ServiceblogService_Factory(t) { return new (t || ServiceblogService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
ServiceblogService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ServiceblogService, factory: ServiceblogService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5089:
/*!********************************************************************!*\
  !*** ./src/app/sql-blog-component/sql-blog-component.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SqlBlogComponentComponent": () => (/* binding */ SqlBlogComponentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-highlightjs */ 386);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);



const _c0 = function () { return ["typescript"]; };
const themeAndroidStudio = 'node_modules/highlight.js/styles/androidstudio.css';
class SqlBlogComponentComponent {
    constructor(hljsLoader) {
        this.hljsLoader = hljsLoader;
        this.code1 = `  SELECT * FROM StockItems
  INNER JOIN ShelfLocations
  ON StockItems.ShelfLocationId = ShelfLocations.ShelfLocationId`;
        this.currentTheme = themeAndroidStudio;
    }
    ngOnInit() {
        this.hljsLoader.setTheme(this.currentTheme);
    }
}
SqlBlogComponentComponent.ɵfac = function SqlBlogComponentComponent_Factory(t) { return new (t || SqlBlogComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_highlightjs__WEBPACK_IMPORTED_MODULE_1__.HighlightLoader)); };
SqlBlogComponentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SqlBlogComponentComponent, selectors: [["app-sql-blog-component"]], decls: 446, vars: 4, consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-6", "align-self-center", "text-center"], [1, "title"], [1, "col-md-8", "no-trans"], [1, "mini-spacer"], ["src", "./assets/images/blog/SQLBlogImage.jpg", "alt", "wrapkit", 1, "img-fluid"], [1, "d-flex", "align-items-center", "text-uppercase", "m-t-40", "font-13", "font-medium"], ["routerLink", "", 1, "link"], [1, "ml-auto"], [1, "title", "font-light"], [1, "m-t-30", "m-b-30", 2, "font-size", "17.5px"], [1, "m-t-30", "m-b-30", 3, "highlight", "languages", "lineNumbers"], [2, "border", "1px solid", "padding-left", "5em", "padding-right", "5em"], ["data-label", "Id", 2, "border", "1px solid"], ["data-label", "ItemName", 2, "border", "1px solid"], ["data-label", "ShelfLocation", 2, "border", "1px solid"], ["data-label", "Category", 2, "border", "1px solid"], [2, "border", "1px solid", "width", "10%"], [1, "m-t-30"]], template: function SqlBlogComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Kieron's Development Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Kieron Cairns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Mar 25, 2022 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " SQL Joins Explained ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Today in an interview for a new role, a question I was asked was \"How does an SQL left join differ from a standard join?\". Unfortunately at the time, I was unable to answer this on the spot, and me being unable to answer this simple question has bugged me. So this blog post is going to be dedicated to explaining SQL joins and how they differ, with some examples. This will help reinforce my knowledge whilst also proving some good blog content. So without further ado, let's get started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Fundamentals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Consider the following statement: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " By default, the table StockItems is the left table. And the table ShelfLocations is the right table. This will make more sense once we get into the specifics of each join. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " We will be using both these mentioned tables throughout this blog: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "StockItems");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "ItemName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "ShelfLocation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Dairy Milk Bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Isle1_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Galaxy Bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Isle1_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Aero Bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Coca Cola");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Isle1_Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Walkers Cheese & Onion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Isle2_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Tango");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "ShelfLocations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "ShelfLocation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Sweets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Isle1_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Drinks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Isle1_Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Crisps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Isle2_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Sandwhiches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Isle2_Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Left Join");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " A left join will return all rows from the left table. Any matching results in the right table, these will appear on the right of the resulted join. Any unmatched results will appear as null. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "ItemName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "ShelfLocation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "ShelfLocation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Dairy Milk Bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Isle1_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Sweets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Isle1_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Galaxy Bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Isle1_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Sweets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Isle1_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Aero Bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Coca Cola");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Isle1_Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Drinks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Isle1_Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Walkers Cheese & Onion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Isle2_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Crisps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Isle2_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Tango");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, ">Null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Right Join");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " A right join will return the opposite result of that of the left join.\nAll rows will be returned from the right table and appear on the right. Any mathced rows in the left table will appear on the left of the join. Any unmatched results will appear as null. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "ItemName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "ShelfLocation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "ShelfLocation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Dairy Milk Bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Isle1_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Sweets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Isle1_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Galaxy Bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Isle1_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Sweets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Isle1_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Coca Cola");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Isle1_Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Drinks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Isle1_Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Walkers Cheese & Onion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Isle2_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Crisps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Isle2_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Sandwiches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Isle2_Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Inner Join");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, " A inner join is the most simple join in my opinion. A inner join will only return results where rows are matched in both tables. The first table that is in the query (StockItems) will appear on the left, and the second table in the query (ShelfLocations) will be on the right. Null results will not be displayed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "ItemName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "ShelfLocation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "ShelfLocation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Dairy Milk Bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Isle1_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Sweets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Isle1_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Galaxy Bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Isle1_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Sweets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Isle1_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Coca Cola");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Isle1_Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Drinks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Isle1_Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Walkers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, " Cheese & Onion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "Isle2_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Crisps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Isle2_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Full Outer Join");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, " Lastly, full join is a combination of the left and right join. it will return all rows that are connected and unconnected, displaying null results. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "ItemName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "ShelfLocation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "ShelfLocation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "Dairy Milk Bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "Isle1_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Sweets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "Isle1_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Galaxy Bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Isle1_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "Sweets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Isle1_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Aero Bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "Null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "Null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "Null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "Coca Cola");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "Isle1_Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "Drinks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "Isle1_Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "Walkers Cheese & Onion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "Isle2_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "Crisps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "Isle2_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "Tango");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "Null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "Null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "Null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "Null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "Null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "Null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "Sandwiches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "Isle2_Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](439, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](440, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](441, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](442, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](443, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](444, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](445, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.code1)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("lineNumbers", true);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_1__.Highlight], styles: ["@media screen and (min-width: 1475px){\n  tr[_ngcontent-%COMP%]:nth-child(even){background-color: #f2f2f2}\n\ntd[_ngcontent-%COMP%] {\n  font-weight: 450;\n}\n}\n\n@media screen and (max-width: 1475px) {\n  table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    border: none;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n  }\n\n  table[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    \n    display: block;\n    \n    padding-bottom: 10%;\n  }\n\n  td[_ngcontent-%COMP%]:nth-child(even){background-color: #f2f2f2}\n\n\n  table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border-bottom: 3px solid #ddd;\n    display: block;\n    text-align: right;\n    font-weight: bold;\n\n  }\n\n  table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    float: left;\n\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNxbC1ibG9nLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CLHlCQUF5Qjs7QUFFOUM7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLG1DQUFtQztJQUNuQyxjQUFjO0lBQ2Qsa0NBQWtDO0lBQ2xDLG1CQUFtQjtFQUNyQjs7RUFFQSxtQkFBbUIseUJBQXlCOzs7RUFHNUM7SUFDRSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7O0VBRW5COztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7O0VBRWI7QUFDRiIsImZpbGUiOiJzcWwtYmxvZy1jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NzVweCl7XG4gIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyfVxuXG50ZCB7XG4gIGZvbnQtd2VpZ2h0OiA0NTA7XG59XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NzVweCkge1xuICB0YWJsZSB0aGVhZCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDFweDtcbiAgfVxuXG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIHRhYmxlIHRyIHtcbiAgICAvKiBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2RkZDsgKi9cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvKiBib3JkZXItbGVmdDogMHB4IHNvbGlkICNmZmZmOyAqL1xuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XG4gIH1cblxuICB0ZDpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMn1cblxuXG4gIHRhYmxlIHRkIHtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2RkZDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICB9XG5cbiAgdGFibGUgdGQ6OmJlZm9yZSB7XG4gICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcbiAgICBmbG9hdDogbGVmdDtcblxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 157:
/*!**********************************************************************************************!*\
  !*** ./node_modules/html-loader/dist/cjs.js!./src/app/apps/blog/blog-detail/Word_Art_2.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/html-loader/dist/runtime/getUrl.js */ 9182);
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./script.js */ 7214), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<html>\n\t\t<head>\n\t\t\t<title>Word Art</title>\n\t\t\t<meta name=\"author\" content=\"WordArt.com\">\n\t\t</head>\n\t\t<body>\n\t\t<h1>This is a working test</h1>\n    <div class=\"wordart\" data-wordart-src=\"\"></div>\n    <script src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"></script>\n\t\t</body>\n\t</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ 7214:
/*!*************************************************!*\
  !*** ./src/app/apps/blog/blog-detail/script.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7dbc1f6ce77de3ad2d32.js";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map