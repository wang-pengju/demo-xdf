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
                    window.location.href = "http://m.souke.xdf.cn/";
                }
            })
        }

    });
    $("#btnreset").click(function() {
        $("#userName").val('');
        $("#userEmail").val('');
        $("#userTel").val('');
        $("#userTime").val('');
    });

});
$(function() {
    $("#signupForm").bootstrapValidator({
        message: 'This value is not valid',
        fields: {
            username: {
                message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    stringLength: {
                        min: 2,
                        max: 10,
                        message: '用户名长度必须在2到18位之间'
                    }
                }
            },
            useremail: {
                validators: {
                    notEmpty: {
                        message: '邮箱不能为空'
                    },
                    emailAddress: {
                        message: '邮箱地址格式有误'
                    }
                }
            },
            usertel: {
                validators: {
                    notEmpty: {
                        message: '电话不能为空'
                    },
                    stringLength: {
                        min: 8,
                        max: 12,
                        message: '请输入正确的联系方式'
                    },
                    regexp: {
                        regexp: /^[0-9_]+$/,
                        message: '联系方式只能数字和下划线'
                    }
                }
            }
        }
    });
});