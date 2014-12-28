'use strict';

module.exports = function(shariff) {
    return {
        popup: false,
		noblank: false,
        shareText: 'Info',
        name: 'info',
        title: {
            'de': 'weitere Informationen',
            'en': 'more information',
            'es': 'Más informaciones'
        },
        shareUrl: shariff.getInfoUrl()
    };
};
