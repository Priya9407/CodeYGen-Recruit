const svg = document.querySelector(".ambient-svg");
const NS = "http://www.w3.org/2000/svg";

if(window.innerWidth > 1000){

    const COUNT = 18;

    for(let i=0;i<COUNT;i++){

        const group = document.createElementNS(NS, "g");
        group.setAttribute("class", "ambient-group");

        const circle = document.createElementNS(NS, "circle");
        const node = document.createElementNS(NS, "circle");

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", Math.random()*60 + 40);
        circle.setAttribute("class", "ambient-circle");

        node.setAttribute("cx", x);
        node.setAttribute("cy", y);
        node.setAttribute("r", 3);
        node.setAttribute("class", "ambient-node");

        group.style.animationDelay = `${Math.random()*6}s`;

        group.appendChild(circle);
        group.appendChild(node);
        svg.appendChild(group);
    }
}
