function validateForm() {
    var x = document.forms["registration"]["name"].value;
    if (x == "") {
      alert("Please enter your name");
      return false;
    }

    var x = document.forms["registration"]["email"].value;
    if (x == "") {
      alert("Please enter a valid email address");
      return false;
    }

    var x = document.forms["registration"]["subject"].value;
    if (x == "") {
      alert("Subject must be filled out");
      return false;
    }

    var x = document.forms["registration"]["message"].value;
    if (x == "") {
      alert("Please enter the message, I will reply it as soon as possible!");
      return false;
    }

  }