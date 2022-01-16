
window.addEventListener("load", function(event) {
    var index_menu = [
        '<nav class="header_menu">',
            '<ul>',
                '<li><a href="index.html"><i class="fa fa-home fa-fw"></i>&nbsp;Home</a></li>',
                '<li><a href="pages/task/sprint_02/lesson_21/lesson_21_menu.html"><i class="fa fa-code fa-fw"></i>&nbsp;Last vesion example project</a></li>',
                '<li><a href="students_works.html"><i class="fa fa-users" aria-hidden="true"></i>&nbsp;Student projects</a></li>',
            '</ul>',
        '</nav>'
    ];

    var index_elem = document.querySelector('#index_menu');
    if (index_elem) {
        index_elem.innerHTML = index_menu.join('');
    };
    var lesson_menu = [
        '<nav class="header_menu">',
            '<ul>',
                '<li><a href="../../../index.html"><i class="fa fa-home fa-fw"></i>Home</a></li>',
                '<li><a href="../../task/sprint_02/lesson_21/lesson_21_menu.html"><i class="fa fa-code fa-fw"></i>&nbsp;Last vesion example project</a></li>',
                '<li><a href="../../../students_works.html"><i class="fa fa-users" aria-hidden="true"></i>&nbsp;Student projects</a></li>',
            '</ul>',
        '</nav>',
    ];
    var lesson_elem = document.querySelector('#lesson_menu');
    if (lesson_elem) {
        lesson_elem.innerHTML = lesson_menu.join('');
    };
    var task_menu = [
        '<nav class="header_menu">',
            '<ul>',
                '<li><a href="../../../../index.html"><i class="fa fa-home fa-fw"></i>Home</a></li>',
                '<li><a href="../../sprint_02/lesson_21/lesson_21_menu.html"><i class="fa fa-code fa-fw"></i>&nbsp;Last vesion example project</a></li>',
                '<li><a href="../../../../students_works.html"><i class="fa fa-users" aria-hidden="true"></i>&nbsp;Student projects</a></li>',
            '</ul>',
        '</nav>',
    ];
    var task_elem = document.querySelector('#task_menu');
    if (task_elem) {
        task_elem.innerHTML = task_menu.join('');
    };

// Bootstrap version
    var menu_elements = [];
    var menu_before = [
        '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">',
            '<div class="container-fluid">',
                '<div class="collapse navbar-collapse" id="navbarSupportedContent">',
                    '<ul class="navbar-nav me-auto mb-2 mb-lg-0">',
                        '<li class="nav-item" style="margin-right: 1vw;">'
    ];
    var menu_between = [
                        '</li>',
                        '<li class="nav-item" style="margin-right: 1vw;">'
    ];
    var menu_after = [
                        '</li>',
                    '</ul>',
                '</div>',
            '</div>',
        '</nav>'
    ];
    menu_elements[0] = menu_before.join('');
    menu_elements[2] = menu_between.join('');
    menu_elements[4] = menu_between.join('');
    menu_elements[6] = menu_after.join('');


    var index_menu_header = [
        '<a class="nav-link active" aria-current="page" href="index.html"><i class="fa fa-home fa-fw"></i>&nbsp;Home</a>'
    ];
    var lesson_menu_header = [
        '<a class="nav-link active" aria-current="page" href="../../../index.html"><i class="fa fa-home fa-fw"></i>&nbsp;Home</a>'
    ];
    var task_menu_header = [
        '<a class="nav-link active" aria-current="page" href="../../../../index.html"><i class="fa fa-home fa-fw"></i>&nbsp;Home</a>'
    ];

    var index_menu_example = [
        '<a class="nav-link" href="pages/task/sprint_02/lesson_21/lesson_21_menu.html"><i class="fa fa-code fa-fw"></i>&nbsp;Last vesion example project</a>'
    ];
    var lesson_menu_example = [
        '<a class="nav-link" href="../../task/sprint_02/lesson_21/lesson_21_menu.html"><i class="fa fa-code fa-fw"></i>&nbsp;Last vesion example project</a>'
    ];
    var task_menu_example = [
        '<a class="nav-link" href="../../sprint_02/lesson_21/lesson_21_menu.html"><i class="fa fa-code fa-fw"></i>&nbsp;Last vesion example project</a>'
    ];

    var index_menu_students = [
        '<a class="nav-link" href="students_works.html"><i class="fa fa-users" aria-hidden="true"></i>&nbsp;&nbsp;Student projects</a>'
    ];
    var lesson_menu_students = [
        '<a class="nav-link" href="../../../students_works.html"><i class="fa fa-users" aria-hidden="true"></i>&nbsp;&nbsp;Student projects</a>'
    ];
    var task_menu_students = [
        '<a class="nav-link" href="../../../../students_works.html"><i class="fa fa-users" aria-hidden="true"></i>&nbsp;&nbsp;Student projects</a>'
    ];
    
    var index_elem_bootstrap = document.querySelector('#index_menu_bootsrap');
    if (index_elem_bootstrap) {
        menu_elements[1] = index_menu_header;
        menu_elements[3] = index_menu_example;
        menu_elements[5] = index_menu_students;

        index_elem_bootstrap.innerHTML = menu_elements.join('');
    };
    var lesson_elem_bootstrap = document.querySelector('#lesson_menu_bootsrap');
    if (lesson_elem_bootstrap) {
        menu_elements[1] = lesson_menu_header;
        menu_elements[3] = lesson_menu_example;
        menu_elements[5] = lesson_menu_students;

        lesson_elem_bootstrap.innerHTML = menu_elements.join('');
    };
    var task_elem_bootstrap = document.querySelector('#task_menu_bootsrap');
    if (task_elem_bootstrap) {
        menu_elements[1] = task_menu_header;
        menu_elements[3] = task_menu_example;
        menu_elements[5] = task_menu_students;

        task_elem_bootstrap.innerHTML = menu_elements.join('');
    };

    window.scrollTo( 0, 0);
}); 