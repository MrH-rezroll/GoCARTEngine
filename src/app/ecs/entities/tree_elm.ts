import App from "../../appECS";
import BoxCollider from "../components/box_collider";
import SpriteRenderer from "../components/sprite_renderer";
import ECS from "../ecs";
import Entity from "./entity";

export function CreateTreeElm():Entity {
    let tree: Entity = ECS.Entity();
    tree.name = "Tree Elm";
    tree.addComponent(new SpriteRenderer("treeElmTop", 0, 1));
    tree.addComponent(new SpriteRenderer("treeElmBottom", 1, 0));
    tree.addComponent(new BoxCollider(tree.components['sprite_renderer'].sprite.transform, 22, 24));
    tree.components['sprite_renderer_1'].offset.y = 32;
    tree.components['sprite_renderer'].sprite.x = 32;
    tree.components['sprite_renderer'].sprite.y = 32;
    tree.components['sprite_renderer_1'].sprite.x = tree.components['sprite_renderer'].sprite.x + tree.components['sprite_renderer_1'].offset.x;
    tree.components['sprite_renderer_1'].sprite.y = tree.components['sprite_renderer'].sprite.y + tree.components['sprite_renderer_1'].offset.y;
    tree.components['sprite_renderer'].sprite.animationSpeed = 0.05;
    tree.components['sprite_renderer'].sprite.play();
    tree.components['box_collider'].offset = {x:22, y:8};
    App.containerLayers[tree.components['sprite_renderer'].layer].addChild(tree.components['sprite_renderer'].sprite);
    App.containerLayers[tree.components['sprite_renderer_1'].layer].addChild(tree.components['sprite_renderer_1'].sprite);
    return tree;
}