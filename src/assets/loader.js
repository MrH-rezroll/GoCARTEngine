import treeElmTop from "./images/tree_elm/top/*.png";
import treeElmBottom from "./images/tree_elm/bottom/*.png";
import player_move_north from "./images/player/player_move_north/*.png";
import player_move_south from "./images/player/player_move_south/*.png";
import player_move_east from "./images/player/player_move_east/*.png";
import player_move_west from "./images/player/player_move_west/*.png";
import player_idle from "./images/player/player_idle/*.png";
import grass from "./images/grass/*.png";
import cliffsTop from "./images/cliffs/top/*.png";
import pathLargeHorz from "./images/path_large/path_large_horz/*.png";
import pathLargeT from "./images/path_large/path_large_t/*.png";
import boulder from "./images/boulder/*.png";
import signPost from "./images/sign_post/*.png";
import activeArrow from "./images/active_arrow/*.png";
import fenceHorzTop from "./images/fence/top/*.png";
import fenceHorzBottom from "./images/fence/bottom/*.png";
import villiage_house_small_top from "./images/villiage_house_small/top/*.png";
import villiage_house_small_bottom from "./images/villiage_house_small/bottom/*.png";
import * as PIXI from 'pixi.js';
import early_gameboy_png from "./images/early_gameboy.png";
import early_gameboy_fnt from "./images/early_gameboy.fnt";

const spriteNames = {
  treeElmTop: Object.values(treeElmTop),
  treeElmBottom: Object.values(treeElmBottom),
  playerMoveNorth: Object.values(player_move_north),
  playerMoveSouth: Object.values(player_move_south),
  playerMoveEast: Object.values(player_move_east),
  playerMoveWest: Object.values(player_move_west),
  playerIdle: Object.values(player_idle),
  grass: Object.values(grass),
  cliffsTop: Object.values(cliffsTop),
  pathLargeHorz: Object.values(pathLargeHorz),
  pathLargeT: Object.values(pathLargeT),
  boulder: Object.values(boulder),
  signPost: Object.values(signPost),
  activeArrow: Object.values(activeArrow),
  fenceHorzTop: Object.values(fenceHorzTop),
  fenceHorzBottom: Object.values(fenceHorzBottom),
  villiageHouseSmallTop: Object.values(villiage_house_small_top),
  villiageHouseSmallBottom: Object.values(villiage_house_small_bottom),
  villiageHouseSmallTop: Object.values(villiage_house_small_top),
  villiageHouseSmallBottom: Object.values(villiage_house_small_bottom),
  early_gameboy_png: Object.values(early_gameboy_png),
  early_gameboy_fnt: Object.values(early_gameboy_fnt)
};

export function GetSprite(name) {
  return new PIXI.AnimatedSprite(
    spriteNames[name].map((path) => PIXI.Texture.from(path))
  );
}

export function GetTiledSprite(name, height, width) {
  let sprite = new PIXI.AnimatedSprite(
    spriteNames[name].map((path) => PIXI.Texture.from(path))
  );
  return new PIXI.TilingSprite(sprite.texture, height, width);
}