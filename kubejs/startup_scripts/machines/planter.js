GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('planter', 'electric', GTValues.LV, GTValues.MV, GTValues.HV)
        .rotationState(RotationState.ALL)
        .recipeType('planter', true, true)
        .tankScalingFunction(tier => tier * 3200)
        .workableTieredHullRenderer("gtceu:block/machines/compressor");
})