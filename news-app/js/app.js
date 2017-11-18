const searchTerm = document.querySelector('#searchTerm')
const searchbutton = document.querySelector('#searchbutton')
const output = document.querySelector('.output')


const ajaxSearch = function () {

  output.innerHTML = ""

  const API_URL = `https://newsapi.org/v2/everything?q=${searchTerm.value}&apiKey=e51ffae2cc2e497c9b7e6fb79934ffff`

  $.ajax({

    type: "GET",
    url: API_URL,
    async: true,
    dataType: "json",
    success: function (data) {
      console.log(data.articles);

      for(let i in data.articles){
        output.innerHTML += `
          <li class="listItem">
            <div class="listItemDiv firstDiv">
              <a href="${data.articles[i].url}" target="_blank"><img src="${data.articles[i].urlToImage}" alt=""></a>
            </div>
            <div class="listItemDiv secondDiv">
              <a href="${data.articles[i].url}" target="_blank">${data.articles[i].title}</a>
              <p>${data.articles[i].description} <a href="${data.articles[i].url}" target="_blank"><button>Read more</button></a></p>
              <p><b>Source:</b> <a href="http://${data.articles[i].source.name}" target="_blank">${data.articles[i].source.name}</a>&emsp;
                <b>Author:</b> <span>${data.articles[i].author}</span>&emsp;
                <b>Published At:</b> <span>${data.articles[i].publishedAt}</span></p>
            </div>
          </li>
        `
      }

    },
    error: function (error) {
      console.log("There was an error");
    }

  })

}

searchButton.addEventListener('click', ajaxSearch)
