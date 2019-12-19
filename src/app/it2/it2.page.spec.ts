import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { It2Page } from './it2.page';

describe('It2Page', () => {
  let component: It2Page;
  let fixture: ComponentFixture<It2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ It2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(It2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
