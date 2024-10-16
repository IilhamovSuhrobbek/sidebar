let body = document.querySelector('body')
let button = document.querySelector('#mode1');
let cercol = document.querySelector('#cercol');
let text = document.querySelector('.text_mon');
let Search = document.querySelector('#search')
let close1 = document.querySelector('.toggle');
let navs = document.querySelector('.sidebar');
let end = document.querySelector('.home');
let text_mon = document.querySelector('.text_mon');
let delete_1 = document.querySelector('.mode1');
let delete_2 = document.querySelector('.cercol');


button.addEventListener('click',()=>{
    body.classList.toggle('dark');
    if(body.classList.contains('dark')){
        text_mon.innerText='LIGHT MODE'
    }else{
        text_mon.innerText='DARK MOD'
    }
})

close1.addEventListener('click',()=>{
    navs.classList.toggle('mini_nav');
})


Search.addEventListener('click',()=>{
    navs.classList.remove('mini_nav')
})

end.addEventListener('click',()=>{
    navs.classList.add('mini_nav')
})