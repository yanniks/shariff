'use strict';

module.exports = function(shariff) {
    return {
        popup: false,
		noblank: false,
		mobileonly: false,
        shareText: 'mail',
        name: 'mail',
        title: {
            'de': 'Per E-Mail versenden',
            'en': 'Send by email',
            'es': 'Enviar por email'
        },
        shareUrl: 'mailto:?body=' + encodeURIComponent(shariff.getURL() + shariff.getReferrerTrack()) + '&subject=' + shariff.getShareText()
    };
};
