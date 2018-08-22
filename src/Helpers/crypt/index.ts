import * as SHA256 from 'crypto-js/sha256';

const SecureCrypt = (value: string): string => 
    SHA256(value)

export { SecureCrypt };
