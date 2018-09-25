
/** @module ed-forge */
export default Module;

/**
 * @typedef {Object} ModifierObject
 * @property {string} Label
 * @property {number} Value
 */

/**
 * @typedef {Object} BlueprintObject
 * @property {string} Engineer
 * @property {string} BlueprintName
 * @property {number} Level
 * @property {number} Quality
 * @property {ModifierObject[]} Modifiers
 */

/**
 * @typedef {Object} ModuleObject
 * @property {string} Slot
 * @property {boolean} On
 * @property {string} Item
 * @property {number} Priority
 * @property {BlueprintObject} [Engineering]
 */

/**
 * A module that belongs to a {@link Ship}.
 */
class Module {

    /**
     * @param {(string|object)} buildFrom
     */
    constructor(buildFrom) {}

    /**
     * @param {string} property
     * @return {*}
     */
    read(property) {}

    /**
     * @param {string} property
     * @param {*} value
     */
    write(property, value) {}

    /** @type {ModuleObject} */
    _object = null;

    /**
     * @param {string} property
     * @param {boolean} [modified=true]
     * @return {number}
     */
    get(property, modified = true) {}

    /**
     * @param {string} property
     * @param {boolean} [modified=true]
     * @param {i18n.FormatOptions.SiUnit} [unit]
     * @param {number} [value]
     * @return {string}
     */
    getFormatted(property, modified = true, unit, value) {}

    /**
     * @param {string} property
     */
    set(property) {}

    /**
     * @param {string} name
     * @param {number} [grade=1]
     * @param {number} [progress=0]
     */
    setBlueprint(name, grade = 1, progress = 0) {}

    /**
     * @param {string} name
     */
    setSpecial(name) {}

    /**
     * @return {Object}
     */
    toJSON() {}

    /**
     * @return {string}
     */
    compress() {}
}
