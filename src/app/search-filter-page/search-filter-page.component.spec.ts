import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterPageComponent } from './search-filter-page.component';

describe('SearchFilterPageComponent', () => {
  let component: SearchFilterPageComponent;
  let fixture: ComponentFixture<SearchFilterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFilterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFilterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
