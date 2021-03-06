'use strict';

module.exports = function(shariff) {
    var EncUrl = encodeURIComponent(shariff.getURL());
    return {
        popup: true,
		noblank: false,
		mobileonly: false,
        shareText: {
            'de': 'teilen',
            'en': 'share',
            'fr': 'partager',
			'es': 'compartir'
        },
        name: 'reddit',
		faName: 'fa-reddit',
        title: {
            'de': 'Bei Reddit teilen',
            'en': 'Share on Reddit',
            'fr': 'Partager sur Reddit',
			'es': 'Compartir en Reddit'
        },
		shareUrl: '//www.reddit.com/submit?url=' + EncUrl + shariff.getReferrerTrack()
    };
};
