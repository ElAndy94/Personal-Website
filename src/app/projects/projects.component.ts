import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickProject() {
    window.open('https://github.com/ElAndy94/react-burger');
  }

  clickWebSite() {
    window.open('https://react-my-burger-9a8a8.firebaseapp.com/');
  }

  clickAng() {
    window.open('https://github.com/ElAndy94/Recipe-book');
  }

  webSiteTwo() {
    window.open('http://ng-recipe-deploy-angular.s3-website.eu-west-2.amazonaws.com/');
  }

  clickReactGym() {
    window.open('http://react-gym.s3-website.eu-west-2.amazonaws.com/');
  }

  clickReactGymRepo() {
    window.open('https://github.com/ElAndy94/AJGyms');
  }

}
