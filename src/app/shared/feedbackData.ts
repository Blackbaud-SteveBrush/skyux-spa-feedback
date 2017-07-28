import { User } from './user';
import { ParentalAdvisory } from '../shared/parental-advisory';

export class FeedbackData {
  public type: string = '';
  public do_not_contact: boolean = true;
  public comment: string = '';
  public url: string;
  public user: User;
  public product: string;

  constructor(formData: ParentalAdvisory) {
    this.user = formData.user;
    this.product = formData.product;
    this.url = formData.url;
  }
}
