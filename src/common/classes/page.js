
export class AbstractPage {

    constructor() {
        this.app = document.getElementById("root")
    }

    setTitle(title) {
        document.title = title;

    }

    render() {
        return;
    }

    unmount() {
        return;
    }
}