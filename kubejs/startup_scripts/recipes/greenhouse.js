GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('greenhouse')
        .category('test')
        .setEUIO('in')
        .setMaxIOSize(3, 4, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})