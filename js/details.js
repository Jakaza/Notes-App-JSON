// javascript for details.html


(function(){

    let idF = new URLSearchParams(window.location.search).get('id');
    let idH = location.href.split('=')[1];

    let fetchData = JSON.parse(localStorage.getItem('data'));

    let data = fetchData.filter(data => idF == data.userId);

    display(data);

}())


function display(data){

    let template = '';

    console.log(data);

    template += `
    <div class="box">
    <p>Id  ${data[0].userId}</p>
    <h2>${data[0].title}</h2>
    <p>${data[0].body}</p>
    </div>   
    `
    document.querySelector('.details').innerHTML = template;
}







