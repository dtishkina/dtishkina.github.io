export const initializeGallery = () => {
    const cardsData = {
        france: [
            { title: 'Охота Амура', author: 'Марсель Руссо', price: '14 500 руб', description: 'Холст, масло (50x80)', image: 'hunt_amour.jpg' },
            { title: 'Дама с собачкой', author: 'Анри Селин', price: '16 500 руб', description: 'Акрил, бумага (50x80)', image: 'lady_with_dog.jpg' },
            { title: 'Процедура', author: 'Франсуа Дюпон', price: '20 000 руб', description: 'Цветная литография (40x60)', image: 'procedure.jpg' },
            { title: 'Роза', author: 'Луи Детуш', price: '12 000 руб', description: 'Бумага, акрил (50x80)', image: 'rose.jpg' },
            { title: 'Птичья трапеза', author: 'Франсуа Дюпон', price: '22 500 руб', description: 'Цветная литография (40x60)', image: 'bird_meal.jpg' },
            { title: 'Пейзаж с рыбой', author: 'Пьер Моранж', price: '20 000 руб', description: 'Цветная литография (40x60)', image: 'landscape_with_fish.jpg'},
        ],
        germany: [
            { title: 'Над городом', author: 'Курт Вернер', price: '16 000 руб', description: 'Цветная литография (40x60)', image: 'above_the_city.jpg'},
            { title: 'Птенцы', author: 'Макс Рихтер', price: '14 500 руб', description: 'Холст, масло (50x80)', image: 'chicks.jpg'},
            { title: 'Среди листьев', author: 'Мартин Майер', price: '20 000 руб', description: 'Цветная литография (40x60)', image: 'among_the_leaves.jpg' },
            { title: 'Яркая птица', author: 'Герман Беккер', price: '13 000 руб', description: 'Цветная литография (40x60)', image: 'bright_bird.jpg'},
            { title: 'Дятлы', author: 'Вульф Бауэр', price: '20 000 руб', description: 'Бумага, акрил (50х80)', image: 'woodpeckers.jpg' },
            { title: 'Большие воды', author: 'Вальтер Хартман', price: '23 000 руб', description: 'Бумага, акрил (50х80)', image: 'big_waters.jpg' },
        ],
        england: [
            { title: 'Дикий зверь', author: 'Пол Смит', price: '19 500 руб', description: 'Акварель, бумага (50x80)', image: 'wild_beast.jpg'},
            { title: 'Скалистый берег', author: 'Джон Уайт', price: '17 500 руб', description: 'Цветная литография (40x60)', image: 'rocky_coast.jpg' },
            { title: 'Река и горы', author: 'Джим Уотсон', price: '20 500 руб', description: 'Акварель, бумага (50x80)', image: 'river_and_mountains.jpg'},
            { title: 'Белый попугай', author: 'Юдкин Эзиллон', price: '15 500 руб', description: 'Цветная литография (40x60)', image: 'white_parrot.jpg' },
            { title: 'Ночная рыба', author: 'Эрик Гиллман', price: '12 500 руб', description: 'Бумага, акрил (50х80)', image: 'night_fish.jpg' },
            { title: 'Рыжий кот', author: 'Альфред Барр', price: '21 000 руб', description: 'Цветная литография (40x60)', image: 'red_cat.jpg' },
        ]
    };

    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', function() {
            const category = this.dataset.category;
            const cardsContainer = document.getElementById('cards-container');
            cardsContainer.innerHTML = '';

            cardsData[category].forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('card');
                cardElement.innerHTML = `
                    <img src="assets/cards/${card.image}" alt="${card.title}" class="card-image">
                    <p class="author">${card.author}</p>
                    <h1 class="card-title">${card.title}</h1>
                    <p class="description">${card.description}</p>
                    <p class="price">${card.price}</p>
                    <button class="primary-button">В корзину</button>
                `;
                cardsContainer.appendChild(cardElement);
            });
        });
    });
};
