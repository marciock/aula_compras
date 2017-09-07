const produto =document.getElementById('produto')
const preco =document.getElementById('preco')
const quantidade =document.getElementById('quantidade')
const total =document.getElementById('total')
const btnCalcular =document.getElementById('btnCalcular')
const btnNovo =document.getElementById('btnNovo')

let produtos=[
  {
    produto:'Melão',
    preco:2.30
  },
  {
    produto:'Banana',
    preco:3.10
  },
  {
    produto:'Manga',
    preco:3.50
  },
  {
    produto:'Jaboticaba',
    preco:5.00
  }
]

function calcular() {

  total.value=preco.value*quantidade.value

}

function zerar(){
  produto.value=''
  preco.value=0
  quantidade.value=0
  total.value=0
}
function carregar(){
  let option='';
  for (let i in produtos){
  //  option +='<option value="'+produtos[i].preco+'">'+produtos[i].produto+'</option>'
  //  console.log(produtos[i].preco)
    opt=document.createElement('OPTION')
    opt.text=produtos[i].produto
    opt.value=produtos[i].preco

    produto.appendChild(opt)
  }
  //produto.innerHTML=option
}

btnCalcular.addEventListener('click',()=>{
  calcular()
})

btnNovo.addEventListener('click',()=>{
  zerar()
})

produto.addEventListener('change',()=>{

  let index=produto.selectedIndex

  preco.value=produtos[index].preco

  console.log(index);

})
window.onload=()=>{
  console.log('teste');
  carregar()
}
