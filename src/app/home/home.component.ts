import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show = false;
  showTwo = false;

  andyInfo = [
    'Hello! My name is Andrew Peliza and currently living in Manchester.',
    'Currently working on personal projects until I find the right job.',
    'On my journey to become a successful developer.',
    'I have a diverse set of skills ranging from; design, to HTML5, CSS',
    'JavaScript (Express, Node.js, Angular.js, Vue.js, React.js, TypeScript, Python), AWS',
    'PHP, SQL, jQuery and basic knowledge of other languages...',
    'Graduated with a First Class.',
    'LinkedIn Profile: https://www.linkedin.com/in/andrewpeliza',
    'GitHub: https://github.com/ElAndy94'
  ];

  thirdInfo = [
    'I enjoy challenges and consider myself an enterprising individual who likes to take risks and use my own initiative.',
    'I have an approachable personality in which I can socialise well with the public and work well in a team.'
  ];

  bonus = ['*Bonus*', 'I am fluent in both English and Spanish.'];

  public lastInfo =
    'I am an exceedingly organised person who is willing to take on new challenges and be pushed to the best of my ability.';

  constructor() {}

  ngOnInit() {
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
