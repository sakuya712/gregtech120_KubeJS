ServerEvents.recipes((event) => {
    const greg = event.recipes.gtceu;
    // Upgrade Template
    event.remove({ output: 'storagedrawers:upgrade_template' })
    greg
        .assembler("upgrade_template")
        .itemInputs('2x #forge:screws/iron', 'gtceu:lv_electric_piston', '#minecraft:planks')
        .itemOutputs('storagedrawers:upgrade_template')
        .duration(60)
        .EUt(24);

    // Upgrade 1
    event.remove({ output: 'storagedrawers:obsidian_storage_upgrade' })
    greg
        .assembler("drawers_upgrade_1")
        .itemInputs('4x #forge:rods/iron', '2x #forge:plates/iron', 'storagedrawers:upgrade_template')
        .itemOutputs('storagedrawers:obsidian_storage_upgrade')
        .duration(100)
        .EUt(24);

    // Upgrade 2
    event.remove({ output: 'storagedrawers:iron_storage_upgrade' })
    greg
        .assembler("drawers_upgrade_2")
        .itemInputs('4x #forge:rods/steel', '2x #forge:plates/steel', 'storagedrawers:upgrade_template')
        .itemOutputs('storagedrawers:iron_storage_upgrade')
        .duration(100)
        .EUt(24);

    // Upgrade 3
    event.remove({ output: 'storagedrawers:gold_storage_upgrade' })
    greg
        .assembler("drawers_upgrade_3")
        .itemInputs('4x #forge:rods/aluminium', '2x #forge:plates/aluminium', 'storagedrawers:upgrade_template')
        .itemOutputs('storagedrawers:gold_storage_upgrade')
        .duration(100)
        .EUt(24);

    // Upgrade 4
    event.remove({ output: 'storagedrawers:diamond_storage_upgrade' })
    greg
        .assembler("drawers_upgrade_4")
        .itemInputs('4x #forge:rods/stainless_steel', '2x #forge:plates/stainless_steel', 'storagedrawers:upgrade_template')
        .itemOutputs('storagedrawers:diamond_storage_upgrade')
        .duration(100)
        .EUt(24);

    // Upgrade 5
    event.remove({ output: 'storagedrawers:emerald_storage_upgrade' })
    greg
        .assembler("drawers_upgrade_5")
        .itemInputs('4x #forge:rods/titanium', '2x #forge:plates/titanium', 'storagedrawers:upgrade_template')
        .itemOutputs('storagedrawers:emerald_storage_upgrade')
        .duration(100)
        .EUt(24);

    // Void Upgrade
    event.remove({ output: 'storagedrawers:void_upgrade' })
    event.shaped("storagedrawers:void_upgrade", ["PPP", "PTP", "PPP"], {
        P: "#forge:plates/obsidian",
        T: "storagedrawers:upgrade_template",
    });
});
