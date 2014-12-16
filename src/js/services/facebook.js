'use strict';

module.exports = function(shariff) {
    var fbEncUrl = encodeURIComponent(shariff.getURL());
    return {
        popup: true,
		noblank: false,
        shareText: {
            'de': 'teilen',
            'en': 'share'
        },
        name: 'facebook',
        title: {
            'de': 'Bei Facebook teilen',
            'en': 'Share on Facebook'
        },
        shareUrl: 'https://www.facebook.com/sharer/sharer.php?u=' + fbEncUrl + shariff.getReferrerTrack()
    };
};
