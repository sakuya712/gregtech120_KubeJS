ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu;
    // disable items
    const disable_items =[
        'ae2:inscriber',
    ]
    disable_items.forEach((item) =>{
        event.remove({output: item})
    });
    // press name, create lens
    const presses =[
        ['silicon_press','gtceu:sapphire_lens', ],
        ['logic_processor_press','gtceu:emerald_lens', ],
        ['engineering_processor_press','gtceu:ruby_lens', ],
        ['calculation_processor_press','gtceu:glass_lens', ],
    ];
    // press
    presses.forEach((press) =>{
        event.remove({ id: `ae2:inscriber/${press[0]}` });
        greg
            .laser_engraver(`gtceu:${press[0]}`)
            .itemInputs('#forge:plates/steel')
            .notConsumable(press[1])
            .itemOutputs(`ae2:${press[0]}`)
            .duration(500)
            .EUt(120);
    });
    // printed name, material, press
    const prints =[
        ['printed_silicon','#forge:plates/silicon', 'silicon_press', ],
        ['printed_logic_processor','#forge:plates/gold','logic_processor_press', ],
        ['printed_engineering_processor','#forge:plates/diamond', 'engineering_processor_press', ],
        ['printed_calculation_processor','#forge:plates/certus_quartz', 'calculation_processor_press', ],
    ];
    // printed
    prints.forEach((print) =>{
        event.remove({ id: `ae2:inscriber/${print[2].replace('_press','_print')}` });
        greg
            .forming_press(`gtceu:${print[0]}`)
            .itemInputs(print[1])
            .notConsumable(`ae2:${print[2]}`)
            .itemOutputs(`ae2:${print[0]}`)
            .duration(200)
            .EUt(30);
    });
    // processor name
    const processors =[
        'logic_processor',
        'engineering_processor',
        'calculation_processor',
    ];
    // processor
    processors.forEach((processor) =>{
        event.remove({ id: `ae2:inscriber/${processor}` });
        greg
            .circuit_assembler(`gtceu:${processor}`)
            .itemInputs(`ae2:printed_${processor}`, 'ae2:printed_silicon', '4x gtceu:red_alloy_single_wire')
            .itemOutputs(`ae2:${processor}`)
            .duration(400)
            .EUt(30);
    });
    // charged certus quartz
    greg
        .polarizer('gtceu:charged_certus_quartz')
        .itemInputs('gtceu:certus_quartz_gem')
        .itemOutputs('ae2:charged_certus_quartz_crystal')
        .duration(400)
        .EUt(16);
    // fluix crystal
    greg
        .mixer('gtceu:fluix_crystal')
        .itemInputs('ae2:charged_certus_quartz_crystal', 'minecraft:quartz', 'minecraft:redstone')
        .inputFluids('minecraft:water 100')
        .itemOutputs('2x ae2:fluix_crystal')
        .duration(600)
        .EUt(16);
    // fluix dust
    greg
        .macerator('gtceu:fluix_dust')
        .itemInputs('ae2:fluix_crystal')
        .itemOutputs('ae2:fluix_dust')
        .duration(100)
        .EUt(8);
    // sky stone dust
    greg
        .mixer('gtceu:sky_dust')
        .itemInputs('gtceu:stone_dust', '#forge:dusts/certus_quartz')
        .itemOutputs('2x ae2:sky_dust')
        .circuit(15)
        .duration(100)
        .EUt(8);
    // ME controller
    event.remove({ id: 'ae2:network/blocks/controller' });
    greg
        .assembler('gtceu:network/blocks/controller')
        .itemInputs('4x ae2:smooth_sky_stone_block', '4x ae2:fluix_crystal', '2x ae2:engineering_processor', '#gtceu:circuits/mv', 'gtceu:mv_machine_hull')
        .circuit(20)
        .itemOutputs('ae2:controller')
        .duration(100)
        .EUt(16);
    // ME drive
    event.remove({ id: 'ae2:network/blocks/storage_drive' });
    greg
        .assembler('gtceu:network/blocks/storage_drive')
        .itemInputs('2x ae2:fluix_glass_cable', 'ae2:logic_processor', '2x ae2:engineering_processor', '#gtceu:circuits/mv', 'gtceu:mv_machine_hull')
        .circuit(21)
        .itemOutputs('ae2:drive')
        .duration(100)
        .EUt(16);
    // ME chest
    event.remove({ id: 'ae2:network/blocks/storage_chest' });
    greg
        .assembler('gtceu:network/blocks/storage_chest')
        .itemInputs('2x ae2:quartz_glass', 'ae2:terminal', '2x ae2:fluix_glass_cable', '#gtceu:circuits/mv', 'gtceu:mv_machine_hull')
        .circuit(22)
        .itemOutputs('ae2:chest')
        .duration(100)
        .EUt(16);
    // energy cell
    event.remove({ id: 'ae2:network/blocks/energy_energy_cell' });
    greg
        .assembler('gtceu:network/blocks/energy_energy_cell')
        .itemInputs('4x #forge:gems/certus_quartz', '2x ae2:fluix_glass_cable', '#gtceu:circuits/mv', 'gtceu:mv_machine_hull')
        .circuit(23)
        .itemOutputs('ae2:energy_cell')
        .duration(100)
        .EUt(16);
    // quartz glass
    event.remove({ id: 'ae2:decorative/quartz_glass' });
    greg
        .alloy_smelter('gtceu:quartz_glass')
        .itemInputs('4x #forge:glass', '5x gtceu:certus_quartz_dust')
        .itemOutputs('4x ae2:quartz_glass')
        .duration(100)
        .EUt(8);
    // vibrant quartz glass
    event.remove({ id: 'ae2:decorative/quartz_vibrant_glass' });
    greg
        .alloy_smelter('gtceu:vibrant_quartz_glass')
        .itemInputs('ae2:quartz_glass', '2x minecraft:glowstone_dust')
        .itemOutputs('2x ae2:quartz_vibrant_glass')
        .duration(100)
        .EUt(8);
    //item Storage Housing
    event.remove({ output: 'ae2:item_cell_housing' });
    greg
        .assembler('gtceu:item_cell_housing')
        .itemInputs('2x ae2:quartz_glass', '4x gtceu:red_alloy_single_wire', '2x #forge:plates/steel', '#gtceu:circuits/lv')
        .circuit(21)
        .itemOutputs('ae2:item_cell_housing')
        .duration(100)
        .EUt(16);
    //fluid Storage Housing
    event.remove({ output: 'ae2:fluid_cell_housing' });
    greg
        .assembler('gtceu:fluid_cell_housing')
        .itemInputs('2x ae2:quartz_glass', '4x gtceu:red_alloy_single_wire', '2x #forge:plates/stainless_steel', '#gtceu:circuits/hv')
        .circuit(22)
        .itemOutputs('ae2:fluid_cell_housing')
        .duration(100)
        .EUt(16);
    // cells
    const storages =[
        '1k',
        '4k',
        '16k',
        '64k',
        '256k',
    ]
    
    storages.forEach((storage) =>{
        event.remove({ output: `ae2:item_storage_cell_${storage}` });
        greg
            .assembler(`gtceu:item_storage_cell_${storage}`)
            .itemInputs('ae2:item_cell_housing', `ae2:cell_component_${storage}`)
            .itemOutputs(`ae2:item_storage_cell_${storage}`)
            .duration(100)
            .EUt(16);
        event.remove({ output: `ae2:fluid_storage_cell_${storage}` });
        greg
            .assembler(`gtceu:fluid_storage_cell_${storage}`)
            .itemInputs('ae2:fluid_cell_housing', `ae2:cell_component_${storage}`)
            .itemOutputs(`ae2:fluid_storage_cell_${storage}`)
            .duration(100)
            .EUt(16);
        event.remove({ output: `ae2:portable_item_cell_${storage}` });
        greg
            .assembler(`gtceu:portable_item_cell_${storage}`)
            .itemInputs('ae2:item_cell_housing', `ae2:cell_component_${storage}`, 'ae2:chest', 'ae2:energy_cell')
            .itemOutputs(`ae2:portable_item_cell_${storage}`)
            .duration(100)
            .EUt(16);
        event.remove({ output: `ae2:portable_fluid_cell_${storage}` });
        greg
            .assembler(`gtceu:portable_fluid_cell_${storage}`)
            .itemInputs('ae2:fluid_cell_housing', `ae2:cell_component_${storage}`, 'ae2:chest', 'ae2:energy_cell')
            .itemOutputs(`ae2:portable_fluid_cell_${storage}`)
            .duration(100)
            .EUt(16);

    });
})