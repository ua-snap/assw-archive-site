$(document).ready(function () {
	$("#nanoGallery1").nanoGallery({
		kind: 'flickr',
		userID: '133161750@N07',
		photoset: 'none',

		thumbnailWidth: 'auto',
		thumbnailHeight: 100,

		thumbnailHoverEffect: [{ name: 'labelAppear75', duration: 300 }],
		theme: 'light',
		thumbnailGutterWidth : 0,
		thumbnailGutterHeight : 0,
		i18n: { thumbnailImageDescription: 'View Photo', thumbnailAlbumDescription: 'Open Album' },
		thumbnailLabel: { display: true, position: 'overImageOnMiddle', align: 'center' }
	});

	$("#toggleNews").on('click', function() {
		$(".extra").toggle();
		$("#toggleNews").hide();
	});

});

