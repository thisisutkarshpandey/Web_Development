let genericFormArr = [];
// example {id:1592304983049, clientName: 'Aaron', clientWeight: 150 lbs}
const submitForm = (ev)=>{
    ev.preventDefault();  //to stop the form submitting default
    let genericFormData = {
        id: Date.now(),
        clientname1: document.getElementById('clientName').value,
        clientWeight1: document.getElementById('clientWeight').value
    }
    genericFormArr.push(genericFormData);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
    console.warn('stored the data' , {genericFormArr} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(genericFormArr, '\t', 2);

    //saving to localStorage
    localStorage.setItem('GenericOrderFormData', JSON.stringify(genericFormArr) );
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', submitForm);
});