let projects = [
    {
        name: "Cooking Fun",
        description:
            "Pretty little website for demonstration of kitchen tools store products",
        image: "./primages/1.jpeg",
        link:"<a href='https://github.com/Ktabtr/CookingFun.git'>" + "Here!" + "</a>",
        technologies:"HTML5, CSS, JS",
    },

    {
        name: "Weather App",
        description:
            "Nice and simple app for cheking the weather in every place at the world by it's name",
        image: "./primages/2.jpeg",
        link:"<a href='https://github.com/Ktabtr/WeatherApp.git'>" + "Here!" + "</a>",
        technologies:"HTML5, CSS, JS, API",
    },
    {
        name: "EduKid",
        description:
            "Portfolio page for Children Development Center",
        image: "./primages/3.jpeg",
        link:"<a href='https://github.com/Ktabtr/EduKid.git'>" + "Here!" + "</a>",
        technologies:"HTML5, CSS, TS, React",
    },
    
];


function showProjects() {
    for (let i = 0; i < projects.length; i++) {
        document.getElementById("projects").innerHTML +=
            `<div class="col-md-4 mt-3">
            <div class="card" style="width: 18rem;margin:0 auto;">
        <img src="${projects[i].image}" class="card-img-top" alt="${projects[i].name}">
            <div class="card-body">
                <h5 class="card-title">${projects[i].name}</h5>
                <a data-bs-toggle="modal" data-bs-target="#infoModal" class="btn btn-primary w-100" onclick="setModal(${i})">See more</a>
            </div>
            </div>
</div>`;
    }
}
showProjects();

function setModal(index) {
    document.getElementById("title").innerHTML = projects[index].name;
    document.getElementById("mbody").innerHTML = `<p><b>Description: </b>${projects[index].description}</p>
    <p><b>Made by using: </b>${projects[index].technologies}</p>
    <p><b>View at GitHub: </b>${projects[index].link}</p>`

}

