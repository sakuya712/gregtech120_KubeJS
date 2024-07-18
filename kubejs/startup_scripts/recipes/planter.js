GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('planter')
        .category('test')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})