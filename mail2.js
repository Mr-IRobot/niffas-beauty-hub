function sendMail(){
    var params = {
        name1: document.getElementById("First").value,
        name2: document.getElementById("Last").value,
        subject: document.getElementById("Subject").value,
        phone: document.getElementById("Phone").value,
        email: document.getElementById("Email").value,
        service: document.getElementById("Service").value,
        message: document.getElementById("Message").value,
    };
    const serviceID = "service_qw19562";

    const templateID = "template_o94j1ws";



    emailjs.send(serviceID,templateID,params)
    .then(
        res => {
            document.getElmenetById("First").value = "";
            document.getElmenetById("Last").value = "";
            document.getElmenetById("Subject").value = "";
            document.getElmenetById("Phone").value = "";
            document.getElmenetById("Email").value = "";
            document.getElmenetById("Service").value = "";
            document.getElmenetById("Message").value = "";
            console.log(res);
            alert("Message sent successfully");
        }
    ).catch((err) => console.log(err));
}