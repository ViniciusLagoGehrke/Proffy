// Find button
const btn = document.querySelector("#add-time")
// Event on click
btn.addEventListener('click', cloneField)
// cloning Field
function cloneField() {
  const newFieldContainer = document.querySelector(".schedule-item")
  newFieldContainer.cloneNode(true)   // Cloning
  
  //selecting fields
  const fields = newFieldContainer.querySelectorAll('input')

  //cleaning each field
  fields.forEach(function(field){
    field.value = ""    
  })

  // Added on page
  document.querySelector("#schedule-items").appendChild(newFieldContainer)
}