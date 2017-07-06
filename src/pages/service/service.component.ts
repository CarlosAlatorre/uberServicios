import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'service',
    templateUrl: 'service.component.html'
})

export class ServiceComponent implements OnInit {
    
    rating:number = 3.5;
    
    constructor() { }

    ngOnInit() { }
}