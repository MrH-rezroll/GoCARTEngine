import BoxCollider from "../components/box_collider";
import SpriteRenderer from "../components/sprite_renderer";
import ECS from "../ecs";
import Entity from "./entity";

export function CreateHouseSmall():Entity {
    let house: Entity = ECS.Entity();
    house.name = "House Small";
    house.addComponent(new SpriteRenderer("villiageHouseSmallTop", 0, 2));
    house.addComponent(new SpriteRenderer("villiageHouseSmallBottom", 1, 0));
    house.addComponent(new BoxCollider(house.components['sprite_renderer'].sprite.transform, 7, 36));
    house.components['box_collider'].offset = {x:4, y:14};
    house.addComponent(new BoxCollider(house.components['sprite_renderer'].sprite.transform, 32, 36));
    house.components['box_collider_1'].offset = {x:28, y:14};
    house.addComponent(new BoxCollider(house.components['sprite_renderer'].sprite.transform, 24, 18));
    house.components['box_collider_2'].offset = {x:4, y:14};
    house.components['sprite_renderer_1'].offset.y = 50;
    house.components['sprite_renderer'].sprite.x = 192;
    house.components['sprite_renderer'].sprite.y = 52;
    house.components['sprite_renderer_1'].sprite.x = house.components['sprite_renderer'].sprite.x + house.components['sprite_renderer_1'].offset.x;
    house.components['sprite_renderer_1'].sprite.y = house.components['sprite_renderer'].sprite.y + house.components['sprite_renderer_1'].offset.y;
    house.components['sprite_renderer'].sprite.animationSpeed = 0.05;
    house.components['sprite_renderer'].sprite.play();
    return house;
}