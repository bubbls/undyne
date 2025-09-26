// graphics

var fonts_loader = new PIXI.loaders.Loader();

fonts_loader
  .add("undertale", "unfair%20undyne/fonts/undertale.fnt")
  .add("numbers", "unfair%20undyne/fonts/numbers.fnt")
  .add("speechbubble", "unfair%20undyne/fonts/speechbubble.fnt")
  .on("complete", function(loader, resources) {
    process_fonts(resources);
  });

function process_fonts(resources) {

  resources["undertale_image"].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
  resources["numbers_image"].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
  resources["speechbubble_image"].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

  markAssetLoaded("fonts");

}