

$("#contact_form").submit(async (e) => {
  e.preventDefault();
  const email = $("#email").val(),
    message = $("#message").val();

  if (!validator.isEmail(email)) {
    $("#res").html("<span class='red'>Please enter a valid email !</span>");
    return false;
  } else if (message.length < 30) {
    $("#res").html(
      "<span class='red'>Your message should be more than 30 characters !</span>"
    );
    return false;
  } else if (message.length > 1000) {
    $("#res").html(
      "<span class='red'>Your message should be less than 1000 characters !</span>"
    );
    return false;
  }

  $("#contact_form button").attr("disabled", true);
  $("#res").html("");
  $("#response i").removeClass("hidden");

  await $.ajax({
    type: "POST",
    url: "https://contact-form007.herokuapp.com/",
    data: { email: email, message: message },
    dataType: "json",
    statusCode: {
      400: () => {
        $("#response i").addClass("hidden");
        $("#res").html(
          "<span class='red'>An error occured, Please try again !</span>"
        );
        $("#contact_form button").attr("disabled", false);
      },
      200: () => {
        $("#response i").addClass("hidden");
        $("#res").html("Thank you for contacting me !");
        $("#email").val("");
        $("#message").val("");
        $("#contact_form button").attr("disabled", false);
      },
    },
  });
});