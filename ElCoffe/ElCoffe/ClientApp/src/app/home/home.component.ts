import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent {
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  offers = [1,2,3,4];

  newsletterUser: NewsletterUser = new NewsletterUser();

  constructor(config: NgbCarouselConfig,
    private modalService: NgbModal) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  openModal(content) {
    this.modalService.open(content, { centered: true });
  }




}

class NewsletterUser {
  public email?: string;
  public firstName?: string;
  public lastName?: string;
}
