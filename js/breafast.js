<script>

  window.addEventListener("DOMContentLoaded", function(e) {

    var myForm = document.getElementById("example4");
    var checkForm = function(e) {
      ...
      if(!this.terms.checked) {
        alert("Please indicate that you accept the Terms and Conditions");
        this.terms.focus();
        e.preventDefault(); // equivalent to return false
        return;
      }
    };

    // attach the form submit handler
    myForm.addEventListener("submit", checkForm, false);

    var myCheckbox = document.getElementById("field_terms");
    var myCheckboxMsg = "Please indicate that you accept the Terms and Conditions";

    // set the starting error message
    myCheckbox.setCustomValidity(myCheckboxMsg);

    // attach checkbox handler to toggle error message
    myCheckbox.addEventListener("change", function(e) {
      this.setCustomValidity(this.validity.valueMissing ? myCheckboxMsg : "");
    }, false);

  }, false);


  function checkForm(form)
{
  // validation fails if the input is blank
  if(form.inputfield.value == "") {
    alert("Error: Input is empty!");
    form.inputfield.focus();
    return false;
  }

  // regular expression to match only alphanumeric characters and spaces
  var re = /^[\w ]+$/;

  // validation fails if the input doesn't match our regular expression
  if(!re.test(form.inputfield.value)) {
    alert("Error: Input contains invalid characters!");
    form.inputfield.focus();
    return false;
  }

  // validation was successful
  return true;
}

</script>
