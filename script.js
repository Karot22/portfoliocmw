const autoType = document.querySelector(".auto-type");

if(autoType){
    new Typed(".auto-type", {
        strings:["Babkine"],
        typeSpeed:150,
        backSpeed:150,
        loop:true
    });
}


// Pour la création des boutons et le système montrant et cachant les contenus sur la page content-management, j'ai demandé à l'IA de chatgpt de me les faire puis j'ai adapté le code généré selon mes besoins 
// https://chatgpt.com/s/t_6a400416714c8191ad7456eaec2992ac 
function showExperience(id, button){

    const contents = document.querySelectorAll('.experience-content');
    const buttons = document.querySelectorAll('.exp-btn');

    contents.forEach(content => {
        content.classList.remove('active-content');
    });

    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(id).classList.add('active-content');

    button.classList.add('active');
}

// theme sombre / clair

if(localStorage.getItem("theme") === "sombre"){
    document.getElementById("themeSombre").checked = true;
}

changeTheme();

document.querySelector(".themeSombre").addEventListener("change", function (){
    if (document.getElementById("themeSombre").checked){
        localStorage.setItem("theme", "sombre");
        changeTheme();
    }
    else{
        localStorage.setItem("theme", "clair");
        changeTheme();
    }
   
});


function changeTheme(){

   if(document.getElementById("themeSombre").checked){
        document.body.classList.remove("clair");
        document.body.classList.add("sombre");
    }
    else{
        document.body.classList.remove("sombre");
        document.body.classList.add("clair");
    }

};