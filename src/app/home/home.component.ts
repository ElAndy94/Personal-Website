import {Component, OnInit} from '@angular/core';
// import { data_json } from '../../assets/myData.json';
// import { data_json } from '../../path_of_your.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


// console.log(data_json)

  // MyData.resource
  // myfile = JSON.parse(myData);


  show = false;
  showTwo = false;

  andyInfo = ['Hello! My name is Andrew Peliza and currently living in Manchester. Recently finished my degree in Computing.', 'Currently Working as a Software Developer at The Manchester Metropolitan University.' ,'Actively searching for a graduate role in Web Development, where I can begin my journey to become a successful developer.', 'I have a diverse set of skills ranging from; design, to HTML5, CSS', 'JavaScript (Express, Node.js, Angular.js, Vue.js, TypeScript)', 'PHP, SQL, jQuery and basic knowledge of other languages...', 'LinkedIn Profile: https://www.linkedin.com/in/andrewpeliza', 'GitHub: https://github.com/ElAndy94'];

  thirdInfo = ['I enjoy challenges and consider myself an enterprising individual who likes to take risks and use my own initiative.', 'I have an approachable personality in which I can socialise well with the public and work well in a team.'];

  bonus = ['*Bonus*', 'I am fluent in both English and Spanish.'];

  public lastInfo = 'I am an exceedingly organised person who is willing to take on new challenges and be pushed to the best of my ability.';

  // secondInfo = ['Computing Graduate', 'Born in Gibraltar', 'Living in Manchester', 'Raised by the 90\'s', 'Hungry to progress'];

  constructor() {
  }

  ngOnInit() {
    // alert(this.mydata[0].module);
    // document.body.classList.add('bg-img');
  }

  openGit() {
    window.open('https://github.com/ElAndy94');
  }

  openLink() {
    window.open('https://www.linkedin.com/in/andrewpeliza');
  }

  clickedMe() {
    if (this.show === false) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  clickedMeToo() {
    if (this.showTwo === false) {
      this.showTwo = true;
    } else {
      this.showTwo = false;
    }
  }
}
