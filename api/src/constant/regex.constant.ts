export class Regex {
    static ALPHA_SPACED = /^(?=.*[A-zÀ-ú])[A-zÀ-ú ]+$/;

    static ALPHANUMERIC_SPACED = /^(?=.*[0-9A-zÀ-ú])[0-9A-zÀ-ú ]+$/;

    static EMAIL = /^[0-9A-z._%+-]+@calcomp(-icct)?\.org\.br$/;

    static PASSWORD =
        /^(?=(.*[a-z]){3,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,}).{8,}$/;

    static STATE = /^(positive|neutral|negative)$/;
}
