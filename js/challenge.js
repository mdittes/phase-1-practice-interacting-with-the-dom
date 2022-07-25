

const countElement = document.querySelector('#counter')

const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')

minus.addEventListener('click', () => {
    const theNumberAsAString = countElement.textContent
    const number = parseInt(theNumberAsAString)
    countElement.textContent = number - 1;
});

plus.addEventListener('click', increment)

function increment() {
    const theNumberAsAString = countElement.textContent
    const number = parseInt(theNumberAsAString)
    countElement.textContent = number + 1;
};

const likesContainer = document.querySelector('ul.likes')

heart.addEventListener('click', () => {
    const currentNumber = countElement.innerText
    const likeElement = document.getElementById(`likes-${currentNumber}`)

    if (!likeElement){
        const li = document.createElement('li')
        li.id = `likes-${currentNumber}`
        const string = `${currentNumber} has been liked <span>1</span> times`
        li.innerHTML = string
        likesContainer.append(li);
    } else {
        const innerSpanElement = likeElement.querySelector('span')
        const currentLikeNumberAsAString = innerSpanElement.textContent
        const likeNumber = parseInt(currentLikeNumberAsAString)
        innerSpanElement.textContent = likeNumber + 1;
    }
})

const formElement = document.getElementById('comment-form')

const commentsContainer = document.querySelector('div.comments')

formElement.addEventListener('submit', (e) => {
    e.preventDefault()
    const userInput = e.target.comment.value
    const p = document.createElement('p')
    p.innerText = userInput
    commentsContainer.append(p)
    e.target.reset();
})

const pause = document.getElementById('pause')

let paused = false;

let timerID = setInterval(() => {
    increment()
}, 1000)

pause.addEventListener('click', () => {
    if (paused) {
        timerID = setInterval( () => {
            increment()
        }, 1000)
    } else {
        clearInterval(timerID)
    }
    paused = !paused;
})
