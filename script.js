const localStorageName = 'to-do-list-ph'

function validateTarefaExist(){
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
    let inputValue = document.getElementById('input-tarefa').value
    let exists = values.find(x => x.name == inputValue)
    return !exists ? false : true

}

function Tarefa(){
    let input = document.getElementById('input-tarefa')
    input.style.border = ''

    //Validação
    if(!input.value){

        input.style.border = '1px solid red'
        alert('Informe a tarefa')
    }
    else if(validateTarefaExist()){
         
        alert('Tarefa informada já existe')
    }
    else{
        //Incrementando a lista
        let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageName,JSON.stringify(values))
        showValues()
    }
    input.value = ''
}

//Mostrar valores na lista
function showValues(){
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
    let list = document.getElementById('list')
    list.innerHTML = ''
    for(let i = 0; i < values.length; i++){
        list.innerHTML += `<li>${values[i]['name']}<button id='btn-ok'onclick='conclu("${values[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
      </svg></button>
      <button id='btn-delete' onclick='removeItem("${values[i]['name']}")' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
    </svg></button><button id='btn-edit' onclick='editar("${values[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
  </svg></button><li>`
    }
}

//Tentativa de fazer a lista de conluidas
function showConclu(){
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
    let list = document.getElementById('list-conclu')
    list.innerHTML = ''
    for(let i = 0; i < values.length; i++){
        list.innerHTML += `<li>${values[i]['name']}`
    }
}

//Configuração o botão de excluir
function removeItem(data){
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
    let list = document.getElementById('list')
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageName,JSON.stringify(values))
    showValues()
}

//Configuração o botão de concluido
function conclu(data){

    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
    let list = document.getElementById('list')
    let index = values.findIndex(x => x.name == data)
    let conclu = data
    values.splice(index,1)
    localStorage.setItem(localStorageName,JSON.stringify(values))
    showValues()

}
//Configuração o botão de editar
function editar(data){
    let input = document.getElementById('input-tarefa')
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
    let list = document.getElementById('list')
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageName,JSON.stringify(values))
    input.value = data
    showValues()


}


showValues()