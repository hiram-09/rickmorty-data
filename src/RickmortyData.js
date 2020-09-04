import { html, css, LitElement } from 'lit-element';

export class RickmortyData extends LitElement {
    static get styles() {
        return css `
      :host {
        display: block;
        padding: 25px;
        color: var(--rickmorty-data-text-color, #000);
      }`;
    }

    static get properties() {
        return {
            url: { type: String }
        };
    }

    constructor() {
        super();
        this.url = "https://rickandmortyapi.com/api/character/";
    }

    firstUpdated() {
        fetch(this.url)
            .then(res => res.json())
            .then(res => {
                this.dispatchEvent(new CustomEvent('get-array', { detail: { data: res.results } }));
            });
    }
    render() {
        return html ``;
    }
}