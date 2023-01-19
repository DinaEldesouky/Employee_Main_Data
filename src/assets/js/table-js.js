$(document).ready(function () {
    // For Arabic datatable controls
    var isArabic = false;

    // Passing moment function to dataTable Prototype to help datatable plugin sorting by date depending on moment format...
    $.fn.dataTable.moment('DD/MM/YYYY hh:mm');

    //----------- Start Consolidation Page
    $('#consolidationMainTable').DataTable({
        "dom": 'rtip',
        stateSave: false,
        "scrollCollapse": true,
        "info": true,
        "paging": true,
        "responsive": true,
        "ordering": true,
        "pagingType": "full_numbers",
        "language": {
            "paginate": {
                "previous": "<",
                "next": ">",
                "last": "Last",
                "first": "First"
            },
            'url': isArabic ? "assets/js/dtableAr.json" : " "
        }
    });

    $('#new_consolidate, #edit_consolidate').DataTable({
        "columnDefs": [{
            "searchable": false,
            "orderable": false,
            "targets": [0]
        }],
        "order": [1, 'asc'],
        "paging": false,
        "scrollY": "230px",
        "scrollCollapse": true,
        "searching": false,

        "info": false,
        "language": {
            "paginate": {
                "previous": "<",
                "next": ">",
                "last": "Last",
                "first": "First"
            },
            'url': isArabic ? "assets/js/dtableAr.json" : " "
        }
    });

    $('#new_consolidate_edit, #edit_consolidate_edit').DataTable({
        "columnDefs": [{
            "searchable": false,
            "orderable": false,
            "targets": [0]
        }],
        "order": [1, 'asc'],
        "paging": false,
        "scrollY": "230px",
        "scrollCollapse": true,
        "searching": false,
        "language": {
            "paginate": {
                "previous": "<",
                "next": ">",
                "last": "Last",
                "first": "First"
            },
            'url': isArabic ? "assets/js/dtableAr.json" : " "
        }
    });

    $('#course_requests').DataTable({
        "dom": 'rtip',
        "columnDefs": [{
            "orderable": false,
            "targets": [4, 5, 6, 7]
        }],
        "pagingType": "full_numbers",
        "language": {
            "paginate": {
                "previous": "<",
                "next": ">",
                "last": "Last",
                "first": "First"
            },
            'url': isArabic ? "assets/js/dtableAr.json" : " "
        }
    });

    $('#consolidationHistoryTable').DataTable({
        "columnDefs": [{
            "orderable": false,
            "targets": [3, 4, 6, 7]
        }],
        "pagingType": "full_numbers",
        "language": {
            "paginate": {
                "previous": "<",
                "next": ">",
                "last": "Last",
                "first": "First"
            },
            'url': isArabic ? "assets/js/dtableAr.json" : " "
        }
    });
    //----------- Start Consolidation Page

    //----------- Start Course Request Page
    $('#course_requests_2').DataTable({
        "dom": 'frtip',
        "pagingType": "full_numbers",
        "language": {
            "paginate": {
                "previous": "<",
                "next": ">",
                "last": "Last",
                "first": "First"
            },
            'url': isArabic ? "assets/js/dtableAr.json" : " "
        }
    });
    //----------- End Course Request Page

    //----------- Start Institute table Page

    //----------- End Institute table Page

    //----------- Start Instructor table Page
    $('#instructor_table').DataTable({
        "dom": 'rftip',
        "columnDefs": [{
            "orderable": false,
            "targets": [2, 5, 6, 7]
        }],
        "pagingType": "full_numbers",
        "language": {
            "paginate": {
                "previous": "<",
                "next": ">",
                "last": "Last",
                "first": "First"
            },
            'url': isArabic ? "assets/js/dtableAr.json" : " "
        }
    });
    //----------- End Instructor table Page

    //----------- Start Manager Page
    $('#employee_info').DataTable({
        "dom": 'rftip',
        "columnDefs": [{
            "orderable": false,
            "targets": []
        }],
        "pagingType": "full_numbers",
        "language": {
            "paginate": {
                "previous": "<",
                "next": ">",
                "last": "Last",
                "first": "First"
            },
            'url': isArabic ? "assets/js/dtableAr.json" : " "
        }
    });

    $('#managerCourseDetails').dataTable({
        "dom": 'rftip',
        "colReorder": false,
        'columnDefs': [{
            'targets': [],
            'orderable': true,
        }],
        "language": {
            "paginate": {
                "previous": "<",
                "next": ">",
                "last": "Last",
                "first": "First"
            },
            'url': isArabic ? "assets/js/dtableAr.json" : " "
        }
    });
    //----------- End Manager Page

    //----------- Start R.F.Q Page
    $('#rfqTable').DataTable({
        "pagingType": "full_numbers",
        "language": {
            "paginate": {
                "previous": "<",
                "next": ">",
                "last": "Last",
                "first": "First"
            },
            'url': isArabic ? "assets/js/dtableAr.json" : " "
        }
    });

    $('#createfrq').DataTable({
        "columnDefs": [{
            "searchable": false,
            "orderable": false,
            "targets": [0, 4, 5, 6, 7]
        }],
        "order": [
            [1, 'asc']
        ],
        "pagingType": "full_numbers",
        "language": {
            "paginate": {
                "previous": "<",
                "next": ">",
                "last": "Last",
                "first": "First"
            },
            'url': isArabic ? "assets/js/dtableAr.json" : " "
        }
    });

    $('#acc-type').DataTable({
        "dom": 'frtip',
        "language": {
            "paginate": {
                "previous": "<",
                "next": ">",
                "last": "Last",
                "first": "First"
            },
            'url': isArabic ? "assets/js/dtableAr.json" : " "
        }
    });
    //----------- End R.F.Q Page

    //----------- Start Student Info Page
    $('#employee_info_one').DataTable({
        "language": {
            "paginate": {
                "previous": "<",
                "next": ">",
                "last": "Last",
                "first": "First"
            },
            'url': isArabic ? "assets/js/dtableAr.json" : " "
        }
    });
    //----------- End Student Info Page

    //----------- Start Institute table setup Page
    $('#courseplansTable').DataTable({
        "columnDefs": [{
            "orderable": false,
            "targets": [6, 7]
        }],
        "pagingType": "full_numbers",
        "language": {
            "paginate": {
                "previous": "<",
                "next": ">",
                "last": "Last",
                "first": "First"
            },
            'url': isArabic ? "assets/js/dtableAr.json" : " "
        }
    });
    //----------- End Institute table setup Page

    //----------- Start Course Classification Page
    $('#departments').DataTable({
        "columnDefs": [{
            "orderable": false,
            "targets": [0]
        }],
        "pagingType": "full_numbers",
        "language": {
            "paginate": {
                "previous": "<",
                "next": ">",
                "last": "Last",
                "first": "First"
            },
            'url': isArabic ? "assets/js/dtableAr.json" : " "
        }
    });

    $('#courseClassificationDep').DataTable({
        "pagingType": "full_numbers",
        "language": {
            "paginate": {
                "previous": "<",
                "next": ">",
                "last": "Last",
                "first": "First"
            },
            'url': isArabic ? "assets/js/dtableAr.json" : " "
        }
    });

    $('#courseClassificationfin').DataTable({
        "pagingType": "full_numbers",
        "language": {
            "paginate": {
                "previous": "<",
                "next": ">",
                "last": "Last",
                "first": "First"
            },
            'url': isArabic ? "assets/js/dtableAr.json" : " "
        }
    });

    $('#tablePosition').DataTable({
        "pagingType": "full_numbers",
        "language": {
            "paginate": {
                "previous": "<",
                "next": ">",
                "last": "Last",
                "first": "First"
            },
            'url': isArabic ? "assets/js/dtableAr.json" : " "
        }
    });
    //----------- End Course Classification Page

    $('table').css('width', '100%');

    //-------- To make any table full width
    var tableWidth = setInterval(() => {
        $('.table').css('width', '100%')
    });
    setTimeout(() => {
        clearInterval(tableWidth)
    }, 1000);

});