import { Component } from '@angular/core';

import { ApiService } from '../../api.service';

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss']
})

export class ItemListComponent {
    items: string[];

    constructor(private apiService: ApiService) {
        this.apiService.getArchives().subscribe(
            (music: any) => this.items = [...new Set(music.results.map((album: any) => album?.artistName))] as string[]
        )
    }
}