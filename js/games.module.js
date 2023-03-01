
import { Ui } from "./ui.module.js";
import { Details } from "./details.module.js";
export class Games {
    constructor() {
        // get default first page
        this.getGames('mmorpg');
        document.querySelectorAll('.menu a').forEach((link) => {
            link.addEventListener('click', (e) => {
                document.querySelector('.menu .active').classList.remove('active');
                e.target.classList.add('active');
                this.getGames(e.target.getAttribute('data-category'));
            });
        });
        this.ui = new Ui();
    }
    async getGames(category) {
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none")
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f535b7bab1msh12548a7fe1b6167p1ad5a7jsn14c6d47a3215',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const apiResponse = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        const responseData = await apiResponse.json();
        this.ui.displayGamesData(responseData);
        this.startEvent();
        loading.classList.add('d-none');
    }
    startEvent() {
        document.querySelectorAll(".card").forEach((item) => {
            item.addEventListener('click', () => {
                const id = item.getAttribute('data-id');
                this.showDetails(id);
            })
        })
    }
    showDetails(gameId) {
        const dtails = new Details(gameId);
        document.querySelector('.games').classList.add('d-none');
        document.querySelector('.game-dtails').classList.remove('d-none');
    }
}
