
(function(){

    let fetchData = JSON.parse(localStorage.getItem('data'));


    if(fetchData){

        display(fetchData);

        console.log(fetchData);

    }
}())



function display(data){

    let template = '';

    for(let i = 0; i < data.length; i++){

        if(data[i].userId){

            template += `
            <div class="box">
            <p>Id  ${data[i].userId}</p>
            <h2>${data[i].title.slice(1,35)}</h2>
            <p>${data[i].body.slice(1, 200)}...</p>
            <a href="/details.html?id=${data[i].userId}">Read More...</a>
            </div>   
        `
        }
    }



    document.querySelector('.blogs').innerHTML = template;

}

