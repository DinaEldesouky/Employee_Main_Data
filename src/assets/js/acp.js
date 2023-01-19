// $(document).ready(function () {

//     $(".selectAll").on("click", function (e) {
//         alert("checked");
//         if ($(this).is(":checked")) {
//             alert("checked");
//             ("#acpTabel tr").addClass("selected");
//         } else {
//             ("#acpTabel tr").removeClass("selected");
//         }
//     });
// });
// $(document).ready(function () {
//     $(function () {
//         var table = $('#acpTabel table').DataTable({
//             dom: 'trp',
//             scrollCollapse: true,
//             ordering: true,
//             scrollCollapse: true,
//             paging: true,
//             "columnDefs": [{
//                 "targets": [0, 11, 12, 13],
//                 "orderable": false,
//             }]

//         });
//     });
// });

//

//invoiceTabelModal
$(document).ready(function () {
    $(function () {
        var table = $('#inboxTabel table').DataTable({
            dom: 'trp',

            ordering: true,
            scrollCollapse: false,
            paging: true,
            "columnDefs": [{
                "targets": [0, 11, 12],
                "orderable": false,
            }]

        });
    });
    $(function () {
        var table = $('#validationTabel table').DataTable({
            dom: 'trp',

            ordering: true,
            scrollCollapse: false,
            paging: true,
            "columnDefs": [{
                "targets": [0, 11, 12],
                "orderable": false,
            }]

        });
    });

});