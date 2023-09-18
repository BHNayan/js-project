let inputEl= document.getElementById('inputbox');

let btnEl=document.querySelectorAll('button');

let data='';

btnEl.forEach(element=> {
    element.addEventListener('click',(e)=>{

        if(e.target.innerText == '='){
            data = String(eval(data))
            inputEl.value = data;
        }

        else if(e.target.innerText == 'AC'){
            data = ''
            inputEl.value = data;
        }

        else if ( e.target.innerText == 'DEL'){
            data = data.substring(0,data.length-1)
            inputEl.value = data;

        }

        else{
            data += e.target.innerText
            inputEl.value = data;
        }

    })
})