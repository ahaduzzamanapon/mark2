window.swipedetect = function(e, t) {
    var n, i, r, o, a, s, d = e,
        l = t || function(e) {};
    d.addEventListener("touchstart", (function(e) {
        var t = e.changedTouches[0];
        n = "none", dist = 0, i = t.pageX, r = t.pageY, s = (new Date).getTime()
    }), {
        passive: !0
    }), d.addEventListener("touchmove", (function(e) {}), {
        passive: !0
    }), d.addEventListener("touchend", (function(e) {
        var t = e.changedTouches[0];
        o = t.pageX - i, a = t.pageY - r, (new Date).getTime() - s <= 240 && (Math.abs(o) >= 50 && Math.abs(a) <= 160 ? n = o < 0 ? "left" : "right" : Math.abs(a) >= 50 && Math.abs(o) <= 160 && (n = a < 0 ? "up" : "down")), l(n)
    }), {
        passive: !0
    })
}

window.dateDropperInit = function(params) {
    ! function(e, t) {
        "use strict";
    },

    $.dateDropperSetup = {
            languages: {
                en: {
                    name: "English",
                    months: {
                        short: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
                        full: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    },
                    weekdays: {
                        short: ["S", "M", "T", "W", "T", "F", "S"],
                        full: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    }
                },
                ka: {
                    name: "Georgian",
                    months: {
                        short: ["Ã¡Æ’ËœÃ¡Æ’ÂÃ¡Æ’Å“", "Ã¡Æ’â€”Ã¡Æ’â€Ã¡Æ’â€˜", "Ã¡Æ’â€ºÃ¡Æ’ÂÃ¡Æ’ Ã¡Æ’Â¢", "Ã¡Æ’ÂÃ¡Æ’Å¾Ã¡Æ’ ", "Ã¡Æ’â€ºÃ¡Æ’ÂÃ¡Æ’Ëœ", "Ã¡Æ’ËœÃ¡Æ’â€¢Ã¡Æ’Å“", "Ã¡Æ’ËœÃ¡Æ’â€¢Ã¡Æ’Å¡", "Ã¡Æ’ÂÃ¡Æ’â€™Ã¡Æ’â€¢", "Ã¡Æ’Â¡Ã¡Æ’â€Ã¡Æ’Â¥Ã¡Æ’Â¢", "Ã¡Æ’ÂÃ¡Æ’Â¥Ã¡Æ’Â¢", "Ã¡Æ’Å“Ã¡Æ’ÂÃ¡Æ’â€Ã¡Æ’â€ºÃ¡Æ’â€˜", "Ã¡Æ’â€œÃ¡Æ’â€Ã¡Æ’â„¢"],
                        full: ["Ã¡Æ’ËœÃ¡Æ’ÂÃ¡Æ’Å“Ã¡Æ’â€¢Ã¡Æ’ÂÃ¡Æ’ Ã¡Æ’Ëœ", "Ã¡Æ’â€”Ã¡Æ’â€Ã¡Æ’â€˜Ã¡Æ’â€Ã¡Æ’ Ã¡Æ’â€¢Ã¡Æ’ÂÃ¡Æ’Å¡Ã¡Æ’Ëœ", "Ã¡Æ’â€ºÃ¡Æ’ÂÃ¡Æ’ Ã¡Æ’Â¢Ã¡Æ’Ëœ", "Ã¡Æ’ÂÃ¡Æ’Å¾Ã¡Æ’ Ã¡Æ’ËœÃ¡Æ’Å¡Ã¡Æ’Ëœ", "Ã¡Æ’â€ºÃ¡Æ’ÂÃ¡Æ’ËœÃ¡Æ’Â¡Ã¡Æ’Ëœ", "Ã¡Æ’ËœÃ¡Æ’â€¢Ã¡Æ’Å“Ã¡Æ’ËœÃ¡Æ’Â¡Ã¡Æ’Ëœ", "Ã¡Æ’ËœÃ¡Æ’â€¢Ã¡Æ’Å¡Ã¡Æ’ËœÃ¡Æ’Â¡Ã¡Æ’Ëœ", "Ã¡Æ’ÂÃ¡Æ’â€™Ã¡Æ’â€¢Ã¡Æ’ËœÃ¡Æ’Â¡Ã¡Æ’Â¢Ã¡Æ’Â", "Ã¡Æ’Â¡Ã¡Æ’â€Ã¡Æ’Â¥Ã¡Æ’Â¢Ã¡Æ’â€Ã¡Æ’â€ºÃ¡Æ’â€˜Ã¡Æ’â€Ã¡Æ’ Ã¡Æ’Ëœ", "Ã¡Æ’ÂÃ¡Æ’Â¥Ã¡Æ’Â¢Ã¡Æ’ÂÃ¡Æ’â€ºÃ¡Æ’â€˜Ã¡Æ’â€Ã¡Æ’ Ã¡Æ’Ëœ", "Ã¡Æ’Å“Ã¡Æ’ÂÃ¡Æ’â€Ã¡Æ’â€ºÃ¡Æ’â€˜Ã¡Æ’â€Ã¡Æ’ Ã¡Æ’Ëœ", "Ã¡Æ’â€œÃ¡Æ’â€Ã¡Æ’â„¢Ã¡Æ’â€Ã¡Æ’â€ºÃ¡Æ’â€˜Ã¡Æ’â€Ã¡Æ’ Ã¡Æ’Ëœ"]
                    },
                    weekdays: {
                        short: ["Ã¡Æ’â„¢Ã¡Æ’â€¢", "Ã¡Æ’ÂÃ¡Æ’ ", "Ã¡Æ’Â¡Ã¡Æ’ÂÃ¡Æ’â€º", "Ã¡Æ’ÂÃ¡Æ’â€”Ã¡Æ’Â®", "Ã¡Æ’Â®Ã¡Æ’Â£Ã¡Æ’â€”", "Ã¡Æ’Å¾Ã¡Æ’ÂÃ¡Æ’ ", "Ã¡Æ’Â¨Ã¡Æ’ÂÃ¡Æ’â€˜"],
                        full: ["Ã¡Æ’â„¢Ã¡Æ’â€¢Ã¡Æ’ËœÃ¡Æ’ Ã¡Æ’Â", "Ã¡Æ’ÂÃ¡Æ’ Ã¡Æ’Â¨Ã¡Æ’ÂÃ¡Æ’â€˜Ã¡Æ’ÂÃ¡Æ’â€”Ã¡Æ’Ëœ", "Ã¡Æ’Â¡Ã¡Æ’ÂÃ¡Æ’â€ºÃ¡Æ’Â¨Ã¡Æ’ÂÃ¡Æ’â€˜Ã¡Æ’ÂÃ¡Æ’â€”Ã¡Æ’Ëœ", "Ã¡Æ’ÂÃ¡Æ’â€”Ã¡Æ’Â®Ã¡Æ’Â¨Ã¡Æ’ÂÃ¡Æ’â€˜Ã¡Æ’ÂÃ¡Æ’â€”Ã¡Æ’Ëœ", "Ã¡Æ’Â®Ã¡Æ’Â£Ã¡Æ’â€”Ã¡Æ’Â¨Ã¡Æ’ÂÃ¡Æ’â€˜Ã¡Æ’ÂÃ¡Æ’â€”Ã¡Æ’Ëœ", "Ã¡Æ’Å¾Ã¡Æ’ÂÃ¡Æ’ Ã¡Æ’ÂÃ¡Æ’Â¡Ã¡Æ’â„¢Ã¡Æ’â€Ã¡Æ’â€¢Ã¡Æ’Ëœ", "Ã¡Æ’Â¨Ã¡Æ’ÂÃ¡Æ’â€˜Ã¡Æ’ÂÃ¡Æ’â€”Ã¡Æ’Ëœ"]
                    }
                },
                it: {
                    name: "Italiano",
                    months: {
                        short: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
                        full: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]
                    },
                    weekdays: {
                        short: ["D", "L", "M", "M", "G", "V", "S"],
                        full: ["Domenica", "LunedÃƒÂ¬", "MartedÃƒÂ¬", "MercoledÃƒÂ¬", "GiovedÃƒÂ¬", "VenerdÃƒÂ¬", "Sabato"]
                    }
                },
                fr: {
                    name: "FranÃƒÂ§ais",
                    months: {
                        short: ["Jan", "FÃƒÂ©v", "Mar", "Avr", "Mai", "Jui", "Jui", "AoÃƒÂ»", "Sep", "Oct", "Nov", "DÃƒÂ©c"],
                        full: ["Janvier", "FÃƒÂ©vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "AoÃƒÂ»t", "Septembre", "Octobre", "Novembre", "DÃƒÂ©cembre"]
                    },
                    weekdays: {
                        short: ["D", "L", "M", "M", "J", "V", "S"],
                        full: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
                    }
                },
                zh: {
                    name: "Ã¤Â¸Â­Ã¦â€“â€¡",
                    months: {
                        short: ["Ã¤Â¸â‚¬Ã¦Å“Ë†", "Ã¤ÂºÅ’Ã¦Å“Ë†", "Ã¤Â¸â€°Ã¦Å“Ë†", "Ã¥â€ºâ€ºÃ¦Å“Ë†", "Ã¤Âºâ€Ã¦Å“Ë†", "Ã¥â€¦Â­Ã¦Å“Ë†", "Ã¤Â¸Æ’Ã¦Å“Ë†", "Ã¥â€¦Â«Ã¦Å“Ë†", "Ã¤Â¹ÂÃ¦Å“Ë†", "Ã¥ÂÂÃ¦Å“Ë†", "Ã¥ÂÂÃ¤Â¸â‚¬Ã¦Å“Ë†", "Ã¥ÂÂÃ¤ÂºÅ’Ã¦Å“Ë†"],
                        full: ["Ã¤Â¸â‚¬Ã¦Å“Ë†", "Ã¤ÂºÅ’Ã¦Å“Ë†", "Ã¤Â¸â€°Ã¦Å“Ë†", "Ã¥â€ºâ€ºÃ¦Å“Ë†", "Ã¤Âºâ€Ã¦Å“Ë†", "Ã¥â€¦Â­Ã¦Å“Ë†", "Ã¤Â¸Æ’Ã¦Å“Ë†", "Ã¥â€¦Â«Ã¦Å“Ë†", "Ã¤Â¹ÂÃ¦Å“Ë†", "Ã¥ÂÂÃ¦Å“Ë†", "Ã¥ÂÂÃ¤Â¸â‚¬Ã¦Å“Ë†", "Ã¥ÂÂÃ¤ÂºÅ’Ã¦Å“Ë†"]
                    },
                    weekdays: {
                        short: ["Ã¥Â¤Â©", "Ã¤Â¸â‚¬", "Ã¤ÂºÅ’", "Ã¤Â¸â€°", "Ã¥â€ºâ€º", "Ã¤Âºâ€", "Ã¥â€¦Â­"],
                        full: ["Ã¦ËœÅ¸Ã¦Å“Å¸Ã¥Â¤Â©", "Ã¦ËœÅ¸Ã¦Å“Å¸Ã¤Â¸â‚¬", "Ã¦ËœÅ¸Ã¦Å“Å¸Ã¤ÂºÅ’", "Ã¦ËœÅ¸Ã¦Å“Å¸Ã¤Â¸â€°", "Ã¦ËœÅ¸Ã¦Å“Å¸Ã¥â€ºâ€º", "Ã¦ËœÅ¸Ã¦Å“Å¸Ã¤Âºâ€", "Ã¦ËœÅ¸Ã¦Å“Å¸Ã¥â€¦Â­"]
                    }
                },
                ar: {
                    name: "Ã˜Â§Ã™â€žÃ˜Â¹Ã™Å½Ã˜Â±Ã™Å½Ã˜Â¨Ã™ÂÃ™Å Ã™Å½Ã™â€˜Ã˜Â©",
                    months: {
                        short: ["Ã˜Â¬Ã˜Â§Ã™â€ Ã™ÂÃ™Å ", "Ã™ÂÃ™Å Ã™ÂÃ˜Â±Ã™Å ", "Ã™â€¦Ã˜Â§Ã˜Â±Ã˜Â³", "Ã˜Â£Ã™ÂÃ˜Â±Ã™Å Ã™â€ž", "Ã™â€¦Ã˜Â§Ã™Å ", "Ã˜Â¬Ã™Ë†Ã˜Â§Ã™â€ ", "Ã˜Â¬Ã™Ë†Ã™Å Ã™â€žÃ™Å Ã˜Â©", "Ã˜Â£Ã™Ë†Ã˜Âª", "Ã˜Â³Ã˜Â¨Ã˜ÂªÃ™â€¦Ã˜Â¨Ã˜Â±", "Ã˜Â£Ã™Æ’Ã˜ÂªÃ™Ë†Ã˜Â¨Ã˜Â±", "Ã™â€ Ã™Ë†Ã™ÂÃ™â€¦Ã˜Â¨Ã˜Â±", "Ã˜Â¯Ã™Å Ã˜Â³Ã™â€¦Ã˜Â¨Ã˜Â±"],
                        full: ["Ã˜Â¬Ã˜Â§Ã™â€ Ã™ÂÃ™Å ", "Ã™ÂÃ™Å Ã™ÂÃ˜Â±Ã™Å ", "Ã™â€¦Ã˜Â§Ã˜Â±Ã˜Â³", "Ã˜Â£Ã™ÂÃ˜Â±Ã™Å Ã™â€ž", "Ã™â€¦Ã˜Â§Ã™Å ", "Ã˜Â¬Ã™Ë†Ã˜Â§Ã™â€ ", "Ã˜Â¬Ã™Ë†Ã™Å Ã™â€žÃ™Å Ã˜Â©", "Ã˜Â£Ã™Ë†Ã˜Âª", "Ã˜Â³Ã˜Â¨Ã˜ÂªÃ™â€¦Ã˜Â¨Ã˜Â±", "Ã˜Â£Ã™Æ’Ã˜ÂªÃ™Ë†Ã˜Â¨Ã˜Â±", "Ã™â€ Ã™Ë†Ã™ÂÃ™â€¦Ã˜Â¨Ã˜Â±", "Ã˜Â¯Ã™Å Ã˜Â³Ã™â€¦Ã˜Â¨Ã˜Â±"]
                    },
                    weekdays: {
                        short: ["S", "M", "T", "W", "T", "F", "S"],
                        full: ["Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â­Ã˜Â¯", "Ã˜Â§Ã™â€žÃ˜Â¥Ã˜Â«Ã™â€ Ã™Å Ã™â€ ", "Ã˜Â§Ã™â€žÃ˜Â«Ã™â€žÃ˜Â«Ã˜Â§Ã˜Â¡", "Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â±Ã˜Â¨Ã˜Â¹Ã˜Â§Ã˜Â¡", "Ã˜Â§Ã™â€žÃ˜Â®Ã™â€¦Ã™Å Ã˜Â³", "Ã˜Â§Ã™â€žÃ˜Â¬Ã™â€¦Ã˜Â¹Ã˜Â©", "Ã˜Â§Ã™â€žÃ˜Â³Ã˜Â¨Ã˜Âª"]
                    }
                },
                fa: {
                    name: "Ã™ÂÃ˜Â§Ã˜Â±Ã˜Â³Ã›Å’",
                    months: {
                        short: ["ÃšËœÃ˜Â§Ã™â€ Ã™Ë†Ã›Å’Ã™â€¡", "Ã™ÂÃ™Ë†Ã™Ë†Ã˜Â±Ã›Å’Ã™â€¡", "Ã™â€¦Ã˜Â§Ã˜Â±Ãšâ€ ", "Ã˜Â¢Ã™Â¾Ã˜Â±Ã›Å’Ã™â€ž", "Ã™â€¦Ã›Å’", "Ã˜Â¬Ã™Ë†Ã™â€ ", "Ã˜Â¬Ã™Ë†Ã™â€žÃ˜Â§Ã›Å’", "Ã˜Â¢ÃšÂ¯Ã™Ë†Ã˜Â³Ã˜Âª", "Ã˜Â³Ã™Â¾Ã˜ÂªÃ˜Â§Ã™â€¦Ã˜Â¨Ã˜Â±", "Ã˜Â§ÃšÂ©Ã˜ÂªÃ˜Â¨Ã˜Â±", "Ã™â€ Ã™Ë†Ã˜Â§Ã™â€¦Ã˜Â¨Ã˜Â±", "Ã˜Â¯Ã˜Â³Ã˜Â§Ã™â€¦Ã˜Â¨Ã˜Â±"],
                        full: ["ÃšËœÃ˜Â§Ã™â€ Ã™Ë†Ã›Å’Ã™â€¡", "Ã™ÂÃ™Ë†Ã™Ë†Ã˜Â±Ã›Å’Ã™â€¡", "Ã™â€¦Ã˜Â§Ã˜Â±Ãšâ€ ", "Ã˜Â¢Ã™Â¾Ã˜Â±Ã›Å’Ã™â€ž", "Ã™â€¦Ã›Å’", "Ã˜Â¬Ã™Ë†Ã™â€ ", "Ã˜Â¬Ã™Ë†Ã™â€žÃ˜Â§Ã›Å’", "Ã˜Â¢ÃšÂ¯Ã™Ë†Ã˜Â³Ã˜Âª", "Ã˜Â³Ã™Â¾Ã˜ÂªÃ˜Â§Ã™â€¦Ã˜Â¨Ã˜Â±", "Ã˜Â§ÃšÂ©Ã˜ÂªÃ˜Â¨Ã˜Â±", "Ã™â€ Ã™Ë†Ã˜Â§Ã™â€¦Ã˜Â¨Ã˜Â±", "Ã˜Â¯Ã˜Â³Ã˜Â§Ã™â€¦Ã˜Â¨Ã˜Â±"]
                    },
                    weekdays: {
                        short: ["S", "M", "T", "W", "T", "F", "S"],
                        full: ["Ã›Å’ÃšÂ©Ã˜Â´Ã™â€ Ã˜Â¨Ã™â€¡", "Ã˜Â¯Ã™Ë†Ã˜Â´Ã™â€ Ã˜Â¨Ã™â€¡", "Ã˜Â³Ã™â€¡ Ã˜Â´Ã™â€ Ã˜Â¨Ã™â€¡", "Ãšâ€ Ã™â€¡Ã˜Â§Ã˜Â±Ã˜Â´Ã™â€ Ã˜Â¨Ã™â€¡", "Ã™Â¾Ã™â€ Ã˜Â¬ Ã˜Â´Ã™â€ Ã˜Â¨Ã™â€¡", "Ã˜Â¬Ã™â€¦Ã˜Â¹Ã™â€¡", "Ã˜Â´Ã™â€ Ã˜Â¨Ã™â€¡"]
                    }
                },
                hu: {
                    name: "Hungarian",
                    months: {
                        short: ["jan", "feb", "mÃƒÂ¡r", "ÃƒÂ¡pr", "mÃƒÂ¡j", "jÃƒÂºn", "jÃƒÂºl", "aug", "sze", "okt", "nov", "dec"],
                        full: ["januÃƒÂ¡r", "februÃƒÂ¡r", "mÃƒÂ¡rcius", "ÃƒÂ¡prilis", "mÃƒÂ¡jus", "jÃƒÂºnius", "jÃƒÂºlius", "augusztus", "szeptember", "oktÃƒÂ³ber", "november", "december"]
                    },
                    weekdays: {
                        short: ["v", "h", "k", "s", "c", "p", "s"],
                        full: ["vasÃƒÂ¡rnap", "hÃƒÂ©tfÃ…â€˜", "kedd", "szerda", "csÃƒÂ¼tÃƒÂ¶rtÃƒÂ¶k", "pÃƒÂ©ntek", "szombat"]
                    }
                },
                gr: {
                    name: "ÃŽâ€¢ÃŽÂ»ÃŽÂ»ÃŽÂ·ÃŽÂ½ÃŽÂ¹ÃŽÂºÃŽÂ¬",
                    months: {
                        short: ["ÃŽâ„¢ÃŽÂ±ÃŽÂ½", "ÃŽÂ¦ÃŽÂµÃŽÂ²", "ÃŽÅ“ÃŽÂ¬ÃÂ", "ÃŽâ€˜Ãâ‚¬ÃÂ", "ÃŽÅ“ÃŽÂ¬ÃŽÂ¹", "ÃŽâ„¢ÃŽÂ¿ÃÂÃŽÂ½", "ÃŽâ„¢ÃŽÂ¿ÃÂÃŽÂ»", "ÃŽâ€˜ÃÂÃŽÂ³", "ÃŽÂ£ÃŽÂµÃâ‚¬", "ÃŽÅ¸ÃŽÂºÃâ€ž", "ÃŽÂÃŽÂ¿ÃŽÂ­", "ÃŽâ€ÃŽÂµÃŽÂº"],
                        full: ["ÃŽâ„¢ÃŽÂ±ÃŽÂ½ÃŽÂ¿Ãâ€¦ÃŽÂ¬ÃÂÃŽÂ¹ÃŽÂ¿Ãâ€š", "ÃŽÂ¦ÃŽÂµÃŽÂ²ÃÂÃŽÂ¿Ãâ€¦ÃŽÂ¬ÃÂÃŽÂ¹ÃŽÂ¿Ãâ€š", "ÃŽÅ“ÃŽÂ¬ÃÂÃâ€žÃŽÂ¹ÃŽÂ¿Ãâ€š", "ÃŽâ€˜Ãâ‚¬ÃÂÃŽÂ¯ÃŽÂ»ÃŽÂ¹ÃŽÂ¿Ãâ€š", "ÃŽÅ“ÃŽÂ¬ÃŽÂ¹ÃŽÂ¿Ãâ€š", "ÃŽâ„¢ÃŽÂ¿ÃÂÃŽÂ½ÃŽÂ¹ÃŽÂ¿Ãâ€š", "ÃŽâ„¢ÃŽÂ¿ÃÂÃŽÂ»ÃŽÂ¹ÃŽÂ¿Ãâ€š", "ÃŽâ€˜ÃÂÃŽÂ³ÃŽÂ¿Ãâ€¦ÃÆ’Ãâ€žÃŽÂ¿Ãâ€š", "ÃŽÂ£ÃŽÂµÃâ‚¬Ãâ€žÃŽÂ­ÃŽÂ¼ÃŽÂ²ÃÂÃŽÂ¹ÃŽÂ¿Ãâ€š", "ÃŽÅ¸ÃŽÂºÃâ€žÃÅ½ÃŽÂ²ÃÂÃŽÂ¹ÃŽÂ¿Ãâ€š", "ÃŽÂÃŽÂ¿ÃŽÂ­ÃŽÂ¼ÃŽÂ²ÃÂÃŽÂ¹ÃŽÂ¿Ãâ€š", "ÃŽâ€ÃŽÂµÃŽÂºÃŽÂ­ÃŽÂ¼ÃŽÂ²ÃÂÃŽÂ¹ÃŽÂ¿Ãâ€š"]
                    },
                    weekdays: {
                        short: ["ÃŽÅ¡", "ÃŽâ€", "ÃŽÂ¤", "ÃŽÂ¤", "ÃŽ ", "ÃŽ ", "ÃŽÂ£"],
                        full: ["ÃŽÅ¡Ãâ€¦ÃÂÃŽÂ¹ÃŽÂ±ÃŽÂºÃŽÂ®", "ÃŽâ€ÃŽÂµÃâ€¦Ãâ€žÃŽÂ­ÃÂÃŽÂ±", "ÃŽÂ¤ÃÂÃŽÂ¯Ãâ€žÃŽÂ·", "ÃŽÂ¤ÃŽÂµÃâ€žÃŽÂ¬ÃÂÃâ€žÃŽÂ·", "ÃŽ ÃŽÂ­ÃŽÂ¼Ãâ‚¬Ãâ€žÃŽÂ·", "ÃŽ ÃŽÂ±ÃÂÃŽÂ±ÃÆ’ÃŽÂºÃŽÂµÃâ€¦ÃŽÂ®", "ÃŽÂ£ÃŽÂ¬ÃŽÂ²ÃŽÂ²ÃŽÂ±Ãâ€žÃŽÂ¿"]
                    }
                },
                es: {
                    name: "EspaÃƒÂ±ol",
                    months: {
                        short: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                        full: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
                    },
                    weekdays: {
                        short: ["D", "L", "M", "X", "J", "V", "S"],
                        full: ["Domingo", "Lunes", "Martes", "MiÃƒÂ©rcoles", "Jueves", "Viernes", "SÃƒÂ¡bado"]
                    }
                },
                da: {
                    name: "Dansk",
                    months: {
                        short: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
                        full: ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"]
                    },
                    weekdays: {
                        short: ["s", "m", "t", "o", "t", "f", "l"],
                        full: ["sÃƒÂ¸ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lÃƒÂ¸rdag"]
                    }
                },
                de: {
                    name: "Deutsch",
                    months: {
                        short: ["Jan", "Feb", "MÃƒÂ¤r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
                        full: ["Januar", "Februar", "MÃƒÂ¤rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
                    },
                    weekdays: {
                        short: ["S", "M", "D", "M", "D", "F", "S"],
                        full: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                    }
                },
                nl: {
                    name: "Nederlands",
                    months: {
                        short: ["jan", "feb", "maa", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
                        full: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]
                    },
                    weekdays: {
                        short: ["z", "m", "d", "w", "d", "v", "z"],
                        full: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
                    }
                },
                pl: {
                    name: "jÃ„â„¢zyk polski",
                    months: {
                        short: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paÃ…Âº", "lis", "gru"],
                        full: ["styczeÃ…â€ž", "luty", "marzec", "kwiecieÃ…â€ž", "maj", "czerwiec", "lipiec", "sierpieÃ…â€ž", "wrzesieÃ…â€ž", "paÃ…Âºdziernik", "listopad", "grudzieÃ…â€ž"]
                    },
                    weekdays: {
                        short: ["n", "p", "w", "Ã…â€º", "c", "p", "s"],
                        full: ["niedziela", "poniedziaÃ…â€šek", "wtorek", "Ã…â€ºroda", "czwartek", "piÃ„â€¦tek", "sobota"]
                    }
                },
                pt: {
                    name: "PortuguÃƒÂªs",
                    months: {
                        short: ["Janeiro", "Fevereiro", "MarÃƒÂ§o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                        full: ["Janeiro", "Fevereiro", "MarÃƒÂ§o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
                    },
                    weekdays: {
                        short: ["D", "S", "T", "Q", "Q", "S", "S"],
                        full: ["Domingo", "Segunda", "TerÃƒÂ§a", "Quarta", "Quinta", "Sexta", "SÃƒÂ¡bado"]
                    }
                },
                si: {
                    name: "SlovenÃ…Â¡Ã„Âina",
                    months: {
                        short: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"],
                        full: ["januar", "februar", "marec", "april", "maj", "junij", "julij", "avgust", "september", "oktober", "november", "december"]
                    },
                    weekdays: {
                        short: ["n", "p", "t", "s", "Ã„Â", "p", "s"],
                        full: ["nedelja", "ponedeljek", "torek", "sreda", "Ã„Âetrtek", "petek", "sobota"]
                    }
                },
                uk: {
                    name: "Ã‘Æ’ÃÂºÃ‘â‚¬ÃÂ°Ã‘â€”ÃÂ½Ã‘ÂÃ‘Å’ÃÂºÃÂ° ÃÂ¼ÃÂ¾ÃÂ²ÃÂ°",
                    months: {
                        short: ["Ã‘ÂÃ‘â€“Ã‘â€¡ÃÂµÃÂ½Ã‘Å’", "ÃÂ»Ã‘Å½Ã‘â€šÃÂ¸ÃÂ¹", "ÃÂ±ÃÂµÃ‘â‚¬ÃÂµÃÂ·ÃÂµÃÂ½Ã‘Å’", "ÃÂºÃÂ²Ã‘â€“Ã‘â€šÃÂµÃÂ½Ã‘Å’", "Ã‘â€šÃ‘â‚¬ÃÂ°ÃÂ²ÃÂµÃÂ½Ã‘Å’", "Ã‘â€¡ÃÂµÃ‘â‚¬ÃÂ²ÃÂµÃÂ½Ã‘Å’", "ÃÂ»ÃÂ¸ÃÂ¿ÃÂµÃÂ½Ã‘Å’", "Ã‘ÂÃÂµÃ‘â‚¬ÃÂ¿ÃÂµÃÂ½Ã‘Å’", "ÃÂ²ÃÂµÃ‘â‚¬ÃÂµÃ‘ÂÃÂµÃÂ½Ã‘Å’", "ÃÂ¶ÃÂ¾ÃÂ²Ã‘â€šÃÂµÃÂ½Ã‘Å’", "ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€šÃÂ¾ÃÂ¿ÃÂ°ÃÂ´", "ÃÂ³Ã‘â‚¬Ã‘Æ’ÃÂ´ÃÂµÃÂ½Ã‘Å’"],
                        full: ["Ã‘ÂÃ‘â€“Ã‘â€¡ÃÂµÃÂ½Ã‘Å’", "ÃÂ»Ã‘Å½Ã‘â€šÃÂ¸ÃÂ¹", "ÃÂ±ÃÂµÃ‘â‚¬ÃÂµÃÂ·ÃÂµÃÂ½Ã‘Å’", "ÃÂºÃÂ²Ã‘â€“Ã‘â€šÃÂµÃÂ½Ã‘Å’", "Ã‘â€šÃ‘â‚¬ÃÂ°ÃÂ²ÃÂµÃÂ½Ã‘Å’", "Ã‘â€¡ÃÂµÃ‘â‚¬ÃÂ²ÃÂµÃÂ½Ã‘Å’", "ÃÂ»ÃÂ¸ÃÂ¿ÃÂµÃÂ½Ã‘Å’", "Ã‘ÂÃÂµÃ‘â‚¬ÃÂ¿ÃÂµÃÂ½Ã‘Å’", "ÃÂ²ÃÂµÃ‘â‚¬ÃÂµÃ‘ÂÃÂµÃÂ½Ã‘Å’", "ÃÂ¶ÃÂ¾ÃÂ²Ã‘â€šÃÂµÃÂ½Ã‘Å’", "ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€šÃÂ¾ÃÂ¿ÃÂ°ÃÂ´", "ÃÂ³Ã‘â‚¬Ã‘Æ’ÃÂ´ÃÂµÃÂ½Ã‘Å’"]
                    },
                    weekdays: {
                        short: ["ÃÂ½", "ÃÂ¿", "ÃÂ²", "Ã‘Â", "Ã‘â€¡", "ÃÂ¿", "Ã‘Â"],
                        full: ["ÃÂ½ÃÂµÃÂ´Ã‘â€“ÃÂ»Ã‘Â", "ÃÂ¿ÃÂ¾ÃÂ½ÃÂµÃÂ´Ã‘â€“ÃÂ»ÃÂ¾ÃÂº", "ÃÂ²Ã‘â€“ÃÂ²Ã‘â€šÃÂ¾Ã‘â‚¬ÃÂ¾ÃÂº", "Ã‘ÂÃÂµÃ‘â‚¬ÃÂµÃÂ´ÃÂ°", "Ã‘â€¡ÃÂµÃ‘â€šÃÂ²ÃÂµÃ‘â‚¬", "ÃÂ¿'Ã‘ÂÃ‘â€šÃÂ½ÃÂ¸Ã‘â€ Ã‘Â", "Ã‘ÂÃ‘Æ’ÃÂ±ÃÂ¾Ã‘â€šÃÂ°"]
                    }
                },
                ru: {
                    name: "Ã‘â‚¬Ã‘Æ’Ã‘ÂÃ‘ÂÃÂºÃÂ¸ÃÂ¹ Ã‘ÂÃÂ·Ã‘â€¹ÃÂº",
                    months: {
                        short: ["Ã‘ÂÃÂ½ÃÂ²ÃÂ°Ã‘â‚¬Ã‘Å’", "Ã‘â€žÃÂµÃÂ²Ã‘â‚¬ÃÂ°ÃÂ»Ã‘Å’", "ÃÂ¼ÃÂ°Ã‘â‚¬Ã‘â€š", "ÃÂ°ÃÂ¿Ã‘â‚¬ÃÂµÃÂ»Ã‘Å’", "ÃÂ¼ÃÂ°ÃÂ¹", "ÃÂ¸Ã‘Å½ÃÂ½Ã‘Å’", "ÃÂ¸Ã‘Å½ÃÂ»Ã‘Å’", "ÃÂ°ÃÂ²ÃÂ³Ã‘Æ’Ã‘ÂÃ‘â€š", "Ã‘ÂÃÂµÃÂ½Ã‘â€šÃ‘ÂÃÂ±Ã‘â‚¬Ã‘Å’", "ÃÂ¾ÃÂºÃ‘â€šÃ‘ÂÃÂ±Ã‘â‚¬Ã‘Å’", "ÃÂ½ÃÂ¾Ã‘ÂÃÂ±Ã‘â‚¬Ã‘Å’", "ÃÂ´ÃÂµÃÂºÃÂ°ÃÂ±Ã‘â‚¬Ã‘Å’"],
                        full: ["Ã‘ÂÃÂ½ÃÂ²ÃÂ°Ã‘â‚¬Ã‘Å’", "Ã‘â€žÃÂµÃÂ²Ã‘â‚¬ÃÂ°ÃÂ»Ã‘Å’", "ÃÂ¼ÃÂ°Ã‘â‚¬Ã‘â€š", "ÃÂ°ÃÂ¿Ã‘â‚¬ÃÂµÃÂ»Ã‘Å’", "ÃÂ¼ÃÂ°ÃÂ¹", "ÃÂ¸Ã‘Å½ÃÂ½Ã‘Å’", "ÃÂ¸Ã‘Å½ÃÂ»Ã‘Å’", "ÃÂ°ÃÂ²ÃÂ³Ã‘Æ’Ã‘ÂÃ‘â€š", "Ã‘ÂÃÂµÃÂ½Ã‘â€šÃ‘ÂÃÂ±Ã‘â‚¬Ã‘Å’", "ÃÂ¾ÃÂºÃ‘â€šÃ‘ÂÃÂ±Ã‘â‚¬Ã‘Å’", "ÃÂ½ÃÂ¾Ã‘ÂÃÂ±Ã‘â‚¬Ã‘Å’", "ÃÂ´ÃÂµÃÂºÃÂ°ÃÂ±Ã‘â‚¬Ã‘Å’"]
                    },
                    weekdays: {
                        short: ["ÃÂ²", "ÃÂ¿", "ÃÂ²", "Ã‘Â", "Ã‘â€¡", "ÃÂ¿", "Ã‘Â"],
                        full: ["ÃÂ²ÃÂ¾Ã‘ÂÃÂºÃ‘â‚¬ÃÂµÃ‘ÂÃÂµÃÂ½Ã‘Å’ÃÂµ", "ÃÂ¿ÃÂ¾ÃÂ½ÃÂµÃÂ´ÃÂµÃÂ»Ã‘Å’ÃÂ½ÃÂ¸ÃÂº", "ÃÂ²Ã‘â€šÃÂ¾Ã‘â‚¬ÃÂ½ÃÂ¸ÃÂº", "Ã‘ÂÃ‘â‚¬ÃÂµÃÂ´ÃÂ°", "Ã‘â€¡ÃÂµÃ‘â€šÃÂ²ÃÂµÃ‘â‚¬ÃÂ³", "ÃÂ¿Ã‘ÂÃ‘â€šÃÂ½ÃÂ¸Ã‘â€ ÃÂ°", "Ã‘ÂÃ‘Æ’ÃÂ±ÃÂ±ÃÂ¾Ã‘â€šÃÂ°"]
                    }
                },
                tr: {
                    name: "TÃƒÂ¼rkÃƒÂ§e",
                    months: {
                        short: ["Oca", "Ã…Å¾ub", "Mar", "Nis", "May", "Haz", "Tem", "AÃ„Å¸u", "Eyl", "Eki", "Kas", "Ara"],
                        full: ["Ocak", "Ã…Å¾ubat", "Mart", "Nisan", "MayÃ„Â±s", "Haziran", "Temmuz", "AÃ„Å¸ustos", "EylÃƒÂ¼l", "Ekim", "KasÃ„Â±m", "AralÃ„Â±k"]
                    },
                    weekdays: {
                        short: ["P", "P", "S", "Ãƒâ€¡", "P", "C", "C"],
                        full: ["Pazar", "Pazartesi", "Sali", "Ãƒâ€¡arÃ…Å¸amba", "PerÃ…Å¸embe", "Cuma", "Cumartesi"]
                    }
                },
                ko: {
                    name: "Ã¬Â¡Â°Ã¬â€ž Ã«Â§Â",
                    months: {
                        short: ["1Ã¬â€ºâ€", "2Ã¬â€ºâ€", "3Ã¬â€ºâ€", "4Ã¬â€ºâ€", "5Ã¬â€ºâ€", "6Ã¬â€ºâ€", "7Ã¬â€ºâ€", "8Ã¬â€ºâ€", "9Ã¬â€ºâ€", "10Ã¬â€ºâ€", "11Ã¬â€ºâ€", "12Ã¬â€ºâ€"],
                        full: ["1Ã¬â€ºâ€", "2Ã¬â€ºâ€", "3Ã¬â€ºâ€", "4Ã¬â€ºâ€", "5Ã¬â€ºâ€", "6Ã¬â€ºâ€", "7Ã¬â€ºâ€", "8Ã¬â€ºâ€", "9Ã¬â€ºâ€", "10Ã¬â€ºâ€", "11Ã¬â€ºâ€", "12Ã¬â€ºâ€"]
                    },
                    weekdays: {
                        short: ["Ã¬ÂÂ¼", "Ã¬â€ºâ€", "Ã­â„¢â€", "Ã¬Ë†Ëœ", "Ã«ÂªÂ©", "ÃªÂ¸Ë†", "Ã­â€  "],
                        full: ["Ã¬ÂÂ¼Ã¬Å¡â€Ã¬ÂÂ¼", "Ã¬â€ºâ€Ã¬Å¡â€Ã¬ÂÂ¼", "Ã­â„¢â€Ã¬Å¡â€Ã¬ÂÂ¼", "Ã¬Ë†ËœÃ¬Å¡â€Ã¬ÂÂ¼", "Ã«ÂªÂ©Ã¬Å¡â€Ã¬ÂÂ¼", "ÃªÂ¸Ë†Ã¬Å¡â€Ã¬ÂÂ¼", "Ã­â€  Ã¬Å¡â€Ã¬ÂÂ¼"]
                    }
                },
                fi: {
                    name: "suomen kieli",
                    months: {
                        short: ["Tam", "Hel", "Maa", "Huh", "Tou", "Kes", "Hei", "Elo", "Syy", "Lok", "Mar", "Jou"],
                        full: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "KesÃƒÂ¤kuu", "HeinÃƒÂ¤kuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"]
                    },
                    weekdays: {
                        short: ["S", "M", "T", "K", "T", "P", "L"],
                        full: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"]
                    }
                },
                vi: {
                    name: "TiÃ¡ÂºÂ¿ng viÃ¡Â»â€¡t",
                    gregorian: !1,
                    months: {
                        short: ["Th.01", "Th.02", "Th.03", "Th.04", "Th.05", "Th.06", "Th.07", "Th.08", "Th.09", "Th.10", "Th.11", "Th.12"],
                        full: ["ThÃƒÂ¡ng 01", "ThÃƒÂ¡ng 02", "ThÃƒÂ¡ng 03", "ThÃƒÂ¡ng 04", "ThÃƒÂ¡ng 05", "ThÃƒÂ¡ng 06", "ThÃƒÂ¡ng 07", "ThÃƒÂ¡ng 08", "ThÃƒÂ¡ng 09", "ThÃƒÂ¡ng 10", "ThÃƒÂ¡ng 11", "ThÃƒÂ¡ng 12"]
                    },
                    weekdays: {
                        short: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
                        full: ["ChÃ¡Â»Â§ nhÃ¡ÂºÂ­t", "ThÃ¡Â»Â© hai", "ThÃ¡Â»Â© ba", "ThÃ¡Â»Â© tÃ†Â°", "ThÃ¡Â»Â© nÃ„Æ’m", "ThÃ¡Â»Â© sÃƒÂ¡u", "ThÃ¡Â»Â© bÃ¡ÂºÂ£y"]
                    }
                }
            },
            icons: {
                arrow: {
                    l: '<svg viewBox="0 -1 6 16" height="14" width="8"><polyline points="6 0 0 6 6 12" stroke="currentColor" stroke-width="2" fill="none"></polyline></svg>',
                    r: '<svg viewBox="6 -1 6 16" height="14" width="8"><polyline points="6 0 12 6 6 12" stroke="currentColor" stroke-width="2" fill="none"></polyline></svg>'
                },
                checkmark: '<svg viewBox="0 0 22 18" height="18" width="32"><polyline points="0 8 8 16 22 1" stroke="currentColor" stroke-width="2" fill="none" ></polyline></svg>',
                expand: '<svg width="18" height="18" viewBox="0 -3 12 18" stroke="currentColor" stroke-width="1.5" fill="none"><polyline points="8 0 12 0 12 4" fill="none"></polyline><path d="M11.4444444,0.555555556 L6.97196343,5.02803657" stroke-linecap="square"></path><path d="M5.5,6.5 L0.555555556,11.4444444" stroke-linecap="square"></path><polyline points="0 8 0 12 4 12" fill="none"></polyline></svg>'
            },
            autoInit: !0,
            inlineCSS: '.picker-input{cursor:text}.picker-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.8);z-index:2147483637;opacity:1;visibility:visible;transition:opacity 0.4s ease,visibility 0.4s ease}.picker-overlay.picker-overlay-hidden{opacity:0;visibility:hidden}div.datedropper{--dd-color1:#fd4741;--dd-color2:white;--dd-color3:#4D4D4D;--dd-color4:white;--dd-radius:6px;--dd-width:180px;--dd-shadow:0 0 32px 0 rgba(0,0,0,0.1);touch-action:none;position:absolute;top:0;left:0;z-index:2147483638;transform:translate3d(-50%,0,0);line-height:1;font-family:sans-serif;box-sizing:border-box;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);opacity:0;visibility:hidden;margin-top:-8px;-webkit-backface-visibility:hidden;backface-visibility:hidden;border-radius:6px!important;border-radius:var(--dd-radius)!important}div.datedropper.leaf{--dd-color1:#1ecd80;--dd-color2:#fefff2;--dd-color3:#528971;--dd-color4:#fefff2;--dd-radius:6px;--dd-width:180px;--dd-shadow:0 0 32px 0 rgba(0,0,0,0.1)}div.datedropper.vanilla{--dd-color1:#feac92;--dd-color2:#FFF;--dd-color3:#9ed7db;--dd-color4:#faf7f4;--dd-radius:6px;--dd-width:180px;--dd-shadow:0 0 32px 0 rgba(0,0,0,0.1)}div.datedropper.ryanair{--dd-color1:#7e57dc;--dd-color2:#50388a;--dd-color3:#ffffff;--dd-color4:#FFF;--dd-radius:6px;--dd-width:180px;--dd-shadow:0 0 32px 0 rgba(0,0,0,0.1)}@media only screen and (max-width:479px){div.datedropper{position:fixed;top:50%!important;left:50%!important;transform:translate3d(-50%,-50%,0);margin:0}div.datedropper:before{display:none}div.datedropper .picker{box-shadow:0 0 64px 32px rgba(0,0,0,0.06)!important}}div.datedropper *{box-sizing:border-box;width:auto;height:auto;margin:0;padding:0;border:0;font-size:100%}div.datedropper svg{fill:currentColor}div.datedropper:before{content:"";position:absolute;width:16px;height:16px;top:-8px;left:50%;transform:translateX(-50%) rotate(45deg);border-top-left-radius:4px;background-color:white;z-index:1}div.datedropper.picker-focused{opacity:1;visibility:visible;margin-top:8px}@media only screen and (max-width:479px){div.datedropper.picker-focused{margin-top:0}}div.datedropper .pick-submit{margin:0 auto;outline:0;width:56px;height:100%;line-height:64px;border-radius:56px;font-size:24px;cursor:pointer;border-bottom-left-radius:0;border-bottom-right-radius:0;text-align:center;position:relative;top:0}div.datedropper .pick-submit:focus,div.datedropper .pick-submit:hover{top:4px;box-shadow:0 0 0 16px rgba(0,0,0,0.04),0 0 0 8px rgba(0,0,0,0.04)}div.datedropper .pick-submit svg{position:relative;top:20px}div.datedropper .picker{position:relative;overflow:hidden}div.datedropper .picker+div{font-weight:bold;font-size:10px;text-transform:uppercase;padding:0.5rem;text-align:center}div.datedropper .picker+div a{text-decoration:none;color:currentColor}div.datedropper .picker+div a:hover{text-decoration:underline}div.datedropper .picker ul{margin:0;padding:0;list-style:none;cursor:pointer;position:relative;z-index:2}div.datedropper .picker ul.pick{position:relative;overflow:hidden;outline:0}div.datedropper .picker ul.pick:nth-of-type(2){box-shadow:0 1px rgba(0,0,0,0.06)}div.datedropper .picker ul.pick li{position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;opacity:0.5;display:flex;align-items:center;justify-content:center;text-align:center;pointer-events:none}div.datedropper .picker ul.pick li span{font-size:16px;position:absolute;left:0;width:100%;line-height:0;bottom:24px}div.datedropper .picker ul.pick li.pick-afr{transform:translateY(100%)}div.datedropper .picker ul.pick li.pick-bfr{transform:translateY(-100%)}div.datedropper .picker ul.pick li.pick-sl{opacity:1;transform:translateY(0);z-index:1;pointer-events:auto}div.datedropper .picker ul.pick:focus .pick-arw-s1:not(.pick-arw-hidden),div.datedropper .picker ul.pick:hover .pick-arw-s1:not(.pick-arw-hidden){opacity:0.6}div.datedropper .picker ul.pick:focus.pick-jump .pick-arw-s2,div.datedropper .picker ul.pick:hover.pick-jump .pick-arw-s2{pointer-events:auto;opacity:0.6}div.datedropper .picker ul.pick:focus.pick-jump .pick-arw-s2.pick-arw-r,div.datedropper .picker ul.pick:hover.pick-jump .pick-arw-s2.pick-arw-r{transform:translateX(-8px)}div.datedropper .picker ul.pick:focus.pick-jump .pick-arw-s2.pick-arw-l,div.datedropper .picker ul.pick:hover.pick-jump .pick-arw-s2.pick-arw-l{transform:translateX(8px)}div.datedropper .picker ul.pick .pick-arw{position:absolute;top:0;height:100%;width:25%;font-size:10px;text-align:center;display:block;z-index:10;cursor:pointer;overflow:hidden;opacity:0}div.datedropper .picker ul.pick .pick-arw div{line-height:0;top:50%;left:50%;position:absolute;display:block;transform:translate(-50%,-50%)}div.datedropper .picker ul.pick .pick-arw svg{width:16px;height:16px}div.datedropper .picker ul.pick .pick-arw-hidden{opacity:0;pointer-events:none}div.datedropper .picker ul.pick .pick-arw.pick-arw:hover{opacity:1}div.datedropper .picker ul.pick .pick-arw.pick-arw-r{right:0}div.datedropper .picker ul.pick .pick-arw.pick-arw-l{left:0}div.datedropper .picker ul.pick .pick-arw.pick-arw-s2{pointer-events:none}div.datedropper .picker ul.pick .pick-arw.pick-arw-s2.pick-arw-r{transform:translateX(0)}div.datedropper .picker ul.pick .pick-arw.pick-arw-s2.pick-arw-l{transform:translateX(0)}div.datedropper .picker ul.pick.pick-m,div.datedropper .picker ul.pick.pick-y{height:60px}div.datedropper .picker ul.pick.pick-m{font-size:32px}div.datedropper .picker ul.pick.pick-y{font-size:24px}div.datedropper .picker ul.pick.pick-d{height:100px;font-size:64px;font-weight:bold}div.datedropper .picker ul.pick.pick-d li div{margin-top:-16px}div.datedropper .picker ul.pick:focus:after,div.datedropper .picker ul.pick:hover:after{content:"";pointer-events:none;position:absolute;top:6px;left:6px;bottom:6px;right:6px;background-color:rgba(0,0,0,0.04);border-radius:6px}div.datedropper .picker .pick-lg{z-index:1;margin:0 auto;height:0;overflow:hidden}div.datedropper .picker .pick-lg.pick-lg-focused{background-color:rgba(0,0,0,0.025)}div.datedropper .picker .pick-lg.down{animation:down 0.8s ease}div.datedropper .picker .pick-lg .pick-h:after,div.datedropper .picker .pick-lg .pick-h:before{opacity:0.32}div.datedropper .picker .pick-lg ul:after{content:"";display:table;clear:both}div.datedropper .picker .pick-lg ul li{float:left;text-align:center;width:14.285714286%;display:flex;align-items:center;justify-content:center;text-align:center;font-size:14px;position:relative}div.datedropper .picker .pick-lg ul li:after,div.datedropper .picker .pick-lg ul li:before{position:absolute;z-index:2;display:block;line-height:30px;height:30px;width:30px;top:50%;left:50%;transform:translate(-50%,-50%)}div.datedropper .picker .pick-lg ul li:after{content:attr(data-value);z-index:2}div.datedropper .picker .pick-lg ul li:before{content:""}div.datedropper .picker .pick-lg ul.pick-lg-h{height:16.6666666667%;padding:0 10px}div.datedropper .picker .pick-lg ul.pick-lg-h li{height:100%}div.datedropper .picker .pick-lg ul.pick-lg-b{height:83.3333333333%;padding:10px}div.datedropper .picker .pick-lg ul.pick-lg-b li{height:16.6666666667%;cursor:pointer;position:relative}div.datedropper .picker .pick-lg ul.pick-lg-b li div{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1}div.datedropper .picker .pick-lg ul.pick-lg-b li.pick-lk{pointer-events:none;opacity:0.6}div.datedropper .picker .pick-lg ul.pick-lg-b li.pick-lk:after{text-decoration:line-through}div.datedropper .picker .pick-lg ul.pick-lg-b li.pick-dir div{opacity:0.25}div.datedropper .picker .pick-lg ul.pick-lg-b li:not(.pick-h):hover{z-index:2}div.datedropper .picker .pick-lg ul.pick-lg-b li:not(.pick-h):hover:before{border-radius:32px;box-shadow:0 0 32px rgba(0,0,0,0.1)}div.datedropper .picker .pick-lg ul.pick-lg-b li:not(.pick-h):hover:after,div.datedropper .picker .pick-lg ul.pick-lg-b li:not(.pick-h):hover:before{transform:translate(-50%,-50%) scale(1.5)}div.datedropper .picker .pick-lg ul.pick-lg-b li.pick-today:not(:hover):not(.pick-sl):before{z-index:2;border-radius:32px;opacity:0.15}div.datedropper .picker .pick-lg ul.pick-lg-b li.pick-sl:before{z-index:2;border-radius:32px;box-shadow:0 0 32px rgba(0,0,0,0.1)}div.datedropper .picker .pick-lg ul.pick-lg-b li.pick-sl:after,div.datedropper .picker .pick-lg ul.pick-lg-b li.pick-sl:before{transform:translate(-50%,-50%) scale(1.5)}div.datedropper .picker .pick-lg ul.pick-lg-b li.pick-sl.pick-sl-a:not(.pick-sl-b):before{border-top-right-radius:8px;transform:translate(-50%,-50%) scale(1.5) rotate(45deg)!important}div.datedropper .picker .pick-lg ul.pick-lg-b li.pick-sl.pick-sl-b:not(.pick-sl-a):before{border-top-left-radius:8px;transform:translate(-50%,-50%) scale(1.5) rotate(-45deg)!important}div.datedropper .picker .pick-btns{margin:-1px;position:relative;z-index:11;height:56px}div.datedropper .picker .pick-btns div{cursor:pointer;line-height:0}div.datedropper .picker .pick-btns .pick-btn{position:absolute;width:36px;height:36px;bottom:0;text-align:center;line-height:38px;font-size:16px;margin:8px;outline:0;border-radius:4px;background:rgba(0,0,0,0.03);box-shadow:0 0 32px rgba(0,0,0,0.1);transform:scale(1)}div.datedropper .picker .pick-btns .pick-btn svg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}div.datedropper .picker .pick-btns .pick-btn:focus,div.datedropper .picker .pick-btns .pick-btn:hover{box-shadow:0 0 24px rgba(0,0,0,0.1);transform:scale(0.95)}div.datedropper .picker .pick-btns .pick-btn.pick-btn-sz{right:0}div.datedropper .picker .pick-btns .pick-btn.pick-btn-lng{left:0;transform-origin:left bottom}div.datedropper.picker-clean .picker-jumped-years{display:none}div.datedropper .picker-jumped-years{position:absolute;z-index:10;top:60px;left:0;right:0;bottom:0;padding:4px;padding-bottom:56px;opacity:0;overflow:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch;visibility:hidden;pointer-events:none;transform:translateY(16px);transform-origin:bottom center}div.datedropper .picker-jumped-years.picker-jumper-years-visible{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto}div.datedropper .picker-jumped-years>div{float:left;width:50%;padding:4px;position:relative;cursor:pointer}div.datedropper .picker-jumped-years>div:before{content:"";display:block;border-radius:6px;padding:16px;padding-bottom:50%;background-color:rgba(0,0,0,0.05)}div.datedropper .picker-jumped-years>div:after{text-align:center;font-size:20px;content:attr(data-id);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}div.datedropper .picker-jumped-years>div:hover:before{background-color:rgba(0,0,0,0.025)}div.datedropper.picker-lg{width:300px}div.datedropper.picker-lg ul.pick.pick-d{transform:scale(0);height:0!important}div.datedropper.picker-lg .pick-lg{height:256px}@media only screen and (max-width:479px){div.datedropper.picker-lg{width:auto!important;height:auto!important;top:1rem!important;left:1rem!important;right:1rem!important;bottom:1rem!important;transform:none}div.datedropper.picker-lg.picker-modal{width:100%!important;height:100%!important;padding:1rem!important}div.datedropper.picker-lg .picker{height:100%}div.datedropper.picker-lg .picker .pick{max-height:unset!important}div.datedropper.picker-lg .pick-lg{height:62%!important;max-height:unset!important}div.datedropper.picker-lg .pick-lg .pick-lg-h{height:16.6666666667%}div.datedropper.picker-lg .pick-lg .pick-lg-b{height:83.3333333333%}div.datedropper.picker-lg .pick-lg .pick-lg-b li{height:16.6666666667%}div.datedropper.picker-lg .picker-jumped-years{top:13%!important;padding-bottom:12%!important}div.datedropper.picker-lg .pick-l,div.datedropper.picker-lg .pick-m,div.datedropper.picker-lg .pick-y{height:13%!important}div.datedropper.picker-lg .pick-btns{height:12%!important}}@keyframes picker_rumble{0%,to{transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{transform:translate3d(-2px,0,0)}20%,40%,60%,80%{transform:translate3d(2px,0,0)}}div.datedropper .picker-rumble{animation:picker_rumble 0.4s ease}div.datedropper.picker-locked .pick-submit{opacity:0.35}div.datedropper.picker-locked .pick-submit:hover{box-shadow:none!important}div.datedropper.picker-modal{top:50%!important;left:50%!important;transform:translate3d(-50%,-50%,0)!important;position:fixed!important;margin:0!important}div.datedropper.picker-modal:before{display:none}div.datedropper.picker-fxs{transition:opacity 0.2s ease,visibility 0.2s ease,margin 0.2s ease}@media only screen and (min-width:480px){div.datedropper.picker-fxs.picker-transit{transition:width 0.8s cubic-bezier(1,-0.55,0.2,1.37),opacity 0.2s ease,visibility 0.2s ease,margin 0.2s ease}div.datedropper.picker-fxs.picker-transit .pick-lg{transition:height 0.8s cubic-bezier(1,-0.55,0.2,1.37)}div.datedropper.picker-fxs.picker-transit .pick-d{transition:top 0.8s cubic-bezier(1,-0.55,0.2,1.37),transform 0.8s cubic-bezier(1,-0.55,0.2,1.37),height 0.8s cubic-bezier(1,-0.55,0.2,1.37),background-color 0.4s ease}}div.datedropper.picker-fxs ul.pick.pick-y{transition:background-color 0.4s ease}div.datedropper.picker-fxs ul.pick li{transition:transform 0.4s ease,opacity 0.4s ease}div.datedropper.picker-fxs ul.pick .pick-arw{transition:transform 0.2s ease,opacity 0.2s ease}div.datedropper.picker-fxs ul.pick .pick-arw i{transition:right 0.2s ease,left 0.2s ease}div.datedropper.picker-fxs .picker-jumped-years{transition:transform 0.2s ease,opacity 0.2s ease,visibility 0.2s ease}div.datedropper.picker-fxs .pick-lg .pick-lg-b li{transition:background-color 0.2s ease}div.datedropper.picker-fxs .pick-btns .pick-submit{transition:top 0.2s ease,box-shadow 0.4s ease,background-color 0.4s ease}div.datedropper.picker-fxs .pick-btns .pick-submit svg{height:18px}div.datedropper.picker-fxs .pick-btns .pick-btn{transition:all 0.2s ease}div.datedropper.picker-fxs .pick-btns .pick-btn svg{width:18px;height:18px}div.datedropper .null{transition:none}div.datedropper:not(.picker-lg){width:180px!important;width:var(--dd-width)!important}div.datedropper .picker{box-shadow:0 0 32px 0 rgba(0,0,0,0.1)!important;box-shadow:var(--dd-shadow)!important}div.datedropper .pick:focus:after,div.datedropper .pick:hover:after,div.datedropper .picker{border-radius:6px!important;border-radius:var(--dd-radius)!important}div.datedropper .picker-jumped-years{border-bottom-left-radius:6px!important;border-bottom-right-radius:var(--dd-radius)!important}div.datedropper .pick-dir div,div.datedropper .pick-lg-b .pick-sl:before,div.datedropper .pick-lg-h,div.datedropper .pick-submit,div.datedropper .pick-today:before,div.datedropper:not(.picker-clean) .pick:first-of-type,div.datedropper:not(.picker-clean):before{background-color:#fd4741!important;background-color:var(--dd-color1)!important}div.datedropper .pick-btn,div.datedropper .pick-lg-b .pick-wke,div.datedropper .pick-lg-b li:not(.pick-sl):not(.pick-h):hover:after,div.datedropper .pick-today:after,div.datedropper .pick-y.pick-jump,div.datedropper .picker+div,div.datedropper .pick li span{color:#fd4741!important;color:var(--dd-color1)!important}div.datedropper .pick-btn,div.datedropper .pick-btn:hover,div.datedropper .pick-l,div.datedropper .pick-lg-b li:not(.pick-sl):not(.pick-h):hover:before,div.datedropper .picker,div.datedropper .picker-jumped-years,div.datedropper:before{background-color:white!important;background-color:var(--dd-color2)!important}div.datedropper .pick-arw,div.datedropper .pick-l,div.datedropper .picker{color:#4D4D4D!important;color:var(--dd-color3)!important}div.datedropper .pick-lg-b .pick-sl:after,div.datedropper .pick-lg-h,div.datedropper .pick-submit,div.datedropper:not(.picker-clean) .pick:first-of-type,div.datedropper:not(.picker-clean) .pick:first-of-type *{color:white!important;color:var(--dd-color4)!important}'
        },
        function(e) {
            var n = {},
                r = null,
                o = null,
                a = null,
                s = null,
                d = null,
                l = {
                    init: function(t) {
                        return e(this).each((function() {
                            t && t.roundtrip && !e(this).attr("data-dd-roundtrip") && e(this).attr("data-dd-roundtrip", t.roundtrip)
                        })), e(this).each((function() {
                            if (!e(this).hasClass("picker-trigger")) {
                                var i = e(this),
                                    r = "datedropper-" + Object.keys(n).length;
                                i.attr("data-datedropper-id", r).addClass("picker-trigger");
                                var o = {
                                    identifier: r,
                                    selector: i,
                                    jump: 10,
                                    maxYear: !1,
                                    minYear: !1,
                                    format: "m/d/Y",
                                    lang: "en",
                                    lock: !1,
                                    theme: "primary",
                                    disabledDays: !1,
                                    large: !1,
                                    largeDefault: !1,
                                    fx: !0,
                                    fxMobile: !0,
                                    defaultDate: null,
                                    modal: !1,
                                    hideDay: !1,
                                    hideMonth: !1,
                                    hideYear: !1,
                                    enabledDays: !1,
                                    largeOnly: !1,
                                    roundtrip: !1,
                                    minRoundtripSelection: !1,
                                    eventListener: i.is("input") ? "focus" : "click",
                                    trigger: !1,
                                    minDate: !1,
                                    maxDate: !1,
                                    autofill: !0,
                                    autoIncrease: !0,
                                    showOnlyEnabledDays: !1,
                                    changeValueTo: !1,
                                    startFromMonday: !0,
                                    loopAll: !0,
                                    loopYears: !0,
                                    loopDays: !0,
                                    loopMonths: !0
                                };
                                n[r] = e.extend(!0, {}, o, t, b(i)), H(n[r])
                            }
                        }))
                    },
                    show: function() {
                        return e(this).each((function() {
                            I(e(this))
                        }))
                    },
                    hide: function() {
                        return e(this).each((function(t) {
                            var n = E(e(this));
                            n && W(n)
                        }))
                    },
                    destroy: function(t) {
                        return e(this).each((function() {
                            var n = E(e(this));
                            n && (r && n.identifier == r.identifier && W(r), e(this).removeAttr("data-datedropper-id").removeClass("picker-trigger").off(n.eventListener), delete n, t && t())
                        }))
                    },
                    set: function(t) {
                        return e(this).each((function() {
                            var n = E(e(this));
                            n && (e.each(t, (function(e, t) {
                                "true" == t && (t = !0), "false" == t && (t = !1), "roundtrip" != e ? n[e] = t : console.error("[DATEDROPPER] You can't set roundtrip after main initialization")
                            })), n.selector.off(n.eventListener), n.trigger && e(n.trigger).off("click"), H(n), r && r.element == n.element && P(n))
                        }))
                    },
                    setDate: function(t) {
                        return e(this).each((function() {
                            var n = E(e(this));
                            n && (e.each(t, (function(e, t) {
                                "y" == e && n.key[e] && t > n.key[e].max && (n.key[e].max = t), n.key[e].current = t
                            })), r && r.element == n.element && P(n))
                        }))
                    },
                    getDate: function(t) {
                        return e(this).each((function() {
                            var n = E(e(this));
                            n && t && t(F(n))
                        }))
                    }
                },
                u = !1,
                p = function() {
                    var e = navigator.userAgent.toLowerCase();
                    return -1 != e.indexOf("msie") && parseInt(e.split("msie")[1])
                },
                f = function() {
                    return !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                },
                h = function(t) {
                    t.fx && !t.fxMobile && (e(window).width() < 480 ? t.element.removeClass("picker-fxs") : t.element.addClass("picker-fxs"))
                },
                m = function(e) {
                    return e % 1 == 0 && e
                },
                g = function(e) {
                    return !!/(^\d{1,4}[\.|\\/|-]\d{1,2}[\.|\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/.test(e) && e
                };
            if (f()) var v = {
                i: "touchstart",
                m: "touchmove",
                e: "touchend"
            };
            else v = {
                i: "mousedown",
                m: "mousemove",
                e: "mouseup"
            };
            var b = function(t) {
                    var n = {},
                        i = /^data-dd\-(.+)$/;
                    return e.each(t.get(0).attributes, (function(e, t) {
                        if (i.test(t.nodeName)) {
                            var r = (a = t.nodeName.match(i)[1], a.replace(/(?:^\w|[A-Z]|\b\w)/g, (function(e, t) {
                                    return 0 == t ? e.toLowerCase() : e.toUpperCase()
                                })).replace(/\s+/g, "")).replace(new RegExp("-", "g"), ""),
                                o = !1;
                            switch (t.nodeValue) {
                                case "true":
                                    o = !0;
                                    break;
                                case "false":
                                    o = !1;
                                    break;
                                default:
                                    o = t.nodeValue
                            }
                            n[r] = o
                        }
                        var a
                    })), n
                },
                y = function(e) {
                    return new Date(1e3 * e)
                },
                k = function(e, t) {
                    return Math.round((y(t) - y(e)) / 864e5) + 1
                },
                w = function(n, i) {
                    var r, o = R(n),
                        a = !1,
                        s = !1,
                        d = !1,
                        l = !0;
                    if (o && e.each(o, (function(e, t) {
                            var i = O(t.value);
                            i.m == x(n, "m") && i.y == x(n, "y") && L(n, ".pick-lg-b li.pick-v[data-value=" + i.d + "]").addClass("pick-sl pick-sl-" + e)
                        })), a = L(n, ".pick-lg-b li.pick-sl-a"), s = i || L(n, ".pick-lg-b li.pick-sl-b"), r = {
                            a: a.length ? L(n, ".pick-lg-b li").index(a) + 1 : 0,
                            b: s.length ? L(n, ".pick-lg-b li").index(s) - 1 : L(n, ".pick-lg-b li").last().index()
                        }, o.a.value != o.b.value && i && (l = !1), i ? (t = q(x(n, "m") + "/" + i.attr("data-value") + "/" + x(n, "y")), o.a.value == o.b.value && t > o.a.value && (d = !0)) : (t = q(x(n)), (t >= o.a.value && t <= o.b.value || a.length) && (d = !0)), l && L(n, ".pick-lg-b li").removeClass("pick-dir pick-dir-sl pick-dir-first pick-dir-last"), d)
                        for (var c = r.a; c <= r.b; c++) L(n, ".pick-lg-b li").eq(c).addClass("pick-dir");
                    a.next(".pick-dir").addClass("pick-dir-first"), s.prev(".pick-dir").addClass("pick-dir-last")
                },
                x = function(e, t) {
                    return t ? parseInt(e.key[t].current) : x(e, "m") + "/" + x(e, "d") + "/" + x(e, "y")
                },
                _ = function(e, t) {
                    return t ? parseInt(e.key[t].today) : _(e, "m") + "/" + _(e, "d") + "/" + _(e, "y")
                },
                C = function(e, t, n) {
                    var i = e.key[t];
                    return n > i.max ? C(e, t, n - i.max + (i.min - 1)) : n < i.min ? C(e, t, n + 1 + (i.max - i.min)) : n
                },
                T = function(e) {
                    return !!e && {
                        selector: e.selector,
                        date: F(e)
                    }
                },
                D = function(e, t) {
                    return L(e, 'ul.pick[data-k="' + t + '"]')
                },
                S = function(t, n, i) {
                    ul = D(t, n);
                    var r = [];
                    return ul.find("li").each((function() {
                        r.push(e(this).attr("value"))
                    })), "last" == i ? r[r.length - 1] : r[0]
                },
                M = function(t, n) {
                    var i = !1;
                    for (var o in "Y" != t.format && "m" != t.format || (t.hideDay = !0, "Y" == t.format && (t.hideMonth = !0), "m" == t.format && (t.hideYear = !0), i = !0), (t.hideDay || t.hideMonth || t.hideYear) && (i = !0), t.largeOnly && (t.large = !0, t.largeDefault = !0), (t.hideMonth || t.hideDay || t.hideYear || t.showOnlyEnabledDays) && (t.largeOnly = !1, t.large = !1, t.largeDefault = !1), t.element = e("<div>", {
                            class: "datedropper " + (i ? "picker-clean" : "") + " " + (t.modal ? "picker-modal" : "") + " " + t.theme + " " + (t.fx ? "picker-fxs" : "") + " " + (t.large && t.largeDefault ? "picker-lg" : ""),
                            id: t.identifier,
                            html: e("<div>", {
                                class: "picker"
                            })
                        }).appendTo("body"), t.key) {
                        var a = !0;
                        "y" == o && t.hideYear && (a = !1), "d" == o && t.hideDay && (a = !1), "m" == o && t.hideMonth && (a = !1), a && (e("<ul>", {
                            class: "pick pick-" + o,
                            "data-k": o,
                            tabindex: 0
                        }).appendTo(L(t, ".picker")), V(t, o))
                    }
                    t.large && e("<div>", {
                        class: "pick-lg"
                    }).insertBefore(L(t, ".pick-d")), e("<div>", {
                        class: "pick-btns"
                    }).appendTo(L(t, ".picker")), e("<div>", {
                        tabindex: 0,
                        class: "pick-submit",
                        html: e(e.dateDropperSetup.icons.checkmark)
                    }).appendTo(L(t, ".pick-btns")), t.large && !t.largeOnly && e("<div>", {
                        class: "pick-btn pick-btn-sz",
                        html: e(e.dateDropperSetup.icons.expand)
                    }).appendTo(L(t, ".pick-btns")), setTimeout((function() {
                        t.element.addClass("picker-focused"), f() || setTimeout((function() {
                            L(t, ".pick:first-of-type").focus()
                        }), 100), t.element.hasClass("picker-modal") && (t.overlay = e('<div class="picker-overlay"></div>').appendTo("body")), h(t), $(t), J(t), r = t, n && n()
                    }), 100)
                },
                E = function(e) {
                    var t = e.attr("data-datedropper-id");
                    return n[t] || !1
                },
                L = function(e, t) {
                    if (e.element) return e.element.find(t)
                },
                A = function(t, n) {
                    if ("string" == typeof n) {
                        if (g(n)) {
                            var i = n.match(/\d+/g);
                            return e.each(i, (function(e, t) {
                                i[e] = parseInt(t)
                            })), {
                                m: i[0] && i[0] <= 12 ? i[0] : t.key.m.today,
                                d: i[1] && i[1] <= 31 ? i[1] : t.key.d.today,
                                y: i[2] || t.key.y.today
                            }
                        }
                        return !1
                    }
                    return !1
                },
                j = "div.datedropper.picker-focused",
                F = function(t, n) {
                    n || (n = {
                        d: x(t, "d"),
                        m: x(t, "m"),
                        y: x(t, "y")
                    });
                    var i = n.d,
                        r = n.m,
                        o = n.y,
                        a = new Date(r + "/" + i + "/" + o).getDay(),
                        s = {
                            F: e.dateDropperSetup.languages[t.lang].months.full[r - 1],
                            M: e.dateDropperSetup.languages[t.lang].months.short[r - 1],
                            D: e.dateDropperSetup.languages[t.lang].weekdays.full[a].substr(0, 3),
                            l: e.dateDropperSetup.languages[t.lang].weekdays.full[a],
                            d: N(i),
                            m: N(r),
                            S: z(i),
                            Y: o,
                            U: q(x(t)),
                            n: r,
                            j: i
                        },
                        d = t.format.replace(/\b(F)\b/g, s.F).replace(/\b(M)\b/g, s.M).replace(/\b(D)\b/g, s.D).replace(/\b(l)\b/g, s.l).replace(/\b(d)\b/g, s.d).replace(/\b(m)\b/g, s.m).replace(/\b(S)\b/g, s.S).replace(/\b(Y)\b/g, s.Y).replace(/\b(U)\b/g, s.U).replace(/\b(n)\b/g, s.n).replace(/\b(j)\b/g, s.j);
                    return s.formatted = d, s
                },
                N = function(e) {
                    return e < 10 ? "0" + e : e
                },
                z = function(e) {
                    var t = ["th", "st", "nd", "rd"],
                        n = e % 100;
                    return e + (t[(n - 20) % 10] || t[n] || t[0])
                },
                q = function(e) {
                    return Date.parse(e) / 1e3
                },
                O = function(e) {
                    var t = new Date(1e3 * e);
                    return {
                        m: t.getMonth() + 1,
                        y: t.getFullYear(),
                        d: t.getDate()
                    }
                },
                R = function(t) {
                    var n = '[data-dd-roundtrip="' + t.roundtrip + '"]',
                        i = !1;
                    return e(n).length && (i = {}, e.each(["a", "b"], (function(t, r) {
                        var o = e(n + "[data-dd-roundtrip-" + r + "]");
                        i[r] = {
                            value: o.length && o.attr("data-dd-roundtrip-" + r) || !1,
                            selector: !!o.length && o
                        }
                    }))), i
                },
                B = function(e) {
                    e.large && (e.element.addClass("picker-transit").toggleClass("picker-lg"), e.element.hasClass("picker-lg") && X(e), setTimeout((function() {
                        e.element.removeClass("picker-transit")
                    }), 800))
                },
                $ = function(e) {
                    if (!e.element.hasClass("picker-modal")) {
                        var t = e.selector,
                            n = t.offset().left + t.outerWidth() / 2,
                            i = t.offset().top + t.outerHeight();
                        e.element.css({
                            left: n,
                            top: i
                        })
                    }
                },
                H = function(t) {
                    t.jump = m(t.jump) || 10, t.maxYear = m(t.maxYear), t.minYear = m(t.minYear), t.lang in e.dateDropperSetup.languages || (t.lang = "en"), t.key = {
                        m: {
                            min: 1,
                            max: 12,
                            current: (new Date).getMonth() + 1,
                            today: (new Date).getMonth() + 1
                        },
                        d: {
                            min: 1,
                            max: 31,
                            current: (new Date).getDate(),
                            today: (new Date).getDate()
                        },
                        y: {
                            min: t.minYear || (new Date).getFullYear() - 50,
                            max: t.maxYear || (new Date).getFullYear() + 50,
                            current: (new Date).getFullYear(),
                            today: (new Date).getFullYear()
                        }
                    }, t.key.y.current > t.key.y.max && (t.key.y.current = t.key.y.max), t.key.y.current < t.key.y.min && (t.key.y.current = t.key.y.min), t.minYear && (t.minDate = "01/01/" + t.minYear), t.maxYear && (t.maxDate = "12/31/" + t.maxYear);
                    var n = t.defaultDate ? q(t.defaultDate) : q(x(t));
                    if (t.minDate) {
                        var i = !!t.minDate && q(t.minDate);
                        n && i & n < i && (t.defaultDate = t.minDate)
                    }
                    if (t.maxDate) {
                        var r = !!t.maxDate && q(t.maxDate);
                        n && r && n > r && (t.defaultDate = t.maxDate)
                    }
                    if (t.defaultDate && U(t, O(q(t.defaultDate))), t.disabledDays = t.disabledDays ? t.disabledDays.split(",") : null, t.enabledDays = t.enabledDays ? t.enabledDays.split(",") : null, t.disabledDays && e.each(t.disabledDays, (function(e, n) {
                            n && g(n) && (t.disabledDays[e] = q(n))
                        })), t.enabledDays && e.each(t.enabledDays, (function(e, n) {
                            n && g(n) && (t.enabledDays[e] = q(n))
                        })), t.showOnlyEnabledDays && t.enabledDays) {
                        var o = (n = !!t.defaultDate && q(t.defaultDate)) && t.enabledDays.includes(n) ? O(n) : O(t.enabledDays[0]);
                        e.each(o, (function(e, n) {
                            t.key[e].current = n
                        }))
                    } else t.showOnlyEnabledDays = !1;
                    if (t.roundtrip) {
                        q(x(t));
                        var a = e('[data-dd-roundtrip="' + t.roundtrip + '"]');
                        a.length > 1 ? a.each((function() {
                            var t = 0 == a.index(e(this)) ? "a" : "b";
                            e(this).attr("data-dd-roundtrip-" + t, 0), e(this).attr("data-dd-roundtrip-selector", "b")
                        })) : (e.each(["a", "b"], (function(e, n) {
                            t.selector.attr("data-dd-roundtrip-" + n, 0)
                        })), t.selector.attr("data-dd-roundtrip-selector", "b"));
                        var s = e('[data-dd-roundtrip="' + t.roundtrip + '"][data-dd-roundtrip-a]'),
                            d = e('[data-dd-roundtrip="' + t.roundtrip + '"][data-dd-roundtrip-b]');
                        if (s.attr("data-dd-default-date") && d.attr("data-dd-default-date")) {
                            var l = q(s.attr("data-dd-default-date")),
                                c = q(d.attr("data-dd-default-date"));
                            l && c && (s.attr("data-dd-roundtrip-a", l), d.attr("data-dd-roundtrip-b", c))
                        }
                        t.largeOnly = !0
                    }
                    if (t.selector.on(t.eventListener, (function(t) {
                            t.preventDefault(), e(this).blur(), I(e(this))
                        })), t.trigger && e(t.trigger).on("click", (function(e) {
                            t.selector.trigger(t.eventListener)
                        })), t.onReady && t.onReady(T(t)), t.defaultDate) {
                        var u = A(t, t.defaultDate);
                        u && (e.each(u, (function(e, n) {
                            t.key[e] && (t.key[e].current = n)
                        })), t.key.y.current > t.key.y.max && (t.key.y.max = t.key.y.current), t.key.y.current < t.key.y.min && (t.key.y.min = t.key.y.current))
                    }
                },
                P = function(e, t) {
                    e.element && (e.element.remove(), e.overlay && e.overlay.remove(), M(e))
                },
                I = function(e, t) {
                    r && W(r);
                    var n = E(e);
                    n && M(n)
                },
                W = function(e) {
                    var t = {
                        element: e.element,
                        overlay: e.overlay
                    };
                    t.element && (t.element.removeClass("picker-focused"), setTimeout((function() {
                        t.element.remove(), t.overlay && t.overlay.addClass("picker-overlay-hidden")
                    }), 400)), r = null
                },
                Y = function(e) {
                    if (e) {
                        var t, n, i = !1;
                        return t = q(x(e)), n = q(_(e)), e.lock && ("from" == e.lock && (i = t < n), "to" == e.lock && (i = t > n)), (e.minDate || e.maxDate) && (t = q(x(e)), n = e.minDate ? q(e.minDate) : null, c = e.maxDate ? q(e.maxDate) : null, n && c ? i = t < n || t > c : n ? i = t < n : c && (i = t > c)), e.disabledDays && !e.enabledDays && (i = -1 != e.disabledDays.indexOf(t)), e.enabledDays && !e.disabledDays && (i = -1 == e.enabledDays.indexOf(t)), i ? (ee(e), e.element.addClass("picker-locked"), !0) : (e.element.removeClass("picker-locked"), !1)
                    }
                },
                V = function(t, n) {
                    var r = D(t, n),
                        o = t.key[n];
                    for (r.empty(), i = o.min; i <= o.max; i++) {
                        var a = i;
                        "m" == n && (a = e.dateDropperSetup.languages[t.lang].months.short[i - 1]), a += "d" == n ? "<span></span>" : "", e("<li>", {
                            value: i,
                            html: "<div>" + a + "</div>"
                        }).appendTo(r)
                    }
                    e.each(["l", "r"], (function(t, n) {
                        e("<div>", {
                            class: "pick-arw pick-arw-s1 pick-arw-" + n,
                            html: e("<div>", {
                                class: "pick-i-" + n,
                                html: e(e.dateDropperSetup.icons.arrow[n])
                            })
                        }).appendTo(r)
                    })), "y" == n && e.each(["l", "r"], (function(t, n) {
                        e("<div>", {
                            class: "pick-arw pick-arw-s2 pick-arw-" + n,
                            html: e("<div>", {
                                class: "pick-i-" + n,
                                html: e(e.dateDropperSetup.icons.arrow[n])
                            })
                        }).appendTo(r)
                    })), Q(t, n, x(t, n))
                },
                X = function(t) {
                    L(t, ".pick-lg").empty().append('<ul class="pick-lg-h"></ul><ul class="pick-lg-b"></ul>');
                    for (var n = function(e) {
                            return e.startFromMonday ? [1, 2, 3, 4, 5, 6, 0] : [0, 1, 2, 3, 4, 5, 6]
                        }(t), i = 0; i < 7; i++) e("<li>", {
                        html: "<div>" + e.dateDropperSetup.languages[t.lang].weekdays.short[n[i]] + "</div>"
                    }).appendTo(L(t, ".pick-lg .pick-lg-h"));
                    for (i = 0; i < 42; i++) e("<li>", {
                        html: e("<div>")
                    }).appendTo(L(t, ".pick-lg .pick-lg-b"));
                    var r = 0,
                        o = L(t, ".pick-lg-b"),
                        a = (new Date(x(t)), new Date(x(t))),
                        s = new Date(x(t)),
                        d = function(e) {
                            var t = e.getMonth(),
                                n = e.getFullYear();
                            return [31, n % 4 != 0 || n % 100 == 0 && n % 400 != 0 ? 28 : 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
                        };
                    s.setMonth(s.getMonth() - 1), a.setDate(1);
                    var l = a.getDay() - 1;
                    for (l < 0 && (l = 6), t.startFromMonday && --l < 0 && (l = 6), i = d(s) - l; i <= d(s); i++) o.find("li").eq(r).addClass("pick-b pick-n pick-h").attr("data-value", i), r++;
                    for (i = 1; i <= d(a); i++) o.find("li").eq(r).addClass("pick-n pick-v").attr("data-value", i), r++;
                    if (o.find("li.pick-n").length < 42) {
                        var c = 42 - o.find("li.pick-n").length;
                        for (i = 1; i <= c; i++) o.find("li").eq(r).addClass("pick-a pick-n pick-h").attr("data-value", i), r++
                    }
                    if (t.lock && ("from" === t.lock ? x(t, "y") <= _(t, "y") && (x(t, "m") == _(t, "m") ? L(t, '.pick-lg .pick-lg-b li.pick-v[data-value="' + _(t, "d") + '"]').prevAll("li").addClass("pick-lk") : (x(t, "m") < _(t, "m") || x(t, "m") > _(t, "m") && x(t, "y") < _(t, "y")) && L(t, ".pick-lg .pick-lg-b li").addClass("pick-lk")) : x(t, "y") >= _(t, "y") && (x(t, "m") == _(t, "m") ? L(t, '.pick-lg .pick-lg-b li.pick-v[data-value="' + _(t, "d") + '"]').nextAll("li").addClass("pick-lk") : (x(t, "m") > _(t, "m") || x(t, "m") < _(t, "m") && x(t, "y") > _(t, "y")) && L(t, ".pick-lg .pick-lg-b li").addClass("pick-lk"))), t.maxDate) {
                        var u = A(t, t.maxDate);
                        if (u)
                            if (x(t, "y") == u.y && x(t, "m") == u.m) L(t, '.pick-lg .pick-lg-b li.pick-v[data-value="' + u.d + '"]').nextAll("li").addClass("pick-lk");
                            else {
                                var p = q(t.maxDate);
                                q(x(t)) > p && L(t, ".pick-lg .pick-lg-b li.pick-v").addClass("pick-lk")
                            }
                    }
                    if (t.minDate) {
                        var f = A(t, t.minDate);
                        if (f)
                            if (x(t, "y") == f.y && x(t, "m") == f.m) L(t, '.pick-lg .pick-lg-b li.pick-v[data-value="' + f.d + '"]').prevAll("li").addClass("pick-lk");
                            else {
                                var h = q(t.minDate);
                                q(x(t)) < h && L(t, ".pick-lg .pick-lg-b li.pick-v").addClass("pick-lk")
                            }
                    }
                    t.disabledDays && !t.enabledDays && e.each(t.disabledDays, (function(e, n) {
                        if (n) {
                            var i = O(n);
                            i.m == x(t, "m") && i.y == x(t, "y") && L(t, '.pick-lg .pick-lg-b li.pick-v[data-value="' + i.d + '"]').addClass("pick-lk")
                        }
                    })), t.enabledDays && !t.disabledDays && (L(t, ".pick-lg .pick-lg-b li").addClass("pick-lk"), e.each(t.enabledDays, (function(e, n) {
                        if (n) {
                            var i = O(n);
                            i.m == x(t, "m") && i.y == x(t, "y") && L(t, '.pick-lg .pick-lg-b li.pick-v[data-value="' + i.d + '"]').removeClass("pick-lk")
                        }
                    }))), t.roundtrip ? w(t) : L(t, ".pick-lg-b li.pick-v[data-value=" + x(t, "d") + "]").addClass("pick-sl"), x(t, "m") == _(t, "m") && x(t, "y") == _(t, "y") && L(t, ".pick-lg-b li.pick-v[data-value=" + _(t, "d") + "]").addClass("pick-today")
                },
                U = function(t, n) {
                    e.each(n, (function(e, n) {
                        t.key[e].current = n
                    }))
                },
                J = function(t, n) {
                    t.element.hasClass("picker-lg") && X(t),
                        function(t) {
                            var n = x(t, "m"),
                                i = x(t, "y"),
                                r = i % 4 == 0 && (i % 100 != 0 || i % 400 == 0);
                            t.key.d.max = [31, r ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1], x(t, "d") > t.key.d.max && (t.key.d.current = t.key.d.max, Q(t, "d", x(t, "d"))), L(t, ".pick-d li").removeClass("pick-wke").each((function() {
                                var r = new Date(n + "/" + e(this).attr("value") + "/" + i).getDay();
                                e(this).find("span").html(e.dateDropperSetup.languages[t.lang].weekdays.full[r]), 0 != r && 6 != r || e(this).addClass("pick-wke")
                            })), t.element.hasClass("picker-lg") && (L(t, ".pick-lg-b li").removeClass("pick-wke"), L(t, ".pick-lg-b li.pick-v").each((function() {
                                var t = new Date(n + "/" + e(this).attr("data-value") + "/" + i).getDay();
                                0 != t && 6 != t || e(this).addClass("pick-wke")
                            })))
                        }(t), Y(t) || (function(e) {
                            clearInterval(s);
                            var t = e.minYear || e.key.y.current - 50,
                                n = e.maxYear || e.key.y.current + 50;
                            e.key.y.max = n, e.key.y.min = t, s = setTimeout((function() {
                                V(e, "y")
                            }), 400)
                        }(t), te(t), n && n(t))
                },
                Q = function(e, t, n) {
                    var i, r = D(e, t);
                    r.find("li").removeClass("pick-sl pick-bfr pick-afr"), n == S(e, t, "last") && ((i = r.find('li[value="' + S(e, t, "first") + '"]')).clone().insertAfter(r.find("li[value=" + n + "]")), i.remove()), n == S(e, t, "first") && ((i = r.find('li[value="' + S(e, t, "last") + '"]')).clone().insertBefore(r.find("li[value=" + n + "]")), i.remove()), r.find("li[value=" + n + "]").addClass("pick-sl"), r.find("li.pick-sl").nextAll("li").addClass("pick-afr"), r.find("li.pick-sl").prevAll("li").addClass("pick-bfr"), K(e)
                },
                K = function(e) {
                    e.loopAll && e.loopYears || (e.minYear && e.key.y.current == e.minYear ? L(e, ".pick-y .pick-arw-l").addClass("pick-arw-hidden") : L(e, ".pick-y .pick-arw-l").removeClass("pick-arw-hidden"), e.maxYear && e.key.y.current == e.maxYear ? L(e, ".pick-y .pick-arw-r").addClass("pick-arw-hidden") : L(e, ".pick-y .pick-arw-r").removeClass("pick-arw-hidden")), e.loopAll && e.loopMonths || (e.key.m.current == e.key.m.min ? L(e, ".pick-m .pick-arw-l").addClass("pick-arw-hidden") : L(e, ".pick-m .pick-arw-l").removeClass("pick-arw-hidden"), e.key.m.current == e.key.m.max ? L(e, ".pick-m .pick-arw-r").addClass("pick-arw-hidden") : L(e, ".pick-m .pick-arw-r").removeClass("pick-arw-hidden")), e.loopAll && e.loopDays || (e.key.d.current == e.key.d.min ? L(e, ".pick-d .pick-arw-l").addClass("pick-arw-hidden") : L(e, ".pick-d .pick-arw-l").removeClass("pick-arw-hidden"), e.key.d.current == e.key.d.max ? L(e, ".pick-d .pick-arw-r").addClass("pick-arw-hidden") : L(e, ".pick-d .pick-arw-r").removeClass("pick-arw-hidden"))
                },
                G = function(e, t, n) {
                    var i = e.key[t];
                    n > i.max && ("d" == t && e.autoIncrease && Z(e, "m", "right"), "m" == t && e.autoIncrease && Z(e, "y", "right"), n = i.min), n < i.min && ("d" == t && e.autoIncrease && Z(e, "m", "left"), "m" == t && e.autoIncrease && Z(e, "y", "left"), n = i.max), e.key[t].current = n, Q(e, t, n)
                },
                Z = function(t, n, i) {
                    if (t.showOnlyEnabledDays && t.enabledDays) ! function(t, n) {
                        for (var i = q(x(t)), r = t.enabledDays, o = (r.length, null), a = 0; a < r.length; a++) r[a] === i && (o = a);
                        "right" == n ? o++ : o--;
                        var s = !!r[o] && O(r[o]);
                        s && e.each(s, (function(e, n) {
                            t.key[e].current = n, G(t, e, n)
                        }))
                    }(t, i);
                    else {
                        var r = x(t, n);
                        "right" == i ? r++ : r--, G(t, n, r)
                    }
                },
                ee = function(e) {
                    e.element.find(".picker").addClass("picker-rumble")
                },
                te = function(t, i) {
                    var r = !0;
                    if (t.roundtrip) {
                        r = !1;
                        var o = R(t);
                        if ("0" != o.a.value && "0" != o.b.value) {
                            var a = k(o.a.value, o.b.value),
                                s = t.minRoundtripSelection;
                            if (s && a <= s) {
                                var d = 86400 * s;
                                o.b.value = parseInt(o.a.value) + d
                            }
                            var l = t.maxRoundtripSelection;
                            if (l && a >= l && (d = 86400 * l, o.b.value = parseInt(o.a.value) + d), e('.picker-trigger[data-dd-roundtrip="' + t.selector.data("dd-roundtrip") + '"]').length > 1) e.each(o, (function(e, i) {
                                var r = i.selector.attr("data-datedropper-id"),
                                    o = O(i.value),
                                    a = F(t, o);
                                t.identifier != r && n[r] && (n[r].key.m.current = o.m, n[r].key.d.current = o.d, n[r].key.y.current = o.y), i.selector.is("input") && i.selector.val(a.formatted).change()
                            }));
                            else {
                                var c = {
                                    a: F(t, O(o.a.value)),
                                    b: F(t, O(o.b.value))
                                };
                                t.selector.val(c.a.formatted + " - " + c.b.formatted)
                            }
                            t.onRoundTripChange && t.onRoundTripChange({
                                outward: O(o.a.value),
                                return: O(o.b.value),
                                days: k(o.a.value, o.b.value)
                            }), t.onChange && t.onChange(T(t))
                        }
                    } else r = !!i || t.autofill;
                    if (r) {
                        var u = F(t);
                        t.selector.is("input") && t.selector.val(u.formatted).change(), t.changeValueTo && ne(t, u.formatted), t.onChange && t.onChange(T(t))
                    }
                },
                ne = function(t, n) {
                    var i = e(t.changeValueTo);
                    i.length && i.is("input") && i.val(n).change()
                };
            e(document).on("keydown", (function(t) {
                var n = t.which;
                if (r && !f())
                    if (32 == n) L(r, ":focus").click(), t.preventDefault();
                    else if (9 == n && t.shiftKey) e(t.target).is(".pick-m") && (t.preventDefault(), e(".datedropper .pick-submit").focus());
                else if (9 == n) e(t.target).is(".pick-submit") && (t.preventDefault(), e(".datedropper .pick-m").focus());
                else if (27 == n) W(r);
                else if (13 == n) L(r, ".pick-submit").trigger(v.i);
                else if (37 == n || 39 == n) {
                    var i = L(r, ".pick:focus");
                    if (i.length && (37 == n || 39 == n)) {
                        if (37 == n) var o = "left";
                        39 == n && (o = "right");
                        var a = i.attr("data-k");
                        Z(r, a, o), J(r)
                    }
                }
            })).on("focus", ".pick-d", (function() {
                if (r) {
                    var e = r.element.find(".pick-lg");
                    e.length && !e.hasClass("pick-lg-focused") && e.addClass("pick-lg-focused")
                }
            })).on("blur", ".pick-d", (function() {
                if (r) {
                    var e = r.element.find(".pick-lg");
                    e.length && e.hasClass("pick-lg-focused") && e.removeClass("pick-lg-focused")
                }
            })).on("click", (function(e) {
                r && (r.selector.is(e.target) || r.element.is(e.target) || 0 !== r.element.has(e.target).length || (W(r), o = null))
            })).on("webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend", j + " .picker-rumble", (function() {
                e(this).removeClass("picker-rumble")
            })).on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", ".picker-overlay", (function() {
                e(this).remove()
            })).on(v.i, j + " .pick-lg li.pick-v", (function() {
                if (r) {
                    if (L(r, ".pick-lg-b li").removeClass("pick-sl"), e(this).addClass("pick-sl"), r.key.d.current = e(this).attr("data-value"), Q(r, "d", e(this).attr("data-value")), r.roundtrip) {
                        var t = R(r),
                            n = q(x(r));
                        if (t) {
                            var i = t.a.value == t.b.value ? "b" : "a";
                            "b" == i && (n <= t.a.value || "0" == t.a.value) && (i = "a"), "a" == i ? e.each(t, (function(e) {
                                t[e].selector.attr("data-dd-roundtrip-" + e, n).attr("data-dd-roundtrip-selector", i)
                            })) : t[i].selector.attr("data-dd-roundtrip-" + i, n).attr("data-dd-roundtrip-selector", i)
                        }
                    }
                    J(r)
                }
            })).on("mouseleave", j + " .pick-lg .pick-lg-b li", (function() {
                r && r.roundtrip && w(r)
            })).on("mouseenter", j + " .pick-lg .pick-lg-b li", (function() {
                if (r) {
                    var t = R(r);
                    r.roundtrip && "0" != t.a.value && w(r, e(this))
                }
            })).on("click", j + " .pick-btn-sz", (function() {
                r && B(r)
            })).on(v.i, j + " .pick-arw.pick-arw-s2", (function(t) {
                if (r) {
                    var n;
                    t.preventDefault(), o = null, e(this).closest("ul").data("k");
                    var i = r.jump;
                    n = e(this).hasClass("pick-arw-r") ? x(r, "y") + i : x(r, "y") - i;
                    var a = function(e, t, n) {
                        for (var i = [], r = e.key.y, o = r.min; o <= r.max; o++) o % n == 0 && i.push(o);
                        return i
                    }(r, 0, i);
                    n > a[a.length - 1] && (n = a[0]), n < a[0] && (n = a[a.length - 1]), r.key.y.current = n, Q(r, "y", x(r, "y"))
                }
            })).on(v.i, j, (function(e) {
                r && L(r, "*:focus").blur()
            })).on(v.i, j + " .pick-arw.pick-arw-s1", (function(t) {
                if (r) {
                    t.preventDefault(), o = null;
                    var n = e(this).closest("ul").data("k"),
                        i = e(this).hasClass("pick-arw-r") ? "right" : "left";
                    Z(r, n, i)
                }
            })).on(v.i, j + " ul.pick.pick-y li", (function() {
                u = !0
            })).on(v.e, j + " ul.pick.pick-y li", (function() {
                var t;
                r && (!u || (t = r).jump >= t.key.y.max - t.key.y.min || (function(t) {
                    var n = L(t, ".picker-jumped-years");
                    n.length && n.remove();
                    var i = e("<div>", {
                        class: "picker-jumped-years"
                    }).appendTo(L(t, ".picker"));
                    setTimeout((function() {
                        i.addClass("picker-jumper-years-visible")
                    }), 100);
                    for (var r = t.key.y.min; r <= t.key.y.max; r++) r % t.jump == 0 && e("<div>", {
                        "data-id": r
                    }).click((function(n) {
                        var r = e(this).data("id");
                        G(t, "y", r), J(t), i.removeClass("picker-jumper-years-visible"), setTimeout((function() {
                            i.remove()
                        }), 300)
                    })).appendTo(i)
                }(r), u = !1))
            })).on(v.i, j + " ul.pick.pick-d li", (function() {
                r && (u = !0)
            })).on(v.e, j + " ul.pick.pick-d li", (function() {
                r && u && (B(r), u = !1)
            })).on(v.i, j + " ul.pick", (function(t) {
                if (r && (o = e(this))) {
                    var n = o.data("k");
                    a = f() ? t.originalEvent.touches[0].pageY : t.pageY, d = x(r, n)
                }
            })).on(v.m, (function(e) {
                if (r && (u = !1, o)) {
                    e.preventDefault();
                    var t = o.data("k"),
                        n = f() ? e.originalEvent.touches[0].pageY : e.pageY;
                    n = a - n, n = Math.round(.026 * n);
                    var i = C(r, t, d + n);
                    i != r.key[t].current && G(r, t, i), r.onPickerDragging && r.onPickerDragging({
                        key: t,
                        value: i
                    })
                }
            })).on(v.e, (function(e) {
                o && (o = null, a = null, d = null, r && (J(r), r.onPickerRelease && r.onPickerRelease(F(r))))
            })).on(v.i, j + " .pick-submit", (function() {
                r && (Y(r) || (te(r, !0), W(r)))
            })), e(window).resize((function() {
                r && ($(r), h(r))
            })), document.addEventListener("touchmove", (function(t) {
                var n = e(t.target).closest(".picker-jumped-years").length;
                r && !n ? (e("html,body").css("touch-action", "none"), t.preventDefault()) : e("html,body").css("touch-action", "unset")
            }), {
                passive: !1
            }), e.fn.dateDropper = function(e) {
                if (p() && p() < 10) console.error("[DATEDROPPER] This browser is not supported");
                else {
                    if ("object" == typeof e || !e) return l.init.apply(this, arguments);
                    if ("string" == typeof e && l[e]) return l[e].apply(this, Array.prototype.slice.call(arguments, 1));
                    console.error("[DATEDROPPER] This method not exist")
                }
            }, 
            // e("head").append("<style>" + e.dateDropperSetup.inlineCSS + "</style>"), 
            e(document).ready((function() {
                e.dateDropperSetup.autoInit && e(".datedropper-init, [data-datedropper]").each((function() {
                    e(this).dateDropper()
                }))
            }))
        }(jQuery);

    var dateDropperSetup = {
        languages: {
            en: {
                m: {
                    s: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
                    f: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                },
                w: {
                    s: ["S", "M", "T", "W", "T", "F", "S"],
                    f: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                }
            }
        }
    };

}
dateDropperInit();