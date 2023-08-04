const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')


    if (height==='' || height < 0 || isNaN(height) ) {

        results.innerHTML= `Please give a valid Height ${height}`;
    }

   else if (weight==='' || weight < 0 || isNaN(weight) ) {

        results.innerHTML= `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        const weightguide =  bmi < 18.6 ? 'Under Weight' :
        bmi >= 18.6 && bmi <= 24.9 ? 'Normal Range' :   'Overweight';

    //show the result
    results.innerHTML = `<span>${bmi} <br/> Weight Status  ${weightguide}</span>`;

    

    }

    

    


});