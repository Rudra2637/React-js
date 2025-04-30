function createElement(ele,container){
    const create =document.createElement(ele.type);
    create.innerHTML=ele.children;
    create.setAttribute("href",ele.props.href);
    container.appendChild(create);
}


const reactElement ={
    type:"a",
    props:{
        href:"https://www.google.com",
    },
    children:"click me to google"
}

const div =document.querySelector("#root");

createElement(reactElement,div);