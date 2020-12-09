const blocks = document.querySelectorAll('.block');

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
        
        
    })
});

console.log(blocks);