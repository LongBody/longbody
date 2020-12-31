$(document).ready(function() {
    var i = 0;

    var Playlist = [{
            Artist: "Sơn Tùng MTP",
            Song: "Chúng Ta Của Hiện Tại",
            Album: "Collage",
            Src: "./music/ctcht.mp3"
        },
        {
            Artist: "Đường Cổ",
            Song: "Hỏi Vấn",
            Album: "Collage",
            Src: "./music/Hỏi Vấn.mp3"
        },
        {
            Artist: "ĐẳNG Thập Yêu Quân",
            Song: "Quan Sơn Tửu",
            Album: "Divide",
            Src: "./music/Quan Sơn Tửu - Đẳng Thập Yêu Quân __ 关山酒 - 等什么君 (128  kbps).mp3"
        },
        {
            Artist: "Tử Vi",
            Song: "Buông Tay",
            Album: "Unbreakable",
            Src: "./music/vietsub_kara_buong_tay_tu_vi_-5990031736754129661.mp3"
        },
        {
            Artist: "Tân Anh Hùng Xạ Điêu",
            Song: "Kiếm Hồn Lý Vĩ",
            Album: "Unbreakable",
            Src: "./music/kiem_hon_ly_vi.mp3"
        },
        {
            Artist: "ĐẳNG Thập Ma Quân",
            Song: "Lương Dạ Hoành Đường",
            Album: "Unbreakable",
            Src: "./music/vietsub_luong_da_hoanh_duong_dang_thap_ma_quan_1406040.mp3"
        },
        {
            Artist: "Âm Khuyết Thi Thính",
            Song: "Ly Nhân Thương",
            Album: "Unbreakable",
            Src: "./music/vietsub_ly_nhan_thuong_am_khuyet_thi_thinh_ft_trieu_phuong_tinh_ft_-5863838567806819905.mp3"
        },
        {
            Artist: "Hồng Bố Điều & Lý Duyệt Quân",
            Song: "Phương Xa",
            Album: "Unbreakable",
            Src: "./music/vietsub_phuong_xa_hong_bo_dieu_ly_duyet_quan_luong_son_ba_chuc_anh_dai_2007_ost_-7810568681349782336.mp3"
        },
        {
            Artist: "Remix",
            Song: "Tư Niệm Hoa Dành Dành",
            Album: "Unbreakable",
            Src: "./music/Tư Niệm Hoa Dành Dành (TRỌNG RMX Remix) (Tik Tok) [] Nightcore [] GuMiHo Nightcore (128  kbps).mp3"
        },
        {
            Artist: "Đổng Trinh",
            Song: "Bỉ Ngạn",
            Album: "Unbreakable",
            Src: "./music/bi_ngan_dong_trinh_lan_lang_vuong_phi_ost_-3411247335387931446.mp3"
        }
    ];

    $("#songName").html(Playlist[i]["Song"]);
    $("#author-name").html(Playlist[i]["Artist"]);
    $("source").attr("src", Playlist[i]["Src"]);
    $(".artist-name").html(Playlist[i]["Artist"]);
    $(".list-group-item:nth-child(" + i + 2 + ")").addClass("active");

    $(".carousel").carousel({
        interval: false
    });

    var audio = $("audio").get(0);
    audio.load();

    $("#play-pause").on("click", function() {
        if (this.value == 1) {
            $("audio")
                .get(0)
                .play();
            this.value = 0;
            $(this).html("<i style='color:#007bff' class='fa fa-pause'></i>");
            $(".range-indicator").toggleClass("range-indicator-pause");
            $(".active").attr("style", "");
        } else {
            $("audio")
                .get(0)
                .pause();
            this.value = 1;
            $(this).html("<i class='fa fa-play'></i>");
            $(".range-indicator").addClass("range-indicator-pause");
            $(".active").attr("style", "background-color:#F44336a1");
        }
    });

    $("#next").on("click", function() {
        i++;
        if (i == Playlist.length) i = 0;
        $(".carousel").carousel("next");
        $("source").attr("src", Playlist[i]["Src"]);
        audio.load();
        audio.play();
        $("#songName").html(Playlist[i]["Song"]);
        $("#author-name").html(Playlist[i]["Artist"]);
        var btn = $("#play-pause");
        $(btn).html("<i style='color:#007bff' class='fa fa-pause'></i>");
        $(".range-indicator").removeClass("range-indicator-pause");
        $(".artist-name").html(Playlist[i]["Artist"]);
        var x = String(parseInt(i) + 2);
        var y = String(parseInt(x) - 1);
        str = "nth-child(" + y + ")";
        if (x == 2) str = "last-child()";
        $(".list-group-item:nth-child(" + x + ")").addClass("active");
        $(".list-group-item:" + str).removeClass("active");
        $(".list-group-item:" + str).attr("style", "");
    });

    $("#prev").on("click", function() {
        i--;
        if (i == -1) {
            i = Playlist.length - 1;
        }
        $(".carousel").carousel("prev");
        $("source").attr("src", Playlist[i]["Src"]);
        audio.load();
        audio.play();
        $("#songName").html(Playlist[i]["Song"]);
        $("#author-name").html(Playlist[i]["Artist"]);
        var btn = $("#play-pause");
        $(btn).html("<i style='color:#007bff' class='fa fa-pause'></i>");
        $(".range-indicator").removeClass("range-indicator-pause");
        $(".artist-name").html(Playlist[i]["Artist"]);
        var x = String(parseInt(i) + 2);
        var y = String(parseInt(x) + 1);
        str = "nth-child(" + y + ")";
        if (x == Playlist.length + 1) str = "nth-child(2)";
        $(".list-group-item:nth-child(" + x + ")").addClass("active");
        $(".list-group-item:" + str).removeClass("active");
        $(".list-group-item:" + str).attr("style", "");
    });

    audio.addEventListener("timeupdate", function() {
        var cmin = Math.floor(this.currentTime / 60);
        if (cmin < 10) cmin = "0" + cmin;
        var csec = Math.floor(this.currentTime) % 60;
        if (csec < 10) csec = "0" + csec;
        var dmin = Math.floor(this.duration / 60);
        if (dmin < 10) dmin = "0" + dmin;
        var dsec = Math.floor(this.duration) % 60;
        if (dsec < 10) dsec = "0" + dsec;
        $("#tracktime").html(cmin + ":" + csec + " / " + dmin + ":" + dsec);
        $(".range-indicator").attr(
            "style",
            "width:" +
            Math.floor(this.currentTime) / Math.floor(this.duration) * 100 +
            "%"
        );

        if (this.currentTime == this.duration) {
            $("#next").trigger("click");
        }
    });

    $("#inputrange").attr("max", Math.floor($("audio").get(0).duration));

    $("#inputrange").on("click", function() {
        $("audio").get(0).currentTime =
            this.value * $("audio").get(0).duration / 100;
    });

    $(window).keypress(function(e) {
        if (e.keyCode === 0 || e.keyCode === 32) {
            e.preventDefault();
            $("#play-pause").trigger("click");
        }
    });

    $(".list-group-item").on("click", function() {
        var x = String(parseInt(i) + 2);
        $(".list-group-item:nth-child(" + x + ")").removeClass("active");
        $(".list-group-item:nth-child(" + x + ")").attr("style", "");
        i = this.value;
        var x1 = String(parseInt(i) + 2);
        $(".list-group-item:nth-child(" + x1 + ")").addClass("active");
        $(".carousel").carousel(parseInt(i));
        $("source").attr("src", Playlist[i]["Src"]);
        audio.load();
        audio.play();
        $("#songName").html(Playlist[i]["Song"]);
        $("#author-name").html(Playlist[i]["Artist"]);
        var btn = $("#play-pause");
        $(btn).html("<i style='color:#007bff' class='fa fa-pause'></i>");
        $(".range-indicator").removeClass("range-indicator-pause");
        $(".artist-name").html(Playlist[i]["Artist"]);
    });

    $("#playlist-btn").on("click", function() {
        if (this.value == 0) {
            $(".playlist").attr("style", "height:298px");
            this.value = 1;
            $(this).html('<i class="fa fa-times">');
        } else if (this.value == 1) {
            $(".playlist").attr("style", "");
            this.value = 0;
            $(this).html('<i class="fa fa-bars">');
        }
    });
});