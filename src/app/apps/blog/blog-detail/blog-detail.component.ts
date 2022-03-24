import { Component, OnInit } from '@angular/core';
import { ServiceblogService } from '../blog-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../blog-type';
import { HighlightLoader, HighlightAutoResult } from 'ngx-highlightjs';

declare function run(): any;

const themeAndroidStudio: string =
  'node_modules/highlight.js/styles/androidstudio.css';
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  myScriptElement: HTMLScriptElement;
  id: any;
  blogDetail: Blog | null = null;

  code1 = `public class StockQueryService : IStockQueryService
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


  code2 = `[Fact]
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
  code3 = `[Fact]
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
  }`

  code4 = ` AutoFixture.Idioms.GuardClauseException : A Guard Clause test was performed on a method that returns a Task, Task<T> (possibly in an 'async' method), but the test failed. See the inner exception for more details. However, because of the async nature of the task, this test failure may look like a false positive. Perhaps you already have a Guard Clause in place, but inside the Task or inside a method marked with the 'async' keyword (if you're using C#); if this is the case, the Guard Clause is dormant, and will first be triggered when a client accesses the Result of the Task. This doesn't adhere to the Fail Fast principle, so should be addressed.
  See https://github.com/AutoFixture/AutoFixture/issues/268 for more details.
  ---- AutoFixture.Idioms.GuardClauseException : An attempt was made to assign the value null to the parameter "id" of the method "GetStockItemById", and no Guard Clause prevented this. Are you missing a Guard Clause?`

  code5 = ` public Task<List<StockItem>> GetStockItemById(string id)
  {
      if (id == null) throw new ArgumentNullException(nameof(id));

      async Task<List<StockItem>> DoWork()
      {
          return await this.stockRepository.GetStockItemById(id).ConfigureAwait(false);
      }

      return DoWork();
  }`

  currentTheme: string = themeAndroidStudio;
  test: any


  constructor(activatedRouter: ActivatedRoute, public service: ServiceblogService, public router: Router, private hljsLoader: HighlightLoader) {
    this.id = activatedRouter.snapshot.paramMap.get('id');


    this.myScriptElement = document.createElement('script');
    this.myScriptElement.innerHTML = run();


    document.body.appendChild(this.myScriptElement);

    this.test = require('html-loader!./Word_Art_2.html');
    this.test = this.test.default;
  }

  ngOnInit(): void {
    this.blogDetail = this.service.Blogs.filter(x => x.id === +this.id)[0];
    this.hljsLoader.setTheme(this.currentTheme);
    run();

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
