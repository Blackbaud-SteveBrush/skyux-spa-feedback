export interface FeedbackData {
  type: boolean;
  url: string;
  user: User;
  do_not_contact: boolean;
  comment: string;
}

interface User {
  first_name: string;
  last_name: string;
  email: string;
}
