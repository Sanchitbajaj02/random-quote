const quotes = document.querySelector("#quotes");
const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("https://quotes.rest/qod?language=en")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      let quote = data.contents.quotes[0].quote;
      let authorName = data.contents.quotes[0].author;
      let tagArray = data.contents.quotes[0].tags;

      quotes.innerHTML = `
      <q class="quote-text">
        ${quote}
      </q>
      <figcaption class="blockquote-footer" id="footer">
        <cite title="Source Title">${authorName}</cite>
        <p class="mt-1">Tags: ${tagArray.join(', ')}</p>
      </figcaption>
      `;
    })
    .catch((err) => alert(err));
});
