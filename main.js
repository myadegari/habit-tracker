function loadPage() {
    const container = document.querySelector('.container');
    container.innerHTML = ''
    for (let i = 0; i < 60; ++i) {
        if (!localStorage.getItem(i)) {
            localStorage.setItem(i, '')
            container.innerHTML = container.innerHTML + `<div class="box" onclick="checkHandler()">${i + 1}</div>`
        }
        else {

            container.innerHTML = container.innerHTML + `<div class="box checked" onclick="checkHandler()">${i + 1}</div>`


        }

    }

}

function clearLocal() {
    localStorage.clear()
    loadPage()
}


function checkHandler() {
    const id = event.target.innerHTML * 1 - 1
    switch (localStorage.getItem(id)) {
        case 'true':
            localStorage.setItem(id, '');
            break;
        default:
            localStorage.setItem(id, 'true');
    }
    loadPage()



}
// e.target.style.classList

loadPage()
