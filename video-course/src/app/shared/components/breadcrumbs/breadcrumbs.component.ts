import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbList: string[];
  public breadcrumbLinksList: string[];

  constructor(private route: Router) { }

  public ngOnInit(): void {
    this.breadcrumbList = this.route.url.split('/');
    this.breadcrumbLinksList  = [this.breadcrumbList[0]];

    for (let i = 1; i < this.breadcrumbList.length; i++){
      const link = this.breadcrumbLinksList[i - 1] + '/' + this.breadcrumbList[i];
      this.breadcrumbLinksList.push(link);
    }
  }

}
