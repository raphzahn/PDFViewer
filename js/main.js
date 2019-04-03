$('#pdfViewerModal').on('shown.bs.modal', function (e) {
    $('#modalbody').html('<iframe src="pdfjs/web/viewer.html?file=compressed.tracemonkey-pldi-09.pdf"  width="100%" frameborder="0"></iframe>');
});
$('#pdfViewerModal').on('hidden.bs.modal', function (e) {
    $('#modalbody').html('');
});