$(document).ready(function() {
  handSub = required => {
    $("#message").removeClass("warning").html("");
    for (input of required) {
      if (input.val() === "") {
        $("#message").addClass("warning").html("Please Fill Out Required Fields");
        input[0].labels[0].classList.add("warning");
      } else {
        input[0].labels[0].classList.remove("warning");
      }
    }
    let check = required.filter(input => input[0].labels[0].classList[0]);
    if (check.length === 0) {
      $("form").css({ display: "none" });
      $("h2").html("Thanks for your feedback!");
    }
  };

  $("#submit").click(e => {
    e.preventDefault();
    let name = $("#name");
    let email = $("#email");
    let phone = $("#phone");
    let message = $("#message-area").val();
    let required = [name, email, phone];
    handSub(required);
  });
});
