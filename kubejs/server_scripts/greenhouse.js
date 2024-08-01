ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu;
    // machines (LV)
    const tiers = [
        ['lv', 'steel', 'tin'],
    ];
    tiers.forEach((tier) => {
        event.shaped(
            'gtceu:greenhouse',
            [
                'BPM',
                'WHW',
                'Ccp'
            ],
            {
                H: `gtceu:${tier[0]}_machine_hull`,
                C: `gtceu:${tier[0]}_conveyor_module`,
                M: `gtceu:${tier[0]}_electric_motor`,
                P: `gtceu:${tier[0]}_electric_piston`,
                W: `gtceu:${tier[2]}_single_cable`,
                B: 'gtceu:cobalt_brass_buzz_saw_blade',
                p: `gtceu:${tier[0]}_electric_pump`,
                c: `#gtceu:circuits/${tier[0]}`,
            }
        )
    });

    const trees = [
        'oak',
        'spruce',
        'birch',
        'jungle',
        'acacia',
        'dark_oak',
        'mangrove',
        'cherry',
        'rubber'
    ]

    trees.forEach((tree) => {
        let modname = 'minecraft'
        if (tree == 'rubber'){
            modname = 'gtceu'
        }
        let sapling = `${modname}:${tree}_sapling`
        if (tree == 'mangrove'){
            sapling = sapling.replace('sapling','propagule')
        }
        let log = `${modname}:${tree}_log`
        let stripped = `${modname}:stripped_${tree}_log`
        let leaves = `${modname}:${tree}_leaves`
        // log mode 
        greg
            .greenhouse(`gtceu:${tree[0]}_greenhouse_log`)
            .itemInputs(sapling)
            .chancedInput('gtceu:fertilizer', 2000, 0)
            .inputFluids('minecraft:water 500')
            .circuit(1)
            .itemOutputs(`5x ${log}`, sapling)
            .duration(2400)
            .EUt(2);
        // stripped mode 
        greg
            .greenhouse(`gtceu:${tree[0]}_greenhouse_stripped`)
            .itemInputs(sapling)
            .chancedInput('gtceu:fertilizer', 2000, 0)
            .inputFluids('minecraft:water 500')
            .circuit(2)
            .itemOutputs(`5x ${stripped}`, sapling)
            .duration(2400)
            .EUt(2);
        // leaves mode 
        greg
            .greenhouse(`gtceu:${tree[0]}_greenhouse_leaves`)
            .itemInputs(sapling)
            .chancedInput('gtceu:fertilizer', 2000, 0)
            .inputFluids('minecraft:water 500')
            .circuit(3)
            .itemOutputs(`10x ${leaves}`, sapling)
            .duration(2400)
            .EUt(2);
        // apple mode 
        if (tree.includes('oak')){
            greg
            .greenhouse(`gtceu:${tree[0]}_greenhouse_apple`)
            .itemInputs(sapling)
            .chancedInput('gtceu:fertilizer', 2000, 0)
            .inputFluids('minecraft:water 500')
            .circuit(0)
            .itemOutputs('5x minecraft:apple', sapling)
            .duration(2400)
            .EUt(2);
        }
    });
})