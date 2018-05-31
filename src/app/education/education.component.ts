import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  yearThree = ['Project', 'Advanced Web Development', 'Data Engineering', 'Information Systems Strategy'];

  public projectDescription = 'Research, design, implement, test and evaluate a JavaScript Game, made using Node.js, MongoDB, JavaScript and HTML5/CSS. Repository hosted on GitHub.';

  public advDescription = 'Production of a mortgage calculator application, made using Angular. Research and comparison of web development frameworks to create a paperless restaurant application using Vue.js.'

  public dataEng = 'Research, analyse, test different methods of data mining technologies. Cleaned and made sense of a data set for mortgage applicants.';

  public infoSystems = 'Research different strategies and strategic planning in organisations, and how information systems and information technologies exploitation is central in supporting strategic goals.';

  constructor() { }

  ngOnInit() {
  }

}
