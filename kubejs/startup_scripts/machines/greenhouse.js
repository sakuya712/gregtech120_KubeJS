GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('greenhouse', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('greenhouse')
        .appearanceBlock(GTBlocks.MACHINE_CASING_ULV)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('BCCCB', 'BCCCB', 'BGGGB', 'BGGGB', 'BGGGB', 'BBBBB')         // level1, 2, 3, ...
                .aisle('CBBBC', 'CDDDC', 'G###G', 'G###G', 'G###G', 'BGGGB')
                .aisle('CBBBC', 'CDDDC', 'G###G', 'G###G', 'G###G', 'BGGGB')
                .aisle('CBBBC', 'CDDDC', 'G###G', 'G###G', 'G###G', 'BGGGB')
                .aisle('BCCCB', 'BCMCB', 'BGGGB', 'BGGGB', 'BGGGB', 'BBBBB')        // this row is front
                .where('M', Predicates.controller(Predicates.blocks(definition.get()))) // main controller
                .where('F', Predicates.blocks('gtceu:stainless_steel_frame'))
                .where('G', Predicates.blocks('gtceu:tempered_glass'))
                .where('D', Predicates.blocks('minecraft:dirt'))
                .where('B', Predicates.blocks('gtceu:ulv_machine_casing'))
                .where('C', Predicates.blocks('gtceu:ulv_machine_casing')
                    .or(Predicates.autoAbilities(definition.getRecipeTypes())))
                .where('#', Predicates.air())   // can't place blocks
                .where('0', Predicates.any())   // can place blocks
                .build()
        )
        .workableCasingRenderer(
            'gtceu:block/casings/solid/machine_casing_solid_steel', 
            'gtceu:block/multiblock/large_miner'
            )
})