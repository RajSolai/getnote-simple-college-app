import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PortalPage } from './portal.page';

describe('PortalPage', () => {
  let component: PortalPage;
  let fixture: ComponentFixture<PortalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PortalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
