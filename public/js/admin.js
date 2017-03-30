$(document).ready(function() {
    //删除消息的功能
    var $newsTable = $("#newstable tbody");
    var deleteId = null;
    refreshNews();
    $newsTable.on('click', '.btn-danger', function(e) {
        $('#deleteModal').modal('show');
        deleteId = $(this).parent().prevAll().eq(4).html();
        /*console.log(deleteId);*/
    });
    $('#deleteModal #confirmDelete').click(function(e) {
        if (deleteId) {
            $.ajax({
                url: '/admin/delete',
                type: 'post',
                data: {
                    newsid: deleteId
                },
                success: function(data) {
                    $('#deleteModal').modal('hide');
                    refreshNews();
                }
            });
        }

    });

    function refreshNews() {
        //empty table
        $newsTable.empty();

        $.ajax({
            url: '/admin/getnews',
            type: 'get',
            datatype: 'json',
            /*data:{newstype:type},*/
            success: function(data) {
                console.log(data);
                data.forEach(function(item, index, array) {
                    var $tdid = $('<td>').html(item.id);
                    var $tdname = $('<td>').html(item.userName);
                    var $tdemail = $('<td>').html(item.userEmail);
                    var $tdtel = $('<td>').html(item.userTel);
                    var $tdtime = $('<td>').html(item.userTime);
                    var $tdctrl = $('<td>');
                    var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
                    $tdctrl.append($btndelete);
                    var $tRow = $("<tr>");
                    $tRow.append($tdid, $tdname, $tdemail, $tdtel, $tdtime, $tdctrl);
                    $newsTable.append($tRow);
                })
            }
        });
    }
})