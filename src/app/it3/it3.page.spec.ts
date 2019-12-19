import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { It3Page } from './it3.page';

describe('It3Page', () => {
  let component: It3Page;
  let fixture: ComponentFixture<It3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ It3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(It3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
