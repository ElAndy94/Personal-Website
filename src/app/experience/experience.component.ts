import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  workExp = [
    '(Summer Job) Customs Officer, Gibraltar',
    '(Jun 2015 – Aug 2015)',
    'Managing Director of Andy Holdings Ltd',
    '(May 2013 – Aug 2015)',
    'Co-Founder of Avanti Construction & Maintenance',
    '(Oct 2012 – Mar 2013)',
    'ICT Technician, Systems Services, Gibraltar',
    '(Mar 2011 – May 2011)',
    'Software Developer, Manchester Metropolitan University',
    '(Jun 2018 – Sep 2018)',
    'FullStack Developer, Eversmart Energy',
    '(Sep 2018 – Nov 2018)',
    'Lead Frontend Developer, Dyne',
    '(Jan 2019 – April 2019)',
    'Frontend Developer, Think Money Group',
    '(March 2019 – Present)'
  ];

  vol = ['Trainee at Gibraltar Fire & Rescue', 'May 2010 – May 2010'];

  jobRef = [
    'Francis Rodriguez',
    'Customs Officer Manager',
    'Dr Kristopher Welsh',
    'University Tutor'
  ];

  public thinkmoney = [
    '• Building the front end of web based applications using the latest techniques and technologies (full websites, customer journeys, landing pages, HTML ads).',
    '• Working in a cross functional team, and attending SCRUMs and project meetings.',
    '• Liaising with other front-end and back-end developers, designers, SEO team, testers and implementation staff.',
    '• Ensuring cross-platform optimisation across required devices.',
    '• Interpreting customer requirements to deliver efficient, functional solutions.',
    '• Keeping up-to-date with latest technologies and suggest when appropriate to implement.',
    '• Assisting in investigating and resolving web/software bugs.'
  ];

  public dyne = [
    '• Using React inc Redux combined with Typescript ( Graphql ) Node.',
    '• Coordinating with, and implementing handovers from, the design team.',
    '• Developing production grade front end web architecture.',
    '• Ensuring cross-platform optimisation across required devices.',
    '• Conceptualising and implementing robust QA and testing frameworks.',
    '• Taking ownership of, and managing / seeing through a project from conception to finalisation.',
    '• Meeting both technical and business needs.',
    '• Staying abreast of developments in web applications and programming languages.'
  ];

  public cust = [
    '• Signing important classified papers and checking merchandise, which gave me legal knowledge.',
    '• Dealing with various clients to sign off the clearing merchandise forms.',
    '• Clearing items and personal that cross the borders.',
    '• Keeping all old records up to date with the system.'
  ];

  public andy = [
    '• Assisted the clients with refurbishments and other duties as required, working in line with health and safety.',
    '• Supplied all deliveries to the clients personally which made me dependable and punctual.',
    '• Managed my time for projects and their deadlines which helped me learn to work under pressure.',
    '• Delivered high standards to exceed the customers’ needs.',
    '• Dealt with various businesses involving high demands.'
  ];

  public avanti = [
    '• Learnt the fundamentals of owning a business and the responsibilities associated.',
    '• Read over contracts thoroughly and ensure that contract requirement is met.',
    '• Made cost estimations for different types of refurbishments with various scales of projects.',
    '• Lead a team of over fifteen employees which strongly improved my responsibility skills.'
  ];

  public ict = [
    '• Installed and configured internet content filtering system for client businesses.',
    '• Reinstalled software on computers for customers independently.',
    '• Regularly took computers apart and rebuilt them for customers.',
    '• Found and replaced defected component(s)'
  ];

  public volunt = [
    '• This linked up with my past work experience at high school in which I also chose to learn about the Fire Brigade.',
    '• Learnt the importance of a Fireman’s role.',
    '• Trained on physical tasks such as abseiling.',
    '• Learnt how to work under pressure in advanced rescue skills.',
    '• Quick learner to adapt to every different tests and training with different scenarios daily.'
  ];

  public pref = [
    'Telephone: +350 54013879',
    'Address:',
    'Customs House',
    'Waterport',
    'Gibraltar',
    'GX11 1AA'
  ];

  public ppref = [
    'Email: k.welsh@mmu.ac.uk',
    'Telephone: +44 (0)161 247 3531',
    'Address:',
    'Manchester Metropolitan University',
    'Chester Street',
    'Manchester',
    'M1 5GD'
  ];

  public software = [
    '*Contract Short Term*',
    '• Develop a bespoke application for real-world use.',
    '• Research, design, implement and test a custom web application to support the creation of augmented reading lists.',
    '• An application which allows tutors to upload documents which can then be annotated with simplifications and explanations where necessary.',
    '• Participating in ongoing research and making a difference to the learning experience of other students.',
    '• Ensure consistency and maximise efficiency.'
  ];

  public fullstack = [
    '• Developing software in time for release date.',
    '• Making sure that the system is ready for lunch day.',
    '• Checking that the full website is reponsive on all browsers',
    '• Fixing errors or simplying code.',
    '• Ensure consistency throughout.'
  ];

  constructor() {}

  ngOnInit() {}
}
