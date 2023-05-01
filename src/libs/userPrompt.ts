import { prompt } from 'prompts';
import { USER_QUESTIONS, UserPrompts } from '../constants';

export class UserPropmts {
    static async setUserValues() {
        const promptValues: Promise<UserPrompts> = await prompt(USER_QUESTIONS)
        return promptValues
    }
}



