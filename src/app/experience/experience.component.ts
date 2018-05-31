import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  workExp = ['(Summer Job) Customs Officer, Gibraltar', 'Managing Director of Andy Holdings Ltd', 'Co-Founder of Avanti Construction & Maintenance', 'ICT Technician, Systems Services, Gibraltar'];

  vol = 'Trainee at Gibraltar Fire & Rescue';

  public cust = [
    '• Signing important classified papers and checking merchandise, which gave me legal knowledge.', '• Dealing with various clients to sign off the clearing merchandise forms.', '• Clearing items and personal that cross the borders.', '• Keeping all old records up to date with the system.'];

  public andy = [
    '• Assisted the clients with refurbishments and other duties as required, working in line with health and safety.',
    '• Supplied all deliveries to the clients personally which made me dependable and punctual.',
    '• Managed my time for projects and their deadlines which helped me learn to work under pressure.',
    '• Delivered high standards to exceed the customers’ needs.',
    '• Dealt with various businesses involving high demands.'];

  public avanti = [
    '• Learnt the fundamentals of owning a business and the responsibilities associated.',
    '• Read over contracts thoroughly and ensure that contract requirement is met.',
    '• Made cost estimations for different types of refurbishments with various scales of projects.',
    '• Lead a team of over fifteen employees which strongly improved my responsibility skills.'];

  public ict = [
    '• Installed and configured internet content filtering system for client businesses.',
    '• Reinstalled software on computers for customers independently.',
    '• Regularly took computers apart and rebuilt them for customers.',
    '• Found and replaced defected component(s)'];

  public volunt = [
    '• This linked up with my past work experience at high school in which I also chose to learn about the Fire Brigade.',
    '• Learnt the importance of a Fireman’s role.',
    '• Trained on physical tasks such as abseiling.',
    '• Learnt how to work under pressure in advanced rescue skills.',
    '• Quick learner to adapt to every different tests and training with different scenarios daily.'];

  constructor() {
  }

  ngOnInit() {
  }

}
