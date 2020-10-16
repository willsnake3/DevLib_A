import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToastrPage } from './toastr.page';

describe('ToastrPage', () => {
  let component: ToastrPage;
  let fixture: ComponentFixture<ToastrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToastrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
