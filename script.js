const colors = [
    {
        src: '/img/citrus-block.png',
        alt: 'Citrus'
    },
    {
        src: '/img/cola-block.png',
        alt: 'Cola'
    },
    {
        src: '/img/orange-block.png',
        alt: 'Orange'
    },
    {
        src: '/img/pink-block.png',
        alt: 'Pink'
    },
    {
        src: '/img/strawberry-block.png',
        alt: 'Strawberry'
    }
];

const blocks = document.querySelectorAll('.block');

blocks.forEach(block => {
    block.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.dataset.indexNumber++;
        if (e.target.dataset.indexNumber == 5){
            e.target.dataset.indexNumber = 0;
        };
        const index = e.target.dataset.indexNumber;
        e.target.src = colors[index].src;
        e.target.alt = colors[index].alt;
    });
    block.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        e.onContextMenu = false;
        let randomNumber = Math.floor(Math.random()*5);
        e.target.src = colors[randomNumber].src;
        e.target.alt = colors[randomNumber].alt;
    })
});

document.addEventListener('keypress', (e) => {
    e.preventDefault();
    if (e.charCode == 114) {
        const blocks = document.querySelectorAll('.block');
        blocks.forEach(block => {
            let randomNumber = Math.floor(Math.random()*5);
            let img = block.querySelector('img');
            img.src = colors[randomNumber].src;
            img.alt = colors[randomNumber].alt;
        });
    };
});