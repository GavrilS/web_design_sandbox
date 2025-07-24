const searchBtn = document.getElementById('search-btn');
const searchBox = document.getElementById('input-search');
const infoBoxes = document.querySelectorAll('.info-container > div');

searchBtn.addEventListener('click', () => {
    clearHiddenClass();
    let searchTerm = searchBox.value;
    if (!searchTerm) {
        console.log('Search Term is not populated; skipping...');
    } else {
        infoBoxes.forEach((div) => {
            let flag = false;
            for (child of div.children) {
                if (child.innerText.includes(searchTerm)) {
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                div.classList.add('hidden');
            }
        })
    }
});


function clearHiddenClass() {
    let hiddenBoxes = document.querySelectorAll('.hidden');
    hiddenBoxes.forEach((div) => {
        div.classList.remove('hidden');
    });
}

