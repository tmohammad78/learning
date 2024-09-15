const elem = document.createComment("Event Bus")
document.body.appendChild(elem);

elem.addEventListener("channel-1", (event) => {
    console.log(event.detail);
});

function handleEvent (type) { 
    const event = new CustomEvent("channel-1", {
        detail:  {
            message: type === 'first' ? "First" : "Second",
            data: type === 'first' ? 1 : 12,
            name: type === 'first' ? "Mohammad" : "Ali"
        },
    });
    
    elem.dispatchEvent(event);
}
  
