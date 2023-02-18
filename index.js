import { menuArr } from '/data.js'
import { menuArr2 } from '/data.js'


let menus = [...menuArr]
let btn = document.getElementById('manu')

const form = document.getElementById('pay-form')
let vis = 'invisible'


  

btn.addEventListener('click', () =>{   
                  //---------- --------------------------------------------- MENU BTN
    btn = !btn
    if (btn === true)
    {
     menus = menuArr
       } else {
         menus = menuArr2
       }
       render()
    return men
})



form.addEventListener('submit', (e) => {
    e.preventDefault()
    document.getElementById('modal').classList.toggle('hidden')
    document.getElementById('finish').classList.remove('hidden')
    document.getElementById('message').textContent=`${document.getElementById('name').value} Your order is on it's way`
    vis = 'invisible'

    const formData = new FormData(form)

render()
})




document.addEventListener('click', function (e){
    if(e.target.dataset.addItem && e.target.id < 3){ 
    add(e.target.id, menuArr)}
   else if (e.target.dataset.addItem && e.target.id > 2){
        add(e.target.id - 3, menuArr2)}
        
   else if (e.target.dataset.remove){
        remove(e.target.dataset.remove)}
        else if (e.target.dataset.complete){
            complete(e.target.dataset.complete) }
            else if (e.target.dataset.star){
                rate(e.target.dataset.star)
            }
   
})



function rate(stars){   //   --------------------------------------------------------------------STARS

let arr = [1,2,3,4,5]
const result = arr.filter(ar => ar <= stars)
let rating = [...result]
for (let rates of rating){
    let star = `star${rating[rates-1]}`
    console.log(star)
    document.getElementById(star).classList.add('star-clicked')
    document.getElementById(star).classList.remove('star')
}
}

function showMenu(){   
                                                           //----------------------------------------SHOWMENU
let sec = ''
menus.forEach(element => {
    sec += `<section>
   
    <div class="icon">${element.emoji}</div>
     <div class="content">
    <h3>${element.name}</h3>
    <p>${element.ingredients}</p>
    <h4>${element.price}$</h4>
</div>
<button id="${element.id}"class="add" data-add-item="${element.id}">➕</button>

</section>`
});

return sec
}


let name = []
let price = []
let total = []

function add(item, menuArray){   //---------------------------------------------------------------------------------------------------------------------ADD
    console.log(item)
    if (name.length === 0){
      name.splice(0, 0, '<h3 class="poz1">' + menuArray[item].name + '<button class="remove" data-remove="' + 0 + '">remove</button></h3>')   
      price.splice(0, 0, '<h3 class="poz1">$' + menuArray[item].price + '</h3>')
      total.splice(0, 0, menuArray[item].price)
    
    } else 
    {
        name.splice(name.length, 0, '<h3 class="poz1">' + menuArray[item].name + '<button class="remove" data-remove="' + name.length + '">remove</button></h3>')  
        price.splice(name.length, 0, '<h3 class="poz1">$' + menuArray[item].price + '</h3>')
        total.splice(total.length, 0, menuArray[item].price)
    }
    vis = 'sum'

    render()
    };
    




    function remove(del){          //------------------------------------------------------REMOVE
        name.splice(del, 1, '')
       price.splice(del, 1, '')
       total.splice(del, 1, 0)
 
        render() }
    

function complete(sumary){     //   ----------------------------------------------------COMPLETE
    document.getElementById('modal').classList.toggle('hidden')
    document.getElementById('pay-btn').innerHTML = `Pay ${sumary}$`

   
}





function render(){                       //                   ------------------------------------------- RENDER
 

    const iterator = name.values()
 let sumNames = ''  //                   ------NAME

for (const value of iterator) {
  sumNames += value
}


const priceIterator = price.values()
let prices = ''   //            --------------PRICE

for (const value of priceIterator){
    prices += value
}

const totalIterator = total.values()
let tot = 0     //             ----------------TOTAL

for (const value of totalIterator){
    tot += value
}



    document.getElementById('main').innerHTML =  ` ${showMenu()}  


  <div id = "sum" class="${vis}">

     <h3 id="order">Your Order</h3>
     <div class="sumary">
     <div class="left">
${sumNames}
     <h4 class="total">Total price</h4>
</div>

<div class="right">
${prices}
 <h4 class="total">$${tot}</h4>
</div>
</div>

     <button class="complete" data-complete="${tot}">Complete order</button>

  </div>
`


}

render()
