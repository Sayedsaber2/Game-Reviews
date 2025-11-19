import { Ui } from "./ui.js";

export class Details {
  constructor(id) {
    document.querySelector(".btn-close").addEventListener("click", () => {
      document.querySelector(".games").classList.remove("d-none");
      document.querySelector(".detils").classList.add("d-none");
    });
    this.ui = new Ui();
    this.getDetails(id);
  }
  async getDetails(idGame) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "fda98f9434msh4813e99ff68c77cp18ba2ejsnf6c15fe02ef1",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGame}`,
      options
    )
      .then((response) => response.json())
      .then((response) => this.ui.displayDeatils(response))
      .catch((err) => console.error(err))
      .finally(() => loading.classList.add("d-none"));
  }
}
