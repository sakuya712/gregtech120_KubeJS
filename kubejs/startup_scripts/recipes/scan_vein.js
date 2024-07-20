GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('scan_vein')
        .category('test')
        .setEUIO('in')
        .setMaxIOSize(5, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)
})