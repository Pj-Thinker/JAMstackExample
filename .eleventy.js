module.exports = function(config) {


    config.addPassthroughCopy("src/js");
    config.addPassthroughCopy("src/style");
    
    config.setBrowserSyncConfig({
        https: {
            key: '/etc/localhost.key',
            cert: '/etc/loacalhost.crt'
        }
    });

    return {
        dir : {
            input: "src",
            output: "dist",
            data: "_data"
        }
    };

};