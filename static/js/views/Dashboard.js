import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Dashboard");
    }


    async getHtml(){
        let html =  "<div class='link-container'>";
        let tablecontent = '';
        let green = "https://upload.wikimedia.org/wikipedia/commons/4/4b/Green_Light_Icon.svg";
        let red = "https://upload.wikimedia.org/wikipedia/commons/1/1f/Red_Light_Icon.svg";

        //let tablecontent = '';

       // <div style="order:1;" class="Rtable-cell"><h3>Eddard Stark</h3></div>

        const links = data.map((link, index) => {
            let icon = index % 2 ? green : red;

            tablecontent = tablecontent.concat('<div class="Rtable-cell"><h3>' + link.name + '</h3></div><div class="Rtable-cell">' + link.address + '</div><div class="Rtable-cell">' + link.port + '</div>' + '<div class="Rtable-cell" style="width: 3%;">' + '<button class="add-remove-link-button" style="color: rgb(179, 40, 36);">&#10006;</button>' + '</div>');

            html = html.concat(
                '<a href="' + link.address + '">' +
                '<div class="card" id="link' + index + '">' + 
                    '<div class="card-body">' +
                        '<div class="link-left">' +
                        '<svg width="30" height="30">' +
                            '<image xlink:href="'+ icon +'" src="error" width="30" height="30"/>' +
                        '</svg>' +
                        '</div>' +
                        '<div class="link-right">' +
                            '<div>' + link.name + '</div>' +
                            '<div>' + link.address + '</div>' + 
                        '</div>' +
                    '</div>' +
                '</div>' +
                '</a>'
            );
        });
        html.concat("</div>");
        
        document.getElementById("tablecontent").innerHTML = tablecontent;

        return html;
    }
}