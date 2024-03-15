export interface IListItem {
    done: boolean;
    important: boolean;
    task: string;
    date: Date | null;
}

export const ITEMS: IListItem[] = [
    {
        done: false,
        important: false,
        task: "Hit the gym",
        date: new Date(2023, 4, 1)
    },
    {
        done: true,
        important: true,
        task: "Pay bills",
        date: new Date(2023, 3, 29)
    },
    {
        done: false,
        important: false,
        task: "Meet John",
        date: null
    },
    {
        done: false,
        important: true,
        task: "Buy eggs",
        date: new Date(2023, 3, 29)
    },
    {
        done: true,
        important: false,
        task: "Read a book",
        date: null
    },
    {
        done: false,
        important: false,
        task: "Organize office",
        date: null
    },
    {
        done: false,
        important: false,
        task: "Eat dinner",
        date: null
    },
    {
        done: false,
        important: true,
        task: "Buy apples",
        date: new Date(2023, 3, 5)
    },
    {
        done: false,
        important: true,
        task: "Meet George",
        date: null
    },
    {
        done: false,
        important: false,
        task: "Feed the cat",
        date: null
    },
    {
        done: true,
        important: false,
        task: "Write a letter",
        date: null
    },
    {
        done: false,
        important: false,
        task: "Run 1 km",
        date: new Date(2022, 1, 15)
    }
];