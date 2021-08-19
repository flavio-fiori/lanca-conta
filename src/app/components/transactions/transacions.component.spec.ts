import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NgxPaginationModule } from "ngx-pagination";

import { TransactionsComponent } from "./transactions.component";

describe('Transactions Component', () => {

    let fixture: ComponentFixture<TransactionsComponent>;
    let component: TransactionsComponent;
    let element: HTMLElement;

    beforeEach( async () => {

        await TestBed.configureTestingModule({
            declarations: [TransactionsComponent],
            imports: [
                HttpClientTestingModule,
                NgxPaginationModule
            ]
        });

        fixture = TestBed.createComponent(TransactionsComponent);

        component = fixture.componentInstance;

    });

    it('should create component', () => {

        expect(component).toBeTruthy();

    });

    it('should display title', () => {

        element = fixture.debugElement.nativeElement.querySelector('h2');
        expect(element.textContent).toEqual('Transações');

    });

});