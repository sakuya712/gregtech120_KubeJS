GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('void_miner')
        .category('test')
        .setEUIO('in')
        .setMaxIOSize(1, 4, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MINER)
})