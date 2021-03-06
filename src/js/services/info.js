'use strict';

module.exports = function(shariff) {
    return {
        popup: false,
		noblank: false,
		mobileonly: false,
        shareText: 'Info',
        name: 'info',
        faName: 'fa-info',
        title: {
            'de': 'weitere Informationen',
            'en': 'more information',
            'fr': 'Plus d’informations',
            'es': 'Más informaciones'
        },
        shareUrl: shariff.getInfoUrl()
    };
};
