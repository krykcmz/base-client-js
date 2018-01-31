import { Auth } from './Auth';
import { HttpTransport } from '../source/HttpTransport';
import Account from '../models/Account';
export default class AuthImpl implements Auth {
    private readonly SIGN_UP;
    private readonly SIGN_IN;
    private transport;
    constructor(transport: HttpTransport);
    signUp(address: string): Promise<Account>;
    signIn(id: string): Promise<Account>;
}