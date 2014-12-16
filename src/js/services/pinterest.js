'use strict';

module.exports = function(shariff) {
    var EncUrl = encodeURIComponent(shariff.getURL());
    return {
        popup: true,
		noblank: false,
        shareText: {
            'de': 'Pin it',
            'en': 'Pin it'
        },
        name: 'pinterest',
        title: {
            'de': 'Bei Pinterest pinnen',
            'en': 'Pin it on Pinterest'
        },
		shareUrl: '//www.pinterest.com/pin/create/button/?url=' + EncUrl + shariff.getReferrerTrack() + '&media=' + shariff.getImageUrl() + '&description=' + shariff.getShareText()
    };
};
