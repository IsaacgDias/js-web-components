class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }
    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card"); 

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card-left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card-right");

        const newsImage = document.createElement("img"); 
        newsImage.src = this.getAttribute("photo") || "./assets/images.png";
        newsImage.alt = "Foto da noticía";
        cardRight.appendChild(newsImage);
        
        
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    .card {
        width: 80%;
        border: 0px solid gray;
        display: flex;
        flex-direction: row;
        -webkit-box-shadow: 13px 7px 8px 3px rgba(0,0,0,0.36);
        -moz-box-shadow: 13px 7px 8px 3px rgba(0,0,0,0.36);
        box-shadow: 13px 7px 8px 3px rgba(0,0,0,0.36);
        justify-content: space-between;
    }
    
    
    
    .card-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
    }
    .card-left > span {
        font-weight: 400;
    }
    .card-left > h1 {
        margin-top: 15px;
        font-size: 25px;
    }
    
    .card-left > p {
        color: rgb(70, 70, 70);
    
    }
    
    img {
        width: 400px;
        height: 200px;
    }
        `;

        return style;
    }
}

customElements.define('card-news', CardNews);