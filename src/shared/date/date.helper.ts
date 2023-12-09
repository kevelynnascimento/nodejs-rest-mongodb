
export class DateHelper {
    public static toDate(value: string): Date {
        if (!value)
            return null;

        const [year, month, day] = value.split('-');
        const date = new Date(+year, (+month) - 1, +day);
        return date;
    };
}
