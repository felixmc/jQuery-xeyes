jQuery.fn.xeyes = function(options) {

    options = $.extend({
        padding: 0,
        radius: 'natural',
        onHover: 'follow',
        position: 'center',
        trigger: window
    }, options);

    var padding = parseInt(options.padding, 10);

    this.each(function(index, iris) {

        var $iris = $(iris),
            $eye = $iris.parent();

        $(iris).css('position', 'absolute').parent().css('position', 'relative');

        var irisW = $iris.outerWidth(),
            irisH = $iris.outerHeight(),
            eyeW = $eye.width(),
            eyeH = $eye.height(),

            defX = eyeW / 2 - irisW / 2,
            defY = eyeH / 2 - irisH / 2;

        if (options.radius == 'circular' && eyeW > eyeH) {
            eyeW = eyeH;
        } else if (options.radius == 'circular') {
            eyeH = eyeW;
        }

        $(iris).css("left", defX + "px").css("top", defY + "px");

        var offset = $iris.offset(),
            offX = offset.left + irisW / 2,
            offY = offset.top + irisH / 2,

            position = {
                top: {
                    degree: 90
                },
                bottom: {
                    degree: -90
                },
                left: {
                    degree: 180
                },
                right: {
                    degree: 0
                },
                topRight: {
                    degree: 45
                },
                topLeft: {
                    degree: 135
                },
                bottomRight: {
                    degree: -45
                },
                bottomLeft: {
                    degree: -135
                }
            };

        if (options.position.x) {
            $iris.css("left", defX - parseInt(options.position.x, 10) + "px").css("top", defY - parseInt(options.position.y, 10) + "px");
        } else if (options.position.degree !== undefined) {
            var deg = options.position.degree * Math.PI / -180;
            $iris.css("left", defX + Math.cos(deg) * (eyeW / 2 - irisW / 2 - padding) + "px").css("top", defY + Math.sin(deg) * (eyeH / 2 - irisH / 2 - padding) + "px");
        } else if (options.position == "center") {
            $iris.css("left", defX + "px").css("top", defY + "px");
        } else {
            var deg2 = position[options.position].degree * Math.PI / -180;
            $iris.css("left", defX + Math.cos(deg2) * (eyeW / 2 - irisW / 2 - padding) + "px").css("top", defY + Math.sin(deg2) * (eyeH / 2 - irisH / 2 - padding) + "px");
        }

        $(options.trigger).mousemove(function(e) {

            var degree = Math.atan((e.pageY - offY) / (e.pageX - offX)),
                direction = (offX >= e.pageX) ? -1 : 1,

                newX = Math.cos(degree) * (eyeW / 2 - irisW / 2 - padding) * direction,
                newY = Math.sin(degree) * (eyeH / 2 - irisH / 2 - padding) * direction,

                radius = Math.sqrt(Math.pow(newX, 2) + Math.pow(newY, 2)),
                distance = Math.sqrt(Math.pow(e.pageY - offY, 2) + Math.pow(e.pageX - offX, 2));

            if (radius > distance && options.onHover.toLowerCase() != 'nofollow') {
                $iris.css("left", (e.pageX - offX + defX) + "px").css("top", (e.pageY - offY + defY) + "px");
            } else {
                $iris.css("left", defX + newX + "px").css("top", defY + newY + "px");
            }
        });
    });
};
