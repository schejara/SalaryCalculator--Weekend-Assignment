let totalMonthly =0;

function handleSubmit(event){
    event.preventDefault();

   
    //let deleteInfo = `<td onclick = deleteInfo(event)>❌</td>`

    let deleteButton = `<button onclick="deleteInfo(event)">Delete</button>`;

    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let id = document.getElementById('id').value
    let title = document.getElementById('title').value
    let annualSalary = Number(document.getElementById('annualSalary').value)
    console.log(annualSalary);
     info.innerHTML += `<tr><td>${firstName}</td><td>${lastName}</td><td>${id}</td><td>${title}</td><td>${annualSalary}</td><td> ${deleteButton}</td></tr>`
    let emptyInfo = document.getElementById('empty')
    emptyInfo.reset();

    let monthlySalary = annualSalary/12;
   totalMonthly += monthlySalary;
    console.log('salary total ',totalMonthly);

    let footer = document.getElementById('salaryTotal');
    let addFooter = document.getElementsByTagName('footer');


    if(totalMonthly > 20000){
        footer.innerHTML = document.querySelector('footer').classList .add('over-budget');

    }
    footer.innerHTML = `Total Monthly: $ ${totalMonthly}`  
        

   
}

function deleteInfo(event){
    let thisInfo = event.target.parentElement.parentElement
    
    thisInfo.remove();

}











