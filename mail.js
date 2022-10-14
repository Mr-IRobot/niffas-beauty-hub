function sendMail(){
    var params = {
        name: document.getElementById("Last").value,
        email: document.getElementById("Email").value,
        message: document.getElementById("Message").value,
    };
    const serviceID = "service_g5ytdo9";

    const templateID = "template_15j68mi";



    emailjs.send(serviceID,templateID,params)
    .then(
        res => {
            document.getElmenetById("Last").value = "";
            document.getElmenetById("Email").value = "";
            document.getElmenetById("Message").value = "";
            console.log(res);
            alert("sent");
        }
    ).catch((err) => console.log(err));
}



























