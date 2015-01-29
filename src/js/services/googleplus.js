'use strict';

module.exports = function(shariff) {
    return {
        popup: true,
		noblank: false,
		mobileonly: false,
        shareText: '+1',
        name: 'googleplus',
        title: {
            'de': 'Bei Google+ teilen',
            'en': 'Share on Google+',
            'fr': 'Partager sur Google+',
            'es': 'Compartir en Google+'
        },
        shareUrl: 'https://plus.google.com/share?url=' + shariff.getURL() + shariff.getReferrerTrack()
    };
};

