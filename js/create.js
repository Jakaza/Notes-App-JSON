// javascript for create.html

const formFd = document.getElementById('formField');

let posts;


(function(){

    let check = JSON.parse(localStorage.getItem('data'));

    if(!check){
        posts = [];
    }else{

        posts = [...check];
    }

}())


console.log(posts);



formFd.addEventListener('submit', function saveData(el){
    el.preventDefault();


    let titleF = formFd['title'].value;
    let bodyF = formFd['body'].value;


    if(titleF && bodyF){

        const post = {
            userId: generateId(),
            title: titleF,
            body: bodyF,
        }

        posts.push(post);

        formFd.reset();

        localStorage.setItem('data', JSON.stringify(posts))
        

        location.href = '/index.html'

    }


    


});


function generateId(){

    let id = '22';

    for(let i = 0; i <= 4; i++){

        let randNum = Math.floor(Math.random()*9);
        id += randNum;

    }

    return parseInt(id);
}


console.log(generateId());