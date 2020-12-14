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
    // This eventListener listens for a left-click on one of the blocks and changes the color/image of the block. It goes through an array which contains an object with the source of the image and the alt tag. 
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
    // This eventListener listens for a right-click, a.k.a the context menu. It triggers a transition where it dissapears and reappears with a random color. There is also another eventListener that listens for the transition to complete.
    block.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        e.onContextMenu = false;
        let randomNumber = Math.floor(Math.random()*5);
        e.target.style.opacity = 0;
        e.target.addEventListener('transitionend', (e) => {
            e.target.style.opacity = 1;
            e.target.src = colors[randomNumber].src;
            e.target.alt = colors[randomNumber].alt;
        });
    });
});


// This eventlistener listens after the letter 'R' on the keyboard to shuffle all of the blocks to random colors. This does not work on mobile.
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