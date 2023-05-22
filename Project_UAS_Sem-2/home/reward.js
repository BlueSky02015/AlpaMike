const Reward = [
    {
        "Text": "Banana",
        "Rate": 75
    },{
        "Text": "Apple",
        "Rate": 75
    },{
        "Text": "Pear",
        "Rate": 75
    },{
        "Text": "Peach",
        "Rate": 75
    },{
        "Text": "Orange",
        "Rate": 75
    },

    {
        "Text": "Book",
        "Rate": 0.5
    }, {
        "Text": "Ball",
        "Rate": 0.5
    }, {
        "Text": "Desktop",
        "Rate": 0.5
    }, {
        "Text": "Lamp",
        "Rate": 0.5
    },
    {
        "Text": "Gold",
        "Rate": 0.01
    },
]

const randomEntry = items => items[Math.floor(Math.random() * items.length)];

const item = randomEntry(Reward);
console.log(`Got reward -> ${item.Text}`);
