import { Component, Input, OnInit } from "@angular/core";
import { TransactionService } from "../../services/transaction/transaction.service";

import { ITransaction } from "../../@types/transaction";
@Component({
    selector: 'app-transactions',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.scss']
})

export class TransactionsComponent implements OnInit {

    @Input() transactions: ITransaction[];
    p: number = 1;

    constructor(private service: TransactionService) {

        this.transactions = [];

    };

    ngOnInit(): void {

        this.service.searchAll().subscribe(response => this.transactions = response);

    };

};