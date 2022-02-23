

console.log(window.navigator.userAgentData.platform);

var canvas = document.querySelector('canvas');

var width;
var height;
function device() {
    let div = document.createElement("div");
    div.style = "background-color: black; height: 500px; width: 250px; position: absolute; text-align: center;";


    let paragraph = document.createElement("p");
    paragraph.innerHTML = "Are you using " + window.navigator.userAgentData.platform + "?";
    paragraph.style = "color: white; font-family: Verdana; font-size: 16px; font-weight: bold";

    let div2 = document.createElement("div");
    let yes = document.createElement("button");
    yes.style = "background-color: green; font-family: Verdana; font-size: 20px; border-color: lightgreen";
    yes.innerHTML = "Yes";
    yes.addEventListener("click", function(e) {
        start();
    });
    
    let no = document.createElement("button");
    no.style = "background-color: red; font-family: Verdana; font-size: 20px; border-color: pink;";
    no.innerHTML = "No I use: ";
    no.addEventListener("click", function(e) {
        start();
    });
    no.disabled = true;

    let select = document.createElement("select");
    let options = ["Choose platform", "Windows", "Chromebook", "Android", "iPhone"];
    for (let i = 0; i < options.length; i++) {
        let option = document.createElement("option");
        option.value = options[i];
        option.innerHTML = options[i];
        select.appendChild(option);
    }
    select.addEventListener("change", function(e) {
        if (select.options[select.selectedIndex].value != "Choose platform" || select.options[select.selectedIndex].value != window.navigator.userAgentData.platform) {
            no.disabled = false;
        }
        if (select.options[select.selectedIndex].value == "Choose platform" || select.options[select.selectedIndex].value == window.navigator.userAgentData.platform) {
            no.disabled = true;
        }
        console.log(select.options[select.selectedIndex].value)
    });
    

    
    document.body.appendChild(div);
    div.appendChild(paragraph);
    div.appendChild(div2);
    div2.appendChild(yes);
    div2.appendChild(no);
    div2.appendChild(select);
    function start() {
        paragraph.innerHTML = "What resolution do you want?";
        div.removeChild(div2);

        let select = document.createElement("select");
        let options = ["640 x 480", "1280 x 720", "1920 x 1080", "2560 x 1440"];
        for (let i = 0; i < options.length; i++) {
            let option = document.createElement("option");
            option.value = options[i];
            option.innerHTML = options[i];
            select.appendChild(option);
        }
        div.appendChild(select);
        
        let play = document.createElement("button");
        play.innerHTML = "Play";
        play.style = "background-color: green; font-family: Verdana; font-size: 12px; border-color: lightgreen"
        div.appendChild(play);

        play.addEventListener("click", function(e) {
            switch (select.options[select.selectedIndex].value) {
                case "640 x 480":
                    width = 640; height = 480;
                    break;
                case "1280 x 720":
                    width = 1280; height = 720;
                    break;
                case "1920 x 1080":
                    width = 1920; height = 1080;
                    break;
                case "2560 x 1440":
                    width = 2560; height = 1440;
                    break;
            }
            

            canvas.width = width;
            canvas.height = height;
            document.body.appendChild(canvas);
            document.body.removeChild(div);
            canvas.style = "display: inline-block;"
            
        });
    }
}
device();