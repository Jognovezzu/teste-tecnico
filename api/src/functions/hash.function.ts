import { hashSync, compareSync } from 'bcrypt';

export class MyHash {
    static hash(password: string): string {
        const passwordHash: string = hashSync(password, 8);

        return passwordHash;
    }

    static compare(password: string, passwordHash: string): boolean {
        const isMatch: boolean = compareSync(password, passwordHash) as boolean;
        return isMatch;
    }
}