'use strict';

module.exports = function(shariff) {
    return {
        popup: false,
		noblank: true,
		mobileonly: true,
        shareText: 'WhatsApp',
        name: 'whatsapp',
        title: {
            'de': 'Bei Whatsapp teilen',
            'en': 'Share on Whatsapp',
            'es': 'Compartir en Whatsapp'
        },
        shareUrl: 'whatsapp://send?text=' + shariff.getShareText() + '%20' + encodeURIComponent(shariff.getURL() + shariff.getReferrerTrack())
    };
};