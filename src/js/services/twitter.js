'use strict';

module.exports = function(shariff) {
    return {
        popup: true,
		noblank: false,
		mobileonly: false,
        shareText: 'tweet',
        name: 'twitter',
        title: {
            'de': 'Bei Twitter teilen',
            'en': 'Share on Twitter',
            'fr': 'Partager sur Twitter',
            'es': 'Compartir en Twitter'
        },
        shareUrl: 'https://twitter.com/intent/tweet?text='+ shariff.getShareText() + '&url=' + shariff.getURL() + shariff.getReferrerTrack()
    };
};
