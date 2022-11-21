let rogue = {};

rogue["Trunk Data"] = {
	["Basic"]: {
		connections: [ "Core" ],
		x: 0,
		y: 0,
	},
	["Core"]: {
		connections: [ "Agility" ],
		requiredPoints: 2,
		x: -3.915915,
		y: 1197.495,
	},
	["Agility"]: {
		connections: [ "Subterfuge" ],
		requiredPoints: 6,
		x: -1376.250725,
		y: 2265.4799999999996,
	},
	["Subterfuge"]: {
		connections: [ "Imbuements" ],
		requiredPoints: 11,
		x: 1378.264275,
		y: 2263.7349999999997,
	},
	["Imbuements"]: {
		connections: [ "Ultimate" ],
		requiredPoints: 16,
		x: 1377.314275,
		y: 3466.9655,
	},
	["Ultimate"]: {
		connections: [ "Capstone" ],
		requiredPoints: 23,
		x: 4.6774249999999995,
		y: 4334.23,
	},
	["Capstone"]: {
		requiredPoints: 33,
		x: -2.042555,
		y: 5268.3949999999995,
	},
};

rogue["Basic"] = {
	["Blade Shift"]: {
		connections: [ "Basic", "Enhanced Blade Shift", ],
		description: `{if:SF_11}{c_gold}Generate Combo Point:{/c} {c_green}{SF_10}{/c}
{/if}{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Stab your victim for {c_yellow}{payload:IMPACT}{/c} damage and use their vitality to shift, allowing you to move freely through enemies for {c_yellow}{buffduration:MOVE_FREELY}{/c} seconds.`,
		id: 0,
		maxPoints: 5,
		x: -366.016725,
		y: -99.39000000000033,
	},
	["Enhanced Blade Shift"]: {
		connections: [ "Fundamental Blade Shift", "Blade Shift", "Primary Blade Shift", ],
		description: `Gain {c_yellow}+[{SF_8}*100]%{/c} Movement Speed while {c_white}Blade Shift{/c} is active.`,
		id: 1,
		maxPoints: 1,
		x: -689.420725,
		y: -194.4000000000001,
	},
	["Fundamental Blade Shift"]: {
		connections: [ "Enhanced Blade Shift", ],
		description: `Moving through an enemy while {c_white}Blade Shift{/c} is active has a {c_yellow}[{SF_4}*100]%{/c} chance to Immobilize the enemy for {c_yellow}{buffduration:MOD_IMMOBILIZE}{/c} seconds.`,
		id: 2,
		maxPoints: 1,
		x: -888.150725,
		y: -351.97500000000036,
	},
	["Primary Blade Shift"]: {
		connections: [ "Enhanced Blade Shift", ],
		description: `Gain {c_yellow}x[{SF_1}*100]%{/c} Damage Reduction while {c_white}Blade Shift{/c} is active.`,
		id: 3,
		maxPoints: 1,
		x: -1080.740725,
		y: -206.2800000000002,
	},
	["Invigorating Strike"]: {
		connections: [ "Basic", "Enhanced Invigorating Strike", ],
		description: `{if:SF_11}{c_gold}Generate Combo Point:{/c} {c_green}{SF_10}{/c}
{/if}{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Melee attack an enemy, dealing {c_yellow}{payload:IMPACT}{/c} damage and increasing Energy Regeneration by {c_yellow}x[{SF_4}*100]%{/c} for {c_yellow}{buffduration:ENERGY_REGEN}{/c} seconds.`,
		id: 4,
		maxPoints: 5,
		x: -316.360225,
		y: 145.91999999999962,
	},
	["Enhanced Invigorating Strike"]: {
		connections: [ "Invigorating Strike", "Fundamental Invigorating Strike", "Primary Invigorating Strike", ],
		description: `Damaging a Crowd Controlled enemy with {c_white}Invigorating Strike's{/c} increases its Energy Regeneration bonus by {c_yellow}+[{SF_6}*100]%{/c}.`,
		id: 5,
		maxPoints: 1,
		x: -600.260725,
		y: 266.5749999999998,
	},
	["Fundamental Invigorating Strike"]: {
		connections: [ "Enhanced Invigorating Strike", ],
		description: `{c_white}Invigorating Strike{/c} grants a Movement Speed bonus equivalent to {c_yellow}+[{SF_13}*100]%{/c} of its Energy Regeneration bonus.`,
		id: 6,
		maxPoints: 1,
		x: -968.640725,
		y: 324.8899999999999,
	},
	["Primary Invigorating Strike"]: {
		connections: [ "Enhanced Invigorating Strike", ],
		description: `{c_white}Invigorating Strike{/c} now grants {c_yellow}[{SF_14} * 100]%{/c} of its Energy Regeneration bonus as Cooldown Reduction to your {c_white}non-Ultimate{/c} Skills but no longer grants an Energy Regeneration bonus.`,
		id: 7,
		maxPoints: 1,
		x: -720.380725,
		y: 461.2449999999999,
	},
	["Puncture"]: {
		connections: [ "Basic", "Enhanced Puncture", ],
		description: `{if:SF_13}{c_gold}Generate Combo Point:{/c} {c_green}1{/c}
{/if}{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Throw your blades, dealing {c_yellow}{payload:IMPACT}{/c} damage and Slowing enemies by {c_yellow}[{SF_15}*100]%{/c} for {c_yellow}{buffduration:SLOW}{/c} seconds.`,
		id: 8,
		maxPoints: 5,
		x: -0.18149499999999996,
		y: -213.01500000000033,
	},
	["Enhanced Puncture"]: {
		connections: [ "Puncture", "Fundamental Puncture", "Primary Puncture", ],
		description: `Gain {c_yellow}{SF_9}{/c} Energy when {c_white}Puncture{/c} damages a Crowd Controlled enemy.`,
		id: 9,
		maxPoints: 1,
		x: -1.778135,
		y: -381.34000000000015,
	},
	["Fundamental Puncture"]: {
		connections: [ "Enhanced Puncture", ],
		description: `Close enemies damaged by {c_white}Puncture{/c} are Slowed by {c_yellow}[{SF_16}*100]%{/c} for {c_yellow}{buffduration:SLOW_MELEE_TOOLTIP}{/c} seconds instead.`,
		id: 10,
		maxPoints: 1,
		x: 138.174275,
		y: -551.0800000000004,
	},
	["Primary Puncture"]: {
		connections: [ "Enhanced Puncture", ],
		description: `{c_white}Puncture{/c} has a {c_yellow}{SF_10}%{/c} chance to make Crowd Controlled enemies {c_white}Vulnerable{/c} for {c_yellow}{SF_18}{/c} seconds.`,
		id: 11,
		maxPoints: 1,
		x: -152.236725,
		y: -552.125,
	},
	["Heartseeker"]: {
		connections: [ "Basic", "Enhanced Heartseeker", ],
		description: `{if:SF_16}{c_gold}Generate Combo Point:{/c} {c_green}{SF_15}{/c}
{/if}{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Fire an arrow that seeks an enemy, dealing {c_yellow}{payload:IMPACT}{/c} damage and increasing your Critical Strike Chance against them by {c_yellow}+[{SF_9}*100]%{/c} for {c_yellow}{buffduration:AMPLIFY_CRIT_CHANCE}{/c} seconds, up to {c_yellow}+[{SF_9}*{SF_10}*100]%{/c}.`,
		id: 12,
		maxPoints: 5,
		x: 373.737775,
		y: -97.05999999999995,
	},
	["Enhanced Heartseeker"]: {
		connections: [ "Heartseeker", "Fundamental Heartseeker", "Primary Heartseeker", ],
		description: `When {c_white}Heartseeker{/c} Critically Strikes, gain {c_yellow}+[{SF_22}*100]%{/c} Attack Speed for {c_yellow}{SF_23}{/c} seconds. Double this amount if the enemy is {c_white}Vulnerable{/c}.`,
		id: 13,
		maxPoints: 1,
		x: 681.9392750000001,
		y: -189.45000000000027,
	},
	["Fundamental Heartseeker"]: {
		connections: [ "Enhanced Heartseeker", ],
		description: `{c_white}Heartseeker{/c} also increases the Critical Strike Damage the enemy takes by {c_yellow}+[{SF_12}*100]%{/c} for {c_yellow}{SF_11}{/c} seconds, up to {c_yellow}+[{SF_12}*{SF_10}*100]%{/c}.`,
		id: 14,
		maxPoints: 1,
		x: 845.5442750000001,
		y: -356.895,
	},
	["Primary Heartseeker"]: {
		connections: [ "Enhanced Heartseeker", ],
		description: `{c_white}Heartseeker{/c} ricochets to an additional enemy, dealing {c_yellow}[{SF_13}*100]%{/c} of the original damage.`,
		id: 15,
		maxPoints: 1,
		x: 1040.879275,
		y: -207.1550000000002,
	},
	["Forceful Arrow"]: {
		connections: [ "Basic", "Enhanced Forceful Arrow", ],
		description: `{if:SF_12}{c_gold}Generate Combo Point:{/c} {c_green}{SF_10}{/c}
{/if}{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Fire a powerful arrow at an enemy, dealing {c_yellow}{payload:IMPACT}{/c} damage and making them {c_white}Vulnerable{/c} for {c_yellow}{SF_15}{/c} seconds.`,
		id: 16,
		maxPoints: 5,
		x: 315.612775,
		y: 143.40999999999985,
	},
	["Enhanced Forceful Arrow"]: {
		connections: [ "Forceful Arrow", "Fundamental Forceful Arrow", "Primary Forceful Arrow", ],
		description: `{c_white}Forceful Arrow{/c} makes the enemy {c_white}Vulnerable{/c} for {c_yellow}{SF_17}{/c} seconds instead if they are nearby.`,
		id: 17,
		maxPoints: 1,
		x: 590.964275,
		y: 263.78999999999996,
	},
	["Fundamental Forceful Arrow"]: {
		connections: [ "Enhanced Forceful Arrow", ],
		description: `{c_white}Forceful Arrow{/c} Knocks Back the enemy if they are nearby. If they collide with an enemy, both are Knocked Down for {c_yellow}{buffduration:KNOCKDOWN}{/c} seconds.`,
		id: 18,
		maxPoints: 1,
		x: 718.164275,
		y: 462.0149999999999,
	},
	["Primary Forceful Arrow"]: {
		connections: [ "Enhanced Forceful Arrow", ],
		description: `{c_white}Forceful Arrow{/c} pierces through the first enemy it damages if they are nearby.`,
		id: 19,
		maxPoints: 1,
		x: 951.604275,
		y: 324.5799999999999,
	},
};

rogue["Core"] = {
	["Twisting Blades"]: {
		connections: [ "Core", "Enhanced Twisting Blades", ],
		description: `{c_gold}Energy Cost:{/c_gold} {c_green}{Resource Cost}{/c_green}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Impale an enemy on your blades, dealing {c_yellow}{payload:IMPACT}{/c} damage and making them take {c_yellow}x[{SF_18}*100]%{/c} increased damage while impaled. After {c_yellow}{buffduration:RETURN_TIMER}{/c} seconds the blades return to you, piercing enemies for {c_yellow}{payload:RETURN_HIT}{/c} damage.{if:SF_13}

Combo Points increase damage and grant a movement speed bonus:
 {c_gold}1:{/c} {c_yellow}{payload:DAMAGE_TOOLTIP_1CP}{/c} damage, {c_yellow}[{SF_11}*100]%{/c} bonus
 {c_gold}2:{/c} {c_yellow}{payload:DAMAGE_TOOLTIP_2CP}{/c} damage, {c_yellow}[{SF_11}*100*2]%{/c} bonus
 {c_gold}3:{/c} {c_yellow}{payload:DAMAGE_TOOLTIP_3CP}{/c} damage, {c_yellow}[{SF_11}*100*3]%{/c} bonus{/if}`,
		id: 20,
		maxPoints: 5,
		x: -249.90680999999998,
		y: -196.26999999999998,
	},
	["Enhanced Twisting Blades"]: {
		connections: [ "Twisting Blades", "Advanced Twisting Blades", "Improved Twisting Blades", ],
		description: `{c_white}Twisting Blades{/c} deals {c_yellow}x[{SF_14}*100]%{/c} increased damage per enemy it passes through when returning, up to {c_yellow}x[{SF_14}*{SF_15}*100]%{/c}.`,
		id: 21,
		maxPoints: 1,
		x: -404.24431,
		y: -347.92999999999984,
	},
	["Advanced Twisting Blades"]: {
		connections: [ "Enhanced Twisting Blades", ],
		description: `When your {c_white}Twisting Blades{/c} return, you gain {c_yellow}+[{SF_4}*100]%{/c} Movement Speed per enemy it passed through for {c_yellow}{SF_6}{/c} seconds, up to {c_yellow}+[{SF_4}*{SF_5}*100]%{/c}.`,
		id: 22,
		maxPoints: 1,
		x: -728.36481,
		y: -416.2449999999999,
	},
	["Improved Twisting Blades"]: {
		connections: [ "Enhanced Twisting Blades", ],
		description: `Enemies are Immobilized while impaled with {c_white}Twisting Blades{/c}.`,
		id: 23,
		maxPoints: 1,
		x: -439.55431,
		y: -510.9200000000001,
	},
	["Flurry"]: {
		connections: [ "Core", "Enhanced Flurry", ],
		description: `{c_gold}Energy Cost:{/c_gold} {c_green}{Resource Cost}{/c_green}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Unleash a flurry of stabs and slashes, dealing {c_yellow}{payload:DAMAGE_TOOLTIP}{/c} damage to enemies in front of you.{if:SF_12}

Combo Points increase damage and grant a {c_yellow}+[{SF_10}*100]%{/c} Attack Speed bonus:
 {c_gold}1:{/c} {c_yellow}{payload:DAMAGE_TOOLTIP_1CP}{/c} damage, {c_yellow}[{buffduration:ATTACK_SPEED}|1|]{/c} second bonus
 {c_gold}2:{/c} {c_yellow}{payload:DAMAGE_TOOLTIP_2CP}{/c} damage, {c_yellow}[{buffduration:ATTACK_SPEED}*2|1|]{/c} second bonus
 {c_gold}3:{/c} {c_yellow}{payload:DAMAGE_TOOLTIP_3CP}{/c} damage, {c_yellow}[{buffduration:ATTACK_SPEED}*3|1|]{/c} second bonus{/if}`,
		id: 24,
		maxPoints: 5,
		x: -383.59830999999997,
		y: 48,
	},
	["Enhanced Flurry"]: {
		connections: [ "Flurry", "Improved Flurry", "Advanced Flurry", ],
		description: `Increase {c_white}Flurry's{/c} radius by {c_yellow}x[{SF_7}*100]%{/c}.`,
		id: 25,
		maxPoints: 1,
		x: -715.51981,
		y: 91.45000000000005,
	},
	["Improved Flurry"]: {
		connections: [ "Enhanced Flurry", ],
		description: `Each time {c_white}Flurry{/c} damages a Crowd Controlled or {c_white}Vulnerable{/c} enemy, you are Healed for {c_yellow}{heal:MOD_HEAL}{/c} Life.`,
		id: 26,
		maxPoints: 1,
		x: -1062.7748100000001,
		y: 63.965000000000146,
	},
	["Advanced Flurry"]: {
		connections: [ "Enhanced Flurry", ],
		description: `{c_white}Flurry{/c} has a {c_yellow}{SF_19}%{/c} chance to Slow enemies by {c_yellow}[{SF_20}*100]%{/c} for {c_yellow}{buffduration:SLOW}{/c} seconds. Immobilize the enemy for {c_yellow}{buffduration:IMMOBILIZE}{/c} seconds instead if it was a Critical Strike.`,
		id: 27,
		maxPoints: 1,
		x: -963.40481,
		y: 227.51,
	},
	["Penetrating Shot"]: {
		connections: [ "Core", "Enhanced Penetrating Shot", ],
		description: `{c_gold}Energy Cost:{/c} {c_green}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Fire an arrow that pierces through all enemies in a line, dealing {c_yellow}{payload:IMPACT}{/c} damage.{if:SF_12}

Combo Points increase damage and grant a chance to knock down:
 {c_gold}1:{/c} {c_yellow}{payload:DAMAGE_TOOLTIP_1CP}{/c} damage, {c_yellow}[{SF_10}*100]%{/c} chance
 {c_gold}2:{/c} {c_yellow}{payload:DAMAGE_TOOLTIP_2CP}{/c} damage, {c_yellow}[{SF_10}*100*2]%{/c} chance
 {c_gold}3:{/c} {c_yellow}{payload:DAMAGE_TOOLTIP_3CP}{/c} damage, {c_yellow}[{SF_10}*100*3]%{/c} chance{/if}`,
		id: 28,
		maxPoints: 5,
		x: 2.44058,
		y: 228,
	},
	["Enhanced Penetrating Shot"]: {
		connections: [ "Penetrating Shot", "Advanced Penetrating Shot", "Improved Penetrating Shot", ],
		description: `{c_white}Penetrating Shot{/c} deals {c_yellow}x[{SF_6}*100]%{/c} increased damage per enemy it pierces.`,
		id: 29,
		maxPoints: 1,
		x: 3.778555,
		y: 395.8899999999999,
	},
	["Advanced Penetrating Shot"]: {
		connections: [ "Enhanced Penetrating Shot", ],
		description: `{c_white}Penetrating Shot{/c} has a {c_yellow}[{SF_22}*100]%{/c} chance to Knock Down each enemy it damages for {c_yellow}{buffduration:KNOCKDOWN}{/c} seconds.`,
		id: 30,
		maxPoints: 1,
		x: -148.24981,
		y: 548.0249999999999,
	},
	["Improved Penetrating Shot"]: {
		connections: [ "Enhanced Penetrating Shot", ],
		description: `If {c_white}Penetrating Shot{/c} damages at least {c_yellow}{SF_20}{/c} enemies, your next {c_white}Penetrating Shot{/c} has a {c_yellow}+[{SF_21}*100]%{/c} increased Critical Strike Chance.`,
		id: 31,
		maxPoints: 1,
		x: 170.70219,
		y: 550.185,
	},
	["Rapid Fire"]: {
		connections: [ "Core", "Enhanced Rapid Fire", ],
		description: `{c_gold}Energy Cost:{/c_gold} {c_green}{Resource Cost}{/c_green}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Rapidly fire {c_yellow}{SF_5}{/c} arrows, each dealing {c_yellow}{payload:IMPACT}{/c} damage.{if:SF_14}

Combo Points increase damage and arrows fired:
 {c_gold}1:{/c} {c_yellow}{payload:DAMAGE_TOOLTIP_1CP}{/c} damage, {c_yellow}[{SF_5}+{SF_12}]{/c} arrows
 {c_gold}2:{/c} {c_yellow}{payload:DAMAGE_TOOLTIP_2CP}{/c} damage, {c_yellow}[{SF_5}+{SF_12}*2]{/c} arrows
 {c_gold}3:{/c} {c_yellow}{payload:DAMAGE_TOOLTIP_3CP}{/c} damage, {c_yellow}[{SF_5}+{SF_12}*3]{/c} arrows{/if}`,
		id: 32,
		maxPoints: 5,
		x: 435.38019,
		y: -0.03999999999996362,
	},
	["Enhanced Rapid Fire"]: {
		connections: [ "Rapid Fire", "Advanced Rapid Fire", "Improved Rapid Fire", ],
		description: `Each subsequent arrow from {c_white}Rapid Fire{/c} has {c_yellow}+[{SF_19}*100]%{/c} increased Critical Strike Chance.`,
		id: 33,
		maxPoints: 1,
		x: 783.72019,
		y: -0.20000000000027285,
	},
	["Advanced Rapid Fire"]: {
		connections: [ "Enhanced Rapid Fire", ],
		description: `{c_white}Rapid Fire{/c} deals {c_yellow}x[{SF_16}*100]%{/c} increased Critical Strike Damage to {c_white}Vulnerable{/c} enemies.`,
		id: 34,
		maxPoints: 1,
		x: 1135.51019,
		y: 81.73999999999978,
	},
	["Improved Rapid Fire"]: {
		connections: [ "Enhanced Rapid Fire", ],
		description: `{c_yellow}{SF_20}%{/c} chance to gain {c_yellow}{SF_21}{/c} Energy when {c_white}Rapid Fire{/c} damages a {c_white}Vulnerable{/c} enemy.`,
		id: 35,
		maxPoints: 1,
		x: 1129.82519,
		y: -80.86000000000013,
	},
	["Barrage"]: {
		connections: [ "Core", "Enhanced Barrage", ],
		description: `{c_gold}Energy Cost:{/c_gold} {c_green}{Resource Cost}{/c_green}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Unleash a barrage of {c_yellow}{SF_5}{/c} arrows that expands outwards, each dealing {c_yellow}{payload:IMPACT}{/c} damage. Each arrow has a {c_yellow}[{SF_33}*100]%{/c} chance to ricochet off an enemy up to {c_yellow}{SF_30}{/c} time. Ricochets deal {c_yellow}[{SF_31}*100 ]%{/c} of the arrow's base damage.{if:SF_14}

Combo Points increase damage and arrows fired:
 {c_gold}1:{/c} {c_yellow}{payload:DAMAGE_TOOLTIP_1CP}{/c} damage, {c_yellow}[{SF_5}]{/c} arrows
 {c_gold}2:{/c} {c_yellow}{payload:DAMAGE_TOOLTIP_2CP}{/c} damage, {c_yellow}[{SF_5}]{/c} arrows
 {c_gold}3:{/c} {c_yellow}{payload:DAMAGE_TOOLTIP_3CP}{/c} damage, {c_yellow}[{SF_5}+{SF_12}]{/c} arrows{/if}`,
		id: 36,
		maxPoints: 5,
		x: 233.86619000000002,
		y: -190.5050000000001,
	},
	["Enhanced Barrage"]: {
		connections: [ "Barrage", "Advanced Barrage", "Improved Barrage", ],
		description: `{c_white}Barrage's{/c} ricochet chance is increased to {c_yellow}100%{/c} for arrows that damage a {c_white}Vulnerable{/c} enemy or Critically Strike any enemy.`,
		id: 37,
		maxPoints: 1,
		x: 415.26419000000004,
		y: -343.3850000000002,
	},
	["Advanced Barrage"]: {
		connections: [ "Enhanced Barrage", ],
		description: `{c_white}Barrage{/c} gains {c_yellow}[{SF_34}*100]%{/c} increase Critical Strike Chance against Crowd Controlled enemies.`,
		id: 38,
		maxPoints: 1,
		x: 733.88519,
		y: -425.08500000000004,
	},
	["Improved Barrage"]: {
		connections: [ "Enhanced Barrage", ],
		description: `Every {c_yellow}3rd{/c} cast of {c_white}Barrage{/c} makes enemies {c_white}Vulnerable{/c} for {c_yellow}{SF_8}{/c} seconds.`,
		id: 39,
		maxPoints: 1,
		x: 436.45319,
		y: -512.5349999999999,
	},
	["Sturdy"]: {
		connections: [ "Core", "Siphoning Strikes", ],
		description: `You gain {c_yellow}x[{SF_0}*100]%{/c} Close Damage Reduction.`,
		id: 40,
		maxPoints: 3,
		x: -629.02481,
		y: -114.85500000000002,
	},
	["Siphoning Strikes"]: {
		connections: [ "Sturdy", ],
		description: `Heal for {c_yellow}[{SF_0}*100]%{/c} of your Maximum Life when you Critically Strike nearby enemies.`,
		id: 41,
		maxPoints: 3,
		x: -1016.40981,
		y: -186.07500000000027,
	},
	["Stutter Step"]: {
		connections: [ "Core", ],
		description: `Critically Striking an enemy grants {c_yellow}+[{SF_0}*100]%{/c} Movement Speed for {c_yellow}{buffduration:BUFF_SPEEDBOOST}{/c} seconds.`,
		id: 42,
		maxPoints: 3,
		x: 429.87919,
		y: 223.89499999999998,
	},
};

rogue["Agility"] = {
	["Shadow Step"]: {
		connections: [ "Agility", "Enhanced Shadow Step", ],
		description: `{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c_green} seconds
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Become {c_white}Unstoppable{/c} and quickly move through the shadows to stab your victim from behind for {c_yellow}{payload:MELEE_PAYLOAD}{/c} damage. Gain {c_yellow}[{SF_5}*100]%{/c} increased Movement Speed for {c_yellow}{SF_6}{/c} seconds afterwards.`,
		id: 43,
		maxPoints: 5,
		x: 4.214999999999918,
		y: -250.75,
	},
	["Enhanced Shadow Step"]: {
		connections: [ "Shadow Step", "Methodical Shadow Step", "Disciplined Shadow Step", ],
		description: `Damaging an enemy with {c_white}Shadow Step{/c} increases your Critical Strike Chance against them by {c_yellow}+[{SF_14}*100]%{/c} for {c_yellow}{buffduration:AMPLIFY_CRIT_CHANCE}{/c} seconds.`,
		id: 44,
		maxPoints: 1,
		x: 3.4149999999999636,
		y: -425.2649999999999,
	},
	["Methodical Shadow Step"]: {
		connections: [ "Enhanced Shadow Step", ],
		description: `Enemies damaged by {c_white}Shadow Step{/c} are Immobilized for {c_yellow}{buffduration:IMMOBILIZE}{/c} seconds.`,
		id: 45,
		maxPoints: 1,
		x: -151.635,
		y: -562.315,
	},
	["Disciplined Shadow Step"]: {
		connections: [ "Enhanced Shadow Step", ],
		description: `{c_white}Shadow Step's{/c} Cooldown is reduced by {c_yellow}{SF_13}{/c} seconds when it damages an enemy you haven't dealt direct damage to in the last {c_yellow}{SF_18}{/c} seconds.`,
		id: 46,
		maxPoints: 1,
		x: 156.44499999999994,
		y: -567.315,
	},
	["Dash"]: {
		connections: [ "Agility", "Enhanced Dash", ],
		description: `{c_gold}Charges:{/c} {c_green}{SF_22}{/c}
{c_gold}Charge Cooldown:{/c} {c_green}[{Recharge Time}|1|]{/c_green} seconds 
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Dash forward and slash enemies for {c_yellow}{payload:IMPACT}{/c} damage.`,
		id: 47,
		maxPoints: 5,
		x: -440.1700000000001,
		y: 1.75,
	},
	["Enhanced Dash"]: {
		connections: [ "Dash", "Methodical Dash", "Disciplined Dash", ],
		description: `Enemies damaged by {c_white}Dash{/c} take {c_yellow}x[{SF_20}*100]%{/c} increased Critical Strike Damage for {c_yellow}{buffduration:BONUS_CRIT_DAMAGE}{/c} seconds.`,
		id: 48,
		maxPoints: 1,
		x: -785.1149999999998,
		y: 1.5,
	},
	["Methodical Dash"]: {
		connections: [ "Enhanced Dash", ],
		description: `Dealing damage to Crowd Controlled enemies with {c_white}Dash{/c} reduces its Charge Cooldown by {c_yellow}[{SF_16}|1|]{/c} seconds, up to {c_yellow}{SF_17}{/c} seconds per cast.`,
		id: 49,
		maxPoints: 1,
		x: -1124.9699999999998,
		y: 75.74000000000001,
	},
	["Disciplined Dash"]: {
		connections: [ "Enhanced Dash", ],
		description: `{c_white}Dash{/c} Slows enemies by {c_yellow}[{SF_19}* 100]%{/c} for {c_yellow}{buffduration:SLOW}{/c} seconds.`,
		id: 50,
		maxPoints: 1,
		x: -1127.27,
		y: -88.19499999999994,
	},
	["Weapon Mastery"]: {
		connections: [ "Agility", ],
		description: `Gain a bonus when attacking based on weapon type:
{c_gold}Daggers:{/c} {c_yellow}x[{SF_1}*100|1|]%{/c} increased damage to {c_white}Healthy{/c} enemies.
{c_gold}Swords:{/c} {c_yellow}x[{SF_3}*100]%{/c} increased damage.
{c_gold}Bows:{/c} {c_yellow}x[{SF_5}*100]%{/c} increased damage to {c_white}Vulnerable{/c} enemies.
{c_gold}Crossbows:{/c} {c_yellow}x[{SF_7}*100]%{/c} increased Critical Strike Damage.`,
		id: 51,
		maxPoints: 3,
		x: -564.855,
		y: -257.69499999999994,
	},
	["Concussive"]: {
		connections: [ "Agility", ],
		description: `After Knocking Back or Knocking Down an enemy, you gain {c_yellow}+[{SF_0}*100]%{/c} increased Critical Strike Chance against them for {c_yellow}{buffduration:AMPLIFY_CRIT_CHANCE}{/c} seconds.`,
		id: 52,
		maxPoints: 3,
		x: -567.73,
		y: 255.70500000000004,
	},
	["Caltrops"]: {
		connections: [ "Agility", "Enhanced Caltrops", ],
		description: `{c_gold}Energy Cost:{/c_gold} {c_green}{Resource Cost}{/c_green}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Leap backwards and throw caltrops on the ground, dealing {c_yellow}{payload:IMPACT}{/c} damage and slowing enemies by {c_yellow}[{SF_1}*100]%{/c}.  Lasts {c_yellow}{SF_0}{/c} seconds.`,
		id: 53,
		maxPoints: 5,
		x: -0.9300000000000637,
		y: 235.5200000000001,
	},
	["Enhanced Caltrops"]: {
		connections: [ "Caltrops", "Methodical Caltrops", "Disciplined Caltrops", ],
		description: `Enemies take {c_yellow}x[{SF_14} * 100]%{/c} increased damage from all sources each second they're in {c_white}Caltrops{/c}.`,
		id: 54,
		maxPoints: 1,
		x: 3.375,
		y: 412.2950000000001,
	},
	["Methodical Caltrops"]: {
		connections: [ "Enhanced Caltrops", ],
		description: `{c_white}Caltrops{/c} now deals Cold damage and {c_white}Chills{/c} enemies for {c_yellow}{SF_16}%{/c} per second.`,
		id: 55,
		maxPoints: 1,
		x: -148.98000000000002,
		y: 587.8315,
	},
	["Disciplined Caltrops"]: {
		connections: [ "Enhanced Caltrops", ],
		description: `You have {c_yellow}+[{SF_18} * 100]%{/c} Critical Strike Chance against enemies inside your {c_white}Caltrops{/c}. Double this amount against {c_white}Vulnerable{/c} enemies.`,
		id: 56,
		maxPoints: 1,
		x: 175.27999999999997,
		y: 588.8835,
	},
	["Rugged"]: {
		connections: [ "Agility", "Reactive Defense", ],
		description: `Gain {c_yellow}x[{SF_0}*100]%{/c} Damage Reduction against Damage Over Time effects.`,
		id: 57,
		maxPoints: 3,
		x: 572.705,
		y: 256.37,
	},
	["Reactive Defense"]: {
		connections: [ "Rugged", ],
		description: `Gain {c_yellow}x[{SF_0}*100|1|]%{/c} Damage Reduction while inflicted with Control Impairing Effects.`,
		id: 58,
		maxPoints: 3,
		x: 851.645,
		y: 376.865,
	},
};

rogue["Subterfuge"] = {
	["Dark Shroud"]: {
		connections: [ "Subterfuge", "Enhanced Dark Shroud", ],
		description: `{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c_green} seconds
Surround yourself with up to {c_yellow}{SF_0}{/c} protective shadows. Gain {c_yellow}+[{SF_1} * 100|1|]%{/c} Damage Reduction per active shadow. Each time you take direct damage, that damage is reduced and a shadow is consumed.`,
		id: 59,
		maxPoints: 5,
		x: -370.82500000000005,
		y: -129.2750000000001,
	},
	["Enhanced Dark Shroud"]: {
		connections: [ "Dark Shroud", "Subverting Dark Shroud", "Countering Dark Shroud", ],
		description: `{c_white}Dark Shroud's{/c} shadows have a {c_yellow}[{SF_3} * 100]%{/c} chance to not be consumed.`,
		id: 60,
		maxPoints: 1,
		x: -656.6600000000001,
		y: -232.23000000000002,
	},
	["Subverting Dark Shroud"]: {
		connections: [ "Enhanced Dark Shroud", ],
		description: `Each active shadow from {c_white}Dark Shroud{/c} grants you {c_yellow}+[{SF_5} * 100]%{/c} increased Movement Speed.`,
		id: 61,
		maxPoints: 1,
		x: -809.69,
		y: -406.16499999999996,
	},
	["Countering Dark Shroud"]: {
		connections: [ "Enhanced Dark Shroud", ],
		description: `While you have at least {c_yellow}[{SF_6}]{/c} active shadow from {c_white}Dark Shroud{/c}, gain {c_yellow}+[{SF_4} * 100]%{/c} Critical Strike Chance.`,
		id: 62,
		maxPoints: 1,
		x: -1027.384,
		y: -253.80500000000006,
	},
	["Blinding Smoke"]: {
		connections: [ "Subterfuge", "Enhanced Blinding Smoke", ],
		description: `{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c_green} seconds
Throw a smoky concoction at enemies that {c_white}Dazes{/c} them for {c_yellow}{buffduration:SMOKE_BLINDNESS}{/c} seconds.`,
		id: 63,
		maxPoints: 5,
		x: -4.755000000000109,
		y: -197.59500000000003,
	},
	["Enhanced Blinding Smoke"]: {
		connections: [ "Blinding Smoke", "Subverting Blinding Smoke", "Countering Blinding Smoke", ],
		description: `Enemies affected by {c_white}Blinding Smoke{/c} take {c_yellow}x[{SF_6}*100]%{/c} increased damage.`,
		id: 64,
		maxPoints: 1,
		x: -7.545000000000073,
		y: -376.0350000000001,
	},
	["Subverting Blinding Smoke"]: {
		connections: [ "Enhanced Blinding Smoke", ],
		description: `If an enemy is {c_white}Vulnerable{/c}, Slowed, or Immobilized {c_white}Blinding Smoke{/c} {c_white}Dazes{/c} them for {c_yellow}x[{SF_8}*100]%{/c} longer.`,
		id: 65,
		maxPoints: 1,
		x: -186.28500000000008,
		y: -564.4350000000002,
	},
	["Countering Blinding Smoke"]: {
		connections: [ "Enhanced Blinding Smoke", ],
		description: `{c_gold}Lucky Hit:{/c} Dealing direct damage to enemies affected by {c_white}Blinding Smoke{/c} has up to a {c_yellow}{SF_7}%{/c} chance to reduce its Cooldown by {c_yellow}{SF_11}{/c} second, or by {c_yellow}{SF_12}{/c} seconds instead if the enemy is {c_white}Vulnerable{/c}.`,
		id: 66,
		maxPoints: 1,
		x: 187.07999999999993,
		y: -565.1000000000001,
	},
	["Agile"]: {
		connections: [ "Subterfuge", ],
		description: `Using a Cooldown increases your Dodge Chance by {c_yellow}x[{SF_0}*100]%{/c} for {c_yellow}{buffduration:DODGE_BONUS}{/c} seconds. `,
		id: 67,
		maxPoints: 3,
		x: 480.2149999999999,
		y: -242.9000000000001,
	},
	["Exploit"]: {
		connections: [ "Subterfuge", "Malice", ],
		description: `You deal {c_yellow}x[{SF_0}*100]%{/c} increased damage to {c_white}Healthy{/c} and {c_white}Injured{/c} enemies.`,
		id: 68,
		maxPoints: 3,
		x: 471.72,
		y: 246.2449999999999,
	},
	["Malice"]: {
		connections: [ "Exploit", ],
		description: `You deal {c_yellow}x[{SF_0}*100]%{/c} increased damage to {c_white}Vulnerable{/c} enemies.`,
		id: 69,
		maxPoints: 3,
		x: 735.6449999999998,
		y: 371.03999999999996,
	},
	["Poison Trap"]: {
		connections: [ "Subterfuge", "Enhanced Poison Trap", ],
		description: `{c_gold}Cooldown:{/c} {c_green}[{Cooldown Time}|1|]{/c} seconds
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:1}%{/c}
{/if}Place a trap that arms after {c_yellow}{buffduration:ARMING}{/c} seconds. It activates when an enemy moves near, applying {c_yellow}{payload:TOOLTIP_DAMAGE}{/c} Poisoning damage over {c_yellow}{SF_2}{/c} seconds to enemies in the area.`,
		id: 70,
		maxPoints: 5,
		x: 456.4949999999999,
		y: 1.099999999999909,
	},
	["Enhanced Poison Trap"]: {
		connections: [ "Poison Trap", "Countering Poison Trap", "Subverting Poison Trap", ],
		description: `{c_white}Poison Trap{/c} Immobilizes enemies for {c_yellow}{buffduration:IMMOBILIZE}{/c} seconds when it activates.`,
		id: 71,
		maxPoints: 1,
		x: 804.3050000000001,
		y: 1.625,
	},
	["Countering Poison Trap"]: {
		connections: [ "Enhanced Poison Trap", ],
		description: `{c_white}Poison Trap{/c} has a {c_yellow}[{SF_17}*100]%{/c} chance to reset your {c_white}Imbuement{/c} Skill Cooldowns when activated.`,
		id: 72,
		maxPoints: 1,
		x: 1092.4599999999998,
		y: 65.02499999999998,
	},
	["Subverting Poison Trap"]: {
		connections: [ "Enhanced Poison Trap", ],
		description: `Enemies take {c_yellow}x[{SF_16}*100]%{/c} increased Poisoning damage while standing in {c_white}Poison Trap{/c}.`,
		id: 73,
		maxPoints: 1,
		x: 1084.135,
		y: -86.24500000000012,
	},
	["Stealth"]: {
		connections: [ "Subterfuge", "Enhanced Stealth", ],
		description: `{c_gold}Cooldown:{/c} {c_green}[{Cooldown Time}|1|]{/c} seconds
Cloak yourself with shadows to hide from enemies for {c_yellow}{buffduration:STEALTH}{/c} seconds. Attacks during {c_white}Stealth{/c} break {c_white}Stealth{/c} and deal {c_yellow}x[{SF_2} * 100]%{/c} more damage.

You are {c_white}Unstoppable{/c} and can move through enemies freely while in {c_white}Stealth{/c}.`,
		id: 74,
		maxPoints: 5,
		x: -343.9100000000001,
		y: 148.3599999999999,
	},
	["Enhanced Stealth"]: {
		connections: [ "Stealth", "Countering Stealth", "Subverting Stealth", ],
		description: `You gain {c_yellow}[SF_7]{/c} Energy when you enter {c_white}Stealth{/c}.`,
		id: 75,
		maxPoints: 1,
		x: -618.815,
		y: 247.2299999999999,
	},
	["Countering Stealth"]: {
		connections: [ "Enhanced Stealth", ],
		description: `You gain {c_yellow}+[{SF_3} * 100]%{/c} Movement Speed during {c_white}Stealth{/c}.`,
		id: 76,
		maxPoints: 1,
		x: -974.9740000000002,
		y: 310.7099999999999,
	},
	["Subverting Stealth"]: {
		connections: [ "Enhanced Stealth", ],
		description: `The Skill that breaks {c_white}Stealth{/c} makes enemies {c_white}Vulnerable{/c} for {c_yellow}{SF_5}{/c} seconds.`,
		id: 77,
		maxPoints: 1,
		x: -774.595,
		y: 429.05499999999995,
	},
};

rogue["Imbuements"] = {
	["Deadly Venom"]: {
		connections: [ "Imbuements", "Alchemical Advantage", "Debilitating Toxins", ],
		description: `You deal {c_yellow}x[{SF_0}*100]%{/c} increased Poisoning damage.`,
		id: 78,
		maxPoints: 3,
		x: -677.6850000000001,
		y: 0.8494999999999777,
	},
	["Alchemical Advantage"]: {
		connections: [ "Deadly Venom", ],
		description: `You gain {c_yellow}+[{SF_0}*100]%{/c} increased Attack Speed for each enemy you've Poisoned, up to {c_yellow}+[{SF_1}*100]%{c_yellow}.`,
		id: 79,
		maxPoints: 3,
		x: -1003.1990000000001,
		y: -84.46215000000001,
	},
	["Debilitating Toxins"]: {
		connections: [ "Deadly Venom", ],
		description: `Poisoned enemies deal {c_yellow}x[{SF_0} * 100]%{/c} less damage.`,
		id: 80,
		maxPoints: 3,
		x: -997.049,
		y: 84.10499999999999,
	},
	["Imbue Weapon: Poison"]: {
		connections: [ "Imbuements", "Enhanced Imbue Weapon: Poison", ],
		description: `{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c_green} seconds
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:17}%{/c}
{/if}Imbue your weapons with lethal poison. Your next {c_yellow}{SF_0}{/c} non-{c_white}Basic{/c} {c_white}Melee{/c} or {c_white}Ranged{/c} Skills deal Poison damage and apply up to {c_yellow}{dot:POISON_DOT}{/c} Poisoning damage over {c_yellow}{buffduration:POISON_DOT}{/c} seconds.`,
		id: 81,
		maxPoints: 5,
		x: -230.87000000000012,
		y: -173.17380000000003,
	},
	["Enhanced Imbue Weapon: Poison"]: {
		connections: [ "Imbue Weapon: Poison", "Mixed Imbue Weapon: Poison", "Blended Imbue Weapon: Poison", ],
		description: `{c_white}Poison Imbue’s{/c} Poisoning Duration is increased by {c_yellow}{SF_3}{/c} second.`,
		id: 82,
		maxPoints: 1,
		x: -430.12,
		y: -326.75250000000005,
	},
	["Mixed Imbue Weapon: Poison"]: {
		connections: [ "Enhanced Imbue Weapon: Poison", ],
		description: `{c_gold}Lucky Hit:{/c} {c_white}Poison Imbued{/c} Skills have up to a {c_yellow}[{SF_13}*100]%{/c} chance to apply double the amount of Poisoning damage over time.`,
		id: 83,
		maxPoints: 1,
		x: -478.5,
		y: -527.4475,
	},
	["Blended Imbue Weapon: Poison"]: {
		connections: [ "Enhanced Imbue Weapon: Poison", ],
		description: `Critical Strikes with {c_white}Poison Imbued{/c} Skills deal {c_yellow}x[{SF_14} * 100]%{/c} increased Poisoning damage.`,
		id: 84,
		maxPoints: 1,
		x: -758.755,
		y: -423.1095,
	},
	["Shadow Crash"]: {
		connections: [ "Imbuements", "Consuming Shadows", ],
		description: `{c_gold}Lucky Hit:{/c} Shadow damage has up to a {c_yellow}{SF_0}%{/c} chance to Stun for {c_yellow}{buffduration:STUN}{/c} seconds.`,
		id: 85,
		maxPoints: 3,
		x: 707,
		y: -120.22925000000001,
	},
	["Consuming Shadows"]: {
		connections: [ "Shadow Crash", ],
		description: `Each time you kill an enemy with Shadow Damage, you generate {c_yellow}[SF_0]{/c} Energy.`,
		id: 86,
		maxPoints: 3,
		x: 1083.045,
		y: -198.0455,
	},
	["Imbue Weapon: Shadow"]: {
		connections: [ "Imbuements", "Enhanced Imbue Weapon: Shadow", ],
		description: `{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c_green} seconds
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Imbue your weapons with festering shadows. Your next {c_yellow}{SF_0}{/c} non-{c_white}Basic{/c} {c_white}Melee{/c} or {c_white}Ranged{/c} Skills deal Shadow damage and infect enemies such that they explode for up to {c_yellow}{payload:TOOLTIP_DAMAGE}{/c} damage on death. Direct damage to infected enemies deals an additional {c_yellow}{payload:TOOLTIP_SHADOW_DAMAGE}{/c} Shadow damage.`,
		id: 87,
		maxPoints: 5,
		x: 218.88999999999987,
		y: -173.6438,
	},
	["Enhanced Imbue Weapon: Shadow"]: {
		connections: [ "Imbue Weapon: Shadow", "Mixed Imbue Weapon: Shadow", "Blended Imbue Weapon: Shadow", ],
		description: `{c_gold}Lucky Hit:{/c} Critically Striking an enemy infected by {c_white}Shadow Imbue{/c} has up to a {c_yellow}[{SF_19} * 100]%{/c} chance to create a mini explosion, dealing {c_yellow}{payload:MOD_MINI_EXPLOSION}{/c} Shadow damage to them and nearby enemies.`,
		id: 88,
		maxPoints: 1,
		x: 390.51,
		y: -324.32050000000004,
	},
	["Mixed Imbue Weapon: Shadow"]: {
		connections: [ "Enhanced Imbue Weapon: Shadow", ],
		description: `Enemies damaged by {c_white}Shadow Imbued{/c} Skills take {c_yellow}x[{SF_17}*100]%{/c} increased non-Physical damage for {c_yellow}{buffduration:AMPLIFY_DAMAGE}{/c} seconds.`,
		id: 89,
		maxPoints: 1,
		x: 459.19000000000005,
		y: -522.3025,
	},
	["Blended Imbue Weapon: Shadow"]: {
		connections: [ "Enhanced Imbue Weapon: Shadow", ],
		description: `{c_white}Shadow Imbue’s{/c} primary explosion makes enemies {c_white}Vulnerable{/c} for {c_yellow}2{/c} seconds.`,
		id: 90,
		maxPoints: 1,
		x: 734.355,
		y: -419.38100000000003,
	},
	["Potency"]: {
		connections: [ "Imbuements", "Rapid Imbuement", "Precision Imbuement", ],
		description: `Your {c_white}Imbuement{/c} Skill effects are {c_yellow}x[{SF_0}*100]%{/c} stronger.`,
		id: 91,
		maxPoints: 3,
		x: -3.615000000000009,
		y: 295.1635,
	},
	["Rapid Imbuement"]: {
		connections: [ "Potency", "Trick Attacks", ],
		description: `The Cooldowns of your {c_white}Imbuement{/c} Skills are reduced by {c_yellow}x[{SF_0} * 100]%{/c}.`,
		id: 92,
		maxPoints: 3,
		x: -184.115,
		y: 448.62449999999995,
	},
	["Trick Attacks"]: {
		connections: [ "Rapid Imbuement", "Precision Imbuement", ],
		description: `{c_gold}Lucky Hit:{/c} Up to a {c_yellow}{SF_0}%{/c} chance to apply a random equipped {c_white}Imbuement{/c} Skill effect when dealing direct damage.`,
		id: 93,
		maxPoints: 3,
		x: -2.4650000000001455,
		y: 600.3795,
	},
	["Precision Imbuement"]: {
		connections: [ "Potency", "Trick Attacks", ],
		description: `{c_white}Imbued{/c} Skills gain {c_yellow}+[{SF_0}*100]%{/c} increased Critical Strike Chance.`,
		id: 94,
		maxPoints: 3,
		x: 159.45000000000005,
		y: 446.6695,
	},
	["Imbue Weapon: Cold"]: {
		connections: [ "Imbuements", "Enhanced Imbue Weapon: Cold", ],
		description: `{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c_green} seconds
Imbue your weapons with frigid energies. Your next {c_yellow}{SF_0}{/c} non-{c_white}Basic{/c} {c_white}Melee{/c} or {c_white}Ranged{/c} Skills deal Cold damage and {c_white}Chill{/c} enemies for up to {c_yellow}[SF_1]%{/c}. {c_white}Cold Imbued{/c} skills deal {c_yellow}x[{SF_20}*100]%{/c} damage to Crowd Controlled enemies.`,
		id: 95,
		maxPoints: 5,
		x: 308.365,
		y: 139.10399999999998,
	},
	["Enhanced Imbue Weapon: Cold"]: {
		connections: [ "Imbue Weapon: Cold", "Mixed Imbue Weapon: Cold", "Blended Imbue Weapon: Cold", ],
		description: `{c_gold}Lucky Hit:{/c} {c_white}Cold Imbued{/c} Skills have up to a {c_yellow}[{SF_21}*100]%{/c} chance to make enemies {c_white}Vulnerable{/c} for {c_yellow}{SF_22}{/c} seconds.`,
		id: 96,
		maxPoints: 1,
		x: 554.5899999999999,
		y: 259.6275,
	},
	["Mixed Imbue Weapon: Cold"]: {
		connections: [ "Enhanced Imbue Weapon: Cold", ],
		description: `{c_white}Cold Imbued{/c} Skills deal {c_yellow}x[{SF_15}*100]%{/c} increased damage to {c_white}Frozen{/c} enemies.`,
		id: 97,
		maxPoints: 1,
		x: 644.6399999999999,
		y: 422.0545,
	},
	["Blended Imbue Weapon: Cold"]: {
		connections: [ "Enhanced Imbue Weapon: Cold", ],
		description: `{c_gold}Lucky Hit:{/c} Critical Strikes with {c_white}Cold Imbued{/c} Skills have up to a {c_yellow}[{SF_16}]%{/c} chance to instantly {c_white}Freeze{/c} enemies for {c_yellow}{buffduration:MOD_INSTANT_FREEZE}{/c} seconds.`,
		id: 98,
		maxPoints: 1,
		x: 869.3800000000001,
		y: 284.24399999999997,
	},
	["Frigid Finesse"]: {
		connections: [ "Imbuements", "Chilling Weight", ],
		description: `You deal {c_yellow}x[{SF_0}*100]%{/c} increased damage to {c_white}Chilled{/c} enemies. This bonus increases to {c_yellow}x[{SF_1}*100]%{/c} against {c_white}Frozen{/c} enemies.`,
		id: 99,
		maxPoints: 3,
		x: 704.565,
		y: 26.567499999999995,
	},
	["Chilling Weight"]: {
		connections: [ "Frigid Finesse", ],
		description: `{c_white}Chilled{/c} enemies have their Movement Speed further reduced by up to {c_yellow}[{SF_0} * 100]%{/c}.`,
		id: 100,
		maxPoints: 3,
		x: 1107.46,
		y: 45.936499999999995,
	},
};

rogue["Ultimate"] = {
	["Innervation"]: {
		connections: [ "Ultimate", "Second Wind", "Alchemist's Fortune", ],
		description: `{c_gold}Lucky Hit:{/c} Up to a {c_yellow}{SF_0}%{/c} chance to gain {c_yellow}{SF_1}{/c} Energy.`,
		id: 101,
		maxPoints: 3,
		x: -220.03515,
		y: 292.5150000000001,
	},
	["Second Wind"]: {
		connections: [ "Innervation", ],
		description: `Every {c_yellow}{SF_0}{/c} Energy you spend grants you {c_yellow}+[{SF_1}*100]%{/c} increased Lucky Hit Chance for {c_yellow}{buffduration:BONUS_HIT_EFFECT_CHANCE}{/c} seconds.`,
		id: 102,
		maxPoints: 3,
		x: -560.0181500000001,
		y: 365.58000000000015,
	},
	["Alchemist's Fortune"]: {
		connections: [ "Innervation", ],
		description: `Non-Physical damage you deal has a {c_yellow}+[{SF_0}*100]%{/c} increased Lucky Hit Chance.`,
		id: 103,
		maxPoints: 3,
		x: -230.40215,
		y: 466.2550000000001,
	},
	["Shadow Clone"]: {
		connections: [ "Ultimate", "Prime Shadow Clone", ],
		description: `{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c_green} seconds
Your shadow mimicks your actions for {c_yellow}{buffduration:CLONE_MIMIC}{/c} seconds.
The shadow deals {c_yellow}[{SF_1}*100]%{/c} of your damage.`,
		id: 104,
		maxPoints: 5,
		x: -3.973485,
		y: -219.38,
	},
	["Prime Shadow Clone"]: {
		connections: [ "Shadow Clone", "Supreme Shadow Clone", ],
		description: `You are {c_white}Unstoppable{/c} while your {c_white}Shadow Clone{/c} is active.`,
		id: 105,
		maxPoints: 1,
		x: -167.64365,
		y: -390.2099999999999,
	},
	["Supreme Shadow Clone"]: {
		connections: [ "Prime Shadow Clone", ],
		description: `Your {c_white}Shadow Clone{/c} deals an additional {c_yellow}20%{/c} of your damage.`,
		id: 106,
		maxPoints: 1,
		x: 46.14635,
		y: -540.8315,
	},
	["Aftermath"]: {
		connections: [ "Ultimate", ],
		description: `After using an {c_white}Ultimate{/c} Skill, restore {c_yellow}[{SF_0}]{/c} Energy.`,
		id: 107,
		maxPoints: 3,
		x: -641.7881500000001,
		y: -70.89499999999998,
	},
	["Death Trap"]: {
		connections: [ "Ultimate", "Prime Death Trap", ],
		description: `{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c_green} seconds
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Place a trap that arms after {c_yellow}{buffduration:ARMING}{/c} seconds. It activates when an enemy moves near, dealing {c_yellow}{payload:TOOLTIP_DAMAGE}{/c} damage to enemies in the area.`,
		id: 108,
		maxPoints: 5,
		x: -380.21665,
		y: 127.97000000000003,
	},
	["Prime Death Trap"]: {
		connections: [ "Death Trap", "Supreme Death Trap", ],
		description: `Enemies are Pulled into {c_white}Death Trap{/c} when it activates.`,
		id: 109,
		maxPoints: 1,
		x: -780.25315,
		y: 70.70000000000005,
	},
	["Supreme Death Trap"]: {
		connections: [ "Prime Death Trap", ],
		description: `If {c_white}Death Trap{/c} kills an enemy, its Cooldown is reduced by {c_yellow}{SF_17}{/c} seconds.`,
		id: 110,
		maxPoints: 1,
		x: -1056.2681499999999,
		y: 203.7750000000001,
	},
	["Trap Mastery"]: {
		connections: [ "Ultimate", ],
		description: `When {c_white}Poison Trap{/c} or {c_white}Death Trap{/c} activates, you gain {c_yellow}[{SF_0} * 100]%{/c} increased Critical Strike Chance against {c_white}Vulnerable{/c} and Crowd Controlled enemies for {c_yellow}{buffduration:CRIT_CHANCE}{/c} seconds.`,
		id: 111,
		maxPoints: 3,
		x: -430.49865,
		y: -254.42999999999995,
	},
	["Rain of Arrows"]: {
		connections: [ "Ultimate", "Prime Rain of Arrows", ],
		description: `{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c_green} seconds
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:7}%{/c}
{/if}Arrows rain down over a large area {c_yellow}{SF_18}{/c} times, each wave dealing {c_yellow}{payload:TOOLTIP_DAMAGE}{/c} damage.`,
		id: 112,
		maxPoints: 5,
		x: 462.25785,
		y: 45.049999999999955,
	},
	["Prime Rain of Arrows"]: {
		connections: [ "Rain of Arrows", "Supreme Rain of Arrows", ],
		description: `{c_white}Imbuement{/c} Skill effects applied by {c_white}Rain of Arrows{/c} are {c_yellow}x[{SF_9}*100]%{/c} stronger.`,
		id: 113,
		maxPoints: 1,
		x: 848.37685,
		y: 93.27500000000009,
	},
	["Supreme Rain of Arrows"]: {
		connections: [ "Prime Rain of Arrows", ],
		description: `{c_white}Rain of Arrows'{/c} second wave Knocks Down enemies for {c_yellow}{buffduration:MOD_KNOCKDOWN}{/c} seconds.`,
		id: 114,
		maxPoints: 1,
		x: 1021.1018499999999,
		y: 235.52999999999997,
	},
	["Adrenaline Rush"]: {
		connections: [ "Ultimate", "Impetus", "Haste", ],
		description: `While moving, you gain {c_yellow}x[{SF_0} * 100]%{/c} increased Energy Regeneration.`,
		id: 115,
		maxPoints: 3,
		x: 361.86635,
		y: 285.2350000000001,
	},
	["Impetus"]: {
		connections: [ "Adrenaline Rush", ],
		description: `After moving {c_yellow}{SF_0}{/c} meters, your next attack deals {c_yellow}x[{SF_2}*100]%{/c} increased damage.`,
		id: 116,
		maxPoints: 3,
		x: 382.89285,
		y: 470.04999999999995,
	},
	["Haste"]: {
		connections: [ "Adrenaline Rush", ],
		description: `While at or above {c_yellow}[{SF_0} * 100]%{/c} maximum Energy, gain {c_yellow}+[{SF_1} * 100]%{/c} increased Movement Speed. While below {c_yellow}[{SF_0} * 100]%{/c} maximum Energy, gain {c_yellow}+[{SF_2} * 100]%{/c} increased Attack Speed.`,
		id: 117,
		maxPoints: 3,
		x: 700.74685,
		y: 367.135,
	},
};

rogue["Capstone"] = {
	["Momentum"]: {
		connections: [ "Capstone", ],
		description: `Damaging a Stunned, Immobilized, or {c_white}Frozen{/c} enemy or any enemy from behind with a {c_white}Melee{/c} Skill grants you {c_white}Momentum{/c} for {c_yellow}{SF_0}{/c} seconds. You can only gain {c_yellow}1{/c} stack of {c_white}Momentum{/c} per Skill cast.

While you have {c_yellow}{SF_2}{/c} stacks of {c_white}Momentum{/c}, you gain {c_yellow}[{SF_3}*100]%{/c} increased Damage Reduction, {c_yellow}x[{SF_1}*100]%{/c} increased Energy Regeneration, and {c_yellow}+[{SF_4}*100]%{/c} increased Attack Speed.`,
		id: 118,
		maxPoints: 1,
		x: -744.09817,
		y: 297.0650000000003,
	},
	["Close Quarters Combat"]: {
		connections: [ "Capstone", ],
		description: `Damaging a nearby enemy with a {c_white}Ranged{/c} or {c_white}Melee{/c} Skill grants a {c_yellow}+[{SF_0}*100]%{/c} Attack Speed bonus for {c_yellow}{buffduration:RANGED_BONUS}{/c} seconds.

While both Attack Speed bonuses are active, you gain "{c_gold}Lucky Hit:{/c} Up to a {c_yellow}{SF_2}%{/c} chance to generate {c_yellow}{SF_3}{/c} Energy and deal {c_yellow}x[{SF_4}*100]%{/c} increased damage when you deal direct damage to a Crowd Controlled enemy."`,
		id: 119,
		maxPoints: 1,
		x: -366.25467,
		y: 296.3750000000002,
	},
	["Victimize"]: {
		connections: [ "Capstone", ],
		description: `{c_gold}Lucky Hit:{/c} Dealing direct damage to a {c_white}Vulnerable{/c} enemy has up to a {c_yellow}{SF_0}%{/c} chance to cause an explosion, dealing {c_yellow}[{SF_1} * 100]%{/c} of the original damage to them and nearby enemies.`,
		id: 120,
		maxPoints: 1,
		x: 380.66533000000004,
		y: 296.47500000000014,
	},
	["Exposure"]: {
		connections: [ "Capstone", ],
		description: `{c_gold}Lucky Hit:{/c} Dealing direct damage to an enemy affected by a {c_white}Trap{/c} Skill has up to a {c_yellow}{SF_0}%{/c} chance to make them {c_white}Vulnerable{/c} for {c_yellow}[SF_1]{/c} seconds and reduce the Cooldowns of your {c_white}Trap{/c} Skills by {c_yellow}[{SF_2}|1|]{/c} seconds.`,
		id: 121,
		maxPoints: 1,
		x: 756.70683,
		y: 296.19499999999994,
	},
	["Precision"]: {
		connections: [ "Capstone", ],
		description: `Critical Strikes with {c_white}Ranged{/c} Skills grant you {c_white}Precision{/c}. You gain {c_yellow}x[{SF_0} * 100]%{/c} increased Critical Strike Damage per stack of {c_white}Precision{/c}, up to a maximum of {c_yellow}x[({SF_0}*100)*{SF_1}]%{/c}.

When you reach maximum {c_white}Precision{/c}, your next {c_white}Ranged{/c} Skill is a guaranteed Critical Strike that deals {c_yellow}x[{SF_2} * 100]%{/c} increased Critical Strike Damage, then consumes all stacks of {c_white}Precision{/c}.`,
		id: 122,
		maxPoints: 1,
		x: 6.914529999999999,
		y: 296.52499999999986,
	},
};

export { rogue };