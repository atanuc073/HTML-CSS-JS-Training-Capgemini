import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedbillComponent } from './sharedbill.component';

describe('SharedbillComponent', () => {
  let component: SharedbillComponent;
  let fixture: ComponentFixture<SharedbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
