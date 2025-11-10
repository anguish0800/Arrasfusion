const { combineStats, addAura, makeAuto, weaponArray, dereference, makeTurret } = require('../facilitators.js');
const { smshskl, base, statnames } = require('../constants.js');
const g = require('../gunvals.js');

Class.placeholder = { PARENT: "genericTank", LABEL: "Placeholder", COLOR: "black", UPGRADE_COLOR: "black" }

// Tier I tanks. (Base)
// Insert level 15 upgrades.

// Tier II tanks.

// Twin Fusions

/*
Triple shot
Rifle
Gunner
Foiler
Cruiser
Tarnisher
Wart
Helix
*/

Class.rifle = {
    PARENT: "genericTank",
    LABEL: "Rifle",
    BODY: {
        FOV: base.FOV * 1.1125
    },
    GUNS: [
        {
            POSITION: [20, 3.5, 1, 0, 4, 0, 1/2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { speed: 0.7, maxSpeed: 0.7 }, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 3.5, 1, 0, -4, 0, 1/2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { speed: 0.7, maxSpeed: 0.7 }, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { speed: 0.7, maxSpeed: 0.7 }, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        }
    ]
}

Class.foiler = {
    PARENT: "genericTank",
    LABEL: "Foiler",
    GUNS: weaponArray([
        {
            POSITION: [15, 2, 1, 0, -2.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { speed: 0.7, maxSpeed: 0.7 }, g.flankGuard, { recoil: 1.8 }]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: [15, 2, 1, 0, 2.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { speed: 0.7, maxSpeed: 0.7 }, g.flankGuard, { recoil: 1.8 }]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: [11.5, 11, 1, 0, 0, 0, 0],
        }
    ], 3)
}

Class.tarnisher = {
    PARENT: "genericTank",
    LABEL: "Tarnisher",
    GUNS: [
        {
            POSITION: [20.5, 12, 1, 0, 6.5, 2.5, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20.5, 12, 1, 0, -6.5, -2.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [3.5, 20, 1.2, -7.5, 0, 0, 0]
        },
        {
            POSITION: [5, 27.5, 1, -3.5, 0, 0, 0]
        }
    ]
}

Class.wart = {
    PARENT: "genericTank",
    LABEL: "Wart",
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: [15, 7, 1, 0, -4.5, -5, 0]
        },
        {
            POSITION: [3, 7, 1.7, 15, -4.5, -5, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        },
        {
            POSITION: [15, 7, 1, 0, 4.5, 5, 0]
        },
        {
            POSITION: [3, 7, 1.7, 15, 4.5, 5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        }
    ]
}

// Sniper Fusions

/*
Rifle
Assassin
Minigun
Altar
CEO
Hunter
Bloomerang
Calc
*/

Class.altar = {
    PARENT: "genericTank",
    LABEL: "Altar",
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            POSITION: [24, 8.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 2.5, 1, -10, 20, 10, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 2.5, 1, -10, -20, -10, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 2.5, 1, -10, 14, 5, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 2.5, 1, -10, -14, -5, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [25, 8, 1, 0, 2.5, 120, 0]
        },
        {
            POSITION: [25, 8, 1, 0, -2.5, -120, 0]
        }
    ]
}

Class.ceo = {
    PARENT: "genericTank",
    LABEL: "CEO",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.2
    },
    GUNS: [
        {
            POSITION: [12, 10.5, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sniper, {pen: 0.65, health: 0.75, reload: 1.25}]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 6,
                WAIT_TO_CYCLE: true
            }
        },
        {
            POSITION: [6, 12.5, -1.3, 5.5, 0, 0, 0]
        }
    ]
}

Class.bloomerang = {
    PARENT: "genericTank",
    LABEL: "Bloomerang",
    STAT_NAMES: statnames.trap,
    FACING_TYPE: "locksFacing",
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.075,
    },
    GUNS: [
        {
            POSITION: [5, 8, 1, 10, 0, 0, 0],
        },
        {
            POSITION: [6, 8, -1.8, 6, 0, 0, 0],
        },
        {
            POSITION: [2, 8, 1.4, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.boomerang, g.sniper, {size: 1.5}]),
                TYPE: "boomerang",
                STAT_CALCULATOR: "block"
            }
        }
    ]
}

Class.calc = {
    PARENT: "genericTank",
    LABEL: "Calc",
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.15,
    },
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [25, 8, -4/3, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.sniper, {speed: 0.85, pen: 1.25, damage: 1.5, health: 1.75}]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {amplitude: 80, period: 1}]]}]
            }
        },
        {
            POSITION: [3.75, 12.5, 2.125, 1.5, -6.25, 90, 0]
        },
        {
            POSITION: [3.75, 12.5, 2.125, 1.5, 6.25, -90, 0]
        },
        {
            POSITION: [5, 10, -1.4, 8, 0, 0, 0]
        }
    ]
}

// Machine gun fusions
/*
Gunner
Minigun
Diesel
Storm
Spawner
Artillery
Tap
CoTangent
*/

Class.diesel = {
    PARENT: "genericTank",
    LABEL: "Diesel",
    GUNS: [
        {
            POSITION: [15, 13, 1.5, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, { size: 0.75, reload: 0.5, spray: 3, damage: 0.5, pen: 0.5 }]),
                TYPE: "bullet"
            }
        }
    ]
}

Class.storm = {
    PARENT: "genericTank",
    LABEL: "Storm",
    GUNS: weaponArray([
        {
            POSITION: [15, 3.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.cyclone]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.cyclone]),
                TYPE: "bullet"
            }
        },
    ], 5)
}

Class.tap = {
    PARENT: "genericTank",
    LABEL: "Tap",
    GUNS: [
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0]
        },
        {
            POSITION: [2, 14, 1.4, 20, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.machineGun, { size: 0.7, reload: 0.75, damage: 0.8, health: 0.8 }]),
                TYPE: "trap"
            }
        }
    ]
}

Class.cotangent = {
    PARENT: "genericTank",
    LABEL: "CoTangent",
    GUNS: [
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, { size: 0.92 }]),
                TYPE: ["bullet", {CONTROLLERS: ['snake']}]
            }
        },
        {
            POSITION: [5.75, 20.5, 0.001, -4.5, -7.5, 80, 0]
        },
        {
            POSITION: [5.75, 20.5, 0.001, -4.5, 7.5, -80, 0]
        },
    ]
}

// Flank guard fusions

/*
Foiler
Altar
Storm
Hexa tank
Corpo
Dollarer
Tri-Trapper
Trig
*/

Class.corpoDrone = {
    PARENT: "drone",
    GUNS: weaponArray({
        POSITION: [15, 3.5, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.cyclone]),
            TYPE: "bullet"
        }
    }, 3, 1/3)
}

Class.corpo = {
    PARENT: "genericTank",
    LABEL: "Corpo",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.075
    },
    GUNS: [
        {
            POSITION: [6, 7, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: "corpoDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 1,
                WAIT_TO_CYCLE: true
            }
        },
        {
            POSITION: [6, 7, 1.3, 7, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: "corpoDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 1,
                WAIT_TO_CYCLE: true
            }
        },
        {
            POSITION: [6, 7, 1.3, 7, 0, -120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: "corpoDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 1,
                WAIT_TO_CYCLE: true
            }
        }
    ]
}

g.shockwave = {speed: 0, maxSpeed: 0, spray: 0, shudder: 0, recoil: 0, health: 1e9, range: 0.5, reload: 2}

Class.dollarerShockwave = {
    PARENT: "bullet",
    CONTROLLERS: ["grow"],
    ARENA_CLOSER: true
}

Class.dollarer = {
    PARENT: "genericTank",
    LABEL: "Dollarer",
    TOOLTIP: "Press RMB to cause a Shockwave.",
    GUNS: [
        {
            POSITION: [20.5, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [0, 20, 1, -10, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.shockwave]),
                TYPE: "dollarerShockwave",
                ALT_FIRE: true,
                ALPHA: 0
            }
        }
    ],
    TURRETS: [
        {
            POSITION: [12.5, 0, 0, 0, 360, 1],
            TYPE: ["hexagon", {COLOR: "#1ffa1f"}]
        }
    ]
}

for (let i = 0; i < 15; i++) {
    Class.dollarer.GUNS.push(
        {
            POSITION: [12.5, 3.5, 0.9, 0, 0, (360 / 15) * i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.shockwave, g.fake]),
                TYPE: "bullet",
                ALT_FIRE: true
            }
        }
    )
}

Class.trig = {
    PARENT: "genericTank",
    LABEL: "Trig",
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, -4/3, 0, 0, 135, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.twin, { reload: 2 }]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {invert: false, amplitude: 180, yOffset: 50}]]}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, -6.25, -135, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, 6.25, 45, 0]
        },
        {
            POSITION: [20, 8, -4/3, 0, 0, -135, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.twin, { reload: 2 }]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {invert: true, amplitude: 180, yOffset: -50}]]}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, -6.25, -45, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, 6.25, 135, 0]
        }
    ]
}

// Director fusions

/*
Cruiser
CEO
Spawner
Corpo
Overseer
Honcho
Landmine
Spokesperson
*/

Class.honcho = {
    PARENT: "genericTank",
    LABEL: "Honcho",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.085
    },
    GUNS: [
        {
            POSITION: [7, 12, 1.4, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.pounder]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 4,
                WAIT_TO_CYCLE: true
            }
        }
    ]
}

Class.landmineDrone = {
    PARENT: "drone",
    CONTROLLERS: ["DOMRMB", "nearestDifferentMaster", "canRepel", "mapTargetToGoal", "hangOutNearMaster"],
    SHAPE: -3,
    GUNS: weaponArray(
        {
            POSITION: [0, 5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, {shudder: 0, spray: 50}]),
                TYPE: ["trap", {PERSISTS_AFTER_DEATH: true}],
                STAT_CALCULATOR: "trap",
                ALT_FIRE: true,
            }
        }, 10
    )
}

Class.landmine = {
    PARENT: "genericTank",
    LABEL: "Landmine",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.05
    },
    GUNS: [
        {
            POSITION: [6, 11, 1.3, 7, 0, 0, 0]
        },
        {
            POSITION: [2, 11 * 1.3, 1.3, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: "landmineDrone",
                NO_LIMITATIONS: true,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 4,
                WAIT_TO_CYCLE: true
            }
        }
    ]
}

function torad(num) {
    return num * Math.PI/180
}

Class.spokespersonDrone = {
    PARENT: "drone",
    CONTROLLERS: ["DOMRMB", "nearestDifferentMaster", "canRepel", "mapTargetToGoal", "hangOutNearMaster"],
    GUNS: [
        {
            POSITION: [0, 5, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {angle: torad(180)}]], PERSISTS_AFTER_DEATH: true}],
                ALT_FIRE: true
            }
        },
        {
            POSITION: [0, 5, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos, {speed: 2}]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {angle: torad(180)}]], PERSISTS_AFTER_DEATH: true}],
                ALT_FIRE: true
            }
        },
        {
            POSITION: [0, 5, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos, {speed: 4}]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {angle: torad(180)}]], PERSISTS_AFTER_DEATH: true}],
                ALT_FIRE: true
            }
        },
        {
            POSITION: [0, 5, 1, 0, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {angle: torad(60)}]], PERSISTS_AFTER_DEATH: true}],
                ALT_FIRE: true
            }
        },
        {
            POSITION: [0, 5, 1, 0, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos, {speed: 2}]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {angle: torad(60)}]], PERSISTS_AFTER_DEATH: true}],
                ALT_FIRE: true
            }
        },
        {
            POSITION: [0, 5, 1, 0, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos, {speed: 4}]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {angle: torad(60)}]], PERSISTS_AFTER_DEATH: true}],
                ALT_FIRE: true
            }
        },
        {
            POSITION: [0, 5, 1, 0, 0, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {angle: torad(-60)}]], PERSISTS_AFTER_DEATH: true}],
                ALT_FIRE: true
            }
        },
        {
            POSITION: [0, 5, 1, 0, 0, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos, {speed: 2}]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {angle: torad(-60)}]], PERSISTS_AFTER_DEATH: true}],
                ALT_FIRE: true
            }
        },
        {
            POSITION: [0, 5, 1, 0, 0, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos, {speed: 4}]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {angle: torad(-60)}]], PERSISTS_AFTER_DEATH: true}],
                ALT_FIRE: true
            }
        },
    ]
}

Class.spokesperson = {
    PARENT: "genericTank",
    LABEL: "Spokesperson",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.05
    },
    GUNS: [
        {
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: "spokespersonDrone",
                NO_LIMITATIONS: true,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 4,
                WAIT_TO_CYCLE: true
            }
        },
        {
            POSITION: [5.75, 20.5, 0.001, -4.5, -5.5, 70, 0]
        },
        {
            POSITION: [5.75, 20.5, 0.001, -4.5, 5.5, -70, 0]
        }
    ]
}

// Pounder fusions

/*
Tarnisher
Hunter
Atrillery
Dollarer
Honcho
Destroyer
Mega Trapper
Volute
*/

Class.megaTrapper = {
    PARENT: "genericTank",
    LABEL: "Mega Trapper",
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: [15, 12, 1, 0, 0, 0, 0]
        },
        {
            POSITION: [5, 12, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pounder]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        }
    ]
}

Class.volute = {
    PARENT: "genericTank",
    LABEL: "Volute",
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 10, -4/3, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.pounder]),
                TYPE: ["bullet", {CONTROLLERS: ['snake']}]
            }
        },
        {
            POSITION: [5.75, 10, 2.125, 1.35, -6.25, 87.5, 0]
        },
        {
            POSITION: [5.75, 10, 2.125, 1.35, 6.25, -87.5, 0]
        }
    ]
}

// Trapper fusions

/*
Wart
Bloomerang
Tap
TriTrapper
Landmine
MegaTrapper
Builder
ReSin
*/

Class.resinTrapMosTurret = makeTurret({
    GUNS: weaponArray([
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flankGuard, {reload: 1.75}]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
                AUTOFIRE: true
            }
        }
    ], 3)
})

Class.resinTrapMosTurret.FACING_TYPE = ["spin", {speed: 0.08}],

Class.resinTrapMosBullet = {
    PARENT: "bullet",
    INDEPENDENT: true,
    TURRETS: [
        {
            POSITION: [15, 0, 0, 0, 0, 1],
            TYPE: "resinTrapMosTurret"
        }
    ]
}

Class.resinDesmPerTrap = {
    PARENT: "trap",
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [0, 5, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos, {reload: 1.75}]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {angle: torad(180)}]], PERSISTS_AFTER_DEATH: true}],
                AUTOFIRE: true
            }
        },
        {
            POSITION: [0, 5, 1, 0, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos, {reload: 1.75}]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {angle: torad(60)}]], PERSISTS_AFTER_DEATH: true}],
                AUTOFIRE: true
            }
        },
        {
            POSITION: [0, 5, 1, 0, 0, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos, {reload: 1.75}]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {angle: torad(-60)}]], PERSISTS_AFTER_DEATH: true}],
                AUTOFIRE: true
            }
        }
    ]
}

Class.resin = {
    PARENT: "genericTank",
    LABEL: "ReSin",
    GUNS: [
        {
            POSITION: [10, 6, -4/3, 12.5, 5.5, 2, 0]
        },
        {
            POSITION: [4, 6, 2.25, 5.5, -14.5, 92, 0]
        },
        {
            POSITION: [4, 6, 2.25, -5.5, 14.5, -88, 0]
        },
        {
            POSITION: [12.5, 8, 1, 0, 5.5, 2, 0]
        },
        {
            POSITION: [5, 8, 1.7, 12.5, 5.5, 2, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, {reload: 2}]),
                TYPE: "resinDesmPerTrap",
                STAT_CALCULATOR: "trap"
            }
        },
        {
            POSITION: [19, 3, 1, 0, -5.5, -2, 0]
        },
        {
            POSITION: [1.5, 3, 1.5, 19, -5.5, -2, 0]
        },
        {
            POSITION: [18, 6, -4/3, 0, -5.5, -2, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin, {reload: 2.25}]),
                TYPE: ["resinTrapMosBullet", {CONTROLLERS: ['snake']}],
                ALT_FIRE: true,
                NO_LIMITATIONS: true
            }
        },
        {
            POSITION: [5, 6, 4.5, -5.5, -6, 88, 0]
        },
        {
            POSITION: [5, 6, 2, 5, 6, -92, 0]
        },
    ]
}

// Desmos fusions.

/*
Helix
Calc
Tap
Trig
Spokesperson
Volute
ReSin
Mega-Mos
*/

Class.megamos = {
    PARENT: "genericTank",
    LABEL: "Mega-Mos",
    GUNS: [
        {
            POSITION: [20, 10, 0.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {amplitude: 200}]]}]
            }
        },
        {
            POSITION: [4.625, 9.5, 2, 0.375, -8, 91.5, 0]
        },
        {
            POSITION: [4.625, 9.5, 2, 0.375, 8, -91.5, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 0, -4.75, 50, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 0, 4.75, -50, 0]
        }
    ]
}

// Reset upgrades, comment this if you want to disable this addon.

let fusion = true

if (fusion = true) {

    Class.basic.UPGRADES_TIER_1 = ["twin", "sniper", "machineGun", "flankGuard", "director", "pounder", "trapper", "desmos"]

    Class.twin.UPGRADES_TIER_2 = ["tripleShot", "rifle", "gunner", "foiler", "cruiser", "tarnisher", "wart", "helix"]
    Class.sniper.UPGRADES_TIER_2 = ["rifle", "assassin", "minigun", "altar", "ceo", "hunter", "bloomerang", "calc"]
    Class.machineGun.UPGRADES_TIER_2 = ["gunner", "minigun", "diesel", "storm", "spawner", "artillery", "tap", "cotangent"]
    Class.flankGuard.UPGRADES_TIER_2 = ["foiler", "altar", "storm", "hexaTank", "corpo", "dollarer", "triTrapper", "trig"]
    Class.director.UPGRADES_TIER_2 = ["cruiser", "ceo", "spawner", "corpo", "overseer", "honcho", "landmine", "spokesperson"]
    Class.pounder.UPGRADES_TIER_2 = ["tarnisher", "hunter", "artillery", "dollarer", "honcho", "destroyer", "megaTrapper", "volute"]
    Class.trapper.UPGRADES_TIER_2 = ["wart", "bloomerang", "tap", "triTrapper", "landmine", "megaTrapper", "builder", "resin"]
    Class.desmos.UPGRADES_TIER_2 = ["helix", "calc", "cotangent", "trig", "spokesperson", "volute", "resin", "megamos"]

}