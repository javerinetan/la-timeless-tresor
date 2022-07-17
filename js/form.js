<script>
function validateForm() {
  let x = document.forms["Booking"]["adult"].value;
  if (x == "") {
    alert("Number of adult must be filled out");
    return false;
  }
}
</script>
