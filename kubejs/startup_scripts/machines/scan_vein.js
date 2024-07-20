GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('scan_vein', 'electric', GTValues.LV, GTValues.MV, GTValues.HV)
        .rotationState(RotationState.ALL)
        .recipeType('scan_vein', true, true)
        .workableTieredHullRenderer("gtceu:block/machines/scanner");
})