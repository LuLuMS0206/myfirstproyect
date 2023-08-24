import { NO_ERRORS_SCHEMA } from "@angular/core";
import { LayoutsComponent } from "./layouts.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("LayoutsComponent", () => {

  let fixture: ComponentFixture<LayoutsComponent>;
  let component: LayoutsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [LayoutsComponent]
    });

    fixture = TestBed.createComponent(LayoutsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
