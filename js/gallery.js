export const initializeGallery = () => {
    const cardsData = {
        france: [
            { title: 'Охота Амура', author: 'Марсель Руссо', price: '14 500 руб', description: 'Холст, масло (50x80)' },
            { title: 'Дама с собачкой', author: 'Анри Селин', price: '16 500 руб', description: 'Акрил, бумага (50x80)' },
            { title: 'Процедура', author: 'Франсуа Дюпон', price: '20 000 руб', description: 'Цветная литография (40x60)' },
            { title: 'Роза', author: 'Луи Детуш', price: '12 000 руб', description: 'Бумага, акрил (50x80)' }
        ],
        germany: [
            { title: 'Над городом', author: 'Курт Вернер', price: '16 000 руб', description: 'Цветная литография (40x60)' },
            { title: 'Птенцы', author: 'Макс Рихтер', price: '14 500 руб', description: 'Холст, масло (50x80)' },
            { title: 'Среди листьев', author: 'Мартин Майер', price: '20 000 руб', description: 'Цветная литография (40x60)' },
            { title: 'Яркая птица', author: 'Герман Беккер', price: '13 000 руб', description: 'Цветная литография (40x60)' }
        ],
        england: [
            { title: 'Дикий зверь', author: 'Пол Смит', price: '19 500 руб', description: 'Акварель, бумага (50x80)' },
            { title: 'Дикий зверь', author: 'Джон Уайт', price: '17 500 руб', description: 'Цветная литография (40x60)' },
            { title: 'Река и горы', author: 'Джим Уотсон', price: '20 500 руб', description: 'Акварель, бумага (50x80)' },
            { title: 'Белый попугай', author: 'Юдкин Эзиллон', price: '15 500 руб', description: 'Цветная литография (40x60)' }
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
                    <h2>${card.title}</h2>
                    <p>${card.author}</p>
                    <p>${card.price}</p>
                    <p>${card.description}</p>
                    <button>В корзину</button>
                `;
                cardsContainer.appendChild(cardElement);
            });
        });
    });
};
