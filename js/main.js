massage = [
    "๐ ๐งจ ุงูุบุงูู ุงููู ููุถุฑุจู ุจุง ุงูุงูู",
    "๐ ูุนูู ุงูุฌุฏุนูู ู ุงูุฑุฌููู",
    "๐โจ ุ ุงูุช ุงูู ุงููู ุฌุงุจู ููุง ูุณุทุง ุงูุช ููุงูู ูุน ุงููุฌูู",
    "โค ุงุฎููุง ุงูุฌุฏุน",
    "๐โจ ูุนูู ุงูุฌุฏุนูู ูููุง ",
];
Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
};


$(function () {
    if ($.cookie("name")) {
        $(".form-outline").hide();
        $(".btn").hide();
        $(".ew").text(
            " ุฎูุงุต  ูุง" + $.cookie("name") + "  ูู ุณูุฑู ููุง ุงูู ๐๐โค"
        );

    }
    count = 0;

    function go() {
        var name = $("#name").val();
        if (name.length <= 0) {
            $(".ew").text(" ูุณุทุง ุงูุชุจ ุงุณูู ูู ุณูุญุช ๐");
            count++;
            if (count === 2) {
                $(".ew").text(" ูุจุง ูุชุชุนุจุงูุด ุงูุชุจ ุงุณูู ๐ฌ");
            }
            if (count === 3) {
                $(".ew").text(" ุฃูุช ุจุงูู ุนููู ูุด ูุชุฌุจูุง ูุจุฑ");
            }
            if (count >= 4) {
                $(".ew").text("๐");
            }

        } else {
            $(".form-outline").hide();
            $(".ew").text(name + ' ' + massage.sample());
            $('.btn').hide();
            $.cookie("name", name);
        }
    }

    $('.btn').click(function (e) {
        e.preventDefault();
        go();

    });

});