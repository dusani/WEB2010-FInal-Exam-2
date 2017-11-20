const searchTerm = document.querySelector('#searchTerm')
const searchbutton = document.querySelector('#searchbutton')
// const output = document.querySelector('.output')
const accordion = document.querySelector('#accordion')


const ajaxSearch = function() {

  accordion.innerHTML = ""

  const API_URL = `https://newsapi.org/v2/everything?q=${searchTerm.value}&apiKey=e51ffae2cc2e497c9b7e6fb79934ffff`

  $.ajax({

    type: "GET",
    url: API_URL,
    async: true,
    dataType: "json",
    success: function(data) {
      console.log(data.articles);

      for (let i in data.articles) {
        accordion.innerHTML += `
        <div class="card">
          <div class="card-header" role="tab" id="heading">
            <h5 class="mb-0"><a href="#collapse${[i]}" data-parent="#accordion" data-toggle="collapse">
              ${data.articles[i].title}
                  </a></h5>
          </div>

          <div id="collapse${[i]}" class="collapse">
            <div class="d-flex">
              <div class="align-self-center"><img src="${data.articles[i].urlToImage}"></div>
              <div class="card-body col">
                ${data.articles[i].description}
                <a href="${data.articles[i].url}" target="_blank"><button class="btn btn-primary">Read more</button></a>

                <div class="d-flex flex-row justify-content-between">
                  <div class="">
                    <b>Source:</b>
                    <a href="http://${data.articles[i].source.name}" target="_blank">${data.articles[i].source.name}</a>
                  </div>
                  <div class="">
                    <b>Author:</b> <span>${data.articles[i].author}</span>
                  </div>
                  <div class="">
                    <b>Published At:</b> <span>${data.articles[i].publishedAt}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        `
      }

    },
    error: function(error) {
      console.log("There was an error");
    }

  })

}

searchButton.addEventListener('click', ajaxSearch)
