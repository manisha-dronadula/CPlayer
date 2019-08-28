import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnrecommendComponent } from './unrecommend.component';

describe('UnrecommendComponent', () => {
  let component: UnrecommendComponent;
  let fixture: ComponentFixture<UnrecommendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnrecommendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnrecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
