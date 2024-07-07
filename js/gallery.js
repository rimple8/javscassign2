

function changeimage(changesrc)
{

    var image = document.getElementById("fullimage");

    image.src =changesrc;
}

const galleryItems =[

    {
        thumbnail: 'images/flowers-pink-small.jpg',
        fullSize: 'images/flowers-pink-large.jpg',
        caption: 'Beautiful pink flowers in full bloom.'
    },
    {
        thumbnail: 'images/flowers-purple-small.jpg',
        fullSize: 'images/flowers-purple-large.jpg',
        caption: 'Stunning purple flowers under the sunlight.'
    },
    {
        thumbnail: 'images/flowers-red-small.jpg',
        fullSize: 'images/flowers-red-large.jpg',
        caption: 'Vibrant red flowers that catch the eye.'
    },
    {
        thumbnail: 'images/flowers-white-small.jpg',
        fullSize: 'images/flowers-white-large.jpg',
        caption: 'Elegant white flowers with a delicate touch.'
    },
    {
        thumbnail: 'images/flowers-yellow-small.jpg',
        fullSize: 'images/flowers-yellow-large.jpg',
        caption: 'Cheerful yellow flowers brightening the day.'
    }

    
];


document.addEventListener('DOMContentLoaded', () => {
    const thumbnailList = document.getElementById('thumbnails');
    const fullImage = document.getElementById('fullimage');
    const figCaption = document.querySelector('#fullpicture figcaption');

    galleryItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        const img = document.createElement('img');
        img.src = item.thumbnail;
        img.alt = item.caption;
        img.width = 240;
        img.height = 160;
        img.addEventListener('click', () => changeImage(index));
        listItem.appendChild(img);
        thumbnailList.appendChild(listItem);
    });

    function changeImage(index) {
        const item = galleryItems[index];
        fullImage.src = item.fullSize;
        figCaption.textContent = item.caption;

        const thumbnails = document.querySelectorAll('#thumbnails img');
        thumbnails.forEach((thumb, i) => {
            if (i === index) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
    }

    changeImage(0); // Initialize with the first image
});
