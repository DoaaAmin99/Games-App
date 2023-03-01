import { Ui } from "./ui.module.js";
export class Details {
    constructor(id) {
        this.ui = new Ui();
        document.getElementById('closeBtn').addEventListener('click', () => {
            document.querySelector('.games').classList.remove('d-none');
            document.querySelector('.game-dtails').classList.add('d-none');
        });
        this.getDetails(id);
    }
    async getDetails(gameId) {
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f535b7bab1msh12548a7fe1b6167p1ad5a7jsn14c6d47a3215',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);
        const apiData = await api.json();
        this.ui.displayDetailes(apiData);
        loading.classList.add('d-none');
    }
}