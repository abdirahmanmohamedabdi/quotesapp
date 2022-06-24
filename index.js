const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b927733739mshbab0909e1347b4ep1c1a2fjsn652f8f4dff61',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
    .then(data => 

        {

const name = document.getElementById("Author").innerHTML = data.originator.name
const quote = document.getElementById("quote").innerHTML = data.content
const wordInput = document.getElementById("review");
    
        })

       
          
          function refreshPage(){
            window.location.reload();
            push.preventDefault();
        } 
