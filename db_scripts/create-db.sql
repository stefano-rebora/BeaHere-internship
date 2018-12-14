Create table student (
    id int(7) PRIMARY KEY,
    name varchar(50) not null,
    surname varchar(50) not null,
	email varchar(100) not null,
    device_id varchar(100) not null UNIQUE,
    last_imei_change date not null,
    password varchar(255) not null
);

Create table professor (
    id int(7) PRIMARY KEY,
    name varchar(50) not null,
    surname varchar(50) not null,
	email varchar(100) not null,
    password varchar(255) not null
);

Create table course (
    id int(5) PRIMARY KEY,
    name varchar(50) not null,
    academic_year varchar(9) not null
);

Create table teaching (
    professor_id int(7) not null,
    course_id int(5) not null,
    PRIMARY KEY(professor_id, course_id),
    foreign key(professor_id) references professor(id) ON UPDATE CASCADE ON DELETE CASCADE,
    foreign key(course_id) references course(id) ON UPDATE CASCADE ON DELETE CASCADE
);

Create table lesson (
	id int not null AUTO_INCREMENT,
    date date not null,
    minor_id int(6) not null,
    start time not null,
    end time not null,
    course_id int(5) not null,
	professor_id int(7),
	note varchar(300),
    PRIMARY KEY(id),
	UNIQUE (date, minor_id),
    foreign key(course_id) references course(id) ON UPDATE CASCADE ON DELETE CASCADE,
	foreign key(professor_id) references professor(id) ON UPDATE CASCADE ON DELETE SET NULL
	
);

Create table attendance (
    student_id int(7) not null,
    lesson_date date not null,
    lesson_minor_id int(6) not null,
    time time,
    PRIMARY KEY(student_id, lesson_date, lesson_minor_id),
    foreign key(student_id) references student(id) ON UPDATE CASCADE ON DELETE CASCADE,
    foreign key(lesson_date, lesson_minor_id) references lesson(date, minor_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE VIEW lessonPerCourse AS
	SELECT course.id as course_id, course.name as course_name, course.academic_year, count(*) as num_lessons
	FROM (course JOIN lesson ON course.id = lesson.course_id)
	GROUP BY course.id;

CREATE VIEW attendancePerStudent AS
	SELECT c.id as course_id, c.academic_year, s.id as student_id ,count(*) as num_attend
	FROM student s JOIN attendance a ON s.id = a.student_id JOIN lesson l ON a.lesson_date = l.date AND a.lesson_minor_id = l.minor_id JOIN course c ON l.course_id = c.id
	GROUP BY c.id, s.id ORDER BY c.id;




--
-- Dump dei dati per la tabella `professor`
--

INSERT INTO `professor` (`id`, `name`, `surname`, `email`, `password`) VALUES
(-1, 'admin', 'admin', 'admin@email.com', '$2y$10$UDygcHU1s895xHyXcoaTqea..DSiOq1mxjPjgPEPpxtYEI/ipTqTS'),
(1234567, 'Giorgio', 'Delzanno', 'email@email.com', '$2y$10$SXBsJNSsDRJxOLni2Hegj.qzuY5UyDYdfKMsnMsGjthrw0UFGMdN6'),
(1234568, 'prof', 'prof', 'email@email.com', '$2y$10$XsQOjwym8BJiFjv9rFJAMuOlYPTBUtxsXiJ4WNoOj.n52HopFWYfS');


--
-- Dump dei dati per la tabella `course`
--

INSERT INTO `course` (`id`, `name`, `academic_year`) VALUES
(12345, 'nuovo corso', '2018-2019'),
(12347, 'prova corso', '2018-2019'),
(61884, 'Advanced Data Management', '2018-2019'),
(90519, 'Security', '2018-2019'),
(90549, 'Additional Useful Knowledge', '2018-2019');

--
-- Dump dei dati per la tabella `teaching`
--

INSERT INTO `teaching` (`professor_id`, `course_id`) VALUES
(1234567, 12345),
(1234567, 90549);

--
-- Dump dei dati per la tabella `student`
--

INSERT INTO `student` (`id`, `name`, `surname`, `email`, `device_id`, `password`) VALUES
(4089451, 'Giacomo', 'Masi', 'email@email.it', 'numero imei1', 'password'),
(4089450, 'Stefano', 'Rebora', 'email@email.it', 'numero imei2', 'password'),
(4089452, 'Andrea', 'Canepa', 'email@email.it', 'numero imei3', 'password');

--
-- Dump dei dati per la tabella `lesson`
--

INSERT INTO `lesson` (`date`, `minor_id`, `start`, `end`, `course_id`,`professor_id`,`note`) VALUES
('2018-10-01', 123456, '09:00:00', '11:00:00', 12345, 1234567, "note lezione"),
('2018-10-01', 123457, '09:00:00', '10:00:00', 90549, 1234567, "note lezione"),
('2018-10-02', 123456, '16:00:00', '18:00:00', 12345, 1234567, "note lezione"),
('2018-10-02', 123457, '15:00:00', '17:00:00', 90549, 1234567, "note lezione"),
('2018-11-01', 123456, '09:00:00', '11:00:00', 90549, 1234567, "note lezione"),
('2018-11-04', 123456, '15:00:00', '18:00:00', 90549, 1234567, "note lezione"),
('2018-11-06', 123456, '15:00:00', '17:00:00', 90549, 1234567, "note lezione"),
('2018-11-07', 123456, '09:00:00', '11:00:00', 90549, 1234567, "note lezione"),
('2018-11-13', 123456, '15:00:00', '18:00:00', 90549, 1234567, "note lezione");

--
-- Dump dei dati per la tabella `attendance`
--

INSERT INTO `attendance` (`student_id`, `lesson_date`, `lesson_minor_id`, `time`) VALUES
(4089450, '2018-10-01', 123456, '09:42:00'),
(4089450, '2018-10-01', 123457, '09:42:00'),
(4089450, '2018-10-02', 123456, '16:50:00'),
(4089451, '2018-10-02', 123457, '16:15:00'),
(4089451, '2018-11-04', 123456, '15:15:00'),
(4089451, '2018-11-07', 123456, '16:50:00'),
(4089452, '2018-10-01', 123456, '15:15:00'),
(4089452, '2018-10-01', 123457, '09:42:00'),
(4089452, '2018-11-01', 123456, '15:15:00');
