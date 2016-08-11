'use strict';

const csv = require('csv-parse/lib/sync');

const ct = require('sifttt/lib/beam/coreTransforms');

class Csv extends ct.Map {
  constructor(params) {
    super(
      element => {
        let options = {
          columns: this._params.columns || [],
          delimiter: this._params.separator || ',',
          quote: this._params.quote_char || '\"',
          relax: true,
          trim: true
        };
        return csv(element, options)[0];
      }
    );

    this._params = params || {};
  }
};

module.exports = Csv;
