import { KeyPairHelper } from './KeyPairHelper';
import KeyPair from './KeyPair';
export default class BitKeyPair implements KeyPairHelper {
    private privateKey;
    private publicKey;
    createKeyPair(passPhrase: string): Promise<KeyPair>;
    signMessage(data: string): Promise<string>;
    getPublicKey(): string;
    encryptMessage(recipientPk: string, message: string): Promise<string>;
    generatePasswordForField(fieldName: String): Promise<string>;
    decryptMessage(senderPk: string, encrypted: string): Promise<string>;
}
