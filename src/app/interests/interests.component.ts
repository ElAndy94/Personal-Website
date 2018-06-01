import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  public interests = ['My main hobbies are sports and keeping physically fit. I currently enjoy going to the gym daily as this helps me motivate myself to achieve my own personal goals. This has proved to me that I have strong determination to attain my long-term goals.', 'During my second year at university I developed a passion for web development and because of this I developed a web application for my final year project. This made me realise that I would like a career in web development.', 'To further develop my skills, I am currently taking a Udemy online course in Angular which can be found on my GitHub, alongside with all my other web development projects.'];

  constructor() { }

  ngOnInit() {
  }

  clickAng() {
    window.open("https://github.com/ElAndy94/Recipe-book");
  }

}
