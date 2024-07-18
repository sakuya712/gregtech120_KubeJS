ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu;
    // machine
    const tiers = [
        ['lv', 'steel'],
        ['mv', 'aluminium'],
        ['hv', 'stainless_steel'],
    ];
    tiers.forEach((tier) => {
        event.shaped(
            `gtceu:${tier[0]}_planter`,
            [
                'GGG',
                'PHA',
                'DDD'
            ],
            {
                H: `gtceu:${tier[0]}_machine_hull`,
                G: '#forge:glass',
                P: `gtceu:${tier[0]}_electric_pump`,
                A: `gtceu:${tier[0]}_robot_arm`,
                D: '#minecraft:dirt',
            }
        )
    });
    // recipes
    // seeds plant
    const plantSeeds = [
        ['minecraft:pumpkin_seeds', 'minecraft:pumpkin'],
        ['minecraft:beetroot_seeds', 'minecraft:beetroot'],
        ['minecraft:wheat_seeds', 'minecraft:wheat'],
        ['minecraft:melon_seeds', 'minecraft:melon'],
    ];
    plantSeeds.forEach((plant) => {
        greg
            .planter(plant[0])
            .itemInputs(plant[0])
            .chancedInput('gtceu:fertilizer', 2000, 0)
            .inputFluids('minecraft:water 100')
            .itemOutputs(`2x ${plant[0]}`, plant[1])
            .duration(1200)
            .EUt(2);
    });
    // none seeds plant
    const plants = [
        'minecraft:sweet_berries',
        'minecraft:glow_berries',
        'minecraft:carrot',
        'minecraft:sugar_cane',
        'minecraft:kelp',
        'minecraft:cactus',
        'minecraft:brown_mushroom',
        'minecraft:red_mushroom',
        'minecraft:nether_wart',
    ];
    plants.forEach((plant) => {
        greg
            .planter(plant)
            .itemInputs(plant)
            .chancedInput('gtceu:fertilizer', 2000, 0)
            .inputFluids('minecraft:water 100')
            .itemOutputs(`2x ${plant}`)
            .duration(1200)
            .EUt(2);
    });
})