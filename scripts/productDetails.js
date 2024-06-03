document.addEventListener('DOMContentLoaded', function () {
    const iphoneNav = document.querySelector('.iphone-nav');
    const subHover = document.querySelector('.sub-hover');
    const bannerArea = document.querySelector('.banner-area');
    const body = document.body;
    
    iphoneNav.addEventListener('mouseenter', function () {
        subHover.style.display = 'block';
        // bannerArea.style.display = 'none';
        body.classList.add('no-scroll'); // Disable body scroll
    });

    iphoneNav.addEventListener('mouseleave', function () {
        // Use a timeout to check if the mouse enters the submenu
        setTimeout(function () {
            if (!subHover.matches(':hover')) {
                subHover.style.display = 'none';
                // bannerArea.style.display = 'block';
                body.classList.remove('no-scroll'); // Enable body scroll
            }
        }, 100);
    });

    subHover.addEventListener('mouseleave', function () {
        subHover.style.display = 'none';
        bannerArea.style.display = 'block';
        body.classList.remove('no-scroll'); // Enable body scroll
    });

    subHover.addEventListener('mouseenter', function () {
        subHover.style.display = 'block';
        bannerArea.style.display = 'none';
        body.classList.add('no-scroll'); // Disable body scroll
    });
});


// image stack scroll on left side


const upButton = document.querySelector('.up-btn');
const downButton = document.querySelector('.down-btn');
const imagesList = document.querySelector('.images-list');
const listItemHeight = imagesList.querySelector('.list-item').offsetHeight + 10; // Height of each list item including margin

upButton.addEventListener('click', () => {
    imagesList.scrollTop -= listItemHeight; // Scroll one item height up
    if (imagesList.scrollTop <= 0) {
        imagesList.scrollTop = imagesList.scrollHeight;
         // Scroll to the end if at the top
    }
    
});

downButton.addEventListener('click', () => {
    imagesList.scrollTop += listItemHeight; // Scroll one item height down
    if (imagesList.scrollTop >= imagesList.scrollHeight - imagesList.clientHeight) {
        imagesList.scrollTop = 0; // Scroll to the beginning if at the end
    }
    
});


//image display on list item click
const listItems = document.querySelectorAll('.list-item');

    listItems.forEach(item => {
        item.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-image');
            const displayedImage = document.getElementById('displayed-image');
            displayedImage.setAttribute('src', imageSrc);
        });
    });


//zoom box

const displayedImage = document.getElementById('displayed-image');
const zoomBox = document.querySelector('.zoom-box');

displayedImage.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = e;
    const { offsetWidth, offsetHeight } = displayedImage;
    const { naturalWidth, naturalHeight } = displayedImage;

    const zoomFactor = 2; // Adjust the zoom level
    const backgroundSize = `${naturalWidth * zoomFactor}px ${naturalHeight * zoomFactor}px`;

    const backgroundPositionX = -offsetX * zoomFactor + offsetWidth / 2 + 'px';
    const backgroundPositionY = -offsetY * zoomFactor + offsetHeight / 2 + 'px';

    zoomBox.style.backgroundImage = `url('${displayedImage.src}')`;
    zoomBox.style.backgroundSize = backgroundSize;
    zoomBox.style.backgroundPosition = `${backgroundPositionX} ${backgroundPositionY}`;
});



//product warranty 

document.addEventListener('DOMContentLoaded', function() {
    const warrantyItems = document.querySelectorAll('.warranty-item');
    const warrantyDetails = document.querySelectorAll('.warranty-details');

    warrantyItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all warranty items and details
            warrantyItems.forEach(i => i.classList.remove('active'));
            warrantyDetails.forEach(detail => detail.classList.remove('active'));

            // Add active class to clicked item and corresponding details
            const targetClass = this.getAttribute('data-target');
            this.classList.add('active');
            document.querySelector(`.warranty-details.${targetClass}`).classList.add('active');
        });
    });
});



