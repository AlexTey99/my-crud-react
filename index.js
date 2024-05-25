
let ArrayListaTexto = []; // Array con la lista de elementos "string"
let ArrayElementList_Div = []; // Array de los div

const addText = () => {
    const valorInput = $('#input').val();
    if(valorInput != ""){
        ArrayElementList_Div = [];//Limpio los elementos 
        const valorInput = $('#input').val(); // Capturo el valor del input
        ArrayListaTexto.push(valorInput); //adiciono al array
        document.getElementById('input').value = ""; // limpio el valor de input
    
        for (let i = 0; i < ArrayListaTexto.length; i++) {
            let elementList = `<div id='elementList' class="elementList"> ${ArrayListaTexto[i]}<i onclick="Edit(${i}),Delete()" class="fa-solid fa-pencil"></i><i onclick="Delete(${i})" class="fa-sharp fa-solid fa-trash"></i></div>`;
            ArrayElementList_Div.push(elementList);
            console.log(ArrayListaTexto[i])
        }
    
        $('.texts-container').html(ArrayElementList_Div);
    }
 
} 
  

// Funcion para borrar los textos
//const Delete = (position) =>{
   // console.log(position);
   // const elementDiv = document.getElementById('elementList');
   // elementDiv[i].remove();

    //let deleteElement = document.getElementById('elementList');
    //let nameElement = document.getElementById('elementList').innerText;
//
    //console.log("hola ",deleteElement," ",nameElement)
//
    //ArrayElementList_Div = ArrayElementList_Div.filter((item)=>{
    //    return item!==deleteElement;
    //});
//
    //ArrayListaTexto = ArrayListaTexto.filter((item)=>{
    //    return item!==nameElement;
    //});
//
    //$('.texts-container').html(ArrayElementList_Div);

//}


const Delete = (positionElementList) =>{

    ArrayElementList_Div.splice(positionElementList, 1);
    ArrayListaTexto.splice(positionElementList, 1);
    
    $('.texts-container').html(ArrayElementList_Div);
}


// Funcion para editar los textos
const Edit = (textInContainer) =>{
    let element = document.getElementById('elementList').innerText;
    const inputEdit = document.getElementById('input');
    inputEdit.value = element;
    if(addText == true){
        element = inputEdit.value;
    }
    
}
