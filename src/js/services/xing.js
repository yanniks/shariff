'use strict';

module.exports = function(shariff) {
    var EncUrl = encodeURIComponent(shariff.getURL());
    return {
        popup: true,
        shareText: {
            'de': 'teilen',
            'en': 'teilen'
        },
        name: 'xing',
        title: {
            'de': 'Bei XING teilen',
            'en': 'Share on XING'
        },
		shareUrl: '//www.xing.com/social_plugins/share?url=' + EncUrl + shariff.getReferrerTrack()
    };
};
