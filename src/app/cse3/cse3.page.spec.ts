import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cse3Page } from './cse3.page';

describe('Cse3Page', () => {
  let component: Cse3Page;
  let fixture: ComponentFixture<Cse3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cse3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cse3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
