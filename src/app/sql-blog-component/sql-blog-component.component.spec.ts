import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlBlogComponentComponent } from './sql-blog-component.component';

describe('SqlBlogComponentComponent', () => {
  let component: SqlBlogComponentComponent;
  let fixture: ComponentFixture<SqlBlogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlBlogComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlBlogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
