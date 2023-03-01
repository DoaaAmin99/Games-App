export class Ui {
    displayGamesData(data) {
        let cartoona = ``;
        for (let i = 0; i < data.length; i++) {
            cartoona += `<div class="col">
            <div data-id="${data[i].id}" class="card h-100 bg-transparent p-2">
                <img src="${data[i].thumbnail}" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="card-title d-flex justify-content-between align-items-center ">
                        <h5 class="small">${data[i].title}</h5>
                        <span class="badge bg-primary p-2">Free</span>
                    </div>
                
                <p class="card-text small text-center opacity-50">${data[i].short_description}</p>
                </div>
                <div class="card-footer small d-flex  justify-content-between p-0 pt-2">
                    <span class="badge badge-color ">${data[i].genre}</span>
                    <span class="badge badge-color  ">${data[i].platform}</span>
                </div>
            </div>
        </div>`
        }
        document.getElementById('gameInfo').innerHTML = cartoona;
    }
    displayDetailes(data) {
        let content = `<div class="col-md-4">
        <img src="${data.thumbnail}" class="w-100" alt="image details" />
    </div>
    <div class="col-md-8">
        <h3>Title: ${data.title}</h3>
        <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
        <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
        <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
        <p class="small">${data.description}</p>
        <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
    </div>`
        document.getElementById('detailsContent').innerHTML = content;
    }

}