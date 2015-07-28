$(document).ready(function() {
    $("#create").click(function() {
        $("#note-content").hide();
        $("#create-note").show();
    });
    $("#give-up").click(function() {
        $("#note-content").show();
    });
    $("#view-note").click(function() {
        $("#note-content").show();
    });
    AV.initialize("74qd5frzizhdhr9gkppd4dwxvafyra6t6rb8epbvbsp6c0cm", "k1u14z5xsy5wazzdk26u3o8lkh7o1v30no5ss6xnd2xbeejn");
    var Note = AV.Object.extend("Note");
    var note = new Note();
    var query = new AV.Query(Note);
    query.find({
        success: function(results) {
            if (results.length == 0) {
                $("#view-note-title").append('<h1 id="remove-h1">' + '还没有笔记呢' + '</h1>');
                $("#view-note-content").append('<p id="remove-p">' + '快去写一篇(｡・`ω´･)' + '</p>');
            } else {
                for (var i = 0; i < results.length; i++) {
                    var object = results[i];
                    $("#get-list").append('<li>' + object.get('title') + '</li>');
                    $("#note-content").show();
                }
                $("#view-note-title").append('<h1 id="remove-h1">' + results[results.length - 1].get('title') + '</h1>');
                $("#view-note-content").append('<p id="remove-p">' + results[results.length - 1].get('content') + '</p>');
            }
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
    $("#create-note").submit(function(e) {
        e.preventDefault();
        var title_value = $("#title-value").val();
        var content_value = $("#content-value").val();
        note.set("title", title_value);
        note.set("content", content_value);
        note.save(null, {
            success: function(post) {
                alert('创建成功 ');
                location.reload();
            },
            error: function(post, error) {
                alert('创建失败！失败原因： ' + error.message);
            }
        });


    });
})
