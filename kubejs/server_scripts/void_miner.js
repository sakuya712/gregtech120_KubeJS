ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu;
    // machines (HV)
    const tiers = [
        ['hv', 'stainless_steel', 'gold'],
    ];
    tiers.forEach((tier) => {
        event.shaped(
            'gtceu:void_miner',
            [
                'BPB',
                'WHW',
                'SCS'
            ],
            {
                H: `gtceu:${tier[0]}_machine_hull`,
                S: `gtceu:${tier[0]}_sensor`,
                B: `gtceu:${tier[0]}_conveyor_module`,
                P: `gtceu:${tier[0]}_electric_piston`,
                W: `gtceu:${tier[2]}_single_cable`,
                C: `#gtceu:circuits/${tier[0]}`,
            }
        )
    });
    // [vein name,[
    //     [ore1,chance],
    //     [ore2,chance],
    //     ...
    // ]],
    const veins = [
        ['olivine',[
            ['bentonite',3],
            ['magnetite',2],
            ['olivine',2],
            ['glauconite_sand',1],
        ]],
        ['sapphire',[
            ['almandine',3],
            ['pyrope',2],
            ['sapphire',1],
            ['green_sapphire',1],
        ]],
        ['iron',[
            ['goethite',5],
            ['yellow_limonite',2],
            ['hematite',2],
            ['malachite',1],
        ]],
        ['lubricant',[
            ['soapstone',3],
            ['talc',2],
            ['glauconite_sand',2],
            ['pentlandite',1],
        ]],
        ['tetrahedrite',[
            ['tetrahedrite',4],
            ['copper',2],
            ['stibnite',1],
        ]],
        ['monazite',[
            ['bastnasite',3],
            ['monazite',1],
            ['neodymium',1],
        ]],
        ['redstone',[
            ['redstone',3],
            ['ruby',2],
            ['cinnabar',2],
        ]],
        ['manganese',[
            ['grossular',3],
            ['spessartine',2],
            ['pyrolusite',2],
            ['tantalite',1],
        ]],
        ['copper_tin',[
            ['chalcopyrite',5],
            ['zeolite',2],
            ['cassiterite',2],
            ['realgar',1],
        ]],
        ['saltpeter',[
            ['saltpeter',3],
            ['diatomite',2],
            ['electrotine',2],
            ['alunite',1],
        ]],
        ['coal',[
            ['coal',3],
        ]],
        ['naquadah',[
            ['naquadah',3],
            ['plutonium',1],
        ]],
        ['magnetite',[
            ['magnetite',3],
            ['vanadium_magnetite',2],
            ['chromite',2],
            ['gold',1],
        ]],
        ['beryllium',[
            ['beryllium',3],
            ['emerald',2],
            ['emerald',2],
        ]],
        ['copper',[
            ['chalcopyrite',5],
            ['iron',2],
            ['pyrite',2],
            ['copper',2],
        ]],
        ['lapis',[
            ['lazurite',3],
            ['sodalite',2],
            ['lapis',2],
            ['calcite',1],
        ]],
        ['scheelite',[
            ['scheelite',3],
            ['tungstate',2],
            ['lithium',1],
        ]],
        ['galena',[
            ['galena',3],
            ['silver',2],
            ['lead',1],
        ]],
        ['mica',[
            ['kyanite',3],
            ['mica',2],
            ['bauxite',2],
            ['pollucite',1],
        ]],
        ['cassiterite',[
            ['tin',4],
            ['cassiterite',2],
        ]],
        ['garnet',[
            ['red_garnet',3],
            ['yellow_garnet',2],
            ['amethyst',2],
            ['opal',1],
        ]],
        ['mineral_sand',[
            ['basaltic_mineral_sand',3],
            ['granitic_mineral_sand',2],
            ['fullers_earth',1],
            ['gypsum',1],
        ]],
        ['bauxite',[
            ['bauxite',2],
            ['ilmenite',1],
            ['aluminium',1],
        ]],
        ['molybdenum',[
            ['wulfenite',3],
            ['molybdenite',2],
            ['molybdenum',1],
            ['powellite',1],
        ]],
        ['sheldonite',[
            ['bornite',3],
            ['cooperite',2],
            ['platinum',2],
            ['palladium',1],
        ]],
        ['pitchblende',[
            ['pitchblende',3],
            ['uraninite',2],
        ]],
        ['salt',[
            ['rock_salt',3],
            ['salt',2],
            ['lepidolite',1],
            ['spodumene',1],
        ]],
        ['banded_iron',[
            ['goethite',3],
            ['yellow_limonite',2],
            ['hematite',2],
            ['gold',1],
        ]],
        ['apatite',[
            ['apatite',3],
            ['tricalcium_phosphate',2],
            ['pyrochlore',1],
        ]],
        ['garnet_tin',[
            ['cassiterite_sand',3],
            ['garnet_sand',2],
            ['asbestos',2],
            ['diatomite',1],
        ]],
        ['certus_quartz',[
            ['quartzite',3],
            ['certus_quartz',2],
            ['barite',1],
        ]],
        ['topaz',[
            ['blue_topaz',3],
            ['topaz',2],
            ['chalcocite',2],
            ['bornite',1],
        ]],
        ['oilsands',[
            ['oilsands',3],
            ['oilsands',2],
            ['oilsands',1],
        ]],
        ['diamond',[
            ['graphite',3],
            ['diamond',2],
            ['coal',1],
        ]],
        ['nickel',[
            ['garnierite',3],
            ['nickel',2],
            ['cobaltite',2],
            ['pentlandite',1],
        ]],
        ['nether_quartz',[
            ['nether_quartz',3],
            ['quartzite',1],
        ]],
        ['sulfur',[
            ['sulfur',3],
            ['pyrite',2],
            ['sphalerite',1],
        ]],
    ]

    veins.forEach((vein) => {
        let recipe = greg.void_miner(`${vein[0]}_vein`)
        recipe.notConsumable(`kubejs:vein_data_${vein[0]}`)
        vein[1].forEach((ore) => {
            recipe.chancedOutput(`gtceu:${ore[0]}_ore`, ore[1]*1000, 500)
        });
        recipe.inputFluids("gtceu:drilling_fluid 500")
            .duration(600)
            .EUt(100);
    });
})