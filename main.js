let APIKEY = "2oOyslhQnRdPdwFgQr6KSF0o26GZS56d"


document.addEventListener("DOMContentLoaded", quoteGenerator);
document.addEventListener("DOMContentLoaded", init);


function quoteGenerator() {
    let quoteBtn = document.getElementById("quoteSearch");
    quoteBtn.addEventListener('click', ev => {
        ev.preventDefault();
        fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(quote => {
            console.log(quote.character)
            let out = document.querySelector('.out');
            let charQuote = document.createElement('p');
            charQuote.innerHTML = quote.quote;
            out.insertAdjacentElement('afterbegin', charQuote)

            let Input = document.querySelector('input')
            let charName = quote.character;
            Input.value = charName
            
        })
    });

}





function init() {
    document.getElementById("btnSearch").addEventListener('click', ev => {
        ev.preventDefault();
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&anime&limit=1&q=`;
        let str = document.getElementById("search").value.trim();
        url = url.concat(str);
        console.log(url)
        fetch(url)
        .then(response => response.json())
        .then(content => {
            console.log(content.data)
            console.log('META', content.meta)
            let fig = document.createElement('figure');
            let img = document.createElement('img');
            let fc = document.createElement('figcaption');
            img.src = content.data[0].images.downsized.url;
            img.atl = content.data[0].title;
            fc.textContent = content.data[0].title;
            fig.appendChild(img);
            fig.appendChild(fc);
            let out = document.querySelector('.out');
            out.insertAdjacentElement('afterbegin', fig);
            document.querySelector('#search').value = '';
        })
    })
}

