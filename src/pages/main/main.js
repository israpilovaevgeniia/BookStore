import { AbstractPage } from "../../common/classes/page.js";
import onChange from 'on-change';
import { Header } from "../../components/header/header.js";
import { Search } from "../../components/search/search.js";

export class MainPage extends AbstractPage {
    constructor(appState) {
        super()
        this.setTitle("Главная страница"); 
        this.appState = appState
        this.appState = onChange(this.appState, this.appStateHook.bind(this))
        this.state = onChange(this.state, this.stateHook.bind(this))
    }

    state = {
        bookList: [],
        isLoading: false,
        searchValue: "",
        offset: null
    }

    appStateHook(path) {
        if(path === "favorites") {
            this.render()
        }
    }

    async stateHook(path) {
        if(path === "searchValue") {
            const data = await this.getBookList(this.state.searchValue, this.state.offset)
            this.state.bookList = data.docs;
            console.log(data.docs)
        }
    }

    async getBookList(searchValue, offset) {
        const getData = await fetch(`https://openlibrary.org/search.json?q=${searchValue}&offset=${offset}`)
        return getData.json()

    }

    render() {
        const main = document.createElement("div")
        main.innerHTML = ``;
        const searchComponent = new Search(this.state).render();
        main.append(searchComponent);
        this.app.innerHTML = "";
        this.app.append(main);
        this.renderHeader()
    }

    renderHeader () {
        const header = new Header(this.appState).render()
        this.app.prepend(header)
    }

}

