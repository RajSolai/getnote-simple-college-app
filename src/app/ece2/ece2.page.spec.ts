import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ece2Page } from './ece2.page';

describe('Ece2Page', () => {
  let component: Ece2Page;
  let fixture: ComponentFixture<Ece2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ece2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ece2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
