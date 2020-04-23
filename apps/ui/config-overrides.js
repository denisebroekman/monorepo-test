/* eslint-disable */
const path = require('path');
const fs = require('fs');
const { override, babelInclude } = require('customize-cra');

module.exports = (config, env) => {
    /* 
     * Babel needs to compile our component package 
     * TODO: create a common functionality package and abstract away overrides in it
    */
    return Object.assign(
        config,
        override(
            babelInclude([
                path.resolve('src'),
                fs.realpathSync('../../packages/ui-components'), 
            ]),
        )(config, env),
    );
};
