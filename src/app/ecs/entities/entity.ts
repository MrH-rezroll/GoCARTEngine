import { Component } from "../components/component";

export default class Entity{
    id: string;
    name: string;
    isActive: boolean;
    tag: string;
    components: Object = {Component};

    constructor(id: string){
        this.id = id;
        this.name = "";
        this.tag = "";
        this.isActive = true;
        this.components = {};
    }

    public addComponent(component: Component) {
        this.components[component.componentName] = component;
    }

    public removeComponent(componentName: string){
        delete this.components[componentName];
    }

    public print(){
        console.log(JSON.stringify(this, null, 4));
    }
}