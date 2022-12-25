let codexData = {
	"Slots": {
		"Defensive": `Shield, Helmet, Chest, Pants, Amulet [+50%].`,
		"Offensive": `1H Weapon, 2H Weapon [+100%], Off-Hand, Gloves, Amulet [+50%], Ring.`,
		"Resource": `Helmet, Amulet [+50%], Ring.`,
		"Utility": `Helmet, Chest, Boots, Gloves, Amulet [+50%].`,
		"Mobility": `Boots, Amulet [+50%].`
	},
	"General": {
		"Defensive": {
			"Aspect of the Deflecting Barrier": {
				power: `While you have a Barrier active, there is a 20% chance to ignore incoming direct damage from Distant enemies.`,
				region: `Hawezar`
			},
			"Aspect of Disobedience": {
				dungeon: `Halls of the Damned`,
				power: `You gain 0.25% increased Armor for 4 seconds when you deal any form of damage, stacking up to 25.00%.`,
				region: `Kehjistan`
			},
			"Aspect of Might": {
				dungeon: `Dark Ravine`,
				power: `Basic Skills grant 25% Damage Reduction for 4.0 seconds.`,
				region: `Dry Steppes`
			},
			"Protecting Aspect": {
				dungeon: `Caldera Gate`,
				power: `When struck, a magical bubble forms around you for 8 seconds, absorbing # damage. Can only occur once per 10 seconds.`,
				region: `Fractured Peaks`
			},
			"Aspect of the Protector": {
				dungeon: `Lost Archives`,
				power: `Every 10 seconds, gain a Barrier absorbing up to # damage.`,
				region: `Fractured Peaks`
			}
		},
		"Offensive": {
			"Edgemaster's Aspect": {
				power: `Skills deal up to x24% increased damage based on available resource when cast, receiving the full benefit while at full resource.`,
				region: `Scosglen`
			},
			"Aspect of the Expectant": {
				power: `Enemies hit with Basic Skills increases the damage of your next Core Skill by x5.0%, up to x50%.`,
				region: `Scosglen`
			},
			"Aspect of Inner Calm": {
				power: `Deal x3.0% increased damage for each second you stand still, up to x30%.`,
				region: `Scosglen`
			},
			"Needleflare Aspect": {
				power: `Thorns damage dealt has a 20% chance to deal damage to all enemies around you.`,
				region: `Kehjistan`
			},
			"Aspect of Pummeling": {
				power: `Deal x40% increased damage to Stunned, Knocked Down, and Frozen enemies.`,
				region: `Kehjistan`
			},
			"Rapid Aspect": {
				power: `Basic Skills gain 23% Attack Speed.`,
				region: `Dry Steppes`
			},
			"Aspect of Retribution": {
				dungeon: `Abandoned Mineworks`,
				power: `Distant enemies have a 15% chance to be Stunned for 2 seconds when they hit you. You deal 30% increased damage to Stunned enemies.`,
				region: `Kehjistan`
			},
		},
		"Resource": {
			"Aspect of the Umbral": {
				power: `Restore 1 resource when you Crowd Control an enemy.`,
				region: `Dry Steppes`
			}
		},
		"Utility": {
			"Aspect of Shared Misery": {
				power: `Lucky Hit: When you hit a Crowd Controlled enemy, there is up to a 30% chance for that Crowd Control effect to spread to another unaffected enemy.`,
				region: `Hawezar`
			}
		},
		"Mobility": {
			"Ghostwalker Aspect": {
				power: `You may move freely through enemies while below 40% total Life.`,
				region: `Scosglen`
			},
			"Wind Striker Aspect": {
				power: `Critical Strikes grant 8.0% Movement Speed for 1 second. The duration can be extended.`,
				region: `Kehjistan`
			}
		}
	},
	"Barbarian": {
		"Defensive": {
			"Aspect of Bul-Kathos": {
				power: `Leap creates an Earthquake that deals # Physical damage over 4 seconds. While standing in Earthquakes, you gain 5% increased Damage Reduction.`,
				region: `Hawezar`
			},
			"Aspect of the Iron Warrior": {
				power: `Iron Skin also makes you Unstoppable.`,
				region: `Dry Steppes`
			},
			"Aspect of Numbing Wrath": {
				power: `Each point of Fury generated while at maximum Fury grants # Fortify.`,
				region: `Hawezar`
			},
			"Aspect of Tempering Blows": {
				dungeon: `Defiled Catacomb`,
				power: `After swapping weapons 6 times, gain # Fortify.`,
				region: `Fractured Peaks`
			}
		},
		"Offensive": {
			"Aspect of Ancestral Echoes": {
				power: `Lucky Hit: Damaging enemies with Leap, Upheaval, or Whirlwind has up to a 40% chance to summon an Ancient to perform the same Skill. Can only happen once every 5 seconds.`,
				region: `Hawezar`
			},
			"Aspect of Ancestral Force": {
				power: `Hammer of the Ancients quakes outwards, dealing 32% of its damage to enemies.`,
				region: `Scosglen`
			},
			"Aspect of Berserk Ripping": {
				power: `Whenever you deal direct damage while Berserking, inflict 22% of the base damage dealt as additional Bleeding damage over 5 seconds.`,
				region: `Dry Steppes`
			},
			"Brawler's Aspect": {
				power: `Enemies damaged by Kick or Charge will explode if they are killed within the next 2 seconds, dealing # damage to surrounding enemies.`,
				region: `Hawezar`
			},
			"Death Wish Aspect": {
				power: `Gain # Thorns while Berserking.`,
				region: `Scosglen`
			},
			"Aspect of the Dire Whirlwind": {
				power: `Whirlwind's Critical Strike Chance is increased by 5% for each second it is channeled, up to 20%.`,
				region: `Scosglen`
			},
			"Aspect of Quickening Pulse": {
				power: `Lucky Hit: Up to a 20% chance to reduce the Cooldowns of your non-Ultimate Skills by 1.5 seconds when you inflict Bleeding on Elites.`,
				region: `Kehjistan`
			},
			"Veteran Brawler's Aspect": {
				power: `Each time a Core Skill deals direct damage to an enemy, your next Charge or Leap deals x15% increased damage, up to 225%.`,
				region: `Kehjistan`
			},
			"Windstriker's Aspect": {
				power: `After swapping weapons 6 times, gain 20% increased Attack Speed for 4 seconds.`,
				region: `Hawezar`
			}
		},
		"Resource": {
			"Aspect of Echoing Fury": {
				power: `Your Shout Skills generate 2.0 Fury per second while active.`,
				region: `Kehjistan`
			},
			"Aspect of the Relentless Armsmaster": {
				power: `Gain x20% increased Fury Generation while all damage bonuses from Walking Arsenal are active.`,
				region: `Scosglen`
			},
			"Slaking Aspect": {
				dungeon: `Maulwood`,
				power: `Lucky Hit: You have up to a 30% chance to gain 20 Fury when Rend deals direct damage to at least one Bleeding enemy.`,
				region: `Fractured Peaks`
			},
			"Aspect of Unrelenting Fury": {
				power: `Killing an enemy with a Core Skill refunds 10.0% of its base Fury cost. Can only happen once per Skill cast.`,
				region: `Fractured Peaks`
			}
		},
		"Utility": {
			"Aspect of Anemia": {
				dungeon: `Kor Dragan Barracks`,
				power: `Lucky Hit: Direct damage against Bleeding enemies has up to a 31% chance to Stun them for 2 seconds.`,
				region: `Fractured Peaks`
			},
			"Relentless Berserker's Aspect": {
				power: `Lucky Hit: Damaging an enemy with a Core Skill has up to a 22% chance to extend the duration of Berserking by 1 second. Double this duration if it was a Critical Strike.`,
				region: `Kehjistan`
			}
		},
		"Mobility": {
			"Aspect of Perpetual Stomping": {
				power: `Damaging an enemy with Kick or Ground Stomp resets Leap's Cooldown.`,
				region: `Dry Steppes`
			}
		}
	},
	"Druid": {
		"Defensive": {
			"Aspect of Cyclonic Force": {
				power: `Cyclone Armor also provides Physical Damage Reduction. In addition, Cyclone Armor will also be applied to all Nearby Allies.`,
				region: `Kehjistan`
			},
			"Aspect of Mending Stone": {
				power: `The duration of Earthen Bulwark is increased by 6 seconds. In addition, killing an enemy with Earth Skills replenishes # of your active Earthen Bulwark's barrier.`,
				region: `Dry Steppes`
			},
			"Skinwalker's Aspect": {
				dungeon: `Fading Echo`,
				power: `When you use a Shapeshifting Skill that changes your form, gain # Life. If you are at full Life, gain the same amount as Fortify.`,
				region: `Kehjistan`
			},
			"Stalking Beast Aspect": {
				dungeon: `Anica's Claim`,
				power: `Gain Stealth for 2 seconds when killing enemies with Shred. Breaking Stealth with an attack grants Ambush which guarantees Critical Strikes for 1.0 seconds.`,
				region: `Fractured Peaks`
			},
			"Vigorous Aspect": {
				power: `Gain 10.0% Damage Reduction while Shapeshifted into a Werewolf.`,
				region: `Hawezar`
			}
		},
		"Offensive": {
			"Crashstone Aspect": {
				power: `Earth Skills deal x40% more Critical Strike damage to Crowd Controlled enemies.`,
				region: `Scosglen`
			},
			"Nighthowler's Aspect": {
				dungeon: `Forbidden City`,
				power: `Blood Howl increases Critical Strike Chance by 5.0%. In addition, Blood Howl also affects Nearby Companions and Players for 3 seconds.`,
				region: `Fractured Peaks`
			},
			"Overcharged Aspect": {
				power: `Lucky Hit: Up to a 10% chance when dealing Lightning damage to overload the target for 3 seconds, causing any direct damage you deal to them to pulse # additional damage to surrounding enemies.`,
				region: `Scosglen`
			},
			"Aspect of the Rampaging Werebeast": {
				power: `The duration of Grizzly Rage is increased by 1 seconds. In addition, Critical Strikes while Grizzly Rage is active increase your Critical Strike Damage by 10% for the duration.`,
				region: `Hawezar`
			},
			"Aspect of Retaliation": {
				power: `Your Core Skills deal up to x20% increased damage based on your percent Fortified Health.`,
				region: `Dry Steppes`
			},
			"Shepherd's Aspect": {
				power: `Core Skills deal an additional 6.0% damage for each active Companion.`,
				region: `Dry Steppes`
			},
			"Aspect of the Tempest": {
				power: `Hurricane damage is increased by x7.0% each second while active.`,
				region: `Hawezar`
			},
			"Aspect of the Ursine Horror": {
				dungeon: `Belfry Zakara`,
				power: `Pulverize is now also an Earth Skill. After casting Pulverize, tectonic spikes continue to deal # damage over 2 seconds.`,
				region: `Hawezar`
			}
		},
		"Resource": {
			"Aspect of the Changeling's Debt": {
				power: `Werebear Skills restore 1.0 Spirit when you hit enemies afflicted by your Poisons. When Spirit is restored, your Poison effects are removed from the enemy.`,
				region: `Kehjistan`
			},
			"Mangled Aspect": {
				dungeon: `Immortal Emanation`,
				power: `Gain 1 Spirit when you are struck as a Werebear.`,
				region: `Fractured Peaks`
			},
			"Storm Beast's Aspect": {
				power: `Lucky Hit: Storm Skills have up to a 15% chance to grant 10 Spirit.

Your base Storm Skills are now also Werewolf Skills.`,
				region: `Dry Steppes`
			},
			"Aspect of the Unsatiated": {
				dungeon: `Tormented Ruins`,
				power: `After killing an enemy with Shred, your next Werewolf Skill generates x20% more Spirit and deals x20% increased damage.`,
				region: `Fractured Peaks`
			}
		},
		"Utility": {
			"Ballistic Aspect": {
				power: `When you have Fortified Life your Earth Skills gain +3.`,
				region: `Scosglen`
			},
			"Aspect of Quicksand": {
				power: `Damage from Earth Skills Slow enemies hit by 25% for 5 seconds.`,
				region: `Scosglen`
			},
			"Stormshifter's Aspect": {
				power: `While Hurricane is active, gain +3 to your Shapeshifting Skills.`,
				region: `Kehjistan`
			}
		},
		"Mobility": {
		}
	},
	"Necromancer": {
		"Defensive": {
			"Aspect of Grasping Veins": {
				power: `Enemies who are Stunned by Corpse Tendrils are also made Vulnerable for its duration. If they die while Stunned, they have a 15% chance to spawn a Blood Orb.`,
				region: `Kehjistan`
			}
		},
		"Offensive": {
			"Blighted Aspect": {
				power: `The Shadowblight Passive deals x15% increased damage against Slowed or Chilled enemies, and x30% increased damage against Stunned enemies instead.`,
				region: `Hawezar`
			},
			"Blood-bathed Aspect": {
				dungeon: `Hoarfrost Demise`,
				power: `Blood Surge's nova echoes again after a short delay, dealing x60% less damage.`,
				region: `Fractured Peaks`
			},
			"Blood Seeker's Aspect": {
				power: `Blood Lance deals x15% increased damage to its primary target per lanced target.`,
				region: `Fractured Peaks`
			},
			"Aspect of Bursting Bones": {
				power: `When a segment of Bone Prison is destroyed or expired, it deals # damage in an area around itself.`,
				region: `Dry Steppes`
			},
			"Aspect of the Damned": {
				power: `You deal x30% increased Shadow Damage to enemies afflicted by both Decrepify and Iron Maiden.`,
				region: `Kehjistan`
			},
			"Aspect of Empowering Reaper": {
				power: `Each target hit along Sever's path increases the scythe's damage by x6%, up to x30%.`,
				region: `Scosglen`
			},
			"Aspect of Possessed Blood": {
				power: `When you pick up 5 Blood Orbs, a free Bone Spirit is spawned, dealing bonus damage based on your current Life percent.`,
				region: `Dry Steppes`
			},
			"Aspect of Reanimation": {
				power: `Your Skeletons gain increased damage while alive, up to x20% after 10 seconds.`,
				region: `Scosglen`
			},
			"Sacrificial Aspect": {
				power: `Your Sacrifice bonuses are increased by 15%.`,
				region: `Hawezar`
			},
			"Aspect of Swelling Curse": {
				power: `Bone Spirit deals increased damage based on distance traveled, up to x15%.`,
				region: `Scosglen`
			},
			"Unyielding Commander's Aspect": {
				power: `While Army of the Dead is active, your Minions gain 70% Attack Speed and take 90% reduced damage.`,
				region: `Hawezar`
			}
		},
		"Resource": {
			"Fastblood Aspect": {
				power: `Blood Orbs reduce your Ultimate Cooldown by 0.5 seconds.`,
				region: `Hawezar`
			},
			"Flesh-Rending Aspect": {
				power: `After Decompose spawns a Corpse, gain 10 Essence.`,
				region: `Fractured Peaks`
			},
			"Hulking Aspect": {
				power: `Each time your Golem damages an enemy, its active Cooldown is reduced by 1 seconds.`,
				region: `Kehjistan`
			},
			"Aspect of Potent Blood": {
				power: `While at full Life, Blood Orbs grant 10 Essence.`,
				region: `Dry Steppes`
			},
			"Requiem Aspect": {
				power: `You gain 3.0 maximum Essence per active Minion.`,
				region: `Scosglen`
			}
		},
		"Utility": {
			"Aspect of Torment": {
				dungeon: `Black Asylum`,
				power: `Critical Strikes with Bone Skills increase your Essence Regeneration by x20% for 4 seconds.`,
				region: `Fractured Peaks`
			},
			"Torturous Aspect": {
				power: `Enemies afflicted by your Iron Maiden have a 15% chance to be Stunned for 1 second when they deal direct damage.`,
				region: `Kehjistan`
			},
			"Aspect of the Void": {
				dungeon: `Rimescar Cavern`,
				power: `Blight's defiled area, when spawned, Pulls in enemies around the affected area.`,
				region: `Fractured Peaks`
			}
		},
		"Mobility": {
		}
	},
	"Rogue": {
		"Defensive": {
			"Cheat's Aspect": {
				power: `You take 15.0% less damage from Crowd Controlled enemies. Whenever a Crowd Controlled enemy deals direct damage to you, gain +15% Movement Speed for 2 seconds.`,
				region: `Scosglen`
			},
			"Enshrouding Aspect": {
				power: `Gain a Dark Shroud shadow every 3 seconds when standing still. Each Dark Shroud shadow grants 2.0% increased Damage Reduction.`,
				region: `Hawezar`
			},
			"Aspect of Siphoned Protection": {
				power: `Lucky Hit: Damaging a Vulnerable enemy with a Core Skill has up to a 20% chance to grant a Barrier for 5 seconds that absorbs # damage, up to a maximum of #.`,
				region: `Hawezar`
			},
			"Aspect of Uncanny Resilience": {
				power: `Whenever you trigger a Lucky Hit, gain x5% increased Damage Reduction for 5 seconds, up to a maximum of x15%.`,
				region: `Scosglen`
			}
		},
		"Offensive": {
			"Aspect of Arrow Storms": {
				power: `Lucky Hit: Your Ranged Skills have up to a 10% chance to create an arrow storm at the target's present location, dealing # Physical damage over 3 seconds. You can have up to 5 active arrow storms.`,
				region: `Scosglen`
			},
			"Blast-Trapper's Aspect": {
				power: `Lucky Hit: Dealing direct damage to enemies affected by your Trap Skills has up to a 30% chance to make them Vulnerable for 3 seconds.`,
				region: `Fractured Peaks`
			},
			"Aspect of Branching Volleys": {
				power: `Barrage's arrows have a 15% chance to split into 2 arrows whenever they ricochet.`,
				region: `Hawezar`
			},
			"Aspect of Corruption": {
				power: `Your Imbuements Skill effects have x20% increased potency against Vulnerable enemies.`,
				region: `Kehjistan`
			},
			"Aspect of Encircling Blades": {
				dungeon: `Hallowed Ossuary`,
				power: `Flurry damages enemies in a circle around you and deals x8% increased damage.`,
				region: `Fractured Peaks`
			},
			"Opportunist's Aspect": {
				power: `When you break Concealment, you drop a cluster of Stun Grenades around your location that explode, dealing # total Physical damage and Stunning enemies for 0.25 seconds.`,
				region: `Kehjistan`
			},
			"Shadowslicer Aspect": {
				power: `When you cast Dash, a Shadow Clone is spawned at your location that also casts Dash, dealing 25% of the base damage.`,
				region: `Scosglen`
			},
			"Aspect of Sleeting Imbuements": {
				power: `Your Rain of Arrows is always affected by all Imbuements Skills at once.`,
				region: `Hawezar`
			},
			"Trickster's Aspect": {
				power: `Caltrops also throw a cluster of Stun Grenades that explode and deal # total Physical damage and Stunning enemies for 0.25 seconds.`,
				region: `Dry Steppes`
			},
			"Aspect of Unstable Imbuements": {
				power: `Casting a Skill that is Imbued creates an explosion around you, dealing # damage of the same type.`,
				region: `Dry Steppes`
			},
			"Vengeful Aspect": {
				power: `Lucky Hit: Making an enemy Vulnerable has up to a 30% chance to grant +3% increased Critical Strike Chance for 3 seconds, up to +9%.`,
				region: `Kehjistan`
			},
			"Aspect of Volatile Blades": {
				power: `Twisting Blades cause an explosion when they return to you, dealing # damage and # additional damage based on the distance the blades travel, up to 5 meters and # total damage.`,
				region: `Scosglen`
			},
			"Aspect of Volatile Shadows": {
				power: `When a Dark Shroud shadow would be removed it explodes, dealing # Shadow damage around you.`,
				region: `Dry Steppes`
			}
		},
		"Resource": {
			"Energizing Aspect": {
				dungeon: `Sanguine Chapel`,
				power: `Damaging an Injured enemy with a Basic Skill generates 5 Energy.`,
				region: `Fractured Peaks`
			},
			"Ravenous Aspect": {
				power: `Killing a Vulnerable enemy grants you x50% increased Energy Regeneration for 4 seconds.`,
				region: `Dry Steppes`
			}
		},
		"Utility": {
			"Aspect of Explosive Verve": {
				dungeon: `Derelict Lodge`,
				power: `Your Grenades Skills count as Trap Skills. Whenever you arm a Trap or drop Grenades, you gain +10% increased Movement Speed for 3 seconds.`,
				region: `Fractured Peaks`
			}
		},
		"Mobility": {
		}
	},
	"Sorcerer": {
		"Defensive": {
			"Snowguard's Aspect": {
				power: `While within your own Blizzard, you take 10% less damage.`,
				region: `Hawezar`
			},
			"Snowveiled Aspect": {
				power: `Casting Ice Armor makes you Unstoppable for 2.0 seconds.`,
				region: `Scosglen`
			},
			"Aspect of the Unwavering": {
				power: `Taking direct damage has a 5% chance to reset the Cooldown of one of your Defensive Skills.`,
				region: `Kehjistan`
			}
		},
		"Offensive": {
			"Aspect of Biting Cold": {
				power: `When you Freeze an enemy there is a 25% chance they become Vulnerable for 3 seconds.`,
				region: `Dry Steppes`
			},
			"Aspect of Conflagration": {
				dungeon: `Light's Watch`,
				power: `While Channeling Incinerate, your Burning damage is increased by x20%.`,
				region: `Fractured Peaks`
			},
			"Aspect of Control": {
				power: `You deal 30% more damage to Immobilized, Stunned, or Frozen enemies.`,
				region: `Kehjistan`
			},
			"Elementalist's Aspect": {
				power: `Core or Mastery Skills cast at or above 100 Mana gain a 20.0% increased Critical Strike Chance.`,
				region: `Dry Steppes`
			},
			"Aspect of Overwhelming Bolts": {
				dungeon: `Wretched Delve`,
				power: `Charged Bolts gains 2 extra projectiles, but its Mana cost is increased by 5.0%.`,
				region: `Scosglen`
			},
			"Aspect of Piercing Cold": {
				dungeon: `Dead Man's Dredge`,
				power: `Ice Shards pierce 4 times, dealing 20% less damage per subsequent enemy hit.`,
				region: `Fractured Peaks`
			},
			"Rolling Thunder Aspect": {
				power: `Charged Bolts pierce, but deal x30% less damage.`,
				region: `Scosglen`
			},
			"Aspect of Splintering Energy": {
				power: `Lightning Spear has a 11% chance to spawn an additional Lightning Spear when you cast it.`,
				region: `Kehjistan`
			},
			"Storm Swell Aspect": {
				power: `You deal x11% increased damage to Vulnerable enemies while you have a Barrier.`,
				region: `Dry Steppes`
			},
			"Aspect of Three Curses": {
				power: `Meteor deals x35% increased Critical Strike Damage against Healthy targets.`,
				region: `Hawezar`
			}
		},
		"Resource": {
			"Aspect of Efficiency": {
				power: `Casting a Basic Skill reduces the Mana cost of your next Core Skill by 10%.`,
				region: `Scosglen`
			},
			"Incendiary Aspect": {
				power: `Killing a Burning enemy grants x5% Mana Cost reduction for 4 seconds, up to x15%.`,
				region: `Kehjistan`
			},
			"Prodigy's Aspect": {
				dungeon: `Witchwater`,
				power: `Casting an Ultimate Skill restores 80 Mana.`,
				region: `Hawezar`
			},
			"Recharging Aspect": {
				dungeon: `Zenith`,
				power: `Each time Chain Lightning bounces off you, gain 4 Mana.`,
				region: `Fractured Peaks`
			}
		},
		"Utility": {
			"Aspect of Seared Flesh": {
				power: `Every 5 times you deal Direct Fire Damage to an enemy, they are Immobilized for 2 seconds.`,
				region: `Hawezar`
			}
		},
		"Mobility": {
			"Aspect of the Bounding Conduit": {
				power: `Gain 20% Movement Speed for 3 seconds after Teleporting.`,
				region: `Dry Steppes`
			},
			"Charged Aspect": {
				power: `Collecting Crackling Energy increases your Movement Speed by 10% for 4 seconds.`,
				region: `Scosglen`
			},
			"Flamewalker's Aspect": {
				dungeon: `Cultist Refuge`,
				power: `Coming in contact with your Firewall grants you +15% Movement Speed for 4 seconds.`,
				region: `Fractured Peaks`
			}
		}
	}
};

export { codexData };