let select = document.querySelector("#select");

select.addEventListener("change",createInputs);

function deleteInputs() {
  const inputs = document.querySelectorAll(".input-field-dynamic");
  if(inputs.length){
    for(let i = 0; i < inputs.length; i++){
      inputs[i].remove();
    }
  }
}

function createInputs() {
  deleteInputs();

  const value = document.querySelector("#select").value;
  const form = document.querySelector("#form-generated");

  let btn = document.querySelector("#btn-submit-form");
  btn.setAttribute("style", "display:block");

  if (value) {
    for(let i = 0; i < value; i++) {
      let div = document.createElement("div");
      div.classList.add("separator");

      let name = document.createElement("input");
      name.classList.add("input-field", "input-field-dynamic");
      name.setAttribute("placeholder", "Nome:");
      div.appendChild(name);

      let age = document.createElement("input");
      age.classList.add("input-field", "input-field-dynamic");
      age.setAttribute("placeholder", "Idade:");
      age.setAttribute("type", "number");
      div.appendChild(age);


      div.appendChild(document.createElement("br"));
      form.insertBefore(div, btn);
    }
  } else {
    deleteInputs();
    btn.setAttribute("style", "display:none");
  }
}