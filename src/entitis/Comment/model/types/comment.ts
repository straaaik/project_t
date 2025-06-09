import { User } from 'entitis/User';

export interface IComment {
    id: string;
    user: User;
    text: string;
}
