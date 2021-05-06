const users = []

const $container = document.querySelector('.cont_random')
const $usersCont = document.querySelector('.user_random')
const $Btn_plus = document.querySelector('.user_plus')
const $h2 = document.querySelector('h2')

window.addEventListener('load', () => {
    if(JSON.parse(localStorage.getItem('randomUser'))){
        return
    }else{
        localStorage.setItem('randomUser', JSON.stringify(users))
    }
})

const randomUser = localStorage.getItem("randomUser")

$Btn_plus.addEventListener('click', e => {
    const numUser = +prompt('Сколь людей хотите хаписать', 2)

    if(numUser < 2){
        alert('Не меньше 2')
        return
    }else{
        for (let i = 0; i < numUser; i++) {
            $usersCont.insertAdjacentHTML('afterbegin',`<input type="text" id=${i+1} class="itsClass${i+1} itsClass" placeholder="№${i+1}">
            ` );
        }
        

        $Btn_plus.outerHTML =(`<button onclick="ride(${numUser})">Next</button>`)
        $h2.outerHTML = `<h2>Список участников</h2>`
    }

});

function ride(numUser){
    for(let i = 0; i < numUser; i++){   
        const allVAlue = document.querySelector('.itsClass')
        const $value = document.querySelector(`.itsClass${i+1}`)
        console.log($value.value);
        console.log(allVAlue.value);
    }
    if(allVAlue.value === "" || $value.value === ""){
        alert("ds")
    }else{
        alert("good")
    }
}



function gener(){
   const random = Math.floor(Math.random() * (5 - 1) + 1);

   const radd = randomUser.localeCompare(item => {
       if(item.id === random){
           return`
           <input style="color:white;bagraund:red" type="text" id=(${item.id} placeholder="№${item.id}")>
           `
       }
   })
}