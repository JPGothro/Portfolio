// Controllers to handle navigation to the proper sections.

page('/', projectController.reveal);
page('/wips', wipController.reveal);
page('/about', aboutController.reveal);

// page('/', centralController.reveal('projects'));
// page('/wips', centralController.reveal('wips'));
// page('/about', centralController.reveal('about'));

page();
