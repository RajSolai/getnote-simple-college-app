import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Civil4Page } from './civil4.page';

describe('Civil4Page', () => {
  let component: Civil4Page;
  let fixture: ComponentFixture<Civil4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Civil4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Civil4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
