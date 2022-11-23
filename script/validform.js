const formInput = document.querySelectorAll(".formulario-container input")
const buttonSubmit = document.querySelector(".formulario-container button.botao1")


function checkInputs(event) {
  var inputValid = 0;
  formInput.forEach((item, index) => {
   
    if (item.classList.contains("erroralert")) {
      item.classList.remove("erroralert")
    }

    if (item.name === "email") {
      if (!item.validity.valid) {
        item.classList.add("erroralert")
        event.preventDefault()
      }
      else {
        inputValid++
      }
    }

    if (item.name != "email") {
      if (item.value == "") {
        item.classList.add("erroralert")
        event.preventDefault()
      }
      else {
        inputValid++
      }
    }
    if(inputValid == 4){
      alert("Cadastro efetuado com sucesso!")
    }

    item.addEventListener("focus", () => {
      item.classList.remove("erroralert")
    }
    )

    

  })
}




buttonSubmit.addEventListener("click", checkInputs)