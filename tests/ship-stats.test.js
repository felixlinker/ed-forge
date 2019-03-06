import { Ship, ShipProps } from '..';

import * as anacondaBuild from './fixtures/anaconda.json';

let ship;
beforeEach(() => {
    ship = new Ship(anacondaBuild);
});

test('can calculate mass', () => {
    const { UNLADEN_MASS, LADEN_MASS } = ShipProps;
    expect(ship.get(UNLADEN_MASS)).not.toBeNaN();
    expect(ship.get(LADEN_MASS)).not.toBeNaN();
});

test('can calculate fuel/cargo capacity', () => {
    const { CARGO_CAPACITY, FUEL_CAPACITY } = ShipProps;
    expect(ship.get(CARGO_CAPACITY)).not.toBeNaN();
    expect(ship.get(FUEL_CAPACITY)).not.toBeNaN();
});

test('can calculate jump range', () => {
    const { JUMP_RANGE, TOTAL_RANGE } = ShipProps;
    expect(ship.get(JUMP_RANGE)).not.toBeNaN();
    expect(ship.get(TOTAL_RANGE)).not.toBeNaN();
});

test('can calculate speed metrics', () => {
    const { SPEED, YAW, ROLL, PITCH } = ShipProps;
    expect(ship.get(SPEED)).not.toBeNaN();
    expect(ship.get(YAW)).not.toBeNaN();
    expect(ship.get(ROLL)).not.toBeNaN();
    expect(ship.get(PITCH)).not.toBeNaN();
});

test('can calcuate shield metrics', () => {
    const { SHIELD_STRENGTH, EXPL_SHIELD_RES, EXPL_SHIELD_STRENGTH,
        KIN_SHIELD_RES, KIN_SHIELD_STRENGTH, THERM_SHIELD_RES,
        THERM_SHIELD_STRENGTH } = ShipProps;
    expect(ship.get(SHIELD_STRENGTH)).not.toBeNaN();
    expect(ship.get(EXPL_SHIELD_RES)).not.toBeNaN();
    expect(ship.get(EXPL_SHIELD_STRENGTH)).not.toBeNaN();
    expect(ship.get(KIN_SHIELD_RES)).not.toBeNaN();
    expect(ship.get(KIN_SHIELD_STRENGTH)).not.toBeNaN();
    expect(ship.get(THERM_SHIELD_RES)).not.toBeNaN();
    expect(ship.get(THERM_SHIELD_STRENGTH)).not.toBeNaN();
});

test('can calculate armour metrics', () => {
    const { ARMOUR, EXPL_ARMOUR_RES, EXPL_ARMOUR, KIN_ARMOUR_RES, KIN_ARMOUR,
        THERM_ARMOUR_RES, THERM_ARMOUR, CAUS_ARMOUR_RES,
        CAUS_ARMOUR } = ShipProps;
    expect(ship.get(ARMOUR)).not.toBeNaN();
    expect(ship.get(EXPL_ARMOUR_RES)).not.toBeNaN();
    expect(ship.get(EXPL_ARMOUR)).not.toBeNaN();
    expect(ship.get(KIN_ARMOUR_RES)).not.toBeNaN();
    expect(ship.get(KIN_ARMOUR)).not.toBeNaN();
    expect(ship.get(THERM_ARMOUR_RES)).not.toBeNaN();
    expect(ship.get(THERM_ARMOUR)).not.toBeNaN();
    expect(ship.get(CAUS_ARMOUR_RES)).not.toBeNaN();
    expect(ship.get(CAUS_ARMOUR)).not.toBeNaN();
});

test('can calculate module protection metrics', () => {
    const { MODULE_ARMOUR, MODULE_PROTECTION } = ShipProps;
    expect(ship.get(MODULE_ARMOUR)).not.toBeNaN();
    expect(ship.get(MODULE_PROTECTION)).not.toBeNaN();
});

test('can calculate shield metrics', () => {
    const { SHIELD_METRICS } = ShipProps;
    expect(ship.getMetrics(SHIELD_METRICS)).toMatchObject({});
});

test('can calculate armour metrics', () => {
    const { ARMOUR_METRICS } = ShipProps;
    expect(ship.getMetrics(ARMOUR_METRICS)).toMatchObject({});
});

test('can calculate jump metrics', () => {
    const { JUMP_METRICS } = ShipProps;
    expect(ship.getMetrics(JUMP_METRICS)).toMatchObject({});
});

test('can calculate module protection metrics', () => {
    const { MODULE_PROTECTION_METRICS } = ShipProps;
    expect(ship.getMetrics(MODULE_PROTECTION_METRICS)).toMatchObject({});
});
