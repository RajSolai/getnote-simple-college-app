import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { It4Page } from './it4.page';

describe('It4Page', () => {
  let component: It4Page;
  let fixture: ComponentFixture<It4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ It4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(It4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
