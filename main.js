function sendMessage(){
    const subject = document.getElementById("subject").value;
    const name  = document.getElementById("name").value;
    const msg   = document.getElementById("message").value.toString();
    if(name && msg && subject){
        window.open('mailto:hello@centurion.co.in?subject='+subject+"-"+name+'&body='+msg);
    }

}
function closePop(){
    const div1 = document.getElementById("Attigo-popup");
    const div2 = document.getElementById("IMS-popup");
    console.log(div1.style.visibility)
    console.log(div2.style.visibility)
    div1.style.visibility = 'hidden';
    div2.style.visibility = 'hidden';
    document.getElementById("attigo").style.visibility='visible';
    document.getElementById("IMS").style.visibility = 'visible';

}
function openAttigo(){
    
    document.getElementById("Attigo-popup").style.visibility = 'visible';
    document.getElementById("attigo").style.visibility='hidden';
    document.getElementById("IMS").style.visibility =  'hidden';
}
function openIMS(){
    document.getElementById("IMS-popup").style.visibility = 'visible';
    document.getElementById("attigo").style.visibility='hidden';
    document.getElementById("IMS").style.visibility =  'hidden';
}