//Safe list
$('.sortable').nestedSortable({
    forcePlaceholderSize: true,
    handle: 'div',
    helper: 'clone',
    items: 'li',
    opacity: .6,
    placeholder: 'placeholder',
    revert: 250,
    tabSize: 25,
    tolerance: 'pointer',
    toleranceElement: '> div',
    maxLevels: 2,
    isTree: true,
    expandOnHover: 700,
    startCollapsed: false
});

$('.disclose').on('click', function () {
    $(this).closest('li').toggleClass('mjs-nestedSortable-collapsed').toggleClass('mjs-nestedSortable-expanded');
    $(this).toggleClass('ui-icon-plusthick').toggleClass('ui-icon-minusthick');
});
// show deails on check
$(function () {
    $('table.setup-table tr td input:checkbox').click(function () {
        $('.new-data-section').toggle(this.checked);
    });
});

// rating
$(document).ready(function () {
    /* 1. Visualizing things on Hover - See next part for action on click */
    $('.stars li').on('mouseover', function () {
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function (e) {
            if (e < onStar) {
                $(this).addClass('hover');
            } else {
                $(this).removeClass('hover');
            }
        });
    }).on('mouseout', function () {
        $(this).parent().children('li.star').each(function (e) {
            $(this).removeClass('hover');
        });
    });

    /* 2. Action to perform on click */
    $('.stars li').on('click', function () {
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('li.star');
        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }
        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }
        // JUST RESPONSE (Not needed)
        var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
        var msg = "";
        if (ratingValue > 1) {
            msg = "Thanks! You rated this " + ratingValue + " stars.";
        } else {
            msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
        }
        responseMessage(msg);
    });
});
// For active Alerts
function activeAlert(alertBtnActive, itsAlert, toggledClassActive, secondAlert, thirdAlert) {
    $(alertBtnActive).click(function () {
        $(itsAlert).addClass(toggledClassActive);

        $(secondAlert).removeClass('alertme_active');
        $(thirdAlert).removeClass('alertme_active');
    });
}
activeAlert('#alertSuccess', '.alert-success-app', 'alertme_active', '.alert-danger-app', '.alert-warning-app');
activeAlert('#alertDanger', '.alert-danger-app', 'alertme_active', '.alert-success-app', '.alert-warning-app');
activeAlert('#alertwarn', '.alert-warning-app', 'alertme_active', '.alert-success-app', '.alert-danger-app');

//For Inactive Alerts
function inActiveAlert(mainHostingEl, selectedAlertBtn) {
    $(mainHostingEl).on('click', selectedAlertBtn, function () {
        $(this).parent().removeClass('alertme_active');
    });
}
inActiveAlert('body', '.alert-success-app button');
inActiveAlert('body', '.alert-danger-app button');
inActiveAlert('body', '.alert-warning-app button');

//-------- RFQ if select new duration will make the next disabled inputs not disable
$('#rfqNewDuration').change(function () {
    if ($(this).children("option:selected").val() == "newDuration") {
        $('.rfq_td_input').removeAttr('disabled')
    } else {
        $('.rfq_td_input').attr('disabled', 'disabled');
    }
});

/*-------- RFQ in create r.f.q pop-up => choose template input
           " in case choose any option will get its value to 
           put it in preview link to be shown in clicking it "
*/
$('#rfqSelectTemplate').change(function () {
    var seletedVal = $(this).children("option:selected").val();
    $('#rfqSelectTemplate').next('a').attr('href', seletedVal);
});
$(document).ready(function () {
    // Add Institute table page " add course group "
    $('#addInstituteSelectGroup').change(function () {
        if ($(this).val() == 'group4') {
            $(this).hide();
            $('#addInstituteNewGroup').show();
        }
    });
});


// Add Institute table page " back to main select course group input "
$('#showNormalSelectGroupCourse').click(function () {
    $(this).parents('#addInstituteNewGroup').hide();
    $('#addInstituteSelectGroup').show();
});

// Add Institute table page " according to file upload in creating institute pop up "
$('.input_in_new').click(function () {
    $('.result_in_new input').click();
});
$('.input_in_edit').click(function () {
    $('.result_in_edit input').click();
});
$('.institute-table--file input').change(function (e) {
    let instituteTableFileVal = e.target.files[0].name;
    $('.institute-table--file_result').text(instituteTableFileVal);
    $('.institute-table--file_fakeinout').css('background-color', '#27ae60');
});
$('.institute-table--file input').change(function (e) {
    let instituteTableFileVal = e.target.files[0].name;
    $('.institute-table--file_result').text(instituteTableFileVal);
    $('.institute-table--file_fakeinout').css('background-color', '#27ae60');
});

// Add Institute table page
$('#addMorePhones').click(function (e) {
    e.preventDefault();
    $(this).parent().next().append(`
            <div class="inputs_container d-flex">
                <input type="text" class="form-control">
            </div>
        `);
    $('.group-phones').each(function () {

        if ($(this).length == 1) {
            $('#addMorePhones').hide();
        }
    });
});

$('#removeMoreEmails').click(function (e) {
    e.preventDefault();
    $(this).parent().next().append(`
            <div class="inputs_container d-flex">
                <input type="text" class="form-control">
            </div>
        `);
    $('.group-emails').each(function () {

        if ($(this).length == 1) {
            $('#removeMoreEmails').hide();
        }
    });
});

$('#removeInstructorMoreEmails').click(function (e) {
    e.preventDefault();
    $(this).parent().next().append(`
            <div class="inputs_container d-flex">
                <input type="text" class="form-control">
            </div>
        `);
    $('.group-instructor-emails').each(function () {

        if ($(this).length == 1) {
            $('#removeInstructorMoreEmails').hide();
        }
    });
});
$(document).ready(function () {

    //Course request add mor than objective
    $('#addMoreEmployee').click(function () {
        let addElEmployeeVal = $('.add_more_employee--input').val();
        if (addElEmployeeVal != '') {
            $('#ulAddedEmployee').append('<li> ' + addElEmployeeVal + '<button><i class="fa fa-close fa-fw"></i></button></li>');
            $('.add_more_employee--input').val('');
        }
    });
    $('#ulAddedEmployee li').each(function () {
        $(this).children('button').click(function () {
            $(this).parent('li').remove()
        });
    });

    $('#ulAddedEmployee').on('click', 'li button', function () {
        $(this).parent().remove();
    });
    $('.actualdays__head').click(function () {
        $(this).children('i').toggleClass('fa-chevron-down fa-chevron-up');
        $('.actualdays__body').slideToggle();
    });
});


//For Bootstrap DatePicker
$(".data_picker_one, .data_picker_two, .data_picker_three, .data_picker_four, .data_picker_five, .data_picker_six, .data_picker_seven, .data_picker_eight, data_picker_nine").datepicker({
    format: 'dd-mm-yyyy',
    outoClose: true,
});
$("#me").datepicker();

// document.getElementById('output2').innerHTML = location.search;

$('#actualDayNewOneBtn').click(function () {
    let newDateManagerScreenVal = $('#actualDayNewOne').val();
    if (newDateManagerScreenVal != '') {
        $('#actualDayHosetEl').append(`
                    <li>
                        <span class="actualdays__body__date"> ${ newDateManagerScreenVal} </span>
                        <span class="actualdays__body__check"> <i class="fa fa-trash fa-fw pointer"></i> </span>
                    </li>
                `);

        $('#actualDayNewOne').val('');
    }
});




$('.details-moda--group').each(function () {
    //Remove request in consolidation Screen
    $(this).find('.show_textarea_consolidation').click(function () {
        $(this).parents('.row').next('.row').find('.textarea_removing_consolodation').slideToggle();
    });
    $(this).find('.remove_request_fromdetails_consolidation').click(function () {
        $(this).parents('.details-moda--group').slideUp(1000, function () {
            $(this).remove();
        });
    });

});

$(document).ready(function () {
    //Course request upload file
    $('#course-request--res, #course-request--res_btn').click(function () {
        $('#course-request--file').click();
    });
    $('#course-request--file').change(function () {

        var files = $('#course-request--file').prop("files");
        var names = $.map(files, function (val) {
            return val.name;
        });

        for (let i = 0; i < names.length; i++) {
            const addNewRequestFileName = names[i];
            $('#course-request--res').children('ul').append('<li>' + addNewRequestFileName + '</li>');
        }
    });
    //For Head


    // Course Request New Course Name
    $('#courseRequestNewCourseName').change(function () {
        if ($(this).val() === "other") {
            $('#wrapCourseRequestNewCourseName').hide();
            $('#courseRequestNewInputVal').show();
        }
    });
    // Course Request hide courseRequestNewInputVal then show again main select input
    $('#courseRequestNewInputVal button').click(function (e) {
        e.preventDefault();
        $(this).parent().hide();
        $('#wrapCourseRequestNewCourseName').show();
    });

    $('#output2').text(' ');

    // Course Request Edit Course Name
    $('#courseRequestEditCourseName').change(function () {
        if ($(this).val() === "other") {
            $('#wrapCourseRequestEditNewCourseName').hide();
            $('#courseRequestEditInputVal').show();
        }
    });
    // Course Request Edit hide courseRequestNewInputVal then show again main select input
    $('#courseRequestEditInputVal button').click(function (e) {
        e.preventDefault();
        $(this).parent().hide();
        $('#wrapCourseRequestEditNewCourseName').show();
    });

    // Course Request Edit file input 
    $('#course-request--res-deit').click(function () {
        $('#course-request--file-edit').click();
    });

    $('#course-request--file-edit').change(function () {

        var filesEdit = $('#course-request--file-edit').prop("files");
        var fileNamesEdit = $.map(filesEdit, function (val) {
            return val.name;
        });

        for (let i = 0; i < fileNamesEdit.length; i++) {
            const addNewRequestFileNameEdit = fileNamesEdit[i];
            $('#course-request--res-deit').children('ul').append('<li>' + addNewRequestFileNameEdit + '</li>');
        }
    });
    // Manager Page file input in main table
    $('#managerFileIcon').click(function () {
        $('#managerFile').click();
    });

    $('.search_btn').each(function () {
        $(this).click(function () {
            $(this).parent('span').siblings('form').slideToggle('fast');
        });
    });

    //Manager Screen Add New Employee
    $('#managerScreenAddNewEmployeeOpen').click(function () {
        $('#managerScreenAddNewEmployeeDiv').slideToggle();
    });

});