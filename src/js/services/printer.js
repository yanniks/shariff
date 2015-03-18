'use strict';

module.exports = function(shariff) {
    return {
        popup: false,
		noblank: true,
		mobileonly: false,
        shareText: 'printer',
        name: 'printer',
        faName: 'fa-print',
        title: {
            'de': 'Drucken',
            'en': 'Printer',
            'fr': 'Imprimeur',
            'es': 'Impresora'
        },

        shareUrl: 'javascript:window.print()'
    };
};
