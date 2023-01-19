
    function readURL(input, imgControlName) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $(imgControlName).attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $(document).on('change', '#imag', function () {
        // add your logic to decide which image control you'll use
        var imgControlName = "#ImgPreview";
        readURL(this, imgControlName);
        $('.preview').addClass('it');
        $('.btn-rmv').addClass('rmv');
    });

    $(document).on('click', '#removeImage', function () {
        e.preventDefault();
        $("#imag").val("");
        $("#ImgPreview").attr("src", "assets/images/default-user.png");
        $('.preview').removeClass('it');
        $('.btn-rmv').removeClass('rmv');
    });

    // Open Lightbox
    $(document).on('click', '.ZoomImg', function () {
            e.preventDefault();
            var image = $(this).siblings("#ImgPreview").attr('src');
            $('html').addClass('no-scroll');
            $('body').append('<div class="lightbox-opened"><div class="lightbox-content"><img src="' + image + '"><span class="closeZoom">x</span></div></div>');
        });

    // Close Lightbox
    $(document).on('click', '.lightbox-opened', function () {
            $('html').removeClass('no-scroll');
            $('.lightbox-opened').remove();
        });

    $(document).on('click', '.boxEdit', function () {
        var IconEdit = $(this);
        var editField = $(this).closest('.boxData').find("input.UneditableField");
        var editcheckbox = $(this).closest('.boxData').find(".UncheckField");
        var editFieldSelect = $(this).closest('.boxData').find("select.UneditableField");
        console.log(editFieldSelect);
        if (IconEdit.hasClass('glyphicon-pencil')) {
            IconEdit.removeClass("glyphicon-pencil").addClass("glyphicon-floppy-disk");
            editField.attr("readonly", false);
            editFieldSelect.removeAttr("disabled");
            editcheckbox.removeAttr("disabled");
            editField.addClass("editableField");
            editFieldSelect.addClass("editableField");
        } else {
            IconEdit.removeClass("glyphicon-floppy-disk").addClass("glyphicon-pencil");
            editField.attr("readonly", true);
            editFieldSelect.attr("disabled", true);
            editcheckbox.attr("disabled", true);
            editField.removeClass("editableField");
            editFieldSelect.removeClass("editableField");
        }

    });

    $(document).on('click', '.openpopup', function () {
        var holder  =   this,
            element =  $(holder).siblings(".menu_popup") ;

        $(".popup").not(element).addClass("dnone");
        element.toggleClass("dnone");
        popupPosition(element, holder)
    });


    //Close Dropdowns on scroll or click outside
    $(document).on('scroll', '*', function () {
        $('.menu_popup').not('.dnone').addClass("dnone");
        alert(1)
        //$(".right-content").removeClass("z-index-1050");
    });

    $(window).on('resize click', function(e) {
        if ($(e.target).closest('.openpopup').length === 0 /*&& $(e.target).closest('.actions-list.dropdown-menu').length === 0*/) {
            $('.menu_popup').not('.dnone').addClass("dnone");
            //$(".right-content").removeClass("z-index-1050");
        }
    });

$(document).ready(function () {
//Close Dropdowns on scroll or click outside
    $("body *").not('.scrollable-list').on('scroll', function(e) {
        $('.menu_popup').not('.dnone').addClass("dnone");
    });

});