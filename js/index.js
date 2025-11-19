// class Games {
//   constructor() {
//     this.getGames("mmorpg");
//     document.querySelectorAll(".menu a").forEach((link) => {
//       link.addEventListener("click", (e) => {
//         document.querySelector(". menu .active").classList.remove("active");
//         e.target.classList.add("active");
//         // this.getGames(e.target.dataset.catgory);
//       });
//     });
//     // this.ui=new Ui()
//   }
//   async getGames() {
//     const options = {
//       method: "GET",
//       headers: {
//         "x-rapidapi-key": "fda98f9434msh4813e99ff68c77cp18ba2ejsnf6c15fe02ef1",
//         "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
//       },
//     };
//     const api = await fetch(
//       `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options
//     );
//     const respons = await api.json();
//     console.log(respons);

//   }
// }
// async function getGames() {
//     const options = {
//       method: "GET",
//       headers: {
//         "x-rapidapi-key": "fda98f9434msh4813e99ff68c77cp18ba2ejsnf6c15fe02ef1",
//         "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
//       },
//     };
//     const api = await fetch(
//       `https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter`,options
//     );
//     const respons = await api.json();
//     console.log(respons);
// }
// getGames()
import { Games } from "./game.js";
new Games();

