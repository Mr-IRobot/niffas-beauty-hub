function sendMail(){
    var params = {
        name1: document.getElementById("First").value,
        name2: document.getElementById("Last").value,
        subject: document.getElementById("Subject").value,
        phone: document.getElementById("Phone").value,
        email: document.getElementById("Email").value,
        message: document.getElementById("Message").value,
    };
    const serviceID = "service_g5ytdo9";

    const templateID = "template_15j68mi";


    emailjs.send(serviceID,templateID,params)
    .then(
        res => {
            document.getElmenetById("First").value = "";
            document.getElmenetById("Last").value = "";
            document.getElmenetById("Subject").value = "";
            document.getElmenetById("Phone").value = "";
            document.getElmenetById("Email").value = "";
            document.getElmenetById("Message").value = "";
            console.log(res);
            alert("Message sent successfully");
        }; alert("Message sent successfully"); 
    ).catch((err) => console.log(err));
}











