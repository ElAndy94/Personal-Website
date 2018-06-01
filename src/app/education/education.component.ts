import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  yearThree = ['Project', 'Advanced Web Development', 'Data Engineering', 'Information Systems Strategy'];
  yearTwo = ['Web Design and Development','Web Based Business Systems','Database Systems','Professional Development'];
  yearOne = ['Java Programming','Computer System Fundamentals','Web and Multimedia','Information Systems and Database'];
  college = ['Kingston College, London',  'Merit', '(Sept 2014 – July 2015)'];
  baysideSchool = ['Bayside Comprehensive, Gibraltar', '(2006 – 2010)'];
  gradeCollege = ['Access to Higher Education Computing.', 'Selected for meetings with OCN London to give feedback on how to improve the access courses.'];

  public projectDescription = 'Research, design, implement, test and evaluate a JavaScript Game, made using Node.js, MongoDB, JavaScript and HTML5/CSS. Repository hosted on GitHub.';

  public advDescription = 'Production of a mortgage calculator application, made using Angular. Research and comparison of web development frameworks to create a paperless restaurant application using Vue.js.'

  public dataEng = 'Research, analyse, test different methods of data mining technologies. Cleaned and made sense of a data set for mortgage applicants.';

  public infoSystems = 'Research different strategies and strategic planning in organisations, and how information systems and information technologies exploitation is central in supporting strategic goals.';

  public webDesign = 'Design, implement, test a JavaScript Game, made using JavaScript, Node.js, SQL and HTML5/CSS. Create fully working website with user login system, online chat using JQuery and PHP.';

  public webBased = 'Critically evaluate different technologies, use contemporary off-the-shelf e-commerce packages to sell goods, develop online and multi-channel marketing strategies, create web-based software for commerce with user tracking.';

  public dataBase = 'Database Modelling (UML Diagrams and relational schemas). SQL Database implementation, relational algebra, physical aspects, query processing and optimisation, concurrency control and interfacing with programming languages and environments.';

  public prof = 'Worked in a group to produce a fully working website and application for a small business. Group leader of the team assigning different roles to students.';

  public javaProg = 'Intro to Java, and creating a space invaders shooting game.';

  public webMulti = 'Principles of web design fundamentals with programs such as Photoshop and using CSS styling.';

  public compFund = 'Assembly language and discrete mathematic theory.';

  public infoSys = 'Production of an Oracle SQL database and learning database fundamentals.';

  public baySide = 'A*, B, C, Merit (Including English and Mathematics).'

  constructor() { }

  ngOnInit() {
  }

  clickProject(){
    window.open("https://github.com/ElAndy94/Multiplayer-Shooting-Game");
  }

  clickCal(){
    window.open("https://github.com/ElAndy94/Mortgage-Calculator");
  }

  clickRest(){
    window.open("https://github.com/ElAndy94/Paperless-Restaurant");
  }

  clickSnake(){
    window.open("https://github.com/ElAndy94/First-Project-MultiPlayer-SnakeGame");
  }
}
