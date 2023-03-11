const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");


const apiURL = "http://api.quotable.io/random";

async function getQuote() {
    try {
        //Disable button while waiting for data to be fetched
        btn.innerText = "Feyching data...";
        btn.Disabled = true;


        const response = await fetch(apiURL);
        const result = await response.json();

        const quoteContent = result.content;
        const authorContent = result.author;

        quote.innerText = quoteContent;
        author.innerText = `~ ${authorContent}`;

        //console.log(result);

        //Enabling the button to normal
        btn.innerText = "Generate Quote"
        btn.Disabled = false;

    } catch (error) {
        quote.innerText = "Something went wrong. Try later";
        author.innerText = `~ `;
        console.log(error);

        //Enabling the button to normal
        btn.innerText = "Generate Quote"
        btn.Disabled = true;
    }
}

//Call function to display a quote when app accessed
getQuote();

btn.addEventListener("click", getQuote)