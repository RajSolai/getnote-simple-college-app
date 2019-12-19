import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Eie3Page } from './eie3.page';

describe('Eie3Page', () => {
  let component: Eie3Page;
  let fixture: ComponentFixture<Eie3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eie3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Eie3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
