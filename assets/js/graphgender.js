export const genderUser = (data, container) =>{
   
// console.log(container)
data.gender.forEach((el, index)=>{
container.innerHTML+= `
<div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card" >
      <div class="card-body">
        <h5 class="card-title">${el}</h5>
        <p class="card-text">La cantidad de ${el} es ${data.cantidad[index]}</p>
        
      </div>
    </div>
  </div>
`
})
}

