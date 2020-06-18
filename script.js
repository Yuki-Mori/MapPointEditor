$(function () {
    // Aタグのhref属性に、Blobを設定する。
    // Blobに含めるデータは、引数で指定する。
    function setBlobUrl(id, content) {
        // 指定されたデータを保持するBlobを作成する。
        var blob = new Blob([content], {"type": "text/csv"});
        // Aタグのhref属性にBlobオブジェクトを設定する。
        window.URL = window.URL || window.webkitURL;
        $("#" + id).attr("href", window.URL.createObjectURL(blob));
    }

    $("#save").click(function () {
        setBlobUrl("download", $("#content").val());
        if($("#download").hasClass("no-link")){
            $("#download").removeClass("no-link");
        }
    });
    $("#content").keyup();
});