export class ArrayHelper {
    public static groupBy<T, K>(collection: T[], keySelector: (item: T) => K): { key: K, values: T[] }[] {
        const groups: { [key: string]: T[] } = {};

        collection.forEach(item => {
            const key = keySelector(item);
            const keyString = JSON.stringify(key);

            if (!groups[keyString]) {
                groups[keyString] = [];
            }

            groups[keyString].push(item);
        });

        return Object.keys(groups).map(keyString => ({ key: JSON.parse(keyString), values: groups[keyString] }));
    }
}
