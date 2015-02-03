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
        name: 'stumbleupon',
		faName: 'fa-stumbleupon',
        title: {
            'de': 'Bei StumbleUpon teilen',
            'en': 'Share on StumbleUpon',
            'fr': 'Partager sur StumbleUpon',
			'es': 'Compartir en StumbleUpon'
        },
		shareUrl: '//www.stumbleupon.com/submit?url=' + EncUrl + shariff.getReferrerTrack()
    };
};
