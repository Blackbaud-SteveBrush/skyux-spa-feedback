export class FeedbackData {
  public type: string = '';
  public url: string = '';
  public user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  public doNotContact: boolean = true;
  public comment: string = '';
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
}
