import Contact from '../models/Contact';
import Identification from '../models/Identification';
import Person from '../models/Person';
import Wallet from '../models/Wallet';

export interface AuthResponse {
  auth: {
    type: string;
    token: string;
  };
  user: {
    id: string;
    person?: Person;
    contact?: Contact;
    identification?: Identification;
    wallets?: Wallet[];
  };
}
