let necromancer = {};

necromancer["Trunk Data"] = {
	["Basic"]: {
		connections: [ "Core" ],
		x: 0,
		y: 0,
	},
	["Capstone"]: {
		requiredPoints: 33,
		x: -11.709585,
		y: 4933.965,
	},
	["Core"]: {
		connections: [ "Macabre" ],
		requiredPoints: 2,
		x: -2.3525850000000004,
		y: 1135.79,
	},
	["Corruption"]: {
		connections: [ "Summoning" ],
		requiredPoints: 11,
		x: 1241.037965,
		y: 3005.145,
	},
	["Summoning"]: {
		connections: [ "Ultimate" ],
		requiredPoints: 16,
		x: -1135.4770350000001,
		y: 3007.7749999999996,
	},
	["Ultimate"]: {
		connections: [ "Capstone" ],
		requiredPoints: 23,
		x: -9.556935,
		y: 4138.1565,
	},
	["Macabre"]: {
		connections: [ "Corruption" ],
		requiredPoints: 6,
		x: 1240.932965,
		y: 2069.72,
	},
},
necromancer["Basic"] = {
	["Decompose"]: {
		connections: [ "Basic", ],
		description: `{c_gold}Generate Essence:{/c_gold} {c_green}{SF_5}{/c_green} per second
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:17}%{/c}
{/if}Tear the flesh from an enemy, dealing {c_yellow}{dot:DECOMPOSING}{/c} damage per second and forming a usable Corpse with the flesh every {c_yellow}[{SF_1}|1|]{/c} seconds.`,
		maxPoints: 5,
		x: -302.457535,
		y: -154.39000000000033,
	},
	["Enhanced Decompose"]: {
		connections: [ "Decompose", ],
		description: `If an enemy dies while being Decomposed, you gain {c_yellow}{SF_7}{/c} Essence.`,
		maxPoints: 3,
		x: -535.502035,
		y: -276.9200000000001,
	},
	["Acolyte's Decompose"]: {
		connections: [ "Enhanced Decompose", ],
		description: `You and your Minions deal {c_yellow}x[{SF_12} * 100]%{/c} increased damage to enemies who are being {c_white}Decomposed{/c}.`,
		maxPoints: 3,
		x: -852.607035,
		y: -322.10000000000036,
	},
	["Initiate's Decompose"]: {
		connections: [ "Enhanced Decompose", ],
		description: `{c_white}Decompose{/c} Slows enemies by {c_yellow}[{SF_13} * 100]%{/c}.`,
		maxPoints: 3,
		x: -629.022035,
		y: -437.84500000000025,
	},
	["Reap"]: {
		connections: [ "Basic", ],
		description: `{c_gold}Generate Essence:{/c_gold} {c_green}{SF_2}{/c_green} per enemy hit
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Sweep an ethereal scythe in front of you, dealing {c_yellow}{payload:DAMAGE}{/c} damage. Hitting an enemy with Reap increases your Damage Reduction by {c_yellow}[{SF_8}*100]%{/c} for {c_yellow}{buffduration:DAMAGE_REDUCTION}{/c} seconds.`,
		maxPoints: 5,
		x: -276.919535,
		y: 154.4699999999998,
	},
	["Enhanced Reap"]: {
		connections: [ "Reap", ],
		description: `If an enemy hit by Reap dies within {c_yellow}{SF_4}{/c} seconds, you gain {c_yellow}[{SF_5} * 100]%{/c} Attack Speed for {c_yellow}{SF_15}{/c} seconds.`,
		maxPoints: 3,
		x: -519.257035,
		y: 283.5649999999996,
	},
	["Initiate's Reap"]: {
		connections: [ "Enhanced Reap", ],
		description: `Reap instantly executes non-Bosses below {c_yellow}[{SF_7}*100]%{/c} Life.`,
		maxPoints: 3,
		x: -850.5470349999999,
		y: 324,
	},
	["Acolyte's Reap"]: {
		connections: [ "Enhanced Reap", ],
		description: `Reap forms a Corpse under the first enemy hit. Can only occur every {c_yellow}{buffduration:GENERATE_CORPSE_ICD}{/c} seconds.`,
		maxPoints: 3,
		x: -599.482035,
		y: 454.96000000000004,
	},
	["Hemorrhage"]: {
		connections: [ "Basic", ],
		description: `{c_gold}Generate Essence:{/c_gold} {c_green}{SF_6}{/c_green}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Burst an enemy's blood, dealing {c_yellow}{payload:DAMAGE}{/c} damage. Hemorrhage has a {c_yellow}[{SF_5}*100]%{/c} chance to form a {c_white}Blood Orb{/c}.`,
		maxPoints: 5,
		x: 279.312965,
		y: -153.6800000000003,
	},
	["Enhanced Hemorrhage"]: {
		connections: [ "Hemorrhage", ],
		description: `After picking up a {c_white}Blood Orb{/c}, your next Hemorrhage also hits nearby enemies and grants {c_yellow}{SF_10}{/c} additional Essence per enemy hit.`,
		maxPoints: 3,
		x: 515.387965,
		y: -269.0050000000001,
	},
	["Acolyte's Hemorrhage"]: {
		connections: [ "Enhanced Hemorrhage", ],
		description: `Hemorrhage gains an additional {c_yellow}[{SF_11} * 100]%{/c} Attack Speed while {c_white}Healthy{/c}.`,
		maxPoints: 3,
		x: 848.647965,
		y: -316.1999999999998,
	},
	["Initiate's Hemorrhage"]: {
		connections: [ "Enhanced Hemorrhage", ],
		description: `Hemorrhage grants {c_yellow}{fortified:MOD_FORTIFY}{/c} {c_white}Fortify{/c} each time it hits an enemy, and has a {c_yellow}[{SF_13} * 100|1|]%{/c} chance per enemy hit to fully {c_white}Fortify{/c} you.`,
		maxPoints: 3,
		x: 618.877965,
		y: -434.4350000000004,
	},
	["Bone Splinters"]: {
		connections: [ "Basic", ],
		description: `{c_gold}Generate Essence:{/c} {c_green}{SF_5}{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Fire {c_yellow}3{/c} bone splinters, dealing {c_yellow}{payload:DAMAGE}{/c} damage each. Each subsequent time an enemy is hit by the same cast of Bone Splinters, you gain {c_yellow}{SF_4}{/c} Essence.`,
		maxPoints: 5,
		x: 267.113465,
		y: 153.41999999999962,
	},
	["Enhanced Bone Splinters"]: {
		connections: [ "Bone Splinters", ],
		description: `Bone Splinters has a {c_yellow}[{SF_10} * 100]%{/c} chance to fire {c_yellow}{SF_8}{/c} additional projectile if cast while you have {c_yellow}{SF_15}{/c} or more Essence.`,
		maxPoints: 3,
		x: 502.277965,
		y: 282.1399999999999,
	},
	["Acolyte's Bone Splinters"]: {
		connections: [ "Enhanced Bone Splinters", ],
		description: `Hitting the same enemy at least {c_yellow}{SF_20}{/c} times with the same cast of Bone Splinters grants {c_yellow}[{SF_21} * 100]%{/c} Critical Strike Chance for {c_yellow}{SF_22}{/c} seconds.`,
		maxPoints: 3,
		x: 598.597965,
		y: 454.5749999999998,
	},
	["Initiate's Bone Splinters"]: {
		connections: [ "Enhanced Bone Splinters", ],
		description: `Bone Splinters has a {c_yellow}[{SF_12} * 100]%{/c} chance per hit to make enemies {c_white}Vulnerable{/c} for {c_yellow}{SF_13}{/c} seconds.`,
		maxPoints: 3,
		x: 843.397965,
		y: 320.75499999999965,
	},
};

necromancer["Capstone"] = {
	["Ossified Essence"]: {
		connections: [ "Capstone", ],
		description: `Your {c_white}Bone{/c} Skills deal {c_yellow}x[{SF_0} * 100]%{/c} increased damage for each point of Essence you have above {c_yellow}[SF_1]{/c} upon cast.`,
		maxPoints: 1,
		x: 563.34255,
		y: 304.92999999999984,
	},
	["Shadowblight"]: {
		connections: [ "Capstone", ],
		description: `Shadow Damage infects enemies with {c_white}Shadowblight{/c} for {c_yellow}{buffduration:DEBUFF_SHADOWBLIGHT_COUNTER}{/c} seconds.

Every {c_yellow}{SF_2}th{/c} time an enemy receives Shadow Damage from you or your Minions while they are affected by {c_white}Shadowblight{/c}, they burst for {c_yellow}{payload:BURST_DAMAGE}{/c} Shadow Damage.`,
		maxPoints: 1,
		x: -187.53795,
		y: 305.4849999999999,
	},
	["Rathma's Vigor"]: {
		connections: [ "Capstone", ],
		description: `Increase your maximum Life by {c_yellow}[{SF_0} * 100]%{/c}. While {c_white}Healthy{/c}, you deal {c_yellow}x[{SF_1} *100]%{/c} increased damage.`,
		maxPoints: 1,
		x: 187.54755,
		y: 305.92499999999995,
	},
	["Strength in Numbers"]: {
		connections: [ "Capstone", ],
		description: `While you have at least {c_yellow}{SF_0}{/c} Minions, they gain {c_yellow}[{SF_1} * 100]%{/c} Attack Speed.`,
		maxPoints: 1,
		x: -563.26245,
		y: 305.8699999999999,
	},
};

necromancer["Core"] = {
	["Blight"]: {
		connections: [ "Core", ],
		description: `{c_gold}Essence Cost: {/c}{c_green}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:21}%{/c}
{/if}Unleash concentrated blight that deals {c_yellow}{payload:DAMAGE}{/c} damage and leaves behind a defiled area, dealing {c_yellow}{dot:TOOLTIP_DOT}{/c} damage over {c_yellow}{buffduration:TOOLTIP_DOT}{/c} seconds.`,
		maxPoints: 5,
		x: -224.53245,
		y: -184.93499999999995,
	},
	["Enhanced Blight"]: {
		connections: [ "Blight", ],
		description: `Blight Slows enemies by {c_yellow}[{SF_15}*100]%{/c}.`,
		maxPoints: 3,
		x: -450.97445000000005,
		y: -361.8000000000002,
	},
	["Paranormal Blight"]: {
		connections: [ "Enhanced Blight", ],
		description: `Blight has a {c_yellow}[{SF_16}*100]%{/c} chance to Stun for {c_yellow}{buffduration:STUN}{/c} seconds each time it deals damage.`,
		maxPoints: 3,
		x: -815.9944499999999,
		y: -416.96500000000015,
	},
	["Supernatural Blight"]: {
		connections: [ "Enhanced Blight", ],
		description: `Your Minions deal {c_yellow}x[{SF_18}*100]%{/c} increased damage to enemies within Blight.`,
		maxPoints: 3,
		x: -489.67895000000004,
		y: -551.2750000000001,
	},
	["Sever"]: {
		connections: [ "Core", ],
		description: `{c_gold}Essence Cost: {/c}{c_green}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}A spectre of you charges forward and attacks with its scythe for {c_yellow}{payload:DAMAGE}{/c} damage.`,
		maxPoints: 5,
		x: -411.07495,
		y: 0.15499999999974534,
	},
	["Enhanced Sever"]: {
		connections: [ "Sever", ],
		description: `Sever damages enemies along its path for {c_yellow}[{SF_16} * 100]%{/c} of its damage.`,
		maxPoints: 3,
		x: -768.37945,
		y: 0.3249999999998181,
	},
	["Paranormal Sever"]: {
		connections: [ "Enhanced Sever", ],
		description: `Every {c_yellow}4th{/c} cast of Sever makes enemies {c_white}Vulnerable{/c} for {c_yellow}[{SF_14}]{/c} seconds.`,
		maxPoints: 3,
		x: -1102.25445,
		y: -100.2800000000002,
	},
	["Supernatural Sever"]: {
		connections: [ "Enhanced Sever", ],
		description: `Sever deals {c_yellow}x[{SF_13} * 100]%{/c} increased damage for each Minion you have upon cast.`,
		maxPoints: 3,
		x: -1100.73945,
		y: 97.61999999999989,
	},
	["Blood Surge"]: {
		connections: [ "Core", ],
		description: `{c_gold}Essence Cost: {/c}{c_green}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Draw blood from enemies, dealing {c_yellow}{payload:OUTER_DAMAGE}{/c} damage, and expel a blood nova, dealing {c_yellow}{payload:INNER_DAMAGE}{/c} damage. Blood Surge's nova damage is increased by {c_yellow}x[{SF_1} * 100]%{/c} per enemy drained, up to {c_yellow}x[SF_6 * 100]%{/c}.`,
		maxPoints: 5,
		x: 230.53505,
		y: -185.1600000000003,
	},
	["Enhanced Blood Surge"]: {
		connections: [ "Blood Surge", ],
		description: `Blood Surge heals you for {c_yellow}[{SF_12}*100]%{/c} of your maximum Life per each enemy drained, up to {c_yellow}[{SF_11}*100]%{/c}.`,
		maxPoints: 3,
		x: 458.77104999999995,
		y: -363.2550000000001,
	},
	["Supernatural Blood Surge"]: {
		connections: [ "Enhanced Blood Surge", ],
		description: `Each time an enemy is hit by {c_white}Blood Surge's{/c} nova, you are {c_white}Fortified{/c} for {c_yellow}{Fortified:FORTIFY_HEALTH}{/c}.`,
		maxPoints: 3,
		x: 811.85555,
		y: -414.23,
	},
	["Paranormal Blood Surge"]: {
		connections: [ "Enhanced Blood Surge", ],
		description: `After hitting enemies {c_yellow}{SF_13}{/c} times with Blood Surge's nova while {c_white}Healthy{/c}, your next Blood Surge {c_white}Overpowers{/c}.`,
		maxPoints: 3,
		x: 499.17055,
		y: -552.2800000000002,
	},
	["Blood Lance"]: {
		connections: [ "Core", ],
		description: `{c_gold}Essence Cost:{/c} {c_green}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Throw a blood lance that lingers in an enemy for {c_yellow}{buffduration:LANCED}{/c} second, dealing {c_yellow}{payload:DAMAGE}{/c} damage to the enemy and all other lanced enemies.`,
		maxPoints: 5,
		x: 380.12154999999996,
		y: 38.460000000000036,
	},
	["Enhanced Blood Lance"]: {
		connections: [ "Blood Lance", ],
		description: `Blood Lance Pierces through enemies who are currently lanced, dealing {c_yellow}[{SF_14} * 100]%{/c} reduced damage to subsequent enemies after the first.`,
		maxPoints: 3,
		x: 726.71055,
		y: 65.69499999999971,
	},
	["Supernatural Blood Lance"]: {
		connections: [ "Enhanced Blood Lance", ],
		description: `Enemies currently affected by Blood Lance have a {c_yellow}[{SF_10} * 100]%{/c} chance to leave behind a {c_white}Blood Orb{/c} upon death.`,
		maxPoints: 3,
		x: 985.34055,
		y: 189.00499999999965,
	},
	["Paranormal Blood Lance"]: {
		connections: [ "Enhanced Blood Lance", ],
		description: `While at least {c_yellow}{SF_12}{/c} enemies are affected by Blood Lance, you gain {c_yellow}[{SF_13} * 100]%{/c} Attack Speed and Blood Lance's Essence cost is reduced by {c_yellow}{SF_11}{/c}.`,
		maxPoints: 3,
		x: 1055.92055,
		y: 24.710000000000036,
	},
	["Bone Spear"]: {
		connections: [ "Core", ],
		description: `{c_gold}Essence Cost:{/c} {c_green}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Conjure a bone spear from the ground, dealing {c_yellow}{payload:DAMAGE}{/c} damage and Piercing through enemies.`,
		maxPoints: 5,
		x: -53.08245,
		y: 204.58500000000004,
	},
	["Enhanced Bone Spear"]: {
		connections: [ "Bone Spear", ],
		description: `Bone Spear breaks into shards when it is destroyed, dealing {c_yellow}{payload:BONE_SHARD}{/c} damage each.`,
		maxPoints: 3,
		x: -106.37644999999999,
		y: 383.8699999999999,
	},
	["Paranormal Bone Spear"]: {
		connections: [ "Enhanced Bone Spear", ],
		description: `Bone Spear has a {c_yellow}[{SF_10}*100]%{/c} increased Critical Strike Chance and deals {c_yellow}x[{SF_11}*100]%{/c} increased Critical Strike Damage.`,
		maxPoints: 3,
		x: -340.21645,
		y: 524.7249999999999,
	},
	["Supernatural Bone Spear"]: {
		connections: [ "Enhanced Bone Spear", ],
		description: `Bone Spear makes the first enemy hit {c_white}Vulnerable{/c} for {c_yellow}{SF_19}{/c} seconds.`,
		maxPoints: 3,
		x: -15.68585,
		y: 547.4699999999998,
	},
	["Unliving Energy"]: {
		connections: [ "Core", ],
		description: `Your maximum Essence is increased by {c_yellow}{SF_0}{/c}.`,
		maxPoints: 3,
		x: 527.72555,
		y: -113.76500000000033,
	},
	["Imperfectly Balanced"]: {
		connections: [ "Unliving Energy", ],
		description: `Your {c_white}Core{/c} Skills cost {c_yellow}[{SF_0} * 100]%{/c} more Essence, but deal {c_yellow}x[{SF_1} * 100]%{/c} increased damage.`,
		maxPoints: 3,
		x: 889.68055,
		y: -190.74000000000024,
	},
	["Reconstitution"]: {
		connections: [ "Core", ],
		description: `{c_gold}Lucky Hit:{/c} Your damage has up to a {c_yellow}{SF_0}%{/c} chance to create a corpse at the target's location. 

This chance is doubled against bosses.`,
		maxPoints: 3,
		x: -417.86745,
		y: 186.8199999999997,
	},
};

necromancer["Corruption"] = {
	["Iron Maiden"]: {
		connections: [ "Corruption", ],
		description: `{c_gold}Essence Cost: {/c}{c_green}{Resource Cost}{/c}
Curse the target area. Enemies afflicted by Iron Maiden take {c_yellow}{payload:CURSE_DAMAGE}{/c} damage each time they deal direct damage. Lasts {c_yellow}{buffduration:IRONMAIDEN_CURSE}{/c} seconds.`,
		maxPoints: 5,
		x: -312.70000000000005,
		y: 165.28999999999996,
	},
	["Enhanced Iron Maiden"]: {
		connections: [ "Iron Maiden", ],
		description: `Iron Maiden no longer costs Essence. Instead, gain {c_yellow}{SF_6}{/c} Essence for each enemy Cursed. Does not work with enemies who are already cursed with Iron Maiden.`,
		maxPoints: 3,
		x: -561.73,
		y: 297.34999999999997,
	},
	["Horrid Iron Maiden"]: {
		connections: [ "Enhanced Iron Maiden", ],
		description: `When at least {c_yellow}{SF_8}{/c} enemies are afflicted by Iron Maiden, its damage is increased by {c_yellow}x[{SF_9}*100]%{/c}.`,
		maxPoints: 3,
		x: -941.4455,
		y: 368.3829999999999,
	},
	["Abhorrent Iron Maiden"]: {
		connections: [ "Enhanced Iron Maiden", ],
		description: `Heal for {c_yellow}[{SF_7}*100]%{/c} of your maximum Life when an enemy dies while afflicted with Iron Maiden.`,
		maxPoints: 3,
		x: -686.755,
		y: 495.87799999999993,
	},
	["Skeletal Mage Mastery"]: {
		connections: [ "Corruption", ],
		description: `Increase the damage and Health of your Skeletal Mages by {c_yellow}[{SF_0} * 100]%{/c} .`,
		maxPoints: 3,
		x: 810.22,
		y: 0.5749999999999318,
	},
	["Amplify Damage"]: {
		connections: [ "Corruption", ],
		description: `You deal {c_yellow}x[{SF_0} * 100]%{/c} increased damage to Cursed enemies.`,
		maxPoints: 3,
		x: 3.119999999999891,
		y: 431.69449999999995,
	},
	["Decrepify"]: {
		connections: [ "Corruption", ],
		description: `{c_gold}Essence Cost: {/c}{c_green}{Resource Cost}{/c}
Curse the target area. Enemies afflicted by Decrepify are Slowed by {c_yellow}[{SF_3}*100]%{/c} and deal {c_yellow}[{SF_4}*100]%{/c} less damage for {c_yellow}{buffduration:DECREPIFY_CURSE}{/c} seconds.`,
		maxPoints: 5,
		x: 313.52499999999986,
		y: 166.38,
	},
	["Enhanced Decrepify"]: {
		connections: [ "Decrepify", ],
		description: `{c_gold}Lucky Hit:{/c} Enemies hit while afflicted with Decrepify have up to a {c_yellow}[{SF_5}*100]%{/c} chance to be Stunned for {c_yellow}{buffduration:MOD_STUN}{/c} seconds.`,
		maxPoints: 3,
		x: 558.24,
		y: 299.96049999999997,
	},
	["Abhorrent Decrepify"]: {
		connections: [ "Enhanced Decrepify", ],
		description: `{c_gold}Lucky Hit:{/c} Enemies hit while afflicted with Decrepify have up to a {c_yellow}[{SF_7}*100]%{/c} chance to reduce your active cooldowns by {c_yellow}[{SF_8}|1|]{/c} seconds.`,
		maxPoints: 3,
		x: 687.2,
		y: 499.06199999999995,
	},
	["Horrid Decrepify"]: {
		connections: [ "Enhanced Decrepify", ],
		description: `When you or your Minions hit an enemy afflicted with Decrepify below {c_yellow}[{SF_9}*100]%{/c} Life, they are instantly killed. Does not work on Bosses.`,
		maxPoints: 3,
		x: 935.2699999999998,
		y: 363.89799999999997,
	},
	["Death's Embrace"]: {
		connections: [ "Corruption", ],
		description: `Close enemies take {c_yellow}x[{SF_0} * 100]%{/c} more damage from you and deal {c_yellow}[{SF_1} * 100]%{/c} less damage to you.`,
		maxPoints: 3,
		x: -434.44000000000005,
		y: -269.59000000000003,
	},
	["Death's Reach"]: {
		connections: [ "Corruption", ],
		description: `You deal {c_yellow}x[{SF_0} * 100]%{/c} increased damage to Distant enemies.`,
		maxPoints: 3,
		x: 443.845,
		y: -270.025,
	},
};

necromancer["Summoning"] = {
	["Corpse Tendrils"]: {
		connections: [ "Summoning", ],
		description: `{c_gold}Cooldown:{/c} {c_green}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Veins burst out of a Corpse, pulling in enemies, Stunning them for {c_yellow}{buffduration:STUN}{/c} seconds, and dealing {c_yellow}{payload:DAMAGE}{/c} damage to them.`,
		maxPoints: 5,
		x: 303.62,
		y: -136.85000000000002,
	},
	["Enhanced Corpse Tendrils"]: {
		connections: [ "Corpse Tendrils", ],
		description: `Enemies who are in range of Corpse Tendrils are Slowed by {c_yellow}[{SF_10}*100]%{/c} before being pulled.`,
		maxPoints: 3,
		x: 561.44,
		y: -250.57500000000005,
	},
	["Horrid Corpse Tendrils"]: {
		connections: [ "Enhanced Corpse Tendrils", ],
		description: `Enemies Stunned by Corpse Tendrils take {c_yellow}x[{SF_11} * 100]%{/c} more damage from {c_white}Corpse Explosion{/c}.`,
		maxPoints: 3,
		x: 872.8480000000001,
		y: -267.55999999999995,
	},
	["Abhorrent Corpse Tendrils"]: {
		connections: [ "Enhanced Corpse Tendrils", ],
		description: `Enemies slain while Stunned by Corpse Tendrils have a {c_yellow}[{SF_9} * 100]%{/c} chance to drop a {c_white}Blood Orb{/c}.`,
		maxPoints: 3,
		x: 649.1545000000001,
		y: -412.30500000000006,
	},
	["Reaper's Pursuit"]: {
		connections: [ "Summoning", ],
		description: `Damaging enemies with {c_white}Darkness{/c} Skills increases your Movement Speed by {c_yellow}{SF_1}%{/c} for {c_yellow}{buffduration:MOVEMENT_INCREASE}{/c} seconds.`,
		maxPoints: 3,
		x: -547.81,
		y: -169.615,
	},
	["Gloom"]: {
		connections: [ "Reaper's Pursuit", ],
		description: `When you damage enemies with {c_white}Darkness{/c} Skills, they take {c_yellow}x[{SF_0} * 100]%{/c} increased Shadow Damage for {c_yellow}{buffduration:INCOMING_SHADOW_DAMAGE_INCREASE}{/c} seconds, stacking up to {c_yellow}{SF_1}{/c} times.`,
		maxPoints: 3,
		x: -721.6699999999998,
		y: -369.5050000000001,
	},
	["Terror"]: {
		connections: [ "Gloom", ],
		description: `{c_white}Darkness{/c} Skills deal {c_yellow}x[{SF_0} * 100]%{/c} increased damage against Immobilized, Slowed, or Stunned enemies. This also applies to Shadow Damage dealt by your Minions.`,
		maxPoints: 3,
		x: -1150.9850000000001,
		y: -388.355,
	},
	["Crippling Darkness"]: {
		connections: [ "Reaper's Pursuit", "Terror", ],
		description: `{c_gold}Lucky Hit:{/c} {c_white}Darkness{/c} Skills have up to a {c_yellow}{SF_1}%{/c} chance to Stun for {c_yellow}{buffduration:STUN}{/c} seconds.`,
		maxPoints: 3,
		x: -1003.06,
		y: -181.13,
	},
	["Blood Begets Blood"]: {
		connections: [ "Summoning", ],
		description: `While below {c_yellow}50%{/c} Life, you receive {c_yellow}[{SF_0} * 100]%{/c} more healing from all sources.`,
		maxPoints: 3,
		x: 5.820000000000164,
		y: -372.43499999999995,
	},
	["Coalesced Blood"]: {
		connections: [ "Blood Begets Blood", ],
		description: `Blood Orbs heal you for {c_yellow}[{SF_0} * 100]%{/c} more.`,
		maxPoints: 3,
		x: 188.08500000000004,
		y: -545.375,
	},
	["Transfusion"]: {
		connections: [ "Coalesced Blood", ],
		description: `{c_white}Blood Orbs{/c} also heal your Minions for {c_yellow}[{SF_0} * 100]%{/c} of the amount.`,
		maxPoints: 3,
		x: 188.10500000000002,
		y: -740.47,
	},
	["Tides of Blood"]: {
		connections: [ "Transfusion", "Blood Begets Blood", ],
		description: `Your {c_white}Blood{/c} Skills deal {c_yellow}x[{SF_0}*100]%{/c} increased {c_white}Overpower{/c} damage. This bonus is doubled while you are {c_white}Healthy{/c}.`,
		maxPoints: 3,
		x: -186.05499999999984,
		y: -545.1100000000001,
	},
	["Bone Spirit"]: {
		connections: [ "Summoning", ],
		description: `{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c_green} seconds
{c_gold}Essence Cost:{/c} {c_green}All Remaining Essence{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Consume all of your Essence to conjure a spirit of bone that seeks enemies. Upon reaching an enemy, the spirit explodes, dealing {c_yellow}{Payload:DAMAGE}{/c} damage to the target and all nearby enemies. Damage is increased by {c_yellow}[{SF_13} * 100]%{/c} for each point of Essence spent casting Bone Spirit.`,
		maxPoints: 5,
		x: -81.99000000000001,
		y: 195.1049999999999,
	},
	["Enhanced Bone Spirit"]: {
		connections: [ "Bone Spirit", ],
		description: `If Bone Spirit Critically Strikes, its cooldown is reduced by {c_yellow}{SF_15}{/c} seconds.  This effect can only happen once per cast.`,
		maxPoints: 3,
		x: -165.81999999999994,
		y: 378.073,
	},
	["Ghastly Bone Spirit"]: {
		connections: [ "Enhanced Bone Spirit", ],
		description: `Bone Spirit has an additional {c_yellow}[{SF_16} * 100]%{/c} Critical Strike Chance.`,
		maxPoints: 3,
		x: -109.19000000000005,
		y: 542.6199999999999,
	},
	["Dreadful Bone Spirit"]: {
		connections: [ "Enhanced Bone Spirit", ],
		description: `After Bone Spirit hits an enemy, you generate {c_yellow}{SF_17}{/c} Essence over the next {c_yellow}{buffduration:MANA_REGEN}{/c} seconds.`,
		maxPoints: 3,
		x: -417.01,
		y: 502.13949999999994,
	},
	["Serration"]: {
		connections: [ "Summoning", ],
		description: `Your {c_white}Bone{/c} Skills have a {c_yellow}[{SF_0} *100 |1|]%{/c} increased Critical Strike Chance for each {c_yellow}10{/c} Essence you have upon cast.`,
		maxPoints: 3,
		x: -557.22,
		y: 93.02499999999998,
	},
	["Rapid Ossification"]: {
		connections: [ "Serration", ],
		description: `Every {c_yellow}{SF_1}{/c} Essence you spend reduces the cooldowns of your {c_white}Bone{/c} Skills by {c_yellow}[{SF_0}|1|]{/c} seconds.`,
		maxPoints: 3,
		x: -958.7550000000001,
		y: 74.63999999999999,
	},
	["Evulsion"]: {
		connections: [ "Rapid Ossification", ],
		description: `Your {c_white}Bone{/c} Skills deal {c_yellow}x[{SF_0} * 100]%{/c} increased Critical Strike Damage to {c_white}Vulnerable{/c} enemies.`,
		maxPoints: 3,
		x: -1226.0299999999997,
		y: 232.79499999999996,
	},
	["Compound Fracture"]: {
		connections: [ "Serration", "Evulsion", ],
		description: `After Critically Striking {c_yellow}{SF_1}{/c} times with {c_white}Bone{/c} Skills, your {c_white}Bone{/c} Skills deal {c_yellow}x[{SF_0} * 100]%{/c} increased damage for {c_yellow}{buffduration:BUFF_BONUS_DAMAGE}{/c} seconds.`,
		maxPoints: 3,
		x: -809.6299999999999,
		y: 254.365,
	},
	["Bone Spurs"]: {
		connections: [ "Summoning", ],
		description: `Gain {c_yellow}{SF_1}{/c} Thorns.`,
		maxPoints: 3,
		x: 492.57000000000005,
		y: 143.19999999999993,
	},
};

necromancer["Ultimate"] = {
	["Bonded in Essence"]: {
		connections: [ "Ultimate", ],
		description: `Your Minions gain {c_yellow}[{SF_0} * 100]%{/c} of your Resistances.`,
		maxPoints: 3,
		x: -244.0326,
		y: 245.36850000000004,
	},
	["Death's Defense"]: {
		connections: [ "Bonded in Essence", ],
		description: `Your Minions can't lose more than {c_yellow}[{SF_0}*100]%{/c} of their maximum Life from a single damage instance.`,
		maxPoints: 3,
		x: -685.0350999999999,
		y: 319.58349999999996,
	},
	["Hellbent Commander"]: {
		connections: [ "Death's Defense", ],
		description: `Your Minions deal {c_yellow}x[{SF_0} * 100]%{/c} increased damage while you are near them.`,
		maxPoints: 3,
		x: -496.6551,
		y: 100.92099999999999,
	},
	["Inspiring Command"]: {
		connections: [ "Hellbent Commander", ],
		description: `After you have been {c_white}Healthy{/c} for at least {c_yellow}{buffduration:BUFF_HEALTHY_CHECK}{/c} seconds, you and your Minions gain {c_yellow}[{SF_0} * 100]%{/c} Attack Speed.`,
		maxPoints: 3,
		x: -949.1151,
		y: 125.48649999999998,
	},
	["Army of the Dead"]: {
		connections: [ "Ultimate", ],
		description: `{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c_green} seconds
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:22}%{/c}
{/if}Call forth the deep buried dead. Volatile undead emerge over the next {c_yellow}{buffduration:RAISE_ARMY}{/c} seconds that explode near enemies, dealing {c_yellow}{payload:EXPLOSION_DAMAGE}{/c} damage.`,
		maxPoints: 5,
		x: -412.9086,
		y: -101.33449999999999,
	},
	["Prime Army of the Dead"]: {
		connections: [ "Army of the Dead", ],
		description: `When Army of the Dead's Skeletons explode, they have a {c_yellow}[SF_16*100]%{/c} chance to leave behind a Corpse.`,
		maxPoints: 3,
		x: -761.5751,
		y: -190.08100000000002,
	},
	["Supreme Army of the Dead"]: {
		connections: [ "Prime Army of the Dead", ],
		description: `Army of the Dead also raises your Skeletal Warriors and Skeletal Mages.`,
		maxPoints: 3,
		x: -1035.0451,
		y: -69.65449999999998,
	},
	["Blood Wave"]: {
		connections: [ "Ultimate", ],
		description: `{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c_green} seconds
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Conjure a tidal wave of blood that deals {c_yellow}{payload:DAMAGE}{/c} damage and knocks enemies back.`,
		maxPoints: 5,
		x: 308.8909,
		y: -165.59550000000002,
	},
	["Prime Blood Wave"]: {
		connections: [ "Blood Wave", ],
		description: `Blood Wave Slows enemies by {c_yellow}[SF_7*100]%{/c} for {c_yellow}{buffduration:BUFF_SLOW}{/c} seconds.`,
		maxPoints: 3,
		x: 464.8824,
		y: -324.3025,
	},
	["Supreme Blood Wave"]: {
		connections: [ "Prime Blood Wave", ],
		description: `Blood Wave leaves behind {c_yellow}3{/c} {c_white}Blood Orbs{/c} as it travels.`,
		maxPoints: 3,
		x: 817.7349,
		y: -299.367,
	},
	["Stand Alone"]: {
		connections: [ "Ultimate", ],
		description: `Increases Damage Reduction by {c_yellow}[{SF_0} * 100]%{/c}, reduced by {c_yellow}[{SF_1} * 100]%{/c} for each active Minion.`,
		maxPoints: 3,
		x: 686.7299,
		y: -0.375,
	},
	["Memento Mori"]: {
		connections: [ "Stand Alone", ],
		description: `Sacrificing both Skeletal Warriors and Skeletal Mages increases their Sacrifice bonuses by {c_yellow}[{SF_0} * 100]%{/c}.`,
		maxPoints: 3,
		x: 1059.5349,
		y: -0.9549999999999841,
	},
	["Bone Storm"]: {
		connections: [ "Ultimate", ],
		description: `{c_gold}Cooldown:{/c} {c_green}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:18}%{/c}
{/if}A swirling storm of bones surrounds you and your Golem, dealing {c_yellow}{payload:TOOLTIP_DAMAGE}{/c} to nearby enemies over {c_yellow}{buffduration:BONESTORM}{/c} seconds.`,
		maxPoints: 5,
		x: 310.3239,
		y: 168.1635,
	},
	["Prime Bone Storm"]: {
		connections: [ "Bone Storm", ],
		description: `Your Damage Reduction is increased by {c_yellow}[{SF_13}*100]%{/c} while Bone Storm is active.`,
		maxPoints: 3,
		x: 477.6729,
		y: 330.11350000000004,
	},
	["Supreme Bone Storm"]: {
		connections: [ "Prime Bone Storm", ],
		description: `While Bone Storm is active, you consume nearby Corpses. Each Corpse consumed adds {c_yellow}{SF_14}{/c} seconds to Bonestorm's duration, up to {c_yellow}{SF_15}{/c} seconds.`,
		maxPoints: 3,
		x: 815.4799,
		y: 299.4335,
	},
	["Golem Mastery"]: {
		connections: [ "Ultimate", ],
		description: `Increase the damage and Life of your Golem by {c_yellow}[{SF_0} * 100]%{/c} .`,
		maxPoints: 3,
		x: 5.062149499999999,
		y: -324.44505,
	},
};

necromancer["Macabre"] = {
	["Corpse Explosion"]: {
		connections: [ "Macabre", ],
		description: `{if:SF_10}{c_gold}Essence Cost:{/c} {c_green}{Resource Cost}{/c}
{/if}{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:20}%{/c}
{/if}{if:Mod.Miasma}Release a vile miasma from a Corpse, dealing {c_yellow}{dot:MIASMA_DOT_TOOLTIP}{/c} Shadow Damage over {c_yellow}{buffduration:MIASMA_DOT_TOOLTIP}{/c} seconds.{else}Detonate a Corpse, dealing {c_yellow}{payload:DAMAGE}{/c} damage to nearby enemies.{/if}`,
		maxPoints: 5,
		x: -385,
		y: 0.11000000000012733,
	},
	["Enhanced Corpse Explosion"]: {
		connections: [ "Corpse Explosion", ],
		description: `Corpse Explosion's radius is increased by {c_yellow}[{SF_1}*100]%{/c}.`,
		maxPoints: 3,
		x: -756.6925000000001,
		y: -0.9100000000000819,
	},
	["Abhorrent Corpse Explosion"]: {
		connections: [ "Enhanced Corpse Explosion", ],
		description: `Instead of exploding, Corpse Explosion releases a vile miasma dealing {c_yellow}{dot:MIASMA_DOT_TOOLTIP}{/c} Shadow Damage over {c_yellow}{SF_12}{/c} seconds.`,
		maxPoints: 3,
		x: -1048.7350000000001,
		y: -100.36500000000001,
	},
	["Horrid Corpse Explosion"]: {
		connections: [ "Enhanced Corpse Explosion", ],
		description: `Corpse Explosion deals {c_yellow}x[{SF_15}*100]%{/c} increased damage to enemies that are Slowed, Stunned or Vulnerable.`,
		maxPoints: 3,
		x: -1046.3755,
		y: 101.125,
	},
	["Grim Harvest"]: {
		connections: [ "Macabre", ],
		description: `Consuming a Corpse generates {c_yellow}{SF_0}{/c} Essence.`,
		maxPoints: 3,
		x: -370.21500000000003,
		y: 233.46499999999992,
	},
	["Fueled by Death"]: {
		connections: [ "Grim Harvest", ],
		description: `You deal {c_yellow}x[{SF_0} * 100]%{/c} increased damage for {c_yellow}{buffduration:DAMAGE_BONUS}{/c} seconds after consuming a Corpse.`,
		maxPoints: 3,
		x: -632.315,
		y: 401.9950000000001,
	},
	["Necrotic Carapace"]: {
		connections: [ "Macabre", ],
		description: `When a Corpse is formed from your Skills or your Minions, {c_white}Fortify{/c} for {c_yellow}{fortified:PAYLOAD_FORTIFY}{/c}.`,
		maxPoints: 3,
		x: 755.135,
		y: -138.06500000000005,
	},
	["Blood Mist"]: {
		connections: [ "Macabre", ],
		description: `{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c_green} seconds
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:14}%{/c}
{/if}Disperse into a bloody mist, becoming {c_white}Immune{/c} for {c_yellow}{buffduration:MISTFORM}{/c} seconds. Your Movement Speed is reduced by {c_yellow}[{SF_6}*100]%{/c} and you periodically deal {c_yellow}{payload:LEECH_DAMAGE}{/c} damage to enemies, healing for {c_yellow}[{SF_3} * 100]%{/c} of the damage dealt.`,
		maxPoints: 5,
		x: 79.30999999999995,
		y: -196.5999999999999,
	},
	["Enhanced Blood Mist"]: {
		connections: [ "Blood Mist", ],
		description: `Blood Mist's Movement Speed penalty is reduced to {c_yellow}[{SF_13} * 100]%{/c}.`,
		maxPoints: 3,
		x: 141.2449999999999,
		y: -354.2399999999998,
	},
	["Ghastly Blood Mist"]: {
		connections: [ "Enhanced Blood Mist", ],
		description: `Blood Mist leaves behind a Corpse every {c_yellow}{SF_10}{/c} second.`,
		maxPoints: 3,
		x: 118.75999999999999,
		y: -537.4949999999999,
	},
	["Dreadful Blood Mist"]: {
		connections: [ "Enhanced Blood Mist", ],
		description: `Blood Mist {c_white}Fortifies{/c} you for {c_yellow}{Fortified:FORTIFY_HEALTH}{/c} each time it hits an enemy.`,
		maxPoints: 3,
		x: 394.43000000000006,
		y: -496.6700000000001,
	},
	["Bone Prison"]: {
		connections: [ "Macabre", ],
		description: `{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c_green} seconds
Unearth a prison of bone with {c_yellow}{pet_health:BoneWall}{/c} Life that surrounds the target area for {c_yellow}{buffduration:WALL_TRACKER}{/c} seconds.`,
		maxPoints: 5,
		x: 271.9100000000001,
		y: 145.28500000000008,
	},
	["Enhanced Bone Prison"]: {
		connections: [ "Bone Prison", ],
		description: `Gain {c_yellow}{SF_3}{/c} Essence each time an enemy hits your Bone Prison.`,
		maxPoints: 3,
		x: 497.52499999999986,
		y: 268.625,
	},
	["Ghastly Bone Prison"]: {
		connections: [ "Enhanced Bone Prison", ],
		description: `Enemies inside of Bone Prison are {c_white}Vulnerable{/c}.`,
		maxPoints: 3,
		x: 605.5049999999999,
		y: 435.6100000000001,
	},
	["Dreadful Bone Prison"]: {
		connections: [ "Enhanced Bone Prison", ],
		description: `Fortify for {c_yellow}{fortified:MODB_FORTIFY}{/c} for each enemy trapped by Bone Prison.`,
		maxPoints: 3,
		x: 834.0449999999998,
		y: 309.03,
	},
	["Skeletal Warrior Mastery"]: {
		connections: [ "Macabre", ],
		description: `Increase the damage and Life of your Skeletal Warriors by {c_yellow}[{SF_0} * 100]%{/c} .`,
		maxPoints: 3,
		x: 755.3399999999999,
		y: 67.23500000000013,
	},
};

export { necromancer };