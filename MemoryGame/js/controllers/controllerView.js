import { div } from "../libs/html.js";

export class ControllerView {
    constructor(controller,parent) {
        this.controller = controller;
        this.parent = parent;
        this.container = div({},this.parent);
        this.fadeContainer = div({className: 'controllerView-fadeContainer'}, this.container);
        this.elementsContainer = div({className: 'controllerView-elementsContainer'}, this.container);
        this.elementsContainer.style.transform = `translateX(${window.innerWidth}px)`;
        /* this.callback = null; */
        this.show();
        
    }

    delete(){
        this.parent.removeChild(this.container);
    }

    show(){
        gsap.to(this.fadeContainer,{opacity:0.75,duration:0.25, ease: "expo.out"});
        gsap.to(this.elementsContainer, {x: 0,duration: 0.75,ease: "expo.out"});
    }

    hide(state){
        /* this.callback = callback; */
        gsap.to(this.fadeContainer, {opacity: 0,duration: 0.75, ease: "expo.in",onComplete: this.hideComplete.bind(this, state)});
        gsap.to(this.elementsContainer, {x: window.innerWidth,duration: 0.5,ease:"expo.in"});
    }

    hideComplete(state) {
        let event = new CustomEvent('hide-complete', {
        detail: {
            state: state,
        },
        bubbles: true,
        cancelable: true,
        composed: false,
        });
        /* this.callback(state); */
        this.container.dispatchEvent(event);
    }
}

