GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('void_miner', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('void_miner')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle('BB0BB', 'F000F', '00000', '00000', '00000', '00000')        // level1, 2, 3, ...
                .aisle('BBCBB', '0CCC0', '00F00', '00F00', '00F00', '00000')
                .aisle('0CCC0', '0CCC0', '0FBF0', '0FBF0', '0FBF0', '00F00')
                .aisle('BBCBB', '0CMC0', '00F00', '00F00', '00F00', '00000')
                .aisle('BB0BB', 'F000F', '00000', '00000', '00000', '00000')        // this row is front
                .where('M', Predicates.controller(Predicates.blocks(definition.get()))) // main controller
                .where('F', Predicates.blocks('gtceu:stainless_steel_frame'))
                .where('B', Predicates.blocks('gtceu:clean_machine_casing'))
                .where('C', Predicates.blocks('gtceu:clean_machine_casing')
                    .or(Predicates.autoAbilities(definition.getRecipeTypes())))
                .where('#', Predicates.air())   // can't place blocks
                .where('0', Predicates.any())   // can place blocks
                .build()
        )
        .workableCasingRenderer(
            'gtceu:block/casings/solid/machine_casing_clean_stainless_steel', 
            'gtceu:block/multiblock/large_miner'
            )
})