let salaryTotal =0;


function handleSubmit(event){
    event.preventDefault();

    
    let deleteInfo = `<td onclick = deleteInfo(event)>❌</td>`
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let id = document.getElementById('id').value
    let title = document.getElementById('title').value
    let annualSalary = Number(document.getElementById('annualSalary').value)
    console.log(annualSalary);
     info.innerHTML += `<tr id = 'row'><td>${firstName}</td><td>${lastName}</td><td>${id}</td><td>${title}</td><td id ='aSalary' >${annualSalary}${deleteInfo}</td></tr>`
    let emptyInfo = document.getElementById('empty')
    emptyInfo.reset();

   salaryTotal += annualSalary;
    console.log('salary total ',salaryTotal);

    let footer = document.getElementById('salaryTotal');
    console.log('footer ',footer);
     

    if(salaryTotal > 20000){
        footer.innerHTML = document.querySelector('footer').classList .add('addColor');

    }
    footer.innerHTML = `Total Monthly :${salaryTotal}`
    
   
    
        

   
}

function deleteInfo(event){
    let thisInfo = event.target.parentElement
    
    
    thisInfo.remove();

}











