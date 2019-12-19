import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Civil3Page } from './civil3.page';

describe('Civil3Page', () => {
  let component: Civil3Page;
  let fixture: ComponentFixture<Civil3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Civil3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Civil3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
