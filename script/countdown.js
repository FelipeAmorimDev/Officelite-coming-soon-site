function criarDataLancamento() {
  if (!localStorage.getItem("releaseDate")) {
    const date = new Date();
    var mesAtual = date.getMonth();
    localStorage.setItem("releaseDate", date.setMonth(mesAtual + 1));
  }
}

function renderDataLancamento(){
  const releasePage = document.querySelector(".contador-cards > h3 span");
  var releaseDate = new Date(parseInt(localStorage.getItem("releaseDate")));
   const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }
  console.log(releaseDate);
  releasePage.innerHTML = releaseDate.toLocaleDateString("en-GB",options);
}

function countdownRender(){
  var parsedCountdown = contdownConverted()
  var elementosTransparente = document.querySelectorAll(".contador-card-item p")
  const timeElements = document.querySelectorAll(".contador-cards-list p.font-1-xxl")
  timeElements.forEach((value,index) =>{
    value.innerHTML = parsedCountdown[index]
    
  })
  elementosTransparente.forEach((item) => {
    item.classList.remove("transparente")
  })
}

function contdownConverted(){
  var releaseDate = new Date(parseInt(localStorage.getItem("releaseDate")));
  var currentDate = new Date();
  var timeLeft = releaseDate.getTime() - currentDate.getTime();
  var rateConversion = [24 * 60 * 60 * 1000,60*60*1000,60*1000,1000]

  var parsedCountdown = rateConversion.map((rate) =>{
    let convertedValue = parseInt(timeLeft / rate)
    timeLeft = timeLeft % rate
    return convertedValue;
  })
  
  return parsedCountdown;
 }

criarDataLancamento();
renderDataLancamento();
setInterval(countdownRender,1000)






