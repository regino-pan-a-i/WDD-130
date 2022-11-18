/* 
    fetch quote.
    output quote

    CSS:
     :root{
            --quote-color: blue;
            --quote-with: 66ch;
        }
        .quote{
            font-size: 1.2em;
            font-family: 'Courier New', Courier, monospace;
            max-width: var(--quote-with);
        }
        .quote span{
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            font-size: 1.2em;
            color: var(--quote-color);
        }
        .quote .author{
            text-align: right;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

        }
*/

const basURL ="https://api.quotable.io/";

function quoteTemplate(quote){
    return `
    <section class="quote">
        <p>
            <span class="quote-mark"> &ldquo;</span> ${quote.content}
            <span class="quote-mark"> &rdquo;</span></p>
        <p class="author">
            --${quote.author}
        </p>
    </section>`;
}

async function getQuote(url){
    // fetch
    try{
        const response = await fetch(url + 'random');
        if (response.ok){
            const data = await response.json();
            return data;
        }
    }
    catch(error){
        console.log(error);
    }
}

export default async function renderQuote(selector){
    const quote = await getQuote(basURL);
    const element = document.querySelector(selector);
    const html = quoteTemplate(quote);
    element.innerHTML = html;
    console.log(quote);
}