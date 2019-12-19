import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Eee4Page } from './eee4.page';

describe('Eee4Page', () => {
  let component: Eee4Page;
  let fixture: ComponentFixture<Eee4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eee4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Eee4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
