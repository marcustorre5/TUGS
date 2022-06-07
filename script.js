

//esconder div com botao click
function bt(){

    var dow = document.getElementById('dow')
   if(dow.style.display == 'none'){
    dow.style.display =  'block';
   } else{
    dow.style.display ='none';
   }

}


function ok(){

    var box = document.getElementById('box').value
    var resultado = document.getElementById('resultado')
    var newbt = document.getElementById('newbt')

    var divisao = 2000/box/box

    var r = resultado
    r.innerHTML =  `${divisao+'VA de potência para cada tomada!'}`

    newbt.innerHTML = `
    <div>
        <a href="index.html"><button onclick="limpar()" class="input-group-text ">limpar</button></a>
    </div>`

}


//esconder div com botao click
function bt_2(){

    var dow2 = document.getElementById('dow_2')
   if(dow_2.style.display == 'none'){
    dow_2.style.display =  'block';
   } else{
    dow_2.style.display ='none';
   }

}


function ok_2(){

    var box_2 = document.getElementById('box_2').value
    var resultado_2 = document.getElementById('resultado_2')
    var newbt_2 = document.getElementById('newbt_2')

    var divisao_2 = 1600/box_2/box_2

    var r_2 = resultado_2
    r_2.innerHTML =  `${divisao_2+'VA de potência para cada tomada!'}`

    newbt_2.innerHTML = `
    <div>
        <a href="index.html"><button onclick_2="limpar()" class="input-group-text ">limpar</button></a>
    </div>`

}

//esconder div com botao click
function bt_3(){

    var dow2 = document.getElementById('dow_3')
   if(dow_3.style.display == 'none'){
    dow_3.style.display =  'block';
   } else{
    dow_3.style.display ='none';
   }

}


function ok_3(){

    var box_3 = document.getElementById('box_3').value
    var resultado_3 = document.getElementById('resultado_3')
    var newbt_3 = document.getElementById('newbt_3')

    var divisao_3 = 1200/box_3/box_3

    var r_3 = resultado_3
    r_3.innerHTML =  `${divisao_3+'VA de potência para cada tomada!'}`

    newbt_3.innerHTML = `
    <div>
        <a href="index.html"><button onclick_3="limpar()" class="input-group-text ">limpar</button></a>
    </div>`

}

//esconder div com botao click
function bt_4(){

    var dow2 = document.getElementById('dow_4')
   if(dow_4.style.display == 'none'){
    dow_4.style.display =  'block';
   } else{
    dow_4.style.display ='none';
   }

}


function ok_4(){

    var box_4 = document.getElementById('box_4').value
    var resultado_4 = document.getElementById('resultado_4')
    var newbt_4 = document.getElementById('newbt_4')

    var divisao_4 = 800/box_4/box_4

    var r_4 = resultado_4
    r_4.innerHTML =  `${divisao_4+'VA de potência para cada tomada!'}`

    newbt_4.innerHTML = `
    <div>
        <a href="index.html"><button onclick_4="limpar()" class="input-group-text ">limpar</button></a>
    </div>`

}

//esconder div com botao click
function bt_5(){

    var dow2 = document.getElementById('dow_5')
   if(dow_5.style.display == 'none'){
    dow_5.style.display =  'block';
   } else{
    dow_5.style.display ='none';
   }

}


function ok_5(){

    var box_5 = document.getElementById('box_5').value
    var resultado_5 = document.getElementById('resultado_5')
    var newbt_5 = document.getElementById('newbt_5')

    var divisao_5 = 2000/box_5/box_5

    var r_5 = resultado_5
    r_5.innerHTML =  `${divisao_5+'VA de potência para cada tomada!'}`

    newbt_5.innerHTML = `
    <div>
        <a href="index.html"><button onclick_5="limpar()" class="input-group-text ">limpar</button></a>
    </div>`

}