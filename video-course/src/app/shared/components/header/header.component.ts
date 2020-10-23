import { Component, OnInit } from '@angular/core';

import {Icon} from "../../models";
import { icons } from 'src/app/material/constants/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public icons: Icon = icons;

  constructor() { }

  public ngOnInit(): void {
  }

}
