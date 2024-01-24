let jonSnowAttack = 25
let jamieLannisterAttack = 35
const jamiesSwordSkillIsBetter = true

// if (jonSnowAttack > jamieLannisterAttack){
//     console.log(`Winter is Coming`)
// }else if (jonSnowAttack === jamieLannisterAttack){
//     console.log(`This shouldn't be possible`)
// } else {
//     console.log(`Jamie has someone play The Rains of Castemere`)
// }

let jonSnowPlotArmor = 100
let jonSnowDefense = 0

// if else block to determine if jon can survive an attack from Jamie.
// if jon does not have enough health to live through the attack, console.log his death
// otherwise, update his health to reflect the damage from the attack

jonSnowDefense += 10

// if (jonSnowPlotArmor <= jamieLannisterAttack - jonSnowDefense){
//     console.log(`Jon Dies`)
// } else {
//     jonSnowPlotArmor -= jamieLannisterAttack - jonSnowDefense
//     console.log(jonSnowPlotArmor)
// }

// add 50 health to jon unless that will exceed 100, in which case , cap the healing val at 100
let healthPotions = 50

if (jonSnowPlotArmor + healthPotions > 100){
    jonSnowPlotArmor = 100
} else {
    jonSnowPlotArmor += 50
}
// console.log(`Healing potion brought Jon back to ${jonSnowPlotArmor}`)

let coinLandsHeads = true

// if(!coinLandsHeads){
//     console.log(`the fight continues`)
// } else {
//     console.log(`Jon makes his escape`)
// }

// Write a loop that will run 5 attacks on jon, accounting for his health and defense vs jamie's attack 
// console log his health after each attack

// for (let attack = 0; attack <= 5; attack++){
//     if(jonSnowPlotArmor <= 0){
//         console.log(`Jon has died`)
//     } else {
//         jonSnowPlotArmor -= jamieLannisterAttack - jonSnowDefense
//         console.log(`Jon Snow's health has been reduced to ${jonSnowPlotArmor}`)
//     }
// }

while (jonSnowPlotArmor > 0){
    jonSnowPlotArmor -= jamieLannisterAttack - jonSnowDefense
    console.log(`Jon Snow's Health is ${jonSnowPlotArmor}`)
    if (jonSnowPlotArmor <= 0){
        console.log(`Jon Snow is Dead`)
    }
}