import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLanguageChangeComponent } from './test-language-change.component';

describe('TestLanguageChangeComponent', () => {
  let component: TestLanguageChangeComponent;
  let fixture: ComponentFixture<TestLanguageChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestLanguageChangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestLanguageChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
