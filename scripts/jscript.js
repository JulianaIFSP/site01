/* Criar objetos que serão manipulados */
const obj_div_modal = document.querySelector('#div_modal')
const obj_bt_fechar = document.querySelector('.bt_fechar')
const array_img = document.querySelectorAll('td img')
const obj_img_equip = document.querySelector('#img_equip')
const obj_p_nome_equip = document.querySelector('#p_nome_equip')


/* Adicionar eventos */

obj_bt_fechar.addEventListener('click', funFecharModal)

window.addEventListener('click', function(event) {
            if (event.target == obj_div_modal) {
                funFecharModal()
            }
        })

for (obj_img of array_img) {
    obj_img.addEventListener('click', function() { funExibeImagem(this.src, this.alt) })
}
            
    
/* Declarar Funções */

function funExibeImagem(p_src, p_alt) { // Recebe o índice do elemento no Array
    obj_img_equip.setAttribute('src', p_src)              
    obj_img_equip.alt = obj_img_equip.title = obj_p_nome_equip.innerHTML = p_alt;
    obj_div_modal.style.display = 'block';
}

function funFecharModal() { 
    obj_div_modal.style.display = 'none'
}