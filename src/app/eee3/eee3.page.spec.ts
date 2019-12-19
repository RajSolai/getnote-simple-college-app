import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Eee3Page } from './eee3.page';

describe('Eee3Page', () => {
  let component: Eee3Page;
  let fixture: ComponentFixture<Eee3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eee3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Eee3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
