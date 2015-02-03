'use strict';

module.exports = function(shariff) {
    var url = encodeURIComponent(shariff.getURL());
    return {
        popup: false,
		noblank: true,
		mobileonly: true,
        shareText: {
            'de': 'teilen',
            'en': 'share',
            'es': 'compartir',
			'fr': 'Partager'
        },
        name: 'whatsapp',
        faName: 'fa-whatsapp',
        title: {
            'de': 'Bei Whatsapp teilen',
            'en': 'Share on Whatsapp',
            'fr': 'Partager sur Whatsapp',
            'es': 'Compartir en Whatsapp'
        },
        shareUrl: 'whatsapp://send?text=' + shariff.getShareText() + '%20' + url + shariff.getReferrerTrack()
    };
};