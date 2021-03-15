massage = [
    "💖 🧨 الغالي اللي هنضربو با الالي",
    "😘 يعني الجدعنه و الرجوله",
    "💖✨ ؟ انت ايه اللي جابك هنا يسطا انت مكانك مع النجوم",
    "❤ اخويا الجدع",
    "💖✨ يعني الجدعنه كلها ",
];
Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
};


$(function () {
    if ($.cookie("name")) {
        $(".form-outline").hide();
        $(".btn").hide();
        $(".ew").text(
            " خلاص " + $.cookie("name") + "  هي سيره ولا ايه 😂😂❤"
        );

    }
    count = 0;

    function go() {
        var name = $("#name").val();
        if (name.length <= 0) {
            $(".ew").text(" يسطا اكتب اسمك لو سمحت 😌");
            count++;
            if (count === 2) {
                $(".ew").text(" يبا متتعبانش اكتب اسمك 😬");
            }
            if (count === 3) {
                $(".ew").text(" أنت باين عليك مش هتجبها لبر");
            }
            if (count >= 4) {
                $(".ew").text("🙂");
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