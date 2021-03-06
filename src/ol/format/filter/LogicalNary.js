/**
 * @module ol/format/filter/LogicalNary
 */
import {assert} from '../../asserts.js';
import Filter from '../filter/Filter.js';

/**
 * @classdesc
 * Abstract class; normally only used for creating subclasses and not instantiated in apps.
 * Base class for WFS GetFeature n-ary logical filters.
 *
 * @abstract
 */
class LogicalNary extends Filter {

  /**
   * @param {!string} tagName The XML tag name for this filter.
   * @param {...module:ol/format/filter/Filter} conditions Conditions.
   */
  constructor(tagName, conditions) {

    super(tagName);

    /**
     * @type {Array.<module:ol/format/filter/Filter>}
     */
    this.conditions = Array.prototype.slice.call(arguments, 1);
    assert(this.conditions.length >= 2, 57); // At least 2 conditions are required.
  }

}

export default LogicalNary;
