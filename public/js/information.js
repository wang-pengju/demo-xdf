$(document).ready(function() {
    $("#btnsubmit").click(function(e) {
        e.preventDefault();
        if ($("#userName").val() === '' || $("#userEmail") === '' || $("#userTel").val() === '' || $("#userTime").val() === '') {
            if ($("#userName").val() === '') {
                $("#userName").parent().addClass('has-error');
            } else {
                $("#userName").parent().removeClass('has-error');
            }
            if ($("#userEmail").val() === '') {
                $("#userEmail").parent().addClass('has-error');
            } else {
                $("#userEmail").parent().removeClass('has-error');
            }
            if ($("#userTel").val() === '') {
                $("#userTel").parent().addClass('has-error');
            } else {
                $("#userTel").parent().removeClass('has-error');
            }
            if ($("#userTime").val() === '') {
                $("#userTime").parent().addClass('has-error');
            } else {
                $("#userTime").parent().removeClass('has-error');
            }
        } else {
            //提交用户信息
            var jsonNews = {
                userName: $("#userName").val(),
                userEmail: $("#userEmail").val(),
                userTel: $("#userTel").val(),
                userTime: $("#userTime").val()
            };
            $.ajax({
                url: '/news',
                type: 'post',
                data: jsonNews,
                datatype: 'json',
                success: function(data) {
                    $("#userName").val('');
                    $("#userEmail").val('');
                    $("#userTel").val('');
                    $("#userTime").val('');
                }
            })
        }
    })
    $("#btnreset").click(function() {
        $("#userName").val('');
        $("#userEmail").val('');
        $("#userTel").val('');
        $("#userTime").val('');
    });
});