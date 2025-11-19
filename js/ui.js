export class Ui {
  displayDataGames(data) {
    let cartona = ``;
    for (let i = 0; i < data.length; i++) {
      cartona += `<div class="col">
            <div data-id="${
              data[i].id
            }" class="card bg-transparent" style="width: 18rem" role="button">
              <div class="card-body">
                <figure class="position-relative">
                  <img
                    src="${data[i].thumbnail}"
                    class="card-img-top object-fit-cover h-100"
                    alt="logo"
                  />
                </figure>
                <figcaption>
                  <div class="justify-content-between hstack">
                    <h3 class="small h6 text-white">${data[i].title}</h3>
                    <span class="badge text-bg-primary p-2">Free</span>
                  </div>
                  <p class="card-text text-white text-center opacity-50">
                    ${data[i].short_description
                      .split(" ")
                      .slice(0, 8)
                      .join(" ")}
                  </p>
                </figcaption>
              </div>
              <footer>
                <div class="card-footer justify-content-between hstack">
                  <span class="badge badge-color">${data[i].genre}</span>
                  <span class="badge badge-color">${data[i].platform}</span>
                </div>
              </footer>
            </div>
          </div>`;
    }
    document.getElementById("gameData").innerHTML = cartona;
  }
  displayDeatils(data) {
    let cartona = `<div class="col-md-4">
            <img src="${data.thumbnail}" class="w-100" alt="image details" />
          </div>
          <div class="col-md-8">
            <h3>Title: ${data.title}</h3>
            <p>Category: <span class="badge text-bg-info"> ${data.genre}</span></p>
            <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span></p>
            <p>Status: <span class="badge text-bg-info"> ${data.status}</span></p>
            <p class="small">${data.description}</p>
            <a class="btn btn-outline-warning text-white" target="_blank" href="${data.game_url}">Show Game</a>
          </div>`;
          document.getElementById("deatils").innerHTML=cartona
  }
}
