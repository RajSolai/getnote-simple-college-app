import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Civil2Page } from './civil2.page';

describe('Civil2Page', () => {
  let component: Civil2Page;
  let fixture: ComponentFixture<Civil2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Civil2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Civil2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
