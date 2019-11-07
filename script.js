// TODO: add code here
window.addEventListener("load", function(){
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            let list = [];
        //     let spaceHours = [];
            for(let i = 0; i<json.length; i++){
        // spaceHours.push(json[i].hoursInSpace);
        // spaceHours.sort((a,b) => b-a);
        // console.log(spaceHours);
        let container = document.getElementById("container");
        list.push(
        `<div class = "astronaut">
        <div class = "bio">
        <h3> ${json[i].firstName} ${json[i].lastName} </h3>
        <ul>
        <li>Hours in Space: ${json[i].hoursInSpace}</li>
        <li>Active: ${json[i].active}</li>
        <li>Skills: ${json[i].skills}</li>
        </ul>
        </div>
        <img class = "avatar" src = ${json[i].picture}>
        </div>
        `)}
        container.innerHTML = list;
    });
    });
    });    