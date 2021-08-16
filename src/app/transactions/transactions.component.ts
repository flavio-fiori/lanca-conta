import { Component, Input, OnInit } from "@angular/core";
import { TransactionService } from "../services/transaction/transaction.service";

@Component({
    selector: 'app-transactions',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.scss']
})

export class TransactionsComponent implements OnInit {

    @Input() transactions: any[] = [];
    p: number = 1;

    constructor(private service: TransactionService) {}

    ngOnInit(): void {

        this.service.getAll().subscribe(response => this.transactions = response);

    }

}