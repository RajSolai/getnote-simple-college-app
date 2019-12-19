import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Eie4Page } from './eie4.page';

describe('Eie4Page', () => {
  let component: Eie4Page;
  let fixture: ComponentFixture<Eie4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eie4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Eie4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
