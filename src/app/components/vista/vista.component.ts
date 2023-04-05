import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})

export class VistaComponent implements OnInit, OnDestroy{

  urlScript = environment.urlSrcipt;

  constructor(){

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

}
