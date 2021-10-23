var xhr = new XMLHttpRequest();
var response = "";
var restObj;

xhr.open("GET", "./json.json");
xhr.send("");
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) { // if response received
        //check weather the received data ok or not
        if (xhr.status == 200) {
            response = xhr.responseText;
            restObj = JSON.parse(response);
            //return the json object back into string
            response = JSON.stringify(restObj);
            console.log(restObj);
            console.log(JSON.stringify(restObj["results"][0].urls.regular));
            write();
            
        }
    }
}

function write() {
    for(var i=0;i<document.getElementsByTagName("img").length;i++){
            var c=document.getElementsByTagName("img")[i].setAttribute("src",JSON.stringify(restObj["results"][0].urls.regular));
        console.log(document.getElementsByTagName("img"));
    }
}
