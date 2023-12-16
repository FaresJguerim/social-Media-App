import {Client, Account,Databases,Storage, Avatars} from 'appwrite'



export const client= new Client();
client.setEndpoint('https://cloud.appwrite.io/v1');
client.setProject ('657cbfdc38b9bf321b50');

export const account= new Account(client);
export const databases= new Databases(client);
export const storage= new Storage(client);
export const cliAvatarsent= new Avatars(client);





