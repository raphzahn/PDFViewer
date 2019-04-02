$('#exampleModal').on('shown.bs.modal', function (e) {
    $('#modalbody').html('<iframe src="pdfjs/web/viewer.html?file=Demo.pdf"  width="100%" frameborder="0"></iframe>')
})
$('#exampleModal').on('hidden.bs.modal', function (e) {
    $('#modalbody').html('')
})