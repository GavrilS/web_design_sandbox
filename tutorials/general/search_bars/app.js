const searchBtn = document.getElementById('search-btn');
const searchBox = document.getElementById('input-search');

searchBtn.addEventListener('click', () => {
    let searchTerm = searchBox.value;
    if (!searchTerm) {
        console.log('Search Term is not populated; skipping...');
    } else {
        console.log('We are in action!');
    }
});

