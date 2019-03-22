var apiKey = '4daa92ce0b9e41aea9805795e6f6dbf5';
const mainBody = document.getElementById('main');
const selector = document.getElementById('newsSelector');
const defaultSelectorValue = 'abc-news-au';

window.addEventListener('load', async e => {
    updatedNews()
    await upadteSources()
    selector.value = defaultSelectorValue;

    selector.addEventListener('change', e => {
        updatedNews(e.target.value)
    })

})

async function upadteSources() {
    const res = await fetch(`https://newsapi.org/v1/sources`);
    const json = await res.json()
    selector.innerHTML = json.sources.map(src => `<option value="${src.id}">${src.name}</option>`).join('\n')
}

async function updatedNews(source = defaultSelectorValue) {
    const res = await fetch(`https://newsapi.org/v1/articles?source=${source}&apikey=${apiKey}`);
    console.log(res)
    const data = await res.json();
    console.log(data)
    main.innerHTML = data.articles.map(createArticles).join('\n')
}

function createArticles(article) {
    return `
        <div class="col-md-10 col-md-offset-1">
            <h2 class='h2 page-header'>${article.title}</h2> 
            <img class="img-rounded" width='100%' src="${article.urlToImage}"/>
            <p class='h3'>${article.description}</p>
        </div>
        <hr class='h-divider'/>
        `;
}



