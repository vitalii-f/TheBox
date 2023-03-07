"use strict";

let isActive = document.getElementsByClassName("active_category")[0]; // active filter
const maxItems = 4; //max items on page
let filteredItemsCount = 0;
let maxCurrentItems = 4;
let currentProjectList = 0; //current page of projects list

const projectList = [
    {
        name : "Wildstone Infra Hotel",
        description: "2715 Ash Dr. San Jose, South Dakota",
        image: "./src/img/project_bg_1.webp",
        attribute: "commercial"
    },
    {
        name : "Wish Stone Building",
        description: "2972 Westheimer Rd. Santa Ana, Illinois",
        image: "./src/img/project_bg_2.webp",
        attribute: "residential"
    },
    {
        name : "Mr. Parkinston’s House",
        description: "3517 W. Gray St. Utica, Pennsylvania",
        image: "./src/img/project_bg_3.webp",
        attribute: "other"
    },
    {
        name : "Oregano Height 1",
        description: "2464 Royal Ln. Mesa, New Jersey",
        image: "./src/img/project_bg_4.webp",
        attribute: "commercial"
    },
    {
        name : "Oregano Height 2",
        description: "2464 Royal Ln. Mesa, New Jersey",
        image: "./src/img/project_bg_4.webp",
        attribute: "residential"
    },
    {
        name : "Oregano Height 3",
        description: "2464 Royal Ln. Mesa, New Jersey",
        image: "./src/img/project_bg.webp",
        attribute: "other"
    },
    {
        name : "Oregano Height 4",
        description: "2464 Royal Ln. Mesa, New Jersey",
        image: "./src/img/project_bg.webp",
        attribute: "other"
    },
    {
        name : "Oregano Height 5",
        description: "2464 Royal Ln. Mesa, New Jersey",
        image: "./src/img/project_bg.webp",
        attribute: "other"
    },
    {
        name : "Oregano Height 5",
        description: "2464 Royal Ln. Mesa, New Jersey",
        image: "./src/img/project_bg.webp",
        attribute: "other"
    },
    {
        name : "Oregano Height 5",
        description: "2464 Royal Ln. Mesa, New Jersey",
        image: "./src/img/project_bg.webp",
        attribute: "other"
    },
    {
        name : "Oregano Height 5",
        description: "2464 Royal Ln. Mesa, New Jersey",
        image: "./src/img/project_bg.webp",
        attribute: "other"
    },
    {
        name : "Oregano Height 7",
        description: "2464 Royal Ln. Mesa, New Jersey",
        image: "./src/img/project_bg.webp",
        attribute: "other"
    },
    {
        name : "Oregano Height 5",
        description: "2464 Royal Ln. Mesa, New Jersey",
        image: "./src/img/project_bg.webp",
        attribute: "other"
    },
]

let filteredProjectList = [];

const filters = document.getElementsByClassName("filter__category");

for (let filter of filters) {
    filter.addEventListener("click", (event) => {
        isActive = document.getElementsByClassName("active_category")[0];
        isActive.classList.remove("active_category");
        filter.classList.add("active_category");

        //refresh default counter values
        filteredItemsCount = 0;
        maxCurrentItems = 4;
        currentProjectList = 0;
        getProjects();
        changeProjectList();
        
    });
}

getProjects();
changeProjectList();

function getProjects() {
    const project = document.getElementsByClassName("projects__items")[0]; //container of projects
    const project_item = document.getElementsByClassName("project__item"); //project item
    isActive = document.getElementsByClassName("active_category")[0];

    //sort projects by category
    if (isActive.textContent.trim().toLowerCase() == "all") {
        filteredProjectList = projectList;
    } 
    else {
        filteredProjectList = [];
        for (let obj of projectList) {
            if (isActive.textContent.trim().toLowerCase() == obj.attribute) {
                filteredProjectList.push(obj);
            }
        }
    }
    
    //remove old projects before new render
    if (project_item.length > 0) {
        for (let i = project_item.length - 1; i >= 0; i--) {
            project_item[i].remove();
        }
    }

    //render project items
    if (filteredProjectList.length > 0) {
        for (; filteredItemsCount < maxCurrentItems; filteredItemsCount++) {
            if (filteredItemsCount == filteredProjectList.length) break;

            project.insertAdjacentHTML("beforeend", `
            <div class="project__item">
                <img class="project__img" src="${filteredProjectList[filteredItemsCount].image}" alt="Project image">
                <div class="project__description">
                    <h3> ${filteredProjectList[filteredItemsCount].name} </h3>
                    <p> ${filteredProjectList[filteredItemsCount].description} </p>
                </div>
            </div>
            `);
        }
    }

    let navContainer = document.getElementsByClassName("projects__navigation");
    let navIndicator = document.getElementsByClassName("navigation__indicator");

    if (navContainer.length > 0) {
        for (let i = navIndicator.length - 1; i >= 0; i--) {
            navIndicator[i].remove();
        }
    }
    if (filteredProjectList.length % maxItems == 0) {
        if (currentProjectList + 1 !== filteredProjectList.length / maxItems) {            for (let i = 0; i < filteredProjectList.length / maxItems; i++) {
                navContainer[0].insertAdjacentHTML("beforeend", `<span class="navigation__indicator"></span>`);
            }
        }
    } else
    if (currentProjectList + 1 <= Math.ceil(filteredProjectList.length / maxItems)) {
        for (let i = 0; i < Math.ceil(filteredProjectList.length / maxItems); i++) {
            navContainer[0].insertAdjacentHTML("beforeend", `<span class="navigation__indicator"></span>`);
        }
    }
}

function changeProjectList(direction) {
    let navIndicator = document.getElementsByClassName("navigation__indicator");
    let isActive = document.getElementsByClassName("active_indicator")[0];
    
    if (direction == "prev") {
        if (currentProjectList !== 0) {
            currentProjectList--;
            maxCurrentItems = maxCurrentItems - maxItems;
            filteredItemsCount = maxCurrentItems - maxItems;

            getProjects();
        }
    }

    if (direction == "next") {
        if (filteredProjectList.length % maxItems == 0) {
            if (currentProjectList + 1 !== filteredProjectList.length / maxItems) {
                currentProjectList++;
                filteredItemsCount = maxCurrentItems;
                maxCurrentItems = maxCurrentItems + maxItems;

                getProjects();
            }
        } else
        if (currentProjectList + 1 !== Math.ceil(filteredProjectList.length / maxItems)) {
            currentProjectList++;
            filteredItemsCount = maxCurrentItems;
            maxCurrentItems = maxCurrentItems + maxItems;

            getProjects();
        }
    }
    if (isActive) {
        isActive.classList.remove("active_indicator");
    }
    if (navIndicator[0]){
        console.log("Nav " + navIndicator[0]);
        navIndicator[currentProjectList].classList.add("active_indicator");
    }
}