export class FeedbackData {
  public type: string = '';
  public url: string = '/Home/Fishing-tricks';
  public user: User = {
    id: '1234',
    firstName: `Cap'n`,
    lastName: 'Ahab',
    email: 'white@whale.com'
  };
  public do_not_contact: boolean = true;
  public comment: string = '';
  public product: string = 'renxt';
}

interface User {
  id: any;
  firstName: string;
  lastName: string;
  email: string;
}
