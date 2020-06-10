import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.page.html',
  styleUrls: ['./recommended.page.scss'],
})
export class RecommendedPage implements OnInit {

    data: any;
    page = 1;

    tempData: any;

    constructor(public appService: AppService) {
        this.appService
            .getData(`top-headlines?country=us&category=technology&pageSize=30&page=${this.page}`)
            .subscribe(data => {
                this.data = data;
                // console.log(this.data);
                this.updateItem();
            }, (err: any) => {
                console.log(err);
            });
    }

    updateItem() {
        for (let i = 1; i < Object.keys(this.data.articles).length; i ++)
            if (this.data.articles[i].urlToImage === null)
                this.data.articles.splice(i, 1);
    }

  ngOnInit() {
  }

}
