import Wallet from './repository/wallet/Wallet';
import AccountManager from './manager/AccountManager';
import ProfileManager from './manager/ProfileManager';
export default class Base {
    private _wallet;
    private _accountManager;
    private _profileManager;
    private _authAccountBehavior;
    constructor(host: string);
    readonly wallet: Wallet;
    readonly accountManager: AccountManager;
    readonly profileManager: ProfileManager;
}
