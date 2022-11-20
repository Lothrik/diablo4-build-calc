let sorcerer = {};

sorcerer["Trunk Data"] = {
	["Basic"]: {
		connections: [ "Core" ],
		x: 0,
		y: 0,
	},
	["Core"]: {
		connections: [ "Defensive" ],
		requiredPoints: 2,
		x: 0.40475000000000017,
		y: 1199.005,
	},
	["Defensive"]: {
		connections: [ "Conjuration" ],
		requiredPoints: 6,
		x: -1248.96684,
		y: 2330.6600000000003,
	},
	["Conjuration"]: {
		connections: [ "Mastery" ],
		requiredPoints: 11,
		x: 1248.21816,
		y: 2332.78,
	},
	["Mastery"]: {
		connections: [ "Ultimate" ],
		requiredPoints: 16,
		x: -1254.7118400000002,
		y: 3747.07405,
	},
	["Ultimate"]: {
		connections: [ "Capstone" ],
		requiredPoints: 23,
		x: 1246.08316,
		y: 3744.5938,
	},
	["Capstone"]: {
		requiredPoints: 33,
		x: 209.88266000000002,
		y: 4569.17,
	},
};

sorcerer["Basic"] = {
	["Frost Bolt"]: {
		connections: [ "Basic", "Enhanced Frost Bolt", ],
		description: `{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Throw a bolt of frost at an enemy, dealing {c_yellow}{payload:IMPACT}{/c} damage and {c_white}Chilling{/c} them for {c_yellow}{SF_4}%{/c}.`,
		maxPoints: 5,
		x: -314.79034,
		y: -169.61499999999978,
	},
	["Enhanced Frost Bolt"]: {
		connections: [ "Frost Bolt", "Flickering Frost Bolt", "Glinting Frost Bolt", ],
		description: `Frost Bolt has a {c_yellow}[{SF_7} * 100]%{/c} chance to explode on {c_white}Chilled{/c} targets, hitting nearby enemies. Chance increased to {c_yellow}100%{/c} against {c_white}Frozen{/c} targets.`,
		maxPoints: 3,
		x: -553.36684,
		y: -301.90999999999985,
	},
	["Flickering Frost Bolt"]: {
		connections: [ "Enhanced Frost Bolt", ],
		description: `Frost Bolt makes {c_white}Frozen{/c} enemies {c_white}Vulnerable{/c} for {c_yellow}{SF_9}{/c} seconds.`,
		maxPoints: 3,
		x: -859.02684,
		y: -329.8299999999999,
	},
	["Glinting Frost Bolt"]: {
		connections: [ "Enhanced Frost Bolt", ],
		description: `Frost Bolt generates {c_yellow}{SF_10}{/c} Mana when hitting {c_white}Chilled{/c} or {c_white}Frozen{/c} enemies.`,
		maxPoints: 3,
		x: -653.42184,
		y: -453.32499999999936,
	},
	["Spark"]: {
		connections: [ "Basic", "Enhanced Spark", ],
		description: `{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Launch a bolt of lightning that shocks an enemy {c_yellow}{SF_2}{/c} times, dealing {c_yellow}{payload:PAYLOAD_PROJECTILE}{/c} damage each hit.`,
		maxPoints: 5,
		x: -294.36784,
		y: 167.01000000000022,
	},
	["Enhanced Spark"]: {
		connections: [ "Spark", "Flickering Spark", "Glinting Spark", ],
		description: `Each time Spark hits, it has a {c_yellow}[{SF_6} * 100]%{/c} chance to hit up to {c_yellow}{SF_7}{/c} additional enemies, dealing {c_yellow}{payload:PAYLOAD_FORK_1}{/c} damage. If there are no other enemies to hit, Spark instead deals {c_yellow}[{SF_8} * 100]%{/c} increased damage to its primary target.`,
		maxPoints: 3,
		x: -544.16684,
		y: 312.77,
	},
	["Flickering Spark"]: {
		connections: [ "Enhanced Spark", ],
		description: `Each time Spark hits an enemy it has a {c_yellow}[{SF_14} * 100]%{/c} chance to spawn a {c_white}Crackling Energy{/c}.`,
		maxPoints: 3,
		x: -804.31684,
		y: 359.9500000000003,
	},
	["Glinting Spark"]: {
		connections: [ "Enhanced Spark", ],
		description: `Spark grants {c_yellow}[{SF_15}*100]%{/c} increased Critical Strike Chance per cast for {c_yellow}{SF_16}{/c} seconds, up to {c_yellow}[{SF_17}*100]%{/c}.`,
		maxPoints: 3,
		x: -605.7168399999999,
		y: 459.9550000000004,
	},
	["Arc Lash"]: {
		connections: [ "Basic", "Enhanced Arc Lash", ],
		description: `{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Unleash arcing lightning that shocks enemies in front of you for {c_yellow}{payload:DAMAGE}{/c}. Every {c_yellow}{SF_10}{/c} times Arc Lash swipes, it Stuns all enemies hit for {c_yellow}{buffduration:STUN}{/c} seconds.`,
		maxPoints: 5,
		x: 309.66515999999996,
		y: 169.14000000000033,
	},
	["Enhanced Arc Lash"]: {
		connections: [ "Arc Lash", "Glinting Arc Lash", "Flickering Arc Lash", ],
		description: `If Arc Lash's initial swipe Critically Strikes, it swipes an additional time.`,
		maxPoints: 3,
		x: 571.20816,
		y: 320.83500000000004,
	},
	["Glinting Arc Lash"]: {
		connections: [ "Enhanced Arc Lash", ],
		description: `Hitting a Stunned enemy with Arc Lash reduces your cooldowns by {c_yellow}[{SF_13}|2|]{/c} seconds.`,
		maxPoints: 3,
		x: 647.2881600000001,
		y: 464.81500000000005,
	},
	["Flickering Arc Lash"]: {
		connections: [ "Enhanced Arc Lash", ],
		description: `Gain {c_yellow}[{SF_7}*100]%{/c} Movement Speed for {c_yellow}{SF_8}{/c} seconds per enemy hit with Arc Lash, up to {c_yellow}[{SF_9}*100]%{/c}.`,
		maxPoints: 3,
		x: 871.32816,
		y: 352.72500000000036,
	},
	["Fire Bolt"]: {
		connections: [ "Basic", "Enhanced Fire Bolt", ],
		description: `{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:17}%{/c}
{/if}Hurl a flaming bolt, dealing {c_yellow}{payload:DAMAGE}{/c} damage and Burning for {c_yellow}{dot:BURNING}{/c} over {c_yellow}{buffduration:BURNING}{/c} seconds.`,
		maxPoints: 5,
		x: 309.42366,
		y: -168.95999999999958,
	},
	["Enhanced Fire Bolt"]: {
		connections: [ "Fire Bolt", "Glinting Fire Bolt", "Flickering Fire Bolt", ],
		description: `Fire Bolt pierces Burning enemies.`,
		maxPoints: 3,
		x: 547.59816,
		y: -314.18499999999995,
	},
	["Glinting Fire Bolt"]: {
		connections: [ "Enhanced Fire Bolt", ],
		description: `Critical Strikes with Fire Bolt increase the Burning damage the target takes by {c_yellow}x[{SF_11} * 100]%{/c} for {c_yellow}{buffduration:UPGRADEB_CRIT_DAMAGE}{/c} seconds.`,
		maxPoints: 3,
		x: 820.99316,
		y: -349.63499999999976,
	},
	["Flickering Fire Bolt"]: {
		connections: [ "Enhanced Fire Bolt", ],
		description: `Fire Bolt generates {c_yellow}{SF_9}{/c} Mana when hitting a Burning enemy.`,
		maxPoints: 3,
		x: 638.95816,
		y: -457.9850000000001,
	},
};

sorcerer["Core"] = {
	["Charged Bolts"]: {
		connections: [ "Core", "Enhanced Charged Bolt", ],
		description: `{c_gold}Mana Cost: {/c}{c_green}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Release {SF_4} bolts of lightning that course along the ground in an erratic pattern, dealing {c_yellow}{payload:PAYLOAD_PROJECTILE}{/c} each.`,
		maxPoints: 5,
		x: 356.99741,
		y: 194.84500000000025,
	},
	["Enhanced Charged Bolt"]: {
		connections: [ "Charged Bolts", "Greater Charged Bolts", "Destructive Charged Bolts", ],
		description: `Charged Bolts gains an extra projectile.`,
		maxPoints: 3,
		x: 596.88341,
		y: 327.09500000000025,
	},
	["Greater Charged Bolts"]: {
		connections: [ "Enhanced Charged Bolt", ],
		description: `Charged Bolts deals {c_yellow}x[{SF_27}*100]%{/c} increased damage to Stunned enemies.`,
		maxPoints: 3,
		x: 671.20341,
		y: 470.3000000000002,
	},
	["Destructive Charged Bolts"]: {
		connections: [ "Enhanced Charged Bolt", ],
		description: `Hitting an enemy at least {c_yellow}{SF_31}{/c} times with Charged Bolts in a single cast reduces their damage dealt by {c_yellow}[{SF_32}*100]%{/c} for {c_yellow}{SF_33}{/c} seconds.`,
		maxPoints: 3,
		x: 866.97341,
		y: 354.41499999999996,
	},
	["Frozen Orb"]: {
		connections: [ "Core", "Enhanced Frozen Orb", ],
		description: `{c_gold}Mana Cost:{/c} {c_green}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Unleash an orb that {c_white}Chills{/c} for {c_yellow}{SF_2}%{/c} and expels piercing shards dealing a total of {c_yellow}{payload:TOOLTIP_DAMAGE}{/c} damage. Upon expiration, Frozen Orb explodes, dealing {c_yellow}{payload:FROSTBOLT_DAMAGE}{/c} damage and {c_white}Chilling{/c} enemies for {c_yellow}{SF_9}%{/c}.`,
		maxPoints: 5,
		x: -276.07559000000003,
		y: -213.18499999999995,
	},
	["Enhanced Frozen Orb"]: {
		connections: [ "Destructive Frozen Orb", "Greater Frozen Orb", "Frozen Orb", ],
		description: `When cast above {c_yellow}{SF_28}{/c} Mana, Frozen Orb's explosion damage is increased by {c_yellow}x[{SF_29}*100]%{/c}.`,
		maxPoints: 3,
		x: -451.14859,
		y: -344.71000000000004,
	},
	["Destructive Frozen Orb"]: {
		connections: [ "Enhanced Frozen Orb", ],
		description: `Frozen Orb's explosion restores {c_yellow}{SF_23}{/c} Mana when hitting a {c_white}Frozen{/c} enemy.`,
		maxPoints: 3,
		x: -706.23659,
		y: -409.7249999999999,
	},
	["Greater Frozen Orb"]: {
		connections: [ "Enhanced Frozen Orb", ],
		description: `Frozen Orb's explosion has a {c_yellow}[{SF_31} * 100]%{/c} chance to make all enemies hit {c_white}Vulnerable{/c} for {c_yellow}{SF_32}{/c} seconds.`,
		maxPoints: 3,
		x: -492.59159,
		y: -496.77999999999975,
	},
	["Incinerate"]: {
		connections: [ "Core", "Enhanced Incinerate", ],
		description: `{c_gold}Mana Cost: {/c}{c_green}[{Resource Cost}*5] per second{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:39}%{/c}
{/if}Channel a beam of fire, Burning enemies for {c_yellow}{payload:TOOLTIP_ONLY_DAMAGE}{/c}. Damage increases by {c_yellow}{payload:TOOLTIP_RAMP_DAMAGE}{/c} per second, up to {c_yellow}{payload:TOOLTIP_MAX_DAMAGE}{/c}.`,
		maxPoints: 5,
		x: 465.31841,
		y: -36.914999999999964,
	},
	["Enhanced Incinerate"]: {
		connections: [ "Incinerate", "Destructive Incinerate", "Greater Incinerate", ],
		description: `While Channeling Incinerate, you take {c_yellow}[{SF_28} * 100]%{/c} less damage from Close enemies.`,
		maxPoints: 3,
		x: 757.16841,
		y: -63.054999999999836,
	},
	["Destructive Incinerate"]: {
		connections: [ "Enhanced Incinerate", ],
		description: `While Channeling Incinerate, you burn nearby enemies for {c_yellow}[{SF_29} * 100]%{/c} of the damage per second.`,
		maxPoints: 3,
		x: 967.48341,
		y: -164.3449999999998,
	},
	["Greater Incinerate"]: {
		connections: [ "Enhanced Incinerate", ],
		description: `Incinerate now starts at full power, but its Channeling cost is increased by {c_yellow}[{SF_36}*100]%{/c}.`,
		maxPoints: 3,
		x: 1011.94841,
		y: -21.029999999999745,
	},
	["Fireball"]: {
		connections: [ "Core", "Enhanced Fireball", ],
		description: `{c_gold}Mana Cost: {/c}{c_green}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Hurl an exploding ball of fire, dealing {c_yellow}{payload:PAYLOAD_PROJECTILE}{/c} damage to nearby enemies.`,
		maxPoints: 5,
		x: 227.45091,
		y: -214.91499999999996,
	},
	["Enhanced Fireball"]: {
		connections: [ "Fireball", "Greater Fireball", "Destructive Fireball", ],
		description: `Fireball costs {c_yellow}{SF_17}{/c} less Mana.`,
		maxPoints: 3,
		x: 403.01941,
		y: -351.8649999999998,
	},
	["Greater Fireball"]: {
		connections: [ "Enhanced Fireball", ],
		description: `When you cast Fireball while {c_white}Healthy{/c}, it has a {c_yellow}[{SF_25}*100]%{/c} increased radius and deals {c_yellow}x[{SF_26}*100]%{/c} increased Critical Strike Damage.`,
		maxPoints: 3,
		x: 408.29791,
		y: -496.53999999999996,
	},
	["Destructive Fireball"]: {
		connections: [ "Enhanced Fireball", ],
		description: `Fireball deals {c_yellow}x[{SF_21} * 100]%{/c} increased damage to the first enemy hit by its explosion.`,
		maxPoints: 3,
		x: 652.66841,
		y: -422.0250000000001,
	},
	["Chain Lightning"]: {
		connections: [ "Core", "Enhanced Chain Lightning", ],
		description: `{c_gold}Mana Cost: {/c}{c_green}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Unleash a stream of lightning that deals {c_yellow}{payload:DAMAGE}{/c} damage and chains between nearby enemies and you up to {c_yellow}{SF_2}{/c} times, prioritizing enemies.`,
		maxPoints: 5,
		x: 6.471419999999999,
		y: 258.3299999999999,
	},
	["Enhanced Chain Lightning"]: {
		connections: [ "Chain Lightning", "Greater Chain Lightning", "Destructive Chain Lightning", ],
		description: `Chain Lightning bounces to {c_yellow}{SF_9}{/c} additional enemy.`,
		maxPoints: 3,
		x: 12.32556,
		y: 443.24000000000024,
	},
	["Greater Chain Lightning"]: {
		connections: [ "Enhanced Chain Lightning", ],
		description: `Chain Lightning deals {c_yellow}x[{SF_10}*100]%{/c} increased damage per enemy hit.`,
		maxPoints: 3,
		x: -165.37309000000002,
		y: 558.9650000000001,
	},
	["Destructive Chain Lightning"]: {
		connections: [ "Enhanced Chain Lightning", ],
		description: `When Chain Lightning Critically Strikes, it has a {c_yellow}[{SF_11} * 100]%{/c} chance to spawn a {c_white}Crackling Energy{/c}.`,
		maxPoints: 3,
		x: 189.96291,
		y: 571.73,
	},
	["Ice Shards"]: {
		connections: [ "Core", "Enhanced Ice Shards", ],
		description: `{c_gold}Mana Cost: {/c}{c_green}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Launch {c_yellow}{SF_3}{/c} shards that deal {c_yellow}{payload:IMPACT_DAMAGE_NORMAL}{/c} damage each. Deals {c_yellow}x[{SF_2} * 100]%{/c} increased damage to {c_white}Frozen{/c} enemies.`,
		maxPoints: 5,
		x: -408.65009,
		y: -11.404999999999745,
	},
	["Enhanced Ice Shards"]: {
		connections: [ "Ice Shards", "Greater Ice Shards", "Destructive Ice Shards", ],
		description: `Ice Shards have a {c_yellow}[{SF_18}*100]%{/c} chance to ricochet to another enemy.`,
		maxPoints: 3,
		x: -703.37159,
		y: -24.404999999999745,
	},
	["Greater Ice Shards"]: {
		connections: [ "Enhanced Ice Shards", ],
		description: `While you have a {c_white}Barrier{/c} active, Ice Shards treats enemies as if they were {c_white}Frozen{/c}.`,
		maxPoints: 3,
		x: -945.28159,
		y: -88.375,
	},
	["Destructive Ice Shards"]: {
		connections: [ "Enhanced Ice Shards", ],
		description: `Hitting an enemy with {c_yellow}{SF_16}{/c} Ice Shards in a single cast makes them {c_white}Vulnerable{/c} for {c_yellow}{SF_17}{/c} seconds.`,
		maxPoints: 3,
		x: -953.97159,
		y: 29.110000000000127,
	},
	["Devastation"]: {
		connections: [ "Core", "Elemental Dominance", ],
		description: `Deal {c_yellow}x[{SF_2} * 100]%{/c} increased damage to {c_white}Healthy{/c} enemies.`,
		maxPoints: 3,
		x: -507.65659,
		y: 206.85500000000002,
	},
	["Elemental Dominance"]: {
		connections: [ "Devastation", ],
		description: `Your damage increases over time, up to a maximum of {c_yellow}[{SF_3}*sLevel]%{/c} after {c_yellow}{SF_1}{/c} seconds. Casting a Skill resets this effect.`,
		maxPoints: 3,
		x: -802.88159,
		y: 328.4500000000003,
	},
	["Potent Warding"]: {
		connections: [ "Core", ],
		description: `Your non-Physical Damage and Resistances are increased by {c_yellow}[{SF_1} *100]%{/c}.`,
		maxPoints: 3,
		x: 745.64341,
		y: 149.76000000000022,
	},
};

sorcerer["Defensive"] = {
	["Flame Shield"]: {
		connections: [ "Defensive", "Enhanced Flame Shield", ],
		description: `{c_gold}Cooldown:{/c} {c_green}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:17}%{/c}
{/if}Engulf yourself in flames for {c_yellow}{buffduration:FLAMESHIELD_BUFF}{/c} seconds, Burning nearby enemies for {c_yellow}{payload:AOE_DAMAGE}{/c} per second.

While Flame Shield is active, you are {c_white}Immune{/c}.`,
		maxPoints: 5,
		x: -37.99500000000012,
		y: -228.05500000000006,
	},
	["Enhanced Flame Shield"]: {
		connections: [ "Flame Shield", "Mystical Flame Shield", "Shimmering Flame Shield", ],
		description: `Flame Shield grants {c_yellow}[{SF_13} * 100]%{/c} Movement Speed while active.`,
		maxPoints: 3,
		x: -78.67499999999995,
		y: -402.10000000000014,
	},
	["Mystical Flame Shield"]: {
		connections: [ "Enhanced Flame Shield", ],
		description: `Enemies continue Burning for {c_yellow}{SF_14}{/c} additional seconds after being hit by Flame Shield.`,
		maxPoints: 3,
		x: -218.94000000000005,
		y: -516.065,
	},
	["Shimmering Flame Shield"]: {
		connections: [ "Enhanced Flame Shield", ],
		description: `Flame Shield makes enemies {c_white}Vulnerable{/c} for {c_yellow}{SF_15}{/c} seconds.`,
		maxPoints: 3,
		x: 26.329999999999927,
		y: -521.7900000000002,
	},
	["Frost Nova"]: {
		connections: [ "Defensive", "Enhanced Frost Nova", ],
		description: `{if:SF_18}{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c} seconds
{/if}{if:SF_19}{c_gold}Charges:{/c} {c_green}{SF_2}{/c}
{c_gold}Charge Cooldown:{/c_gold} {c_green}{Recharge Time}{/c} seconds
{/if}Unleash a torrent of frost, {c_white}Freezing{/c} enemies around you for {c_yellow}{buffduration:FREEZE}{/c} seconds.`,
		maxPoints: 5,
		x: -429.6400000000001,
		y: 2.209999999999809,
	},
	["Enhanced Frost Nova"]: {
		connections: [ "Frost Nova", "Mystical Frost Nova", "Shimmering Frost Nova", ],
		description: `Frost Nova's radius is increased by {c_yellow}[{SF_15} * 100]%{/c}.`,
		maxPoints: 3,
		x: -732.3600000000001,
		y: 0.6999999999998181,
	},
	["Mystical Frost Nova"]: {
		connections: [ "Enhanced Frost Nova", ],
		description: `Frost Nova's {c_white}Freeze{/c} duration is increased by {c_yellow}[{SF_12}*100]%{/c} when hitting {c_yellow}{SF_13}{/c} or more enemies.`,
		maxPoints: 3,
		x: -961.06,
		y: -59.03500000000008,
	},
	["Shimmering Frost Nova"]: {
		connections: [ "Enhanced Frost Nova", ],
		description: `Frost Nova generates {c_yellow}{SF_10}{/c} Mana per enemy hit.`,
		maxPoints: 3,
		x: -958.0450000000001,
		y: 72.44499999999994,
	},
	["Ice Armor"]: {
		connections: [ "Defensive", "Enhanced Ice Armor", ],
		description: `{c_gold}Cooldown:{/c} {c_green}[{Cooldown Time}|1|]{/c}
A {c_white}Barrier{/c} of ice forms around you for {c_yellow}{buffduration:ICE_BARRIER}{/c} seconds, absorbing {c_yellow}{shield:ICE_BARRIER}{/c} damage. While {c_white}Ice Armor{/c} is active, {c_yellow}[{SF_8}*100]%{/c} of your Cold Damage dealt is added to its {c_white}Barrier{/c}.`,
		maxPoints: 5,
		x: -253.36000000000013,
		y: 202.875,
	},
	["Enhanced Ice Armor"]: {
		connections: [ "Ice Armor", "Shimmering Ice Armor", "Mystical Ice Armor", ],
		description: `While Ice Armor is active, your Mana Regeneration is increased by {c_yellow}[{SF_10} * 100]%{/c}.`,
		maxPoints: 3,
		x: -426.97500000000014,
		y: 358.16999999999985,
	},
	["Shimmering Ice Armor"]: {
		connections: [ "Enhanced Ice Armor", ],
		description: `Enemies that hit you while Ice Armor is active have a {c_yellow}[{SF_12}*100]%{/c} chance to be {c_white}Frozen{/c} for {c_yellow}{buffduration:FREEZE}{/c} seconds.`,
		maxPoints: 3,
		x: -661.0150000000001,
		y: 414.3399999999999,
	},
	["Mystical Ice Armor"]: {
		connections: [ "Enhanced Ice Armor", ],
		description: `While Ice Armor’s {c_white}Barrier{/c} is at or above its original amount, you deal {c_yellow}x[{SF_9}*100]%{/c} increased damage.`,
		maxPoints: 3,
		x: -444.135,
		y: 493.19499999999994,
	},
	["Teleport"]: {
		connections: [ "Defensive", "Enhanced Teleport", ],
		description: `{if:SF_10}{c_gold}Mana Cost: {/c}{c_green}{Resource Cost}{/c}{else}{c_gold}Cooldown: {/c}{c_green}[{Cooldown Time}|1|]{/c}{/if}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Transform into lightning, becoming {c_white}Unstoppable{/c} and surging to the target location dealing {c_yellow}{payload:TELEPORT_DAMAGE_PAYLOAD}{/c} damage around you upon arrival.`,
		maxPoints: 5,
		x: 375.28499999999997,
		y: 141.66499999999996,
	},
	["Enhanced Teleport"]: {
		connections: [ "Teleport", "Mystical Teleport", "Shimmering Teleport", ],
		description: `After Teleporting, take {c_yellow}[{SF_12}*100]%{/c} less damage for {c_yellow}{SF_13}{/c} seconds.`,
		maxPoints: 3,
		x: 662.025,
		y: 258.0899999999999,
	},
	["Mystical Teleport"]: {
		connections: [ "Enhanced Teleport", ],
		description: `For {c_yellow}{buffduration:BUFF_CRACKLING_ENERGY}{/c} seconds after Teleporting, Crackling Energy deals {c_yellow}x[{SF_25} * 100]%{/c} more damage.`,
		maxPoints: 3,
		x: 933.1505,
		y: 263.4899999999998,
	},
	["Shimmering Teleport"]: {
		connections: [ "Enhanced Teleport", ],
		description: `Teleport’s cooldown is decreased by {c_yellow}[{SF_17}|1|]{/c} seconds per enemy hit, up to {c_yellow}{SF_18}{/c} seconds.`,
		maxPoints: 3,
		x: 805.699,
		y: 378.7299999999999,
	},
	["Elemental Attunement"]: {
		connections: [ "Defensive", ],
		description: `Elemental Critical Strikes reduce the cooldown of your {c_white}Defensive{/c} Skills by {c_yellow}[{SF_1}*100]%{/c}. This effect cannot occur more than once every {c_yellow}{SF_2}{/c} seconds.`,
		maxPoints: 3,
		x: -543.7650000000001,
		y: -268.4150000000002,
	},
	["Glass Cannon"]: {
		connections: [ "Defensive", ],
		description: `You deal {c_yellow}x[{SF_0}*100]%{/c} increased damage, but take {c_yellow}[{SF_1}*100]%{/c} more damage.`,
		maxPoints: 3,
		x: 148.49,
		y: 365.6099999999999,
	},
};

sorcerer["Conjuration"] = {
	["Hydra"]: {
		connections: [ "Conjuration", "Enhanced Hydra", ],
		description: `{c_gold}Mana Cost: {/c}{c_green}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:20}%{/c}
{/if}Summon a {SF_3} headed hydra for {c_yellow}[{SF_0}|1|]{/c} seconds. Each head spits fire at a nearby enemy, dealing {c_yellow}{payload:TOOLTIP_DAMAGE}{/c} damage.`,
		maxPoints: 5,
		x: 376.2149999999999,
		y: -182.79999999999995,
	},
	["Enhanced Hydra"]: {
		connections: [ "Hydra", "Invoked Hydra", "Summoned Hydra", ],
		description: `Hydras last for an additional {c_yellow}{SF_15}{/c} seconds.`,
		maxPoints: 3,
		x: 619.7950000000001,
		y: -308.0999999999999,
	},
	["Invoked Hydra"]: {
		connections: [ "Enhanced Hydra", ],
		description: `After you Critically Strike, Hydras gain {c_yellow}[{SF_13}*100]%{/c} Attack Speed for {c_yellow}{buffduration:MOD_ATTACK_SPEED_BONUS}{/c} seconds.`,
		maxPoints: 3,
		x: 896.0900000000001,
		y: -347.1099999999999,
	},
	["Summoned Hydra"]: {
		connections: [ "Enhanced Hydra", ],
		description: `Hydra also Burns enemies for an additional {c_yellow}[{SF_11}*100]%{/c} of its base damage dealt over {c_yellow}{buffduration:MOD_BURN}{/c} seconds.`,
		maxPoints: 3,
		x: 698.625,
		y: -447.7850000000001,
	},
	["Ice Blades"]: {
		connections: [ "Conjuration", "Enhanced Ice Blades", ],
		description: `{c_gold}Cooldown:{/c} {c_green}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:16}%{/c}
{/if}Conjure ice blades for {c_yellow}[{SF_0}|1|]{/c} seconds that rapidly slashes enemies for {c_yellow}{payload:TOOLTIP_DAMAGE}{/c} damage and has a {c_yellow}[{SF_11} * 100]%{/c} chance to make them {c_white}Vulnerable{/c} for {c_yellow}{SF_3}{/c} seconds.`,
		maxPoints: 5,
		x: -392.77,
		y: -171.32999999999993,
	},
	["Enhanced Ice Blades"]: {
		connections: [ "Ice Blades", "Summoned Ice Blades", "Invoked Ice Blades", ],
		description: `Ice Blades has a {c_yellow}[{SF_13} * 100]%{/c} increased chance to make enemies {c_white}Vulnerable{/c}.`,
		maxPoints: 3,
		x: -649.14,
		y: -287.95000000000005,
	},
	["Summoned Ice Blades"]: {
		connections: [ "Enhanced Ice Blades", ],
		description: `Every time Ice Blades hits a {c_white}Vulnerable{/c} enemy, it gains {c_yellow}[{SF_9} * 100]%{/c} Attack Speed, up to {c_yellow}[{SF_9} * {SF_10} * 100]%{/c}.`,
		maxPoints: 3,
		x: -899.299,
		y: -333.80500000000006,
	},
	["Invoked Ice Blades"]: {
		connections: [ "Enhanced Ice Blades", ],
		description: `Killing a {c_white}Vulnerable{/c} enemy increases your active Ice Blades' duration by {c_yellow}{SF_15}{/c} second.`,
		maxPoints: 3,
		x: -719.095,
		y: -424.7349999999999,
	},
	["Lightning Spear"]: {
		connections: [ "Conjuration", "Enhanced Lightning Spear", ],
		description: `{c_gold}Cooldown: {/c}{c_green}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:17}%{/c}
{/if}Conjure a crackling spear of lightning that seeks out enemies for [{SF_2}|1|] seconds, dealing {c_yellow}{payload:IMPACT_DAMAGE}{/c} per hit.`,
		maxPoints: 5,
		x: 3.9349999999999454,
		y: 249.82999999999993,
	},
	["Enhanced Lightning Spear"]: {
		connections: [ "Lightning Spear", "Summoned Lightning Spear", "Invoked Lightning Spear", ],
		description: `Lightning Spear has a {c_yellow}[{SF_11}*100]%{/c} increased chance to critically strike against Stunned enemies.`,
		maxPoints: 3,
		x: 5.029999999999973,
		y: 439.99,
	},
	["Summoned Lightning Spear"]: {
		connections: [ "Enhanced Lightning Spear", ],
		description: `Collecting {c_white}Crackling Energy{/c} reduces the cooldown of Lightning Spear by {c_yellow}[{SF_9}|1|]{/c} seconds.`,
		maxPoints: 3,
		x: -127.07500000000005,
		y: 583.565,
	},
	["Invoked Lightning Spear"]: {
		connections: [ "Enhanced Lightning Spear", ],
		description: `After critically striking, Lightning Spear has a {c_yellow}[{SF_10} * 100]%{/c} increased stacking critical strike chance for its duration.`,
		maxPoints: 3,
		x: 157.5250000000001,
		y: 584.88,
	},
	["Conjuration Mastery"]: {
		connections: [ "Conjuration", ],
		description: `While you have an active {c_white}Conjuration{/c} Skill, you deal {c_yellow}x[{SF_0} * 100]%{/c} increased damage.`,
		maxPoints: 3,
		x: 459.155,
		y: 235.40499999999997,
	},
	["Precision Magic"]: {
		connections: [ "Conjuration", ],
		description: `Your Lucky Hit Chance is increased by up to {c_yellow}[{SF_0} * 100]%{/c}.`,
		maxPoints: 3,
		x: 4.345000000000027,
		y: -340.5450000000001,
	},
	["Align the Elements"]: {
		connections: [ "Conjuration", "Mana Shield", "Protection", ],
		description: `You gain {c_yellow}{SF_0}%{/c} Damage Reduction against Elites for each second you don't take damage from any of these sources, up to {c_yellow}{SF_1}%{/c}.`,
		maxPoints: 3,
		x: 691.315,
		y: 0.8350000000000364,
	},
	["Mana Shield"]: {
		connections: [ "Align the Elements", ],
		description: `Every time you spend {c_yellow}{SF_0}{/c} Mana, you gain {c_yellow}[{SF_1} * 100]%{/c} Damage Reduction for {c_yellow}{SF_2}{/c} seconds.`,
		maxPoints: 3,
		x: 998.9250000000002,
		y: -101.02999999999997,
	},
	["Protection"]: {
		connections: [ "Align the Elements", ],
		description: `Using a cooldown grants {c_yellow}[{SF_0} * 100]%{/c} of your maximum Life as a {c_white}Barrier{/c} for {c_yellow}{buffduration:BUFF_BARRIER}{/c} seconds.`,
		maxPoints: 3,
		x: 1006.3200000000002,
		y: 99.54500000000007,
	},
};

sorcerer["Mastery"] = {
	["Meteor"]: {
		connections: [ "Mastery", "Enhanced Meteor", ],
		description: `{c_gold}Mana Cost: {/c}{c_green}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:27}%{/c}
{/if}Summon a meteor that strikes the target location, dealing {c_yellow}{payload:IMPACT_DAMAGE}{/c} damage and Burning the ground for {c_yellow}{payload:TOOLTIP_BURN_DAMAGE}{/c} damage over {SF_4} seconds.`,
		maxPoints: 5,
		x: 380.18000000000006,
		y: 119.21945,
	},
	["Enhanced Meteor"]: {
		connections: [ "Meteor", "Mage's Meteor", "Wizard's Meteor", ],
		description: `If Meteor hits {c_yellow}{SF_16}{/c} or more enemies, there is a {c_yellow}[{SF_24}*100]%{/c} chance an additional Meteor falls on the same location.`,
		maxPoints: 3,
		x: 661.1150000000001,
		y: 205.71395,
	},
	["Mage's Meteor"]: {
		connections: [ "Enhanced Meteor", ],
		description: `Meteor falls {c_yellow}[{SF_17}*100]%{/c} faster and costs {c_yellow}{SF_18}{/c} less Mana.`,
		maxPoints: 3,
		x: 781.1945000000001,
		y: 314.15794999999997,
	},
	["Wizard's Meteor"]: {
		connections: [ "Enhanced Meteor", ],
		description: `Meteor’s impact Immobilizes enemies for {c_yellow}{buffduration:IMMOBILIZE}{/c} seconds.`,
		maxPoints: 3,
		x: 913.1435000000001,
		y: 212.95895,
	},
	["Blizzard"]: {
		connections: [ "Mastery", "Enhanced Blizzard", ],
		description: `{c_gold}Mana Cost:{/c} {c_green}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:22}%{/c}
{/if}Summon a frigid blizzard that deals {c_yellow}{dot:TOOLTIP_BLIZZARD_DOT}{/c} damage and continuously {c_white}Chills{/c} enemies for {c_yellow}{SF_9}%{/c} over {c_yellow}{SF_4}{/c} seconds.`,
		maxPoints: 5,
		x: -3.214999999999918,
		y: -218.78955,
	},
	["Enhanced Blizzard"]: {
		connections: [ "Blizzard", "Mage's Blizzard", "Wizard's Blizzard", ],
		description: `Blizzard’s duration is increased by {c_yellow}{SF_13}{/c} seconds.`,
		maxPoints: 3,
		x: -1.7899999999999636,
		y: -379.78455,
	},
	["Mage's Blizzard"]: {
		connections: [ "Enhanced Blizzard", ],
		description: `Every second an enemy is in Blizzard, they take {c_yellow}x[{SF_14} * 100|1|]%{/c} increased damage from you, up to {c_yellow}x[{SF_15} * 100]%{/c}.`,
		maxPoints: 3,
		x: -133.76999999999998,
		y: -498.58855000000005,
	},
	["Wizard's Blizzard"]: {
		connections: [ "Enhanced Blizzard", ],
		description: `While you have an active Blizzard, your {c_white}Core{/c} Skills cost {c_yellow}[{SF_16} * 100]%{/c} less Mana.`,
		maxPoints: 3,
		x: 131.4000000000001,
		y: -504.27355,
	},
	["Ball Lightning"]: {
		connections: [ "Mastery", "Enhanced Ball Lightning", ],
		description: `{c_gold}Mana Cost: {/c}{c_green}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Conjure a ball of lightning that slowly moves forward, continually zapping enemies for {c_yellow}{payload:BALL_AOE}{/c} damage`,
		maxPoints: 5,
		x: -399.365,
		y: 2.0399499999999993,
	},
	["Enhanced Ball Lightning"]: {
		connections: [ "Ball Lightning", "Wizard's Ball Lightning", "Mage's Ball Lightning", ],
		description: `Ball Lightning deals damage {c_yellow}[{SF_11}*100]%{/c} more frequently.`,
		maxPoints: 3,
		x: -735.7249999999999,
		y: 0.48499999999999943,
	},
	["Wizard's Ball Lightning"]: {
		connections: [ "Enhanced Ball Lightning", ],
		description: `If an enemy is hit at least {c_yellow}{SF_12}{/c} times by a cast of Ball Lightning, a {c_white}Crackling Energy{/c} is formed.`,
		maxPoints: 3,
		x: -945.2549999999999,
		y: -58.65965,
	},
	["Mage's Ball Lightning"]: {
		connections: [ "Enhanced Ball Lightning", ],
		description: `Each time Ball Lightning hits an enemy, it deals {c_yellow}x[{SF_9}*100]%{/c} increased damage, up to {c_yellow}x[{SF_10}*100]%{/c}.`,
		maxPoints: 3,
		x: -940.325,
		y: 63.21445,
	},
	["Inner Flames"]: {
		connections: [ "Mastery", "Soulfire", "Devouring Flames", ],
		description: `Your {c_white}Pyromancy{/c} Skills deal {c_yellow}x[{SF_1}*100]%{/c} increased damage after you haven't taken damage for {c_yellow}{SF_0}{/c} seconds.`,
		maxPoints: 3,
		x: 255.6250000000001,
		y: 316.58344999999997,
	},
	["Soulfire"]: {
		connections: [ "Inner Flames", ],
		description: `{c_white}Fireball{/c} and {c_white}Meteor{/c} have an {c_yellow}[{SF_0|1|}* 100]%{/c} increased chance to Critically Strike per enemy hit.`,
		maxPoints: 3,
		x: 277.19500000000005,
		y: 524.50095,
	},
	["Devouring Flames"]: {
		connections: [ "Inner Flames", ],
		description: `Your {c_white}Pyromancy{/c} Skills deal {c_yellow}x[{SF_0} * 100]%{/c} increased direct damage for each source of Burning on an enemy, up to {c_yellow}x[{SF_0} * {SF_1} * 100]%{/c}.`,
		maxPoints: 3,
		x: 532.345,
		y: 474.57894999999996,
	},
	["Regenerative Conduit"]: {
		connections: [ "Mastery", "Static Discharge", "Shocking Impact", ],
		description: `{c_white}Crackling Energy{/c} restores {c_yellow}{SF_0}{/c} Mana upon pickup.`,
		maxPoints: 3,
		x: -546.1899999999998,
		y: 219.62895,
	},
	["Static Discharge"]: {
		connections: [ "Regenerative Conduit", ],
		description: `{c_gold}Lucky Hit:{/c} Critical Strikes with {c_white}Shock{/c} Skills have a {c_yellow}[{SF_0} *100]%{/c} chance to form a {c_white}Crackling Energy{/c}.`,
		maxPoints: 3,
		x: -747.5999999999999,
		y: 402.77194999999995,
	},
	["Shocking Impact"]: {
		connections: [ "Regenerative Conduit", ],
		description: `Every time you Stun an enemy you deal {c_yellow}{payload:LIGHTNING_PAYLOAD}{/c} Lightning Damage to them.`,
		maxPoints: 3,
		x: -937.78,
		y: 288.74794999999995,
	},
	["Icy Veil"]: {
		connections: [ "Mastery", "Hoarfrost", "Cold Front", ],
		description: `Your {c_white}Barriers{/c} have a {c_yellow}[{SF_0} * 100]%{/c} increased duration.`,
		maxPoints: 3,
		x: -512.78,
		y: -241.53355,
	},
	["Hoarfrost"]: {
		connections: [ "Icy Veil", ],
		description: `You deal more damage to enemies the more {c_white}Chilled{/c} they are, up to {c_yellow}x[{SF_0} * 100]%{/c} while they are {c_white}Frozen{/c}.`,
		maxPoints: 3,
		x: -674.5999999999999,
		y: -423.90055,
	},
	["Cold Front"]: {
		connections: [ "Icy Veil", ],
		description: `While you have a {c_white}Barrier{/c} active, you apply {c_yellow}[{SF_0} * 100]%{/c} more {c_white}Chill{/c}.`,
		maxPoints: 3,
		x: -857.8050000000001,
		y: -313.91055,
	},
	["Firewall"]: {
		connections: [ "Mastery", "Enhanced Firewall", ],
		description: `{c_gold}Mana Cost: {/c}{c_green}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:20}%{/c}
{/if}Create a wall of flames that Burns enemies for {c_yellow}{dot:TOOLTIP_BURNING}{/c} over {c_yellow}{SF_0}{/c} seconds.`,
		maxPoints: 5,
		x: -104.50499999999988,
		y: 231.79595,
	},
	["Enhanced Firewall"]: {
		connections: [ "Firewall", "Wizard's Firewall", "Mage's Firewall", ],
		description: `Enemies that stand in Firewall for at least {c_yellow}{SF_14}{/c} seconds take {c_yellow}x[{SF_15}*100]%{/c} increased Burning damage from all sources.`,
		maxPoints: 3,
		x: -191.1099999999999,
		y: 388.57194999999996,
	},
	["Wizard's Firewall"]: {
		connections: [ "Enhanced Firewall", ],
		description: `You deal {c_yellow}x[{SF_17}*100]%{/c} increased damage per active Firewall.`,
		maxPoints: 3,
		x: -371.865,
		y: 493.62095,
	},
	["Mage's Firewall"]: {
		connections: [ "Enhanced Firewall", ],
		description: `Each enemy standing in Firewall increases your Mana Regeneration by {c_yellow}[{SF_16}*100]%{/c}.`,
		maxPoints: 3,
		x: -133.39999999999986,
		y: 525.1759500000001,
	},
};

sorcerer["Ultimate"] = {
	["Inferno"]: {
		connections: [ "Ultimate", "Upgrade 1", ],
		description: `{c_gold}Cooldown: {/c}{c_green}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}[{Combat Effect Chance}*2]%{/c}
{/if}Ignite a roaring inferno that pulses in and out of the target area, Burning enemies for {c_yellow}{payload:TOOLTIP_TOTAL_DAMAGE}{/c} damage over {c_yellow}{SF_5}{/c} seconds, and then explodes, dealing {c_yellow}{payload:FINAL_EXPLOSION_DAMAGE}{/c} damage to enemies on the outer edge.`,
		maxPoints: 5,
		x: 318.105,
		y: -144.18580000000003,
	},
	["Upgrade 1"]: {
		connections: [ "Inferno", "Upgrade 2", ],
		description: `Enemies inside of Inferno's final explosion are Immobilized for {c_yellow}{buffduration:IMMOBILIZE}{/c} seconds.`,
		maxPoints: 3,
		x: 490.79999999999995,
		y: -293.3353,
	},
	["Upgrade 2"]: {
		connections: [ "Upgrade 1", ],
		description: `Killing a Burning enemy reduces Inferno's cooldown by {c_yellow}{SF_14}{/c} second.`,
		maxPoints: 3,
		x: 792.4950000000001,
		y: -324.0783,
	},
	["Unstable Currents"]: {
		connections: [ "Ultimate", "Prime Unstable Currents", ],
		description: `{c_gold}Cooldown: {/c}{c_green}[{Cooldown Time}|1|]{/c}
Lightning surges within you for {c_yellow}{buffduration:CURRENTS_ACTIVE}{/c} seconds. Whenever you cast a {c_white}Lightning{/c} Skill, another random non-Basic {c_white}Lightning{/c} Skill is also cast.`,
		maxPoints: 5,
		x: 314.75,
		y: 150.59570000000002,
	},
	["Prime Unstable Currents"]: {
		connections: [ "Unstable Currents", ],
		description: `Unstable Currents increases Attack Speed by {c_yellow}[{SF_1} * 100]%{/c} while active.`,
		maxPoints: 3,
		x: 558.53,
		y: 247.6427,
	},
	["Supreme Unstable Currents"]: {
		connections: [ "Prime Unstable Currents", ],
		description: `While Unstable Currents is active, collecting {c_white}Crackling Energy{/c} increases its duration by {c_yellow}[{SF_4}|2|]{/c} seconds.`,
		maxPoints: 3,
		x: 615.31,
		y: 372.1352,
	},
	["Deep Freeze"]: {
		connections: [ "Ultimate", "Prime Deep Freeze", ],
		description: `{c_gold}Cooldown: {/c}{c_green}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Encase yourself in ice, becoming {c_white}Immune{/c} for {c_yellow}{buffduration:BUFF_IMMUNE}{/c} seconds, continually {c_white}Chilling{/c} enemies for {c_yellow}{SF_6}%{/c}. When Deep Freeze ends, {c_white}Frozen{/c} enemies shatter for {c_yellow}{payload:FROZEN_DAMAGE}{/c}. Casting Deep Freeze again ends the effect early.`,
		maxPoints: 5,
		x: -295.855,
		y: -140.2508,
	},
	["Prime Deep Freeze"]: {
		connections: [ "Deep Freeze", "Supreme Deep Freeze", ],
		description: `Gain {c_yellow}[{SF_14}*100]%{/c} of your Life as a {c_white}Barrier{/c} for {c_yellow}{SF_15}{/c} seconds for each enemy shattered by Deep Freeze.`,
		maxPoints: 3,
		x: -507.53,
		y: -256.4198,
	},
	["Supreme Deep Freeze"]: {
		connections: [ "Prime Deep Freeze", ],
		description: `When Deep Freeze ends, your active cooldowns are reduced by {c_yellow}[{SF_16} * 100]%{/c}.`,
		maxPoints: 3,
		x: -799.664,
		y: -259.8198,
	},
	["Frostbite"]: {
		connections: [ "Ultimate", "Permafrost", "Icy Touch", ],
		description: `You deal {c_yellow}x[{SF_0} * 100]%{/c} more damage to {c_white}Frozen{/c} or {c_white}Vulnerable{/c} enemies, and {c_yellow}x[{SF_1} * 100]%{/c} more damage to enemies who are both {c_white}Frozen{/c} and {c_white}Vulnerable{/c}.`,
		maxPoints: 3,
		x: -0.7100000000000364,
		y: -295.4413,
	},
	["Permafrost"]: {
		connections: [ "Frostbite", "Snap Freeze", ],
		description: `{c_white}Frost{/c} Skills deal {c_yellow}x[{SF_0} * 100]%{/c} increased damage to Elites.`,
		maxPoints: 3,
		x: -146.56500000000005,
		y: -443.1773,
	},
	["Snap Freeze"]: {
		connections: [ "Permafrost", "Icy Touch", ],
		description: `{c_gold}Lucky Hit:{/c} {c_white}Frost{/c} Skills have up to a {c_yellow}{SF_0}%{/c} chance to instantly {c_white}Freeze{/c}.`,
		maxPoints: 3,
		x: -1.9600000000000364,
		y: -586.7988,
	},
	["Icy Touch"]: {
		connections: [ "Frostbite", "Snap Freeze", ],
		description: `You deal {c_yellow}x[{SF_0} * 100]%{/c} increased damage to {c_white}Vulnerable{/c} enemies.`,
		maxPoints: 3,
		x: 135.0999999999999,
		y: -439.9178,
	},
	["Coursing Currents"]: {
		connections: [ "Ultimate", "Electrocution", "Conduction", ],
		description: `Hitting enemies with {c_white}Shock{/c} Skills increases your Critical Strike Chance by {c_yellow}[{SF_1} * 100]%{/c}. Resets upon getting a Critical Strike.`,
		maxPoints: 3,
		x: 14.789999999999964,
		y: 281.3837,
	},
	["Electrocution"]: {
		connections: [ "Coursing Currents", "Convulsions", ],
		description: `Enemies deal {c_yellow}[{SF_0}*100]%{/c} less damage for {c_yellow}{buffduration:BUFF_DAMAGE_PENALITY}{/c} seconds after being Critically Struck by your {c_white}Shock{/c} Skills.`,
		maxPoints: 3,
		x: 174.06500000000005,
		y: 429.5872,
	},
	["Convulsions"]: {
		connections: [ "Conduction", "Electrocution", ],
		description: `{c_gold}Lucky Hit:{/c} {c_white}Shock{/c} Skills have up to a {c_yellow}[{SF_0}]%{/c} chance to Stun enemies for {c_yellow}{SF_1}{/c} seconds.`,
		maxPoints: 3,
		x: 24.289999999999964,
		y: 587.3611999999999,
	},
	["Conduction"]: {
		connections: [ "Coursing Currents", "Convulsions", ],
		description: `Critical Strikes with {c_white}Shock{/c} Skills increase your Attack Speed by {c_yellow}[{SF_0} * 100]%{/c} for {c_yellow}{SF_1}{/c} seconds.`,
		maxPoints: 3,
		x: -125.19000000000005,
		y: 431.62719999999996,
	},
	["Immolated Flesh"]: {
		connections: [ "Ultimate", "Endless Pyre", "Fiery Surge", ],
		description: `Burning enemies deal {c_yellow}[{SF_0}*100|1|]%{/c} reduced damage.`,
		maxPoints: 3,
		x: 566.69,
		y: 0.6455000000000002,
	},
	["Endless Pyre"]: {
		connections: [ "Pyromania", "Immolated Flesh", ],
		description: `Burning effects last {c_yellow}[{SF_0}*100]%{/c} longer.`,
		maxPoints: 3,
		x: 832.8999999999999,
		y: 75.9572,
	},
	["Pyromania"]: {
		connections: [ "Fiery Surge", "Endless Pyre", ],
		description: `You deal {c_yellow}x[{SF_0} * 100]%{/c} increased Critical Strike Damage per nearby Burning enemy, up to {c_yellow}x[{SF_2} * 100]%{/c}.`,
		maxPoints: 3,
		x: 1088.14,
		y: 0.014499999999999957,
	},
	["Fiery Surge"]: {
		connections: [ "Pyromania", "Immolated Flesh", ],
		description: `Killing a Burning enemy grants {c_yellow}[{SF_0} * 100]%{/c} Attack Speed for {c_yellow}{buffduration:ATTACK_SPEED_BONUS}{/c} seconds.`,
		maxPoints: 3,
		x: 822.8,
		y: -87.7103,
	},
};

sorcerer["Capstone"] = {
	["Shatter"]: {
		connections: [ "Capstone", ],
		description: `After {c_white}Freeze{/c} expires, enemies explode for {c_yellow}[{SF_0} * 100]%{/c} of the damage you dealt to them while {c_white}Frozen{/c}.`,
		maxPoints: 1,
		x: -562.921,
		y: 368.8950000000001,
	},
	["Icefall"]: {
		connections: [ "Capstone", ],
		description: `{c_gold}Lucky Hit:{/c} Your {c_white}Frost{/c} Skills have up to a {c_yellow}[{SF_0} * 100]%{/c} chance to make your next {c_white}Ice Shards{/c}, {c_white}Frozen Orb{/c}, or {c_white}Blizzard{/c} consume no Mana and deal {c_yellow}x[{SF_1} * 100]%{/if}{/c} more damage. Chance is doubled against {c_white}Vulnerable{/c} enemies.`,
		maxPoints: 1,
		x: -917.1545000000001,
		y: 368.3850000000001,
	},
	["Warmth"]: {
		connections: [ "Capstone", ],
		description: `{c_gold}Lucky Hit:{/c} Up to a {c_yellow}{SF_1}%{/c} chance to gain {c_yellow}{SF_0}{/c} Mana per source of Burning on the enemy.`,
		maxPoints: 1,
		x: 498.26050000000004,
		y: 369.69500000000005,
	},
	["Esu's Ferocity"]: {
		connections: [ "Capstone", ],
		description: `You deal {c_yellow}x[{SF_1}*100]%{/c} increased Burning damage to enemies over {c_yellow}[{SF_2}*100]%{/c} Life and {c_yellow}x[{SF_0}*100]%{/c} increased {c_white}Pyromancy{/c} Skill Direct Damage to enemies under {c_yellow}[{SF_2}*100]%{/c} Life.`,
		maxPoints: 1,
		x: 880.1705,
		y: 371.41999999999996,
	},
	["Overflowing Energy"]: {
		connections: [ "Capstone", ],
		description: `{c_white}Crackling Energy{/c} hits {c_yellow}{SF_0}{/c} additional enemy. Each time {c_white}Crackling Energy{/c} hits an enemy, your {c_white}Shock{/c} Skill cooldowns are reduced by {c_yellow}[{SF_1}|1|]{/c} seconds, increased to {c_yellow}[{SF_2}|2|]{/c} seconds against Elites.`,
		maxPoints: 1,
		x: -200.6893,
		y: 364.7099999999999,
	},
	["Vyr's Mastery"]: {
		connections: [ "Capstone", ],
		description: `Close enemies take {c_yellow}x[{SF_1}*100]%{/c} more damage from your {c_white}Shock{/c} Skills and deal {c_yellow}x[{SF_3} * 100]%{/c} less damage to you.`,
		maxPoints: 1,
		x: 150.69549999999998,
		y: 368.05499999999995,
	},
};

export { sorcerer };