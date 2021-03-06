'use strict';

module.exports = function(shariff) {
    var EncUrl = encodeURIComponent(shariff.getURL());
    return {
        popup: true,
		noblank: false,
		mobileonly: false,
        shareText: {
            'de': 'Pin it',
            'en': 'Pin it',
            'fr': 'Pin it',
			'es': 'Pin it'
        },
        name: 'pinterest',
		faName: 'fa-pinterest',
        title: {
            'de': 'Bei Pinterest pinnen',
            'en': 'Pin it on Pinterest',
            'fr': 'Partager sur Pinterest',
			'es': 'Compartir en Pinterest'
        },
		shareUrl: '//www.pinterest.com/pin/create/button/?url=' + EncUrl + shariff.getReferrerTrack() + '&media=' + shariff.getImageUrl() + '&description=' + shariff.getShareText()
    };
};
