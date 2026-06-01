import { decrypt, encrypt } from './cryptoUtils';

const password = "Hjspass#1";
const encrypted = encrypt(password);

console.log("Encrypted password:", encrypted);

const decrypted = decrypt(encrypted);

console.log("Decrypted password:", decrypted); 

//run command
// npx ts-node utils/encryptDecryptHelper.ts

  const username = process.env.KORBER_USERNAME || '';
    const pwd = process.env.KORBER_PASSWORD || '';
    const accountName = process.env.KORBER_ACCOUNT_NAME || '';

    console.log("Username:", username);
    console.log("Password:", pwd);
    console.log("Account Name:", accountName);