
const boxNumber = 30;
function loadPage() {
    const container = document.querySelector('.container');
    container.innerHTML = ''
    for (let i = 0; i < boxNumber; ++i) {
        if (!localStorage.getItem(i)) {
            localStorage.setItem(i, '')
            container.innerHTML = container.innerHTML + `<div class="box" onclick="checkHandler()">${i + 1}</div>`
        }
        else if (localStorage.getItem(i) == '1') {

            container.innerHTML = container.innerHTML + `<div class="box checked-1" onclick="checkHandler()">${i + 1}</div>`


        } else {
            container.innerHTML = container.innerHTML + `<div class="box checked-2" onclick="checkHandler()">${i + 1}</div>`
        }

    }
    calculateStreaks()

}
function calculateStreaks() {
    let streak = 0
    for (let i = 0; i < boxNumber; ++i) {
        if (localStorage.getItem(i) == '2') {
            streak += 1
        }
        document.querySelector('#streak').innerHTML = `${streak}`
    }
}

function clearLocal() {
    localStorage.clear()
    loadPage()
}


function checkHandler() {
    const id = event.target.innerHTML * 1 - 1
    switch (localStorage.getItem(id)) {
        case '1':
            localStorage.setItem(id, '2');
            break;
        case '':
            localStorage.setItem(id, '1');
            break;
        default:
            localStorage.setItem(id, '');
    }
    loadPage()



}
// e.target.style.classList

loadPage()
