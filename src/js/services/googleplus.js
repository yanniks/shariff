'use strict';

module.exports = function(shariff) {
    var url = encodeURIComponent(shariff.getURL());
    return {
        popup: true,
		noblank: false,
		mobileonly: false,
        shareText: '+1',
        name: 'googleplus',
        faName: 'fa-google-plus',
        title: {
            'de': 'Bei Google+ teilen',
            'en': 'Share on Google+',
            'fr': 'Partager sur Google+',
            'es': 'Compartir en Google+'
        },
        shareUrl: 'https://plus.google.com/share?url=' + url + shariff.getReferrerTrack()
    };
};

