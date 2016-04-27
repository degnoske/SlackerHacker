chrome.extension.onMessage.addListener(function(msg1, sender, sendResponse) {
    if (msg1.action = 'open_dialog_box') {
        popDiv();
    }
    
    else{
        decline()
    }
    //;}
});



    document.documentElement.style.height = '100%';

    document.body.style.height = '100%';
    document.documentElement.style.width = '100%';
    document.body.style.width = '100%';
    var div = document.createElement('div');
    var bdiv = document.createElement('bdiv');
    var btnForm = document.createElement('form');
    var conBtn = document.createElement('input');
    var msg= document.createElement('p');
    var decBtn = document.createElement('input');



    var config = {
        zIndex: 999999
    };

//append all elements
    document.body.appendChild(bdiv);
    document.body.appendChild(div);
div.appendChild(msg);
    div.appendChild(btnForm);

    btnForm.appendChild(conBtn);
    btnForm.appendChild(decBtn);
//set attributes for div
    div.id = 'myDivId';
    bdiv.id = 'mybDivID';

/**
 * @Author: Dylan Egnoske
 * @Returns: Changes values for div class duing popup
 */
function popDiv() {
    div.style.borderRadius='50px';
    div.style.position = 'fixed';
    div.style.background = 'fixed';
    div.style.margin = 'auto';
    div.style.margin = 0;
    div.style.left = '25%';
    //div.style.opacity = 0.0;
    div.style.top = '25%';
    //div.style.left = 0;
    div.style.width = '50%';
    div.style.height = '50%';
    div.style.backgroundColor = '#42dca3';
    div.style.textAlign = 'center';
    div.style.verticalAlign = 'middle';
    div.style.zIndex = config.zIndex;
    div.style.display='table';

    bdiv.style.position = 'fixed';
    bdiv.style.background = 'fixed';
    bdiv.style.margin = 'auto';
    bdiv.style.marginRight = 'auto';
    bdiv.style.opacity = .80;
    bdiv.style.top = 0;
    bdiv.style.left = 0;
    bdiv.style.width = '100%';
    bdiv.style.height = '100%';
    bdiv.style.backgroundColor = 'black';
    bdiv.style.zIndex = config.zIndex;

//set attributes for btnForm
   // btnForm.action = '';

//set attributes for btn
//"btn.removeAttribute( 'style' );
    //document.getElementById(div).textContent="Are you Sure?";
    msg.innerHTML='Are you sure you want to be a slacker? <br> (Click no to be redirected to Google)';
    msg.style.textAlign='center';
    msg.style.verticalAlign='middle';
    msg.style.display= 'table-cell';
    msg.style = 'font-size: 2em;';
    conBtn.type = 'button';
    conBtn.value = 'Yes';
    conBtn.style.position = 'absolute';
    conBtn.style.top = '75%';
    conBtn.style.left = '25%';
    conBtn.style.height = '50px';
    conBtn.style.width = '75px';

    decBtn.type = 'button';
    decBtn.value = 'No';
    decBtn.style.position = 'absolute';
    decBtn.style.top = '75%';
    decBtn.style.left = '60%';
    decBtn.style.height = '50px';
    decBtn.style.width = '75px';


    conBtn.onclick = confirm;
    decBtn.onclick = decline;
}

function confirm(){
    document.body.removeChild(div);
    document.body.removeChild(bdiv);
    chrome.runtime.sendMessage({action: "confirm"}, function(response) {
        console.log(response.farewell);
    });
}
function decline(){
    chrome.runtime.sendMessage({action: "decline"}, function(response) {
        console.log(response.farewell);
    });
}
