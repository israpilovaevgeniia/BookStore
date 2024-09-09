import "./search.css";
import { DivComponent } from "../../common/classes/div-component.js";

export class Search extends DivComponent {
    constructor(state) {
        super()
        this.state = state; 
    }

    onSearch() {
        const value = this.element.querySelector("input").value
        this.state.searchValue = value
    }

    render() {
        this.element.innerHTML = ""
        this.element.classList.add("search")
        this.element.innerHTML = `
        <div class="search__wrapper">
            <input value="${this.state.searchValue ?? ""}" type="text" class="search__input" placeholder="Найти книги или автора ...."/>
            <img src="../../../static/Search.svg" alt="Иконка поиска">
        </div>
        <button class="search__button" type="button" alt="Кнопка поиска" aria-label="Искать книги">
            <img src="../../../static/search-white.svg" alt="Иконка поиска в кнопке">
        </button>
    `
        this.element.querySelector("button")
        .addEventListener("click", this.onSearch.bind(this))

        this.element.querySelector("input")
        .addEventListener("keydown", (event) => {
            if(event.code === "Enter") this.onSearch()
        })

        return this.element
    }
}