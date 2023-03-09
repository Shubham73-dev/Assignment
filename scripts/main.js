var count = 0;
var ele = document.getElementsByClassName('circles')[0].children;
ele[count].style.borderRadius = '6px';
ele[count].style.width = '22px';
ele[count].style.backgroundColor = '#FFFFFF';
function inItEvents() {
    if (count <= 1) {
        count += 1;
        ele[count].style.borderRadius = '6px';
        ele[count].style.width = '22px';
        ele[count].style.backgroundColor = '#FFFFFF';

        ele[count - 1].style.borderRadius = '50%';
        ele[count - 1].style.width = '8px';
        ele[count - 1].style.backgroundColor = 'transparent';
    } else {
        count = 0
        ele[count].style.borderRadius = '6px';
        ele[count].style.width = '22px';
        ele[count].style.backgroundColor = '#FFFFFF';
        ele[2].style.borderRadius = '50%';
        ele[2].style.width = '8px';
        ele[2].style.backgroundColor = 'transparent';
    }
}

setInterval(() => {
    inItEvents();
}, 2000);

let buttons = document.getElementsByClassName('paginationBtnContainer')[0].children;
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', toggle);
}
var cards = document.getElementsByClassName('cardsContainer')[0].children
var cardCount = 0;
var feedbackContents = document.getElementsByClassName('feedbackContents')[0].children;
var togglers = document.getElementsByClassName('togglerSection')[0].children;
togglers[0].classList.add('activeToggler');

// method for client feedback cards toggler section starts from here
// function toggle() {
//     // console.log(this);
//     // up button click
//     if (this.children[0].className == 'fa-solid fa-angle-down') {
//         cardCount += 1;
//         if (cardCount < 3) {
//             cards[cardCount].classList.add('cardHighlighted');
//             cards[cardCount - 1].classList.remove('cardHighlighted');
//             buttons[0].classList.add('blue')
//             togglers[cardCount].classList.add('activeToggler');
//             togglers[cardCount - 1].classList.remove('activeToggler');
//             if (cardCount == 2) {
//                 buttons[1].classList.remove('blue')
//                 feedbackContents[0].innerHTML = 'Wonderful service, Loved it!'
//                 feedbackContents[2].innerHTML = 'Quam massa placerat a fames. Fringilla amet ut molestie enim, eget enim, enim. Tempor vitae suspendisse fermentum, et ut malesuada sed tristique. Ipsum feugiat ac habitasse varius vel at porta magna dignissim. Lorem proin amet ultricies nulla imperdiet vivamus consectetur diam. Et eu enim amet, dapibus. Tortor tincidunt mi aliquet habitant lorem eu, ac nulla. Mauris, viverra feugiat et non, est sit dictum. Laoreet lorem interdum dolor, ut aliquam in potenti facilisi. Nascetur tincidunt ultricies massa, ultrices feugiat quam. Dolor egestas sit eget sagittis netus fusce eget.'
//             } else if (cardCount == 1) {

//                 feedbackContents[0].innerHTML = 'Awesome!';
//                 feedbackContents[2].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod atque eum impedit numquam at sint fuga blanditiis dolores accusantium perspiciatis nihil culpa, enim, ex officia. Quis consectetur rerum doloremque nobis Lorem proin amet ultricies nulla imperdiet vivamus consectetur diam. Et eu enim amet, dapibus. Tortor tincidunt mi aliquet habitant lorem eu, ac nulla. Mauris, viverra feugiat et non, est sit dictum. Laoreet lorem interdum dolor, ut aliquam in potenti facilisi. Nascetur tincidunt ultricies massa, ultrices feugiat quam. Dolor egestas sit eget sagittis netus fusce eget."
//             }
//         }
//         else {
//             cardCount = 2;
//         }
//     }

//     // code for down arrow button
//     else {
//         cardCount -= 1;
//         if (cardCount < 0) {
//             cardCount = 0;
//         } else {
//             cards[cardCount].classList.add('cardHighlighted');
//             cards[cardCount + 1].classList.remove('cardHighlighted');
//             buttons[1].classList.add('blue')
//             togglers[cardCount].classList.add('activeToggler');
//             togglers[cardCount + 1].classList.remove('activeToggler');
//             if (cardCount == 0) {
//                 buttons[0].classList.remove('blue')
//                 feedbackContents[0].innerHTML = 'It was a great experience!'
//             }
//             else if (cardCount == 1) {
//                 feedbackContents[0].innerHTML = 'Awesome!';
//                 feedbackContents[2].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod atque eum impedit numquam at sint fuga blanditiis dolores accusantium perspiciatis nihil culpa, enim, ex officia. Quis consectetur rerum doloremque nobis Lorem proin amet ultricies nulla imperdiet vivamus consectetur diam. Et eu enim amet, dapibus. Tortor tincidunt mi aliquet habitant lorem eu, ac nulla. Mauris, viverra feugiat et non, est sit dictum. Laoreet lorem interdum dolor, ut aliquam in potenti facilisi. Nascetur tincidunt ultricies massa, ultrices feugiat quam. Dolor egestas sit eget sagittis netus fusce eget."
//             }
//         }

//     }

// }

function toggle() {
    // console.log(this);
    // up button click
    if (this.children[0].className == 'fa-solid fa-angle-down') {
        cardCount += 1;
        if (cardCount < cards.length) {
            cards[cardCount].classList.add('cardHighlighted');
            cards[cardCount - 1].classList.remove('cardHighlighted');
            buttons[0].classList.add('blue')
            togglers[cardCount].classList.add('activeToggler');
            togglers[cardCount - 1].classList.remove('activeToggler');
            if (cardCount == cards.length-1) {
                buttons[1].classList.remove('blue')
                feedbackContents[0].innerHTML = 'Wonderful service, Loved it!'
                feedbackContents[2].innerHTML = 'Quam massa placerat a fames. Fringilla amet ut molestie enim, eget enim, enim. Tempor vitae suspendisse fermentum, et ut malesuada sed tristique. Ipsum feugiat ac habitasse varius vel at porta magna dignissim. Lorem proin amet ultricies nulla imperdiet vivamus consectetur diam. Et eu enim amet, dapibus. Tortor tincidunt mi aliquet habitant lorem eu, ac nulla. Mauris, viverra feugiat et non, est sit dictum. Laoreet lorem interdum dolor, ut aliquam in potenti facilisi. Nascetur tincidunt ultricies massa, ultrices feugiat quam. Dolor egestas sit eget sagittis netus fusce eget.'
            } else if (cardCount == 1) {

                feedbackContents[0].innerHTML = 'Awesome!';
                feedbackContents[2].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod atque eum impedit numquam at sint fuga blanditiis dolores accusantium perspiciatis nihil culpa, enim, ex officia. Quis consectetur rerum doloremque nobis Lorem proin amet ultricies nulla imperdiet vivamus consectetur diam. Et eu enim amet, dapibus. Tortor tincidunt mi aliquet habitant lorem eu, ac nulla. Mauris, viverra feugiat et non, est sit dictum. Laoreet lorem interdum dolor, ut aliquam in potenti facilisi. Nascetur tincidunt ultricies massa, ultrices feugiat quam. Dolor egestas sit eget sagittis netus fusce eget."
            }
        }
        else {
            cardCount = cards.length-1;
        }
    }

    // code for down arrow button
    else {
        cardCount -= 1;
        if (cardCount < 0) {
            cardCount = 0;
        } else {
            cards[cardCount].classList.add('cardHighlighted');
            cards[cardCount + 1].classList.remove('cardHighlighted');
            buttons[1].classList.add('blue')
            togglers[cardCount].classList.add('activeToggler');
            togglers[cardCount + 1].classList.remove('activeToggler');
            if (cardCount == 0) {
                buttons[0].classList.remove('blue')
                feedbackContents[0].innerHTML = 'It was a great experience!'
            }
            else if (cardCount == 1) {
                feedbackContents[0].innerHTML = 'Awesome!';
                feedbackContents[2].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod atque eum impedit numquam at sint fuga blanditiis dolores accusantium perspiciatis nihil culpa, enim, ex officia. Quis consectetur rerum doloremque nobis Lorem proin amet ultricies nulla imperdiet vivamus consectetur diam. Et eu enim amet, dapibus. Tortor tincidunt mi aliquet habitant lorem eu, ac nulla. Mauris, viverra feugiat et non, est sit dictum. Laoreet lorem interdum dolor, ut aliquam in potenti facilisi. Nascetur tincidunt ultricies massa, ultrices feugiat quam. Dolor egestas sit eget sagittis netus fusce eget."
            }
        }

    }

}


