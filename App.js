// stack code

let stack = [];

const pushelemet = () => {
    const stackInput = document.getElementById('stackInput')
    const Element = stackInput.value;

    if(Element.trim() === ""){
        alert("enter element to stack")
        return
    }

    stack.push(Element);
    stackInput.value = "";
    console.log(stack)
    displaystack()
}

const popelement = () => {
    if(stack.length === 0){
        alert('stack is empty')
        return
    }

    const popemelemt = stack.pop()
    alert(`pop element ${popemelemt}`)
    console.log(popelement);
    displaystack()
}


const displaystack = () => {

    let stacklist = document.getElementById('stacklist')
    stacklist.innerHTML = "";

    for(const element of stack) {

        const stackelement = document.createElement('li')
        stackelement.textContent = element;
        stacklist.appendChild(stackelement)
    }

}




// queue code
const queue = [];

let enqueue = () =>  {
    const enqueueInput = document.getElementById('enqueueInput');
    const element = enqueueInput.value;

    if( element.trim() === ""){
        alert("Enter Elemet to queue.")
        return;
    }

    queue.push(element)
    enqueueInput.value = "";
    console.log(queue)
    dislaydata()

}

let dequeue = () => {
    if(queue.length === 0){
        alert("the queue is empty.")
        return
    }
    const dequeuedElement = queue.shift()
    alert(`Deque Element :  ${ dequeuedElement} `)
    console.log(dequeuedElement)
    dislaydata()
}

let dislaydata = () => {
    const queuelist = document.getElementById('queueList');
    queuelist.innerHTML = "";

    for(const element of queue ){
        const list_item = document.createElement('li')
        list_item.textContent = element;
        queuelist.appendChild(list_item)
    }

}