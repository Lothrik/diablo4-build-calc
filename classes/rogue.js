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
		x: -3.916,
		y: 1197.495,
	},
	["Agility"]: {
		connections: [ "Subterfuge" ],
		requiredPoints: 6,
		x: -1376.251,
		y: 2265.48,
	},
	["Subterfuge"]: {
		connections: [ "Imbuements" ],
		requiredPoints: 11,
		x: 1378.264,
		y: 2263.735,
	},
	["Imbuements"]: {
		connections: [ "Ultimate" ],
		requiredPoints: 16,
		x: 1377.314,
		y: 3466.965,
	},
	["Ultimate"]: {
		connections: [ "Capstone" ],
		requiredPoints: 23,
		x: 4.677,
		y: 4334.23,
	},
	["Capstone"]: {
		requiredPoints: 33,
		x: -2.043,
		y: 5268.395,
	},
};

rogue["Basic"] = {
	["Blade Shift"]: {
		connections: [ "Enhanced Blade Shift", "Basic" ],
		damageType: 0,
		description: `{if:SF_11}{c_label}Generate Combo Point:{/c} {c_resource}{SF_10}{/c}
{/if}{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Quickly stab your victim for {c_number}{payload:IMPACT}{/c} damage and shift, allowing you to move freely through enemies for {c_number}{buffduration:MOVE_FREELY}{/c} seconds.`,
		id: 0,
		maxPoints: 5,
		x: -366.017,
		y: -99.39,
	},
	["Enhanced Blade Shift"]: {
		baseSkill: "Blade Shift",
		connections: [ "Fundamental Blade Shift", "Blade Shift", "Primary Blade Shift" ],
		description: `Damaging an enemy with {c_important}Blade Shift{/c} grants {c_number}+[{SF_8}*100|%|]{/c} Movement Speed while {c_important}Blade Shift{/c} is active, up to {c_number}+[{SF_8}*{SF_15}*100|%|]{/c}.`,
		id: 1,
		maxPoints: 1,
		x: -689.421,
		y: -194.4,
	},
	["Fundamental Blade Shift"]: {
		baseSkill: "Blade Shift",
		connections: [ "Enhanced Blade Shift" ],
		description: `Moving through enemies while {c_important}Blade Shift{/c} is active refreshes its duration. After moving through enemies {c_number}{SF_4}{/c} times, your next {c_important}Blade Shift{/c} will Immobilize enemies for {c_number}{buffduration:MOD_IMMOBILIZE}{/c} seconds.`,
		id: 2,
		maxPoints: 1,
		x: -888.151,
		y: -351.975,
	},
	["Primary Blade Shift"]: {
		baseSkill: "Blade Shift",
		connections: [ "Enhanced Blade Shift" ],
		description: `While {c_important}Blade Shift{/c} is active you gain {c_number}[{SF_1}*100|%|]{/c} to all non-Physical Resistances and reduce the duration of Control Impairing Effects by {c_number}[{SF_16}*100|%|]{/c} .`,
		id: 3,
		maxPoints: 1,
		x: -1080.741,
		y: -206.28,
	},
	["Invigorating Strike"]: {
		connections: [ "Enhanced Invigorating Strike", "Basic" ],
		damageType: 0,
		description: `{if:SF_11}{c_label}Generate Combo Point:{/c} {c_resource}{SF_10}{/c}
{/if}{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Melee attack an enemy, dealing {c_number}{payload:IMPACT}{/c} damage and increasing Energy Regeneration by {c_number}x[{SF_4}*100|%|]{/c} for {c_number}{buffduration:ENERGY_REGEN}{/c} seconds.`,
		id: 4,
		maxPoints: 5,
		x: -316.36,
		y: 145.92,
	},
	["Enhanced Invigorating Strike"]: {
		baseSkill: "Invigorating Strike",
		connections: [ "Invigorating Strike", "Primary Invigorating Strike", "Fundamental Invigorating Strike" ],
		description: `Damaging a Crowd Controlled or {c_important}{u}Injured{/u}{/c} enemy with {c_important}Invigorating Strike{/c} increases its Energy Regeneration bonus to {c_number}x[({SF_4}+{SF_6})*100|%|]{/c}.`,
		id: 5,
		maxPoints: 1,
		x: -600.261,
		y: 266.575,
	},
	["Primary Invigorating Strike"]: {
		baseSkill: "Invigorating Strike",
		connections: [ "Enhanced Invigorating Strike" ],
		description: `{c_important}Invigorating Strike{/c} additionally grants {c_number}+[{SF_14} * 100|%|]{/c} Lucky Hit Chance. Hitting a Crowd Controlled or {c_important}{u}Injured{/u}{/c} enemy increases this bonus to {c_number}+[{SF_14} * {SF_15} *100|%|]{/c} Lucky Hit Chance.`,
		id: 7,
		maxPoints: 1,
		x: -968.641,
		y: 324.89,
	},
	["Fundamental Invigorating Strike"]: {
		baseSkill: "Invigorating Strike",
		connections: [ "Enhanced Invigorating Strike" ],
		description: `Hitting an enemy with {c_important}Invigorating Strike{/c} while you are below {c_number}[{SF_7}*100|%|]{/c} Energy makes them {c_important}{u}Vulnerable{/u}{/c} for {c_number}{SF_8}{/c} seconds.`,
		id: 6,
		maxPoints: 1,
		x: -720.381,
		y: 461.245,
	},
	["Puncture"]: {
		connections: [ "Enhanced Puncture", "Basic" ],
		damageType: 0,
		description: `{if:SF_13}{c_label}Generate Combo Point:{/c} {c_resource}1{/c}
{/if}{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Throw blades a short distance, dealing {c_number}{payload:IMPACT}{/c} damage. Every {c_number}{SF_20}rd{/c} cast Slows enemies by {c_number}[{SF_15}*100|%|]{/c} for {c_number}{buffduration:SLOW}{/c} seconds. Critical Strikes will always Slow.`,
		id: 8,
		maxPoints: 5,
		x: -0.181,
		y: -213.015,
	},
	["Enhanced Puncture"]: {
		baseSkill: "Puncture",
		connections: [ "Puncture", "Fundamental Puncture", "Primary Puncture" ],
		description: `Gain {c_number}{SF_9}{/c} Energy when {c_important}Puncture{/c} damages a Crowd Controlled enemy.`,
		id: 9,
		maxPoints: 1,
		x: -1.778,
		y: -381.34,
	},
	["Fundamental Puncture"]: {
		baseSkill: "Puncture",
		connections: [ "Enhanced Puncture" ],
		description: `{c_important}Puncture{/c} now throws {c_number}3{/c} blades in a spread, each dealing {c_number}[{SF_21} * 100|%|]{/c} of its base damage. Hitting an enemy with at least {c_number}2{/c} blades at once makes them {c_important}Vulnerable{/c} for {c_number}{SF_18}{/c} seconds.`,
		id: 10,
		maxPoints: 1,
		x: 138.174,
		y: -551.08,
	},
	["Primary Puncture"]: {
		baseSkill: "Puncture",
		connections: [ "Enhanced Puncture" ],
		description: `Every {c_number}{SF_20}rd{/c} cast of {c_important}Puncture{/c} will also ricochet up to {c_number}2{/c} times. Critical Strikes will always ricochet.`,
		id: 11,
		maxPoints: 1,
		x: -152.237,
		y: -552.125,
	},
	["Heartseeker"]: {
		connections: [ "Enhanced Heartseeker", "Basic" ],
		damageType: 0,
		description: `{if:SF_16}{c_label}Generate Combo Point:{/c} {c_resource}{SF_15}{/c}
{/if}{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Fire an arrow that seeks an enemy, dealing {c_number}{payload:IMPACT}{/c} damage and increasing your Critical Strike Chance against them by {c_number}+[{SF_9}*100|%|]{/c} for {c_number}{buffduration:AMPLIFY_CRIT_CHANCE}{/c} seconds, up to {c_number}+[{SF_9}*{SF_10}*100|%|]{/c}.`,
		id: 12,
		maxPoints: 5,
		x: 373.738,
		y: -97.06,
	},
	["Enhanced Heartseeker"]: {
		baseSkill: "Heartseeker",
		connections: [ "Heartseeker", "Fundamental Heartseeker", "Primary Heartseeker" ],
		description: `When {c_important}Heartseeker{/c} Critically Strikes, gain {c_number}+[{SF_22}*100|%|]{/c} Attack Speed for {c_number}{SF_23}{/c} seconds. Double this amount if the enemy is {c_important}Vulnerable{/c}.`,
		id: 13,
		maxPoints: 1,
		x: 681.939,
		y: -189.45,
	},
	["Fundamental Heartseeker"]: {
		baseSkill: "Heartseeker",
		connections: [ "Enhanced Heartseeker" ],
		description: `{c_important}Heartseeker{/c} also increases the Critical Strike Damage the enemy takes by {c_number}+[{SF_12}*100|%|]{/c} for {c_number}{SF_11}{/c} seconds, up to {c_number}+[{SF_12}*{SF_10}*100|%|]{/c}.`,
		id: 14,
		maxPoints: 1,
		x: 845.544,
		y: -356.895,
	},
	["Primary Heartseeker"]: {
		baseSkill: "Heartseeker",
		connections: [ "Enhanced Heartseeker" ],
		description: `{c_important}Heartseeker{/c} ricochets to an additional enemy, dealing {c_number}[{SF_13}*100|%|]{/c} of the original damage.`,
		id: 15,
		maxPoints: 1,
		x: 1040.879,
		y: -207.155,
	},
	["Forceful Arrow"]: {
		connections: [ "Enhanced Forceful Arrow", "Basic" ],
		damageType: 0,
		description: `{if:SF_12}{c_label}Generate Combo Point:{/c} {c_resource}{SF_10}{/c}
{/if}{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Fire a powerful arrow at an enemy, dealing {c_number}{payload:IMPACT}{/c} damage. Every {c_number}3rd{/c} cast makes the enemy {c_important}{u}Vulnerable{/u}{/c} for {c_number}{SF_15}{/c} seconds.`,
		id: 16,
		maxPoints: 5,
		x: 315.613,
		y: 143.41,
	},
	["Enhanced Forceful Arrow"]: {
		baseSkill: "Forceful Arrow",
		connections: [ "Forceful Arrow", "Fundamental Forceful Arrow", "Primary Forceful Arrow" ],
		description: `Every {c_number}3rd{/c} cast of {c_important}Forceful Arrow{/c} additionally has a {c_number}+[{SF_14}*100|%|]{/c} increased Critical Strike Chance.`,
		id: 17,
		maxPoints: 1,
		x: 590.964,
		y: 263.79,
	},
	["Fundamental Forceful Arrow"]: {
		baseSkill: "Forceful Arrow",
		connections: [ "Enhanced Forceful Arrow" ],
		description: `{c_important}Forceful Arrow{/c} Knocks Back the enemy if they are Close. If they collide with an enemy, both are Knocked Down for {c_number}{buffduration:KNOCKDOWN}{/c} seconds.`,
		id: 18,
		maxPoints: 1,
		x: 718.164,
		y: 462.015,
	},
	["Primary Forceful Arrow"]: {
		baseSkill: "Forceful Arrow",
		connections: [ "Enhanced Forceful Arrow" ],
		description: `{c_important}Forceful Arrow{/c} pierces through {c_important}{u}Vulnerable{/u}{/c} enemies.`,
		id: 19,
		maxPoints: 1,
		x: 951.604,
		y: 324.58,
	},
};

rogue["Core"] = {
	["Twisting Blades"]: {
		connections: [ "Enhanced Twisting Blades", "Core" ],
		damageType: 0,
		description: `{c_label}Energy Cost:{/c_label} {c_resource}{Resource Cost}{/c_resource}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}[{Combat Effect Chance}|%|]{/c}
{/if}Impale an enemy with your blades, dealing {c_number}{payload:IMPACT}{/c} damage and making them take {c_number}x[{SF_18}*100|%|]{/c} increased damage while impaled. After {c_number}{buffduration:RETURN_TIMER}{/c} seconds the blades return to you, piercing enemies for {c_number}{payload:RETURN_HIT}{/c} damage.{if:SF_13}

Combo Points increase damage and grant a Movement Speed bonus:
 {c_label}1:{/c} {c_number}{payload:DAMAGE_TOOLTIP_1CP}{/c} damage, {c_number}[{SF_11}*100|%|]{/c} bonus
 {c_label}2:{/c} {c_number}{payload:DAMAGE_TOOLTIP_2CP}{/c} damage, {c_number}[{SF_11}*100*2|%|]{/c} bonus
 {c_label}3:{/c} {c_number}{payload:DAMAGE_TOOLTIP_3CP}{/c} damage, {c_number}[{SF_11}*100*3|%|]{/c} bonus{/if}`,
		id: 20,
		maxPoints: 5,
		x: -249.907,
		y: -196.27,
	},
	["Enhanced Twisting Blades"]: {
		baseSkill: "Twisting Blades",
		connections: [ "Twisting Blades", "Advanced Twisting Blades", "Improved Twisting Blades" ],
		description: `{c_important}Twisting Blades{/c} deals {c_number}x[{SF_16}*100|%|]{/c} increased damage when returning.`,
		id: 21,
		maxPoints: 1,
		x: -404.244,
		y: -347.93,
	},
	["Advanced Twisting Blades"]: {
		baseSkill: "Twisting Blades",
		connections: [ "Enhanced Twisting Blades" ],
		description: `When your {c_important}Twisting Blades{/c} return, you gain {c_number}+[{SF_4}*100|%|]{/c} Cooldown Reduction per enemy they passed through for {c_number}{SF_6}{/c} seconds, up to {c_number}+[{SF_4}*{SF_5}*100|%|]{/c}.`,
		id: 22,
		maxPoints: 1,
		x: -728.365,
		y: -416.245,
	},
	["Improved Twisting Blades"]: {
		baseSkill: "Twisting Blades",
		connections: [ "Enhanced Twisting Blades" ],
		description: `Enemies are Immobilized while impaled with {c_important}Twisting Blades{/c}.`,
		id: 23,
		maxPoints: 1,
		x: -439.554,
		y: -510.92,
	},
	["Flurry"]: {
		connections: [ "Enhanced Flurry", "Core" ],
		damageType: 0,
		description: `{c_label}Energy Cost:{/c_label} {c_resource}{Resource Cost}{/c_resource}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Unleash a flurry of stabs and slashes, dealing {c_number}{payload:DAMAGE_TOOLTIP}{/c} damage to enemies in front of you.{if:SF_12}

Combo Points increase damage and grant a {c_number}+[{SF_10}*100|%|]{/c} Attack Speed bonus:
 {c_label}1:{/c} {c_number}{payload:DAMAGE_TOOLTIP_1CP}{/c} damage, {c_number}[{buffduration:ATTACK_SPEED}|1|]{/c} second bonus
 {c_label}2:{/c} {c_number}{payload:DAMAGE_TOOLTIP_2CP}{/c} damage, {c_number}[{buffduration:ATTACK_SPEED}*2|1|]{/c} second bonus
 {c_label}3:{/c} {c_number}{payload:DAMAGE_TOOLTIP_3CP}{/c} damage, {c_number}[{buffduration:ATTACK_SPEED}*3|1|]{/c} second bonus{/if}`,
		id: 24,
		maxPoints: 5,
		x: -383.598,
		y: 48,
	},
	["Enhanced Flurry"]: {
		baseSkill: "Flurry",
		connections: [ "Flurry", "Improved Flurry", "Advanced Flurry" ],
		description: `Each time {c_important}Flurry{/c} damages a Crowd Controlled or {c_important}{u}Vulnerable{/u}{/c} enemy, you are Healed for {c_number}[{SF_8}*100|%|]{/c} of your Maximum Life, up to {c_number}[{SF_6}*{SF_8}*100|%|]{/c} per cast.`,
		id: 25,
		maxPoints: 1,
		x: -715.52,
		y: 91.45,
	},
	["Improved Flurry"]: {
		baseSkill: "Flurry",
		connections: [ "Enhanced Flurry" ],
		description: `If {c_important}Flurry{/c} hits any {c_important}{u}Vulnerable{/u}{/c} enemy it will make all enemies hit by that cast {c_important}{u}Vulnerable{/u}{/c} for {c_number}{SF_7}{/c} seconds.`,
		id: 26,
		maxPoints: 1,
		x: -1062.775,
		y: 63.965,
	},
	["Advanced Flurry"]: {
		baseSkill: "Flurry",
		connections: [ "Enhanced Flurry" ],
		description: `Evading through an enemy will cause your next {c_important}Flurry{/c} to Stun enemies for {c_number}{buffduration:STUN}{/c} seconds.`,
		id: 27,
		maxPoints: 1,
		x: -963.405,
		y: 227.51,
	},
	["Penetrating Shot"]: {
		connections: [ "Enhanced Penetrating Shot", "Core" ],
		damageType: 0,
		description: `{c_label}Energy Cost:{/c} {c_resource}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Fire an arrow that pierces through all enemies in a line, dealing {c_number}{payload:IMPACT}{/c} damage.{if:SF_12}

Combo Points increase damage and grant a chance to Knock Down for {c_number}{buffduration:KNOCKDOWN}{/c} seconds:
 {c_label}1:{/c} {c_number}{payload:DAMAGE_TOOLTIP_1CP}{/c} damage, {c_number}[{SF_10}*100|%|]{/c} chance
 {c_label}2:{/c} {c_number}{payload:DAMAGE_TOOLTIP_2CP}{/c} damage, {c_number}[{SF_10}*100*2|%|]{/c} chance
 {c_label}3:{/c} {c_number}{payload:DAMAGE_TOOLTIP_3CP}{/c} damage, {c_number}[{SF_10}*100*3|%|]{/c} chance{/if}`,
		id: 28,
		maxPoints: 5,
		x: 2.441,
		y: 228,
	},
	["Enhanced Penetrating Shot"]: {
		baseSkill: "Penetrating Shot",
		connections: [ "Penetrating Shot", "Advanced Penetrating Shot", "Improved Penetrating Shot" ],
		description: `{c_important}Penetrating Shot{/c} deals {c_number}x[{SF_6}*100|%|]{/c} increased damage per enemy it pierces.`,
		id: 29,
		maxPoints: 1,
		x: 3.779,
		y: 395.89,
	},
	["Advanced Penetrating Shot"]: {
		baseSkill: "Penetrating Shot",
		connections: [ "Enhanced Penetrating Shot" ],
		description: `When cast with full Energy, {c_important}Penetrating Shot{/c} will Slow all enemies it hits by {c_number}[{SF_18}*100|%|]{/c} for {c_number}{buffduration:SLOW}{/c} seconds. Elite enemies will also be Knocked Down for {c_number}{buffduration:KNOCKDOWN}{/c} seconds.`,
		id: 30,
		maxPoints: 1,
		x: -148.25,
		y: 548.025,
	},
	["Improved Penetrating Shot"]: {
		baseSkill: "Penetrating Shot",
		connections: [ "Enhanced Penetrating Shot" ],
		description: `If {c_important}Penetrating Shot{/c} damages at least {c_number}{SF_20}{/c} enemies, your next {c_important}Penetrating Shot{/c} has a {c_number}+[{SF_21}*100|%|]{/c} increased Critical Strike Chance.`,
		id: 31,
		maxPoints: 1,
		x: 170.702,
		y: 550.185,
	},
	["Rapid Fire"]: {
		connections: [ "Enhanced Rapid Fire", "Core" ],
		damageType: 0,
		description: `{c_label}Energy Cost:{/c_label} {c_resource}{Resource Cost}{/c_resource}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Rapidly fire {c_number}{SF_5}{/c} arrows, each dealing {c_number}{payload:IMPACT}{/c} damage.{if:SF_14}

Combo Points increase damage and arrows fired:
 {c_label}1:{/c} {c_number}{payload:DAMAGE_TOOLTIP_1CP}{/c} damage, {c_number}[{SF_5}+{SF_12}]{/c} arrows
 {c_label}2:{/c} {c_number}{payload:DAMAGE_TOOLTIP_2CP}{/c} damage, {c_number}[{SF_5}+{SF_12}*2]{/c} arrows
 {c_label}3:{/c} {c_number}{payload:DAMAGE_TOOLTIP_3CP}{/c} damage, {c_number}[{SF_5}+{SF_12}*3]{/c} arrows{/if}`,
		id: 32,
		maxPoints: 5,
		x: 435.38,
		y: -0.04,
	},
	["Enhanced Rapid Fire"]: {
		baseSkill: "Rapid Fire",
		connections: [ "Rapid Fire", "Advanced Rapid Fire", "Improved Rapid Fire" ],
		description: `Each subsequent arrow from {c_important}Rapid Fire{/c} has {c_number}+[{SF_19}*100|%|]{/c} increased Critical Strike Chance, up to {c_number}+[{SF_19}*{SF_10}*100|%|]{/c} for the {c_number}{SF_10}th{/c} arrow`,
		id: 33,
		maxPoints: 1,
		x: 783.72,
		y: -0.2,
	},
	["Advanced Rapid Fire"]: {
		baseSkill: "Rapid Fire",
		connections: [ "Enhanced Rapid Fire" ],
		description: `{c_important}Rapid Fire{/c} deals {c_number}x[{SF_16}*100|%|]{/c} increased Critical Strike Damage for {c_number}{SF_17}{/c} seconds after you Evade.`,
		id: 34,
		maxPoints: 1,
		x: 1135.51,
		y: 81.74,
	},
	["Improved Rapid Fire"]: {
		baseSkill: "Rapid Fire",
		connections: [ "Enhanced Rapid Fire" ],
		description: `Gain {c_number}{SF_21}{/c} Energy per cast of {c_important}Rapid Fire{/c} when it damages a {c_important}{u}Vulnerable{/u}{/c} enemy.`,
		id: 35,
		maxPoints: 1,
		x: 1129.825,
		y: -80.86,
	},
	["Barrage"]: {
		connections: [ "Enhanced Barrage", "Core" ],
		damageType: 0,
		description: `{c_label}Energy Cost:{/c_label} {c_resource}{Resource Cost}{/c_resource}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}[{Combat Effect Chance}|%|]{/c}
{/if}Unleash a barrage of {c_number}{SF_5}{/c} arrows that expands outwards, each dealing {c_number}{payload:IMPACT}{/c} damage. Each arrow has a {c_number}[{SF_33}*100|%|]{/c} chance to ricochet off an enemy up to {c_number}{SF_30}{/c} time. Ricochets deal {c_number}[{SF_31}*100|%|]{/c} of the arrow's base damage.{if:SF_14}

Combo Points increase damage and arrows fired:
 {c_label}1:{/c} {c_number}{payload:DAMAGE_TOOLTIP_1CP}{/c} damage, {c_number}[{SF_5}+{SF_12}]{/c} arrows
 {c_label}2:{/c} {c_number}{payload:DAMAGE_TOOLTIP_2CP}{/c} damage, {c_number}[{SF_5}+{SF_12}*2]{/c} arrows
 {c_label}3:{/c} {c_number}{payload:DAMAGE_TOOLTIP_3CP}{/c} damage, {c_number}[{SF_5}+{SF_12}*3]{/c} arrows{/if}`,
		id: 36,
		maxPoints: 5,
		x: 233.866,
		y: -190.505,
	},
	["Enhanced Barrage"]: {
		baseSkill: "Barrage",
		connections: [ "Barrage", "Advanced Barrage", "Improved Barrage" ],
		description: `{c_important}Barrage's{/c} ricochet chance is increased to {c_number}100%{/c} for arrows that damage a {c_important}{u}Vulnerable{/u}{/c} enemy or Critically Strike any enemy.`,
		id: 37,
		maxPoints: 1,
		x: 415.264,
		y: -343.385,
	},
	["Advanced Barrage"]: {
		baseSkill: "Barrage",
		connections: [ "Enhanced Barrage" ],
		description: `Whenever a single cast of {c_important}Barrage{/c} ricochets at least {c_number}{SF_36}{/c} times, your next cast gains {c_number}+[{SF_35}*100|%|]{/c} increased Critical Strike Chance.`,
		id: 38,
		maxPoints: 1,
		x: 733.885,
		y: -425.085,
	},
	["Improved Barrage"]: {
		baseSkill: "Barrage",
		connections: [ "Enhanced Barrage" ],
		description: `Every {c_number}3rd{/c} cast of {c_important}Barrage{/c} makes enemies {c_important}{u}Vulnerable{/u}{/c} for {c_number}{SF_8}{/c} seconds.`,
		id: 39,
		maxPoints: 1,
		x: 436.453,
		y: -512.535,
	},
	["Sturdy"]: {
		connections: [ "Core", "Siphoning Strikes" ],
		description: `You gain {c_number}x[{SF_0}*100|%|]{/c} Close Damage Reduction.`,
		id: 40,
		maxPoints: 3,
		x: -629.025,
		y: -114.855,
	},
	["Siphoning Strikes"]: {
		connections: [ "Sturdy" ],
		description: `Heal for {c_number}[{SF_0}*100|%|]{/c} of your Maximum Life when you Critically Strike Close enemies.`,
		id: 41,
		maxPoints: 3,
		x: -1016.41,
		y: -186.075,
	},
	["Stutter Step"]: {
		connections: [ "Core" ],
		description: `Critically Striking an enemy grants {c_number}+[{SF_0}*100|%|]{/c} Movement Speed for {c_number}{buffduration:BUFF_SPEEDBOOST}{/c} seconds.`,
		id: 42,
		maxPoints: 3,
		x: 429.879,
		y: 223.895,
	},
};

rogue["Agility"] = {
	["Shadow Step"]: {
		connections: [ "Enhanced Shadow Step", "Agility" ],
		damageType: 0,
		description: `{c_label}Cooldown:{/c_label} {c_resource}[{Cooldown Time}|1|]{/c_resource} seconds
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Become {c_important}{u}Unstoppable{/u}{/c} and quickly move through the shadows to stab your victim from behind for {c_number}{payload:MELEE_PAYLOAD}{/c} damage. Gain {c_number}[{SF_5}*100|%|]{/c} increased Movement Speed for {c_number}{SF_6}{/c} seconds afterwards.`,
		id: 43,
		maxPoints: 5,
		x: 4.215,
		y: -250.75,
	},
	["Enhanced Shadow Step"]: {
		baseSkill: "Shadow Step",
		connections: [ "Shadow Step", "Methodical Shadow Step", "Disciplined Shadow Step" ],
		description: `Damaging an enemy with {c_important}Shadow Step{/c} increases your Critical Strike Chance against them by {c_number}+[{SF_14}*100|%|]{/c} for {c_number}{buffduration:AMPLIFY_CRIT_CHANCE}{/c} seconds.`,
		id: 44,
		maxPoints: 1,
		x: 3.415,
		y: -425.265,
	},
	["Methodical Shadow Step"]: {
		baseSkill: "Shadow Step",
		connections: [ "Enhanced Shadow Step" ],
		description: `Enemies damaged by {c_important}Shadow Step{/c} are Immobilized for {c_number}{buffduration:IMMOBILIZE}{/c} seconds.`,
		id: 45,
		maxPoints: 1,
		x: -151.635,
		y: -562.315,
	},
	["Disciplined Shadow Step"]: {
		baseSkill: "Shadow Step",
		connections: [ "Enhanced Shadow Step" ],
		description: `{c_important}Shadow Step's{/c} Cooldown is reduced by {c_number}{SF_13}{/c} seconds when it damages an enemy you haven't dealt direct damage to in the last {c_number}{SF_18}{/c} seconds.`,
		id: 46,
		maxPoints: 1,
		x: 156.445,
		y: -567.315,
	},
	["Dash"]: {
		connections: [ "Enhanced Dash", "Agility" ],
		damageType: 0,
		description: `{c_label}Charges:{/c} {c_resource}{SF_22}{/c}
{c_label}Charge Cooldown:{/c} {c_resource}[{Recharge Time}|1|]{/c_resource} seconds 
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Dash forward and slash enemies for {c_number}{payload:IMPACT}{/c} damage.`,
		id: 47,
		maxPoints: 5,
		x: -440.17,
		y: 1.75,
	},
	["Enhanced Dash"]: {
		baseSkill: "Dash",
		connections: [ "Dash", "Methodical Dash", "Disciplined Dash" ],
		description: `Enemies damaged by {c_important}Dash{/c} take {c_number}x[{SF_20}*100|%|]{/c} increased Critical Strike Damage for {c_number}{buffduration:BONUS_CRIT_DAMAGE}{/c} seconds.`,
		id: 48,
		maxPoints: 1,
		x: -785.115,
		y: 1.5,
	},
	["Methodical Dash"]: {
		baseSkill: "Dash",
		connections: [ "Enhanced Dash" ],
		description: `Dealing damage to Crowd Controlled enemies with {c_important}Dash{/c} reduces its Charge Cooldown by {c_number}[{SF_16}|1|]{/c} seconds, up to {c_number}{SF_17}{/c} seconds per cast.`,
		id: 49,
		maxPoints: 1,
		x: -1124.97,
		y: 75.74,
	},
	["Disciplined Dash"]: {
		baseSkill: "Dash",
		connections: [ "Enhanced Dash" ],
		description: `{c_important}Dash{/c} Slows enemies it hits by {c_number}[{SF_19}* 100|%|]{/c} for {c_number}{buffduration:SLOW}{/c} seconds. Any enemy already Slowed will be Stunned for {c_number}{SF_12}{/c} seconds instead.`,
		id: 50,
		maxPoints: 1,
		x: -1127.27,
		y: -88.195,
	},
	["Weapon Mastery"]: {
		connections: [ "Agility" ],
		description: `Gain a bonus when attacking based on weapon type:
{icon:bullet,1.2} {c_label}Daggers:{/c} {c_number}x[{SF_1}*100|%|]{/c} increased damage to {c_important}{u}Healthy{/u}{/c} enemies.
{icon:bullet,1.2} {c_label}Swords:{/c} {c_number}x[{SF_3}*100|%|]{/c} increased damage.
{icon:bullet,1.2} {c_label}Bows:{/c} {c_number}x[{SF_5}*100|%|]{/c} increased damage to {c_important}{u}Vulnerable{/u}{/c} enemies.
{icon:bullet,1.2} {c_label}Crossbows:{/c} {c_number}x[{SF_7}*100|%|]{/c} increased Critical Strike Damage.`,
		id: 51,
		maxPoints: 3,
		x: -564.855,
		y: -257.695,
	},
	["Concussive"]: {
		connections: [ "Agility" ],
		description: `After Knocking Back or Knocking Down an enemy, you gain {c_number}+[{SF_0}*100|%|]{/c} increased Critical Strike Chance against them for {c_number}{buffduration:AMPLIFY_CRIT_CHANCE}{/c} seconds.`,
		id: 52,
		maxPoints: 3,
		x: -567.73,
		y: 255.705,
	},
	["Caltrops"]: {
		connections: [ "Enhanced Caltrops", "Agility" ],
		damageType: 0,
		description: `{c_label}Charges:{/c} {c_resource}{SF_9}{/c}
{c_label}Charge Cooldown:{/c} {c_resource}[{Recharge Time}|1|]{/c_resource} seconds 
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Leap backwards and throw caltrops on the ground, dealing {c_number}{payload:IMPACT}{/c} damage and Slowing enemies by {c_number}[{SF_1}*100|%|]{/c}. Lasts {c_number}{SF_0}{/c} seconds.`,
		id: 53,
		maxPoints: 5,
		x: -0.93,
		y: 235.52,
	},
	["Enhanced Caltrops"]: {
		baseSkill: "Caltrops",
		connections: [ "Caltrops", "Methodical Caltrops", "Disciplined Caltrops" ],
		description: `Enemies take {c_number}x[{SF_14} * 100|%|]{/c} increased damage from all sources each second they are in {c_important}Caltrops{/c}.`,
		id: 54,
		maxPoints: 1,
		x: 3.375,
		y: 412.295,
	},
	["Methodical Caltrops"]: {
		baseSkill: "Caltrops",
		connections: [ "Enhanced Caltrops" ],
		description: `{c_important}Caltrops{/c} now deals Cold damage and {c_important}{u}Chills{/u}{/c} enemies for {c_number}{SF_16}%{/c} per second.`,
		id: 55,
		maxPoints: 1,
		x: -148.98,
		y: 587.832,
	},
	["Disciplined Caltrops"]: {
		baseSkill: "Caltrops",
		connections: [ "Enhanced Caltrops" ],
		description: `You have {c_number}+[{SF_18} * 100|%|]{/c} Critical Strike Chance against enemies inside your {c_important}Caltrops{/c}. Double this amount against {c_important}{u}Vulnerable{/u}{/c} enemies.`,
		id: 56,
		maxPoints: 1,
		x: 175.28,
		y: 588.884,
	},
	["Rugged"]: {
		connections: [ "Agility", "Reactive Defense" ],
		description: `Gain {c_number}x[{SF_0}*100|%|]{/c} Damage Reduction against Damage Over Time effects.`,
		id: 57,
		maxPoints: 3,
		x: 572.705,
		y: 256.37,
	},
	["Reactive Defense"]: {
		connections: [ "Rugged" ],
		description: `Gain {c_number}x[{SF_0}*100|1%|]{/c} Damage Reduction while inflicted with Control Impairing Effects.`,
		id: 58,
		maxPoints: 3,
		x: 851.645,
		y: 376.865,
	},
};

rogue["Subterfuge"] = {
	["Dark Shroud"]: {
		connections: [ "Enhanced Dark Shroud", "Subterfuge" ],
		description: `{c_label}Cooldown:{/c_label} {c_resource}[{Cooldown Time}|1|]{/c_resource} seconds
Surround yourself with up to {c_number}{SF_0}{/c} protective shadows. Gain {c_number}+[{SF_1} * 100|1%|]{/c} Damage Reduction per active shadow. Each time you take direct damage, that damage is reduced and a shadow is consumed.`,
		id: 59,
		maxPoints: 5,
		x: -370.825,
		y: -129.275,
	},
	["Enhanced Dark Shroud"]: {
		baseSkill: "Dark Shroud",
		connections: [ "Dark Shroud", "Subverting Dark Shroud", "Countering Dark Shroud" ],
		description: `{c_important}Dark Shroud's{/c} shadows have a {c_number}[{SF_3} * 100|%|]{/c} chance to not be consumed.`,
		id: 60,
		maxPoints: 1,
		x: -656.66,
		y: -232.23,
	},
	["Subverting Dark Shroud"]: {
		baseSkill: "Dark Shroud",
		connections: [ "Enhanced Dark Shroud" ],
		description: `Each active shadow from {c_important}Dark Shroud{/c} grants you {c_number}+[{SF_5} * 100|%|]{/c} increased Movement Speed.`,
		id: 61,
		maxPoints: 1,
		x: -809.69,
		y: -406.165,
	},
	["Countering Dark Shroud"]: {
		baseSkill: "Dark Shroud",
		connections: [ "Enhanced Dark Shroud" ],
		description: `While you have at least {c_number}[{SF_6}]{/c} active shadow from {c_important}Dark Shroud{/c}, gain {c_number}+[{SF_4} * 100|%|]{/c} Critical Strike Chance.`,
		id: 62,
		maxPoints: 1,
		x: -1027.384,
		y: -253.805,
	},
	["Smoke Grenade"]: {
		connections: [ "Enhanced Smoke Grenade", "Subterfuge" ],
		description: `{c_label}Cooldown:{/c_label} {c_resource}[{Cooldown Time}|1|]{/c_resource} seconds
Throw a smoky concoction at enemies that {c_important}{u}Dazes{/u}{/c} them for {c_number}{buffduration:SMOKE_BLINDNESS}{/c} seconds.`,
		id: 123,
		maxPoints: 5,
		x: -4.755,
		y: -197.595,
	},
	["Enhanced Smoke Grenade"]: {
		baseSkill: "Smoke Grenade",
		connections: [ "Smoke Grenade", "Subverting Smoke Grenade", "Countering Smoke Grenade" ],
		description: `Enemies affected by {c_important}Smoke Grenade{/c} take {c_number}x[{SF_6}*100|%|]{/c} increased damage.`,
		id: 124,
		maxPoints: 1,
		x: -7.545,
		y: -376.035,
	},
	["Subverting Smoke Grenade"]: {
		baseSkill: "Smoke Grenade",
		connections: [ "Enhanced Smoke Grenade" ],
		description: `If an enemy is {c_important}{u}Vulnerable{/u}{/c}, Slowed, or Immobilized {c_important}Smoke Grenade{/c} {c_important}{u}Dazes{/u}{/c} them for {c_number}x[{SF_8}*100|%|]{/c} longer.`,
		id: 125,
		maxPoints: 1,
		x: -186.285,
		y: -564.435,
	},
	["Countering Smoke Grenade"]: {
		baseSkill: "Smoke Grenade",
		connections: [ "Enhanced Smoke Grenade" ],
		description: `{c_label}Lucky Hit:{/c} Dealing direct damage to enemies affected by {c_important}Smoke Grenade{/c} has up to a {c_number}{SF_7}%{/c} chance to reduce its Cooldown by {c_number}{SF_11}{/c} second, or by {c_number}{SF_12}{/c} seconds instead if the enemy is {c_important}{u}Vulnerable{/u}{/c}.`,
		id: 126,
		maxPoints: 1,
		x: 187.08,
		y: -565.1,
	},
	["Agile"]: {
		connections: [ "Subterfuge" ],
		description: `Using a Cooldown increases your Dodge Chance by {c_number}x[{SF_0}*100|%|]{/c} for {c_number}{buffduration:DODGE_BONUS}{/c} seconds.`,
		id: 67,
		maxPoints: 3,
		x: 480.215,
		y: -242.9,
	},
	["Exploit"]: {
		connections: [ "Subterfuge", "Malice" ],
		description: `You deal {c_number}x[{SF_0}*100|%|]{/c} increased damage to {c_important}{u}Healthy{/u}{/c} and {c_important}{u}Injured{/u}{/c} enemies.`,
		id: 68,
		maxPoints: 3,
		x: 471.72,
		y: 246.245,
	},
	["Malice"]: {
		connections: [ "Exploit" ],
		description: `You deal {c_number}x[{SF_0}*100|%|]{/c} increased damage to {c_important}{u}Vulnerable{/u}{/c} enemies.`,
		id: 69,
		maxPoints: 3,
		x: 735.645,
		y: 371.04,
	},
	["Poison Trap"]: {
		connections: [ "Enhanced Poison Trap", "Subterfuge" ],
		damageType: 4,
		description: `{c_label}Cooldown:{/c} {c_resource}[{Cooldown Time}|1|]{/c} seconds
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat_Effect_Chance_Script_Formula_Override:1}%{/c}
{/if}Place a trap that arms after {c_number}{buffduration:ARMING}{/c} seconds. It activates when an enemy moves within range, applying {c_number}{payload:TOOLTIP_DAMAGE}{/c} Poisoning damage over {c_number}{SF_2}{/c} seconds to enemies in the area.`,
		id: 70,
		maxPoints: 5,
		x: 456.495,
		y: 1.1,
	},
	["Enhanced Poison Trap"]: {
		baseSkill: "Poison Trap",
		connections: [ "Poison Trap", "Countering Poison Trap", "Subverting Poison Trap" ],
		description: `{c_important}Poison Trap{/c} Immobilizes enemies for {c_number}{buffduration:IMMOBILIZE}{/c} seconds when it activates.`,
		id: 71,
		maxPoints: 1,
		x: 804.305,
		y: 1.625,
	},
	["Countering Poison Trap"]: {
		baseSkill: "Poison Trap",
		connections: [ "Enhanced Poison Trap" ],
		description: `{c_important}Poison Trap{/c} has a {c_number}[{SF_17}*100|%|]{/c} chance to reset your {c_important}Imbuement{/c} Skill Cooldowns when activated.`,
		id: 72,
		maxPoints: 1,
		x: 1092.46,
		y: 65.025,
	},
	["Subverting Poison Trap"]: {
		baseSkill: "Poison Trap",
		connections: [ "Enhanced Poison Trap" ],
		description: `Enemies take {c_number}x[{SF_16}*100|%|]{/c} increased Poisoning damage while standing in {c_important}Poison Trap{/c}.`,
		id: 73,
		maxPoints: 1,
		x: 1084.135,
		y: -86.245,
	},
	["Concealment"]: {
		connections: [ "Enhanced Stealth", "Subterfuge" ],
		description: `{c_label}Cooldown:{/c} {c_resource}[{Cooldown Time}|1|]{/c} seconds
Vanish from sight, gaining {c_important}{u}Stealth{/u}{/c} for {c_number}{buffduration:STEALTH}{/c} seconds. During {c_important}Concealment{/c} you additionally become {c_important}{u}Unstoppable{/u}{/c}, gain {c_number}+[{SF_3} * 100|%|]{/c} Movement Speed, and can move through enemies freely.

Using an attack Skill during {c_important}Concealment{/c} will break {c_important}Concealment{/c}.`,
		id: 127,
		maxPoints: 5,
		x: -343.91,
		y: 148.36,
	},
	["Enhanced Stealth"]: {
		baseSkill: "Concealment",
		connections: [ "Concealment", "Countering Stealth", "Subverting Stealth" ],
		description: `You gain {c_number}[SF_7]{/c} Energy when you enter {c_important}Concealment{/c}.`,
		id: 75,
		maxPoints: 1,
		x: -618.815,
		y: 247.23,
	},
	["Countering Stealth"]: {
		baseSkill: "Concealment",
		connections: [ "Enhanced Stealth" ],
		description: `The Skill that breaks {c_important}Concealment{/c} will always be a guaranteed Critical Strike.`,
		id: 76,
		maxPoints: 1,
		x: -974.974,
		y: 310.71,
	},
	["Subverting Stealth"]: {
		baseSkill: "Concealment",
		connections: [ "Enhanced Stealth" ],
		description: `The Skill that breaks {c_important}Concealment{/c} makes enemies {c_important}{u}Vulnerable{/u}{/c} for {c_number}{SF_5}{/c} seconds.`,
		id: 77,
		maxPoints: 1,
		x: -774.595,
		y: 429.055,
	},
};

rogue["Imbuements"] = {
	["Deadly Venom"]: {
		connections: [ "Alchemical Advantage", "Debilitating Toxins", "Imbuements" ],
		description: `You deal {c_number}x[{SF_0}*100|%|]{/c} increased Poisoning damage.`,
		id: 78,
		maxPoints: 3,
		x: -677.685,
		y: 0.849,
	},
	["Alchemical Advantage"]: {
		connections: [ "Deadly Venom" ],
		description: `You gain {c_number}+[{SF_0}*100|%|]{/c} increased Attack Speed for each enemy you've Poisoned, up to {c_number}+[{SF_1}*100|%|]{c_number}.`,
		id: 79,
		maxPoints: 3,
		x: -1003.199,
		y: -84.462,
	},
	["Debilitating Toxins"]: {
		connections: [ "Deadly Venom" ],
		description: `Poisoned enemies deal {c_number}[{SF_0} * 100|%|]{/c} less damage.`,
		id: 80,
		maxPoints: 3,
		x: -997.049,
		y: 84.105,
	},
	["Poison Imbuement"]: {
		connections: [ "Enhanced Poison Imbuement", "Imbuements" ],
		damageType: 4,
		description: `{c_label}Cooldown:{/c_label} {c_resource}[{Cooldown Time}|1|]{/c_resource} seconds
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat_Effect_Chance_Script_Formula_Override:17}%{/c}
{/if}Imbue your weapons with lethal poison. Your next {c_number}{SF_0}{/c} {c_important}Imbueable{/c} Skills deal Poison damage and apply up to {c_number}{dot:POISON_DOT}{/c} Poisoning damage over {c_number}{buffduration:POISON_DOT}{/c} seconds.`,
		id: 128,
		maxPoints: 5,
		x: -230.87,
		y: -173.174,
	},
	["Enhanced Poison Imbuement"]: {
		baseSkill: "Poison Imbuement",
		connections: [ "Poison Imbuement", "Mixed Poison Imbuement", "Blended Poison Imbuement" ],
		description: `{c_important}Poison Imbuement’s{/c} Poisoning Duration is increased by {c_number}{SF_3}{/c} second.`,
		id: 129,
		maxPoints: 1,
		x: -430.12,
		y: -326.753,
	},
	["Mixed Poison Imbuement"]: {
		baseSkill: "Poison Imbuement",
		connections: [ "Enhanced Poison Imbuement" ],
		description: `{c_label}Lucky Hit:{/c} {c_important}Poison Imbued{/c} Skills have up to a {c_number}[{SF_13}*100|%|]{/c} chance to apply double the amount of Poisoning damage over time.`,
		id: 130,
		maxPoints: 1,
		x: -478.5,
		y: -527.447,
	},
	["Blended Poison Imbuement"]: {
		baseSkill: "Poison Imbuement",
		connections: [ "Enhanced Poison Imbuement" ],
		description: `Critical Strikes with {c_important}Poison Imbued{/c} Skills deal {c_number}x[{SF_14} * 100|%|]{/c} increased Poisoning damage.`,
		id: 131,
		maxPoints: 1,
		x: -758.755,
		y: -423.11,
	},
	["Shadow Crash"]: {
		connections: [ "Consuming Shadows", "Imbuements" ],
		description: `{c_label}Lucky Hit:{/c} Shadow damage has up to a {c_number}{SF_0}%{/c} chance to Stun for {c_number}{buffduration:STUN}{/c} seconds.`,
		id: 85,
		maxPoints: 3,
		x: 707,
		y: -120.229,
	},
	["Consuming Shadows"]: {
		connections: [ "Shadow Crash" ],
		description: `Each time you kill an enemy with Shadow Damage, you generate {c_number}[SF_0]{/c} Energy.`,
		id: 86,
		maxPoints: 3,
		x: 1083.045,
		y: -198.046,
	},
	["Shadow Imbuement"]: {
		connections: [ "Enhanced Shadow Imbuement", "Imbuements" ],
		damageType: 5,
		description: `{c_label}Cooldown:{/c_label} {c_resource}[{Cooldown Time}|1|]{/c_resource} seconds
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Imbue your weapons with festering shadows. Your next {c_number}{SF_0}{/c} {c_important}Imbueable{/c} Skills deal Shadow damage and infect enemies such that they explode for up to {c_number}{payload:TOOLTIP_DAMAGE}{/c} damage on death. Direct damage to infected enemies deals an additional {c_number}{payload:TOOLTIP_SHADOW_DAMAGE}{/c} Shadow damage.`,
		id: 132,
		maxPoints: 5,
		x: 218.89,
		y: -173.644,
	},
	["Enhanced Shadow Imbuement"]: {
		baseSkill: "Shadow Imbuement",
		connections: [ "Shadow Imbuement", "Mixed Shadow Imbuement", "Blended Shadow Imbuement" ],
		description: `{c_label}Lucky Hit:{/c} Critically Striking an enemy infected by {c_important}Shadow Imbuement{/c} has up to a {c_number}[{SF_19} * 100|%|]{/c} chance to create a mini explosion, dealing {c_number}{payload:MOD_MINI_EXPLOSION}{/c} Shadow damage to them and surrounding enemies.`,
		id: 133,
		maxPoints: 1,
		x: 390.51,
		y: -324.321,
	},
	["Mixed Shadow Imbuement"]: {
		baseSkill: "Shadow Imbuement",
		connections: [ "Enhanced Shadow Imbuement" ],
		description: `Enemies damaged by {c_important}Shadow Imbued{/c} Skills take {c_number}x[{SF_17}*100|%|]{/c} increased non-Physical damage for {c_number}{buffduration:AMPLIFY_DAMAGE}{/c} seconds.`,
		id: 134,
		maxPoints: 1,
		x: 459.19,
		y: -522.303,
	},
	["Blended Shadow Imbuement"]: {
		baseSkill: "Shadow Imbuement",
		connections: [ "Enhanced Shadow Imbuement" ],
		description: `{c_important}Shadow Imbuement’s{/c} primary explosion makes enemies {c_important}{u}Vulnerable{/u}{/c} for {c_number}2{/c} seconds.`,
		id: 135,
		maxPoints: 1,
		x: 734.355,
		y: -419.381,
	},
	["Potency"]: {
		connections: [ "Rapid Imbuement", "Imbuements", "Precision Imbuement" ],
		description: `Your {c_important}Imbuement{/c} Skill effects have {c_number}x[{SF_0}*100|%|]{/c} increased potency.`,
		id: 91,
		maxPoints: 3,
		x: -3.615,
		y: 295.163,
	},
	["Rapid Imbuement"]: {
		connections: [ "Potency", "Trick Attacks" ],
		description: `The Cooldowns of your {c_important}Imbuement{/c} Skills are reduced by {c_number}x[{SF_0} * 100|%|]{/c}.`,
		id: 92,
		maxPoints: 3,
		x: -184.115,
		y: 448.624,
	},
	["Trick Attacks"]: {
		connections: [ "Rapid Imbuement", "Precision Imbuement" ],
		description: `{c_label}Lucky Hit:{/c} Up to a {c_number}{SF_0}%{/c} chance to apply a random equipped {c_important}Imbuement{/c} Skill effect when dealing direct damage.`,
		id: 93,
		maxPoints: 3,
		x: -2.465,
		y: 600.38,
	},
	["Precision Imbuement"]: {
		connections: [ "Potency", "Trick Attacks" ],
		description: `{c_important}Imbued{/c} Skills gain {c_number}+[{SF_0}*100|%|]{/c} increased Critical Strike Chance.`,
		id: 94,
		maxPoints: 3,
		x: 159.45,
		y: 446.67,
	},
	["Cold Imbuement"]: {
		connections: [ "Enhanced Cold Imbuement", "Imbuements" ],
		description: `{c_label}Cooldown:{/c_label} {c_resource}[{Cooldown Time}|1|]{/c_resource} seconds
Imbue your weapons with frigid energies. Your next {c_number}{SF_0}{/c} {c_important}Imbueable{/c} Skills deal Cold damage and {c_important}{u}Chill{/u}{/c} enemies for up to {c_number}[SF_1|%|]{/c}. {c_important}Cold Imbued{/c} skills deal {c_number}x[{SF_20}*100|%|]{/c} damage to Crowd Controlled enemies.`,
		id: 136,
		maxPoints: 5,
		x: 308.365,
		y: 139.104,
	},
	["Enhanced Cold Imbuement"]: {
		baseSkill: "Cold Imbuement",
		connections: [ "Cold Imbuement", "Mixed Cold Imbuement", "Blended Cold Imbuement" ],
		description: `{c_label}Lucky Hit:{/c} {c_important}Cold Imbued{/c} Skills have up to a {c_number}[{SF_21}*100|%|]{/c} chance to make enemies {c_important}{u}Vulnerable{/u}{/c} for {c_number}{SF_22}{/c} seconds.`,
		id: 137,
		maxPoints: 1,
		x: 554.59,
		y: 259.627,
	},
	["Mixed Cold Imbuement"]: {
		baseSkill: "Cold Imbuement",
		connections: [ "Enhanced Cold Imbuement" ],
		description: `{c_important}Cold Imbued{/c} Skills deal {c_number}x[{SF_15}*100|%|]{/c} increased damage to {c_important}{u}Frozen{/u}{/c} enemies.`,
		id: 138,
		maxPoints: 1,
		x: 644.64,
		y: 422.055,
	},
	["Blended Cold Imbuement"]: {
		baseSkill: "Cold Imbuement",
		connections: [ "Enhanced Cold Imbuement" ],
		description: `{c_label}Lucky Hit:{/c} Critical Strikes with {c_important}Cold Imbued{/c} Skills have up to a {c_number}[{SF_16}|%|]{/c} chance to instantly {c_important}{u}Freeze{/u}{/c} enemies for {c_number}{buffduration:MOD_INSTANT_FREEZE}{/c} seconds.`,
		id: 139,
		maxPoints: 1,
		x: 869.38,
		y: 284.244,
	},
	["Frigid Finesse"]: {
		connections: [ "Chilling Weight", "Imbuements" ],
		description: `You deal {c_number}x[{SF_0}*100|%|]{/c} increased damage to {c_important}{u}Chilled{/u}{/c} enemies. This bonus increases to {c_number}x[{SF_1}*100|%|]{/c} against {c_important}{u}Frozen{/u}{/c} enemies.`,
		id: 99,
		maxPoints: 3,
		x: 704.565,
		y: 26.567,
	},
	["Chilling Weight"]: {
		connections: [ "Frigid Finesse" ],
		description: `{c_important}{u}Chilled{/u}{/c} enemies have their Movement Speed further reduced by up to {c_number}[{SF_0} * 100|%|]{/c}.`,
		id: 100,
		maxPoints: 3,
		x: 1107.46,
		y: 45.936,
	},
};

rogue["Ultimate"] = {
	["Innervation"]: {
		connections: [ "Second Wind", "Ultimate", "Alchemist's Fortune" ],
		description: `{c_label}Lucky Hit:{/c} Up to a {c_number}{SF_0}%{/c} chance to gain {c_number}{SF_1}{/c} Energy.`,
		id: 101,
		maxPoints: 3,
		x: -220.035,
		y: 292.515,
	},
	["Second Wind"]: {
		connections: [ "Innervation" ],
		description: `Every {c_number}{SF_0}{/c} Energy you spend grants you {c_number}+[{SF_1}*100|%|]{/c} increased Lucky Hit Chance for {c_number}{buffduration:BONUS_HIT_EFFECT_CHANCE}{/c} seconds.`,
		id: 102,
		maxPoints: 3,
		x: -560.018,
		y: 365.58,
	},
	["Alchemist's Fortune"]: {
		connections: [ "Innervation" ],
		description: `Non-Physical damage you deal has a {c_number}+[{SF_0}*100|%|]{/c} increased Lucky Hit Chance.`,
		id: 103,
		maxPoints: 3,
		x: -230.402,
		y: 466.255,
	},
	["Shadow Clone"]: {
		connections: [ "Prime Shadow Clone", "Ultimate" ],
		description: `{c_label}Cooldown:{/c_label} {c_resource}[{Cooldown Time}|1|]{/c_resource} seconds
Your shadow mimicks your actions for {c_number}{buffduration:CLONE_MIMIC}{/c} seconds.
The shadow deals {c_number}[{SF_1}*100|%|]{/c} of your damage.`,
		id: 104,
		maxPoints: 5,
		x: -3.973,
		y: -219.38,
	},
	["Prime Shadow Clone"]: {
		baseSkill: "Shadow Clone",
		connections: [ "Shadow Clone", "Supreme Shadow Clone" ],
		description: `You are {c_important}{u}Unstoppable{/u}{/c} for {c_number}{SF_10}{/c} seconds after casting {c_important}Shadow Clone{/c}.`,
		id: 105,
		maxPoints: 1,
		x: -167.644,
		y: -390.21,
	},
	["Supreme Shadow Clone"]: {
		baseSkill: "Shadow Clone",
		connections: [ "Prime Shadow Clone" ],
		description: `Your {c_important}Shadow Clone{/c} deals an additional {c_number}20%{/c} of your damage.`,
		id: 106,
		maxPoints: 1,
		x: 46.146,
		y: -540.832,
	},
	["Aftermath"]: {
		connections: [ "Ultimate" ],
		description: `After using an {c_important}Ultimate{/c} Skill, restore {c_number}[{SF_0}]{/c} Energy.`,
		id: 107,
		maxPoints: 3,
		x: -641.788,
		y: -70.895,
	},
	["Death Trap"]: {
		connections: [ "Prime Death Trap", "Ultimate" ],
		damageType: 5,
		description: `{c_label}Cooldown:{/c_label} {c_resource}[{Cooldown Time}|1|]{/c_resource} seconds
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Place a trap that arms after {c_number}{buffduration:ARMING}{/c} seconds. It activates when an enemy moves within range, dealing {c_number}{payload:TOOLTIP_DAMAGE}{/c} damage to enemies in the area.`,
		id: 108,
		maxPoints: 5,
		x: -380.217,
		y: 127.97,
	},
	["Prime Death Trap"]: {
		baseSkill: "Death Trap",
		connections: [ "Death Trap", "Supreme Death Trap" ],
		description: `Enemies are Pulled into {c_important}Death Trap{/c} when it activates.`,
		id: 109,
		maxPoints: 1,
		x: -780.253,
		y: 70.7,
	},
	["Supreme Death Trap"]: {
		baseSkill: "Death Trap",
		connections: [ "Prime Death Trap" ],
		description: `If {c_important}Death Trap{/c} kills an enemy, its Cooldown is reduced by {c_number}{SF_17}{/c} seconds.`,
		id: 110,
		maxPoints: 1,
		x: -1056.268,
		y: 203.775,
	},
	["Trap Mastery"]: {
		connections: [ "Ultimate" ],
		description: `When {c_important}Poison Trap{/c} or {c_important}Death Trap{/c} activates, you gain {c_number}+[{SF_0} * 100|%|]{/c} increased Critical Strike Chance against {c_important}{u}Vulnerable{/u}{/c} and Crowd Controlled enemies for {c_number}{buffduration:CRIT_CHANCE}{/c} seconds.`,
		id: 111,
		maxPoints: 3,
		x: -430.499,
		y: -254.43,
	},
	["Rain of Arrows"]: {
		connections: [ "Prime Rain of Arrows", "Ultimate" ],
		damageType: 0,
		description: `{c_label}Cooldown:{/c_label} {c_resource}[{Cooldown Time}|1|]{/c_resource} seconds
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat_Effect_Chance_Script_Formula_Override:7}%{/c}
{/if}Arrows rain down over a large area {c_number}{SF_18}{/c} times, each wave dealing {c_number}{payload:TOOLTIP_DAMAGE}{/c} damage.`,
		id: 112,
		maxPoints: 5,
		x: 462.258,
		y: 45.05,
	},
	["Prime Rain of Arrows"]: {
		baseSkill: "Rain of Arrows",
		connections: [ "Rain of Arrows", "Supreme Rain of Arrows" ],
		description: `{c_important}Imbuement{/c} Skill effects applied by {c_important}Rain of Arrows{/c} have {c_number}x[{SF_9}*100|%|]{/c} increased potency.`,
		id: 113,
		maxPoints: 1,
		x: 848.377,
		y: 93.275,
	},
	["Supreme Rain of Arrows"]: {
		baseSkill: "Rain of Arrows",
		connections: [ "Prime Rain of Arrows" ],
		description: `{c_important}Rain of Arrows'{/c} second wave Knocks Down enemies for {c_number}{buffduration:MOD_KNOCKDOWN}{/c} seconds.`,
		id: 114,
		maxPoints: 1,
		x: 1021.102,
		y: 235.53,
	},
	["Adrenaline Rush"]: {
		connections: [ "Impetus", "Haste", "Ultimate" ],
		description: `While moving, you gain {c_number}x[{SF_0} * 100|%|]{/c} increased Energy Regeneration.`,
		id: 115,
		maxPoints: 3,
		x: 361.866,
		y: 285.235,
	},
	["Impetus"]: {
		connections: [ "Adrenaline Rush" ],
		description: `After moving {c_number}{SF_0}{/c} meters, your next attack deals {c_number}x[{SF_2}*100|%|]{/c} increased damage.`,
		id: 116,
		maxPoints: 3,
		x: 382.893,
		y: 470.05,
	},
	["Haste"]: {
		connections: [ "Adrenaline Rush" ],
		description: `While at or above {c_number}[{SF_0} * 100|%|]{/c} maximum Energy, gain {c_number}+[{SF_1} * 100|%|]{/c} increased Movement Speed. While below {c_number}[{SF_0} * 100|%|]{/c} maximum Energy, gain {c_number}+[{SF_2} * 100|%|]{/c} increased Attack Speed.`,
		id: 117,
		maxPoints: 3,
		x: 700.747,
		y: 367.135,
	},
};

rogue["Capstone"] = {
	["Momentum"]: {
		connections: [ "Capstone" ],
		description: `{c_important}Melee{/c} Skills grant a stack of {c_important}Momentum{/c} for {c_number}{SF_0}{/c} seconds if they either:
{icon:bullet,1.2} Hit a Stunned, Immobilized, or {c_important}{u}Frozen{/u}{/c} enemy
{icon:bullet,1.2} Hit any enemy from behind

While at {c_number}{SF_2}{/c} stacks of {c_important}Momentum{/c} you gain:
{icon:bullet,1.2} {c_number}[{SF_3}*100|%|]{/c} increased Damage Reduction
{icon:bullet,1.2} {c_number}x[{SF_1}*100|%|]{/c} increased Energy Regeneration
{icon:bullet,1.2} {c_number}+[{SF_4}*100|%|]{/c} increased Attack Speed`,
		id: 118,
		maxPoints: 1,
		x: -744.098,
		y: 297.065,
	},
	["Close Quarters Combat"]: {
		connections: [ "Capstone" ],
		description: `Damaging a Close enemy with {c_important}Ranged{/c} or {c_important}Melee{/c} Skills each grant a {c_number}+[{SF_0}*100|%|]{/c} Attack Speed bonus for {c_number}{buffduration:RANGED_BONUS}{/c} seconds.

While both Attack Speed bonuses are active, you gain:
{icon:bullet,1.2} {c_label}Lucky Hit:{/c} Dealing direct damage to a Crowd Controlled enemy has up to a {c_number}{SF_2}%{/c} chance to generate {c_number}{SF_3}{/c} Energy and deal {c_number}x[{SF_4}*100|%|]{/c} increased damage.`,
		id: 119,
		maxPoints: 1,
		x: -366.255,
		y: 296.375,
	},
	["Victimize"]: {
		connections: [ "Capstone" ],
		description: `{c_label}Lucky Hit:{/c} Dealing direct damage to a {c_important}{u}Vulnerable{/u}{/c} enemy has up to a {c_number}{SF_0}%{/c} chance to cause an explosion, dealing {c_number}[{SF_1} * 100|%|]{/c} of the original damage to them and surrounding enemies.`,
		id: 120,
		maxPoints: 1,
		x: 380.665,
		y: 296.475,
	},
	["Exposure"]: {
		connections: [ "Capstone" ],
		damageType: 0,
		description: `{c_label}Lucky Hit:{/c} Dealing direct damage to an enemy affected by a {c_important}Trap{/c} Skill has up to a {c_number}{SF_0}%{/c} chance to reduce the active Cooldowns of your {c_important}Trap{/c} Skills by {c_number}[{SF_2}*100|%|]{/c} and drop a cluster of {c_important}Stun Grenades{/c} that explode and deal {c_number}{payload:TOOLTIP_DAMAGE}{/c} total Physical damage and Stun enemies for {c_number}[{SF_5}|2|]{/c} seconds.`,
		id: 121,
		maxPoints: 1,
		x: 756.707,
		y: 296.195,
	},
	["Precision"]: {
		connections: [ "Capstone" ],
		description: `Critical Strikes with {c_important}Ranged{/c} Skills grant you {c_important}Precision{/c}. You gain {c_number}x[{SF_0} * 100|%|]{/c} increased Critical Strike Damage per stack of {c_important}Precision{/c}, up to a maximum of {c_number}x[({SF_0}*100)*{SF_1}|%|]{/c}.

When you reach maximum {c_important}Precision{/c}, your next {c_important}Ranged{/c} Skill is a guaranteed Critical Strike that deals {c_number}x[{SF_2} * 100|%|]{/c} increased Critical Strike Damage, then consumes all stacks of {c_important}Precision{/c}.`,
		id: 122,
		maxPoints: 1,
		x: 6.915,
		y: 296.525,
	},
};

export { rogue };