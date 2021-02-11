$(document).ready(() => {
  //calculation of the current year for the footer
  let d = new Date();
  let thisYear = d.getFullYear();
  $("#thisYear").text(thisYear);
  //validation of the contact form
  $("#subBtn").click((e) => {
    e.preventDefault(); //prevent the page refresh when submit is clicked
    let name = $("#usern").val().trim();
    let email = $("#usere").val().trim();
    let phone = $("#userp").val().trim();
    let errorName = "";
    let errorEmail = "";
    let errorPhone = "";
    let validMarker = true;
    const emailPattern = /^(?!.*\.\.)[\w.\-#!$%&'*+\/=?^_`{}|~]{1,35}@[\w.\-]+\.[a-zA-Z]{2,15}$/;
    const phonePattern = /^0[2-9]\d{7,8}$/gm;
    if (name.length < 2 || name.length > 255) {
      validMarker = false;
      errorName = "* Enter a valid name please";
    }
    console.log(validMarker);
    if (!emailPattern.test(email)) {
      validMarker = false;
      errorEmail = "* Enter a valid email address please";
    }
    console.log(validMarker);
    if (!phonePattern.test(phone)) {
      validMarker = false;
      errorPhone = "* Enter a valid phone number please";
    }
    console.log(validMarker);
    $("#errorName").text(errorName);
    $("#errorEmail").text(errorEmail);
    $("#errorPhone").text(errorPhone);
    if (!validMarker) return;
    window.location.replace("./thanks.html");
  });
});
