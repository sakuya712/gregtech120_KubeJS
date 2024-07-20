StartupEvents.registry('item', event => {

    const veins = [
        'olivine',
        'sapphire',
        'iron',
        'lubricant',
        'tetrahedrite',
        'monazite',
        'redstone',
        'manganese',
        'copper_tin',
        'saltpeter',
        'coal',
        'naquadah',
        'magnetite',
        'beryllium',
        'copper',
        'lapis',
        'scheelite',
        'galena',
        'mica',
        'cassiterite',
        'garnet',
        'mineral_sand',
        'bauxite',
        'molybdenum',
        'sheldonite',
        'pitchblende',
        'salt',
        'banded_iron',
        'apatite',
        'garnet_tin',
        'certus_quartz',
        'topaz',
        'oilsands',
        'diamond',
        'nickel',
        'nether_quartz',
        'sulfur',
    ];
    veins.forEach((vein) => {
        event.create(`vein_data_${vein}`)
        .displayName(`Vein Data (${vein})`)
        .texture('gtceu:item/data_stick')
    });

});