import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cse2Page } from './cse2.page';

describe('Cse2Page', () => {
  let component: Cse2Page;
  let fixture: ComponentFixture<Cse2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cse2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cse2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
