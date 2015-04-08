'use strict';

var url = require('url');

module.exports = function(shariff) {
    var shareUrl = url.parse('https://twitter.com/intent/tweet', true);

    // TODO FIXME: remove "encodeURIComponent()" from getShareText()
    shareUrl.query.text = decodeURIComponent(shariff.getShareText());
    shareUrl.query.url = shariff.getURL();
    if (shariff.options.twitterVia !== null) {
        shareUrl.query.via = shariff.options.twitterVia;
    }
    delete shareUrl.search;

    return {
        popup: true,
		noblank: false,
		mobileonly: false,
        shareText: 'tweet',
        name: 'twitter',
        faName: 's3uu-twitter',
        title: {
            'de': 'Bei Twitter teilen',
            'en': 'Share on Twitter',
            'fr': 'Partager sur Twitter',
            'es': 'Compartir en Twitter'
        },
        // shareUrl: 'https://twitter.com/intent/tweet?text='+ shariff.getShareText() + '&url=' + url
        shareUrl: url.format(shareUrl) + shariff.getReferrerTrack()
    };
};
