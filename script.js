
function sendMail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let subject = document.getElementById("subject").value;

  // Check if any of the required fields are empty
  if (name === "" || email === "" || message === "" || subject === "") {
    // Show an error alert if any field is empty
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "Please fill in all the required fields.",
      background: "rgba(0, 0, 0, 0.6)",
      showConfirmButton: false,
      timer: 2100,
    });
  } else {
    // All required fields are filled, proceed with emailjs.send
    const params = {
      name: name,
      email: email,
      message: message,
      subject: subject,
    };

    const serviceID = "service_pd661xm";
    const templateID = "template_690tny5";

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        // Clear form fields after successful submission
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("subject").value = "";

        console.log(res);
        
        Swal.fire({
          icon: "success",
          title: "Your message was sent successfully!!",
          showConfirmButton: false,
          timer: 2100,
        });
      })
      .catch((err) => console.log(err));
  }
}



