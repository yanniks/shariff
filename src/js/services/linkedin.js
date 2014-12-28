'use strict';

module.exports = function(shariff) {
    var liEncUrl = encodeURIComponent(shariff.getURL());
    return {
        popup: true,
		noblank: false,
		mobileonly: false,
        shareText: {
            'de': 'teilen',
            'en': 'share',
			'es': 'compartir'
        },
        name: 'linkedin',
        title: {
            'de': 'Bei LinkedIn teilen',
            'en': 'Share on LinkedIn',
			'es': 'Compartir en LinkedIn'
        },
        shareUrl: 'https://www.linkedin.com/shareArticle?mini=true&url=' + liEncUrl + shariff.getReferrerTrack() + '&title=' + shariff.getShareText() + '&summary=&source='
    };
};
