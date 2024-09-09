import "./header.css";
import { DivComponent } from "../../common/classes/div-component.js";

export class Header extends DivComponent {
    constructor(appState) {
        super() 
        this.appState = appState
    }
    render() {
        this.element.innerHTML = ""
        this.element.classList.add("header")
        this.element.innerHTML = `
            <a href="/">
               <img src="../../../static/Logo.svg" alt="Logo"/>
            </a>
                <div class="menu">
            <a href="#search" class="menu__link">
               <img src="../../../static/search.svg" alt=""/>
               Поиск книг
            </a>
            <a href="#favorites" class="menu__link">
               <img src="../../../static/Favorites.svg" alt=""/>
               Избранное
            </a>
            <div class="menu__counter">  
            ${this.appState.favorites.length}        
            </div>
            </div>
    `
        return this.element
    }
}