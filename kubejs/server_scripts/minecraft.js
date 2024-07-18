ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:enchanted_book').enchant('minecraft:silk_touch', 1),
        [
            'RWR',
            'WBW',
            'RmR'
        ],
        {
            R: '#forge:plates/rubber',
            W: '#minecraft:wool',
            B: 'minecraft:book',
            m: '#forge:tools/mallets'
        }
    )
    const greg = event.recipes.gtceu;
    greg
        .macerator('gtceu:obsidian_dust')
        .itemInputs('minecraft:obsidian')
        .itemOutputs('gtceu:obsidian_dust')
        .duration(30)
        .EUt(8);
    
})