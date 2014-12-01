'use strict';

module.exports = function(shariff) {
    var liEncUrl = encodeURIComponent(shariff.getURL());
    return {
        popup: true,
        shareText: {
            'de': 'teilen',
            'en': 'share'
        },
        name: 'linkedin',
        title: {
            'de': 'Bei LinkedIn teilen',
            'en': 'Share on LinkedIn'
        },
        shareUrl: 'https://www.linkedin.com/shareArticle?mini=true&url=' + liEncUrl + shariff.getReferrerTrack() + '&title=' + shariff.getShareText() + '&summary=&source='
    };
};
