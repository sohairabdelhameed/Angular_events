import { FormControl } from "@angular/forms";

export function restrictedWords(words: string[]): (control: FormControl) => { [key: string]: any } {
    return (control: FormControl): { [key: string]: any } => {
        if (!words) return null;
        const invalidWord = words
            .filter(w => control.value.includes(w));

        return invalidWord && invalidWord.length > 0
            ? { 'restrictedWords': invalidWord.join(', ') }
            : null;
    };
}