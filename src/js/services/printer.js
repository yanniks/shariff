'use strict';

module.exports = function(shariff) {
    return {
        popup: false,
		noblank: false,
		mobileonly: false,
        shareText: 'printer',
        name: 'printer',
        title: {
            'de': 'Drucken',
            'en': 'Printer',
            'fr': 'Imprimeur',
            'es': 'Impresora'
        },

        shareUrl: 'javascript:window.print()'
    };
};
