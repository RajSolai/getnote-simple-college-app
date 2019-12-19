import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { It1Page } from './it1.page';

describe('It1Page', () => {
  let component: It1Page;
  let fixture: ComponentFixture<It1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ It1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(It1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
