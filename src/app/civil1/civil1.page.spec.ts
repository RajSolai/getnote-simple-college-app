import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Civil1Page } from './civil1.page';

describe('Civil1Page', () => {
  let component: Civil1Page;
  let fixture: ComponentFixture<Civil1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Civil1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Civil1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
