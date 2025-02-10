CREATE DATABASE IF NOT EXISTS college ;

USE  college ;

CREATE TABLE teacher(
id INT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
subject VARCHAR(50),
salary INT DEFAULT 50000
);
INSERT INTO teacher 
(id,name,subject ,salary)
VALUES
(23, "ajay", "math", 50000),
(47, "bharat", "english", 60000),
(18, "chetan", "chemistry", 45000),
(9, "divya", "physics", 75000);

SELECT * FROM teacher;

SELECT * 
FROM teacher 
WHERE salary >55000;

ALTER TABLE teacher 
CHANGE COLUMN salary ctc INT ;


-- we need to update the salary of each teacher by 25%;
SET SQL_SAFE_UPDATES=0;

UPDATE teacher 
SET ctc=ctc + ctc*0.25;


ALTER TABLE teacher 
ADD COLUMN city VARCHAR(50) DEFAULT "Gurgaon";

ALTER TABLE teacher 
DROP COLUMN ctc;

SELECT * FROM  teacher ;




CREATE TABLE  student (
roll_no INT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
city VARCHAR(50),
marks INT DEFAULT 0 
);


-- truncate student;
INSERT INTO student
(roll_no, name, city, marks)
VALUES
(110 , "Adam ", "Delhi ",76 ),
(108 , "Bob ", " Mumbai", 65),
(124 , "Casey ", "pune",94 ),
(112 , "Duke ", "Pune",80 );
SELECT * FROM student;

SELECT * 
FROM student 
WHERE marks> 75;

SELECT DISTINCT city FROM student;

SELECT  city 
FROM student
GROUP BY city;

SELECT  max(marks) 
FROM student;

SELECT  city ,max(marks)
FROM student
GROUP BY city;

SELECT AVG(marks)
FROM student;

ALTER TABLE student
ADD COLUMN grade VARCHAR(2);

UPDATE student
SET grade ="O" 
WHERE marks>=80;
UPDATE student
SET grade ="A"
WHERE marks >=70 AND marks < 80;
UPDATE student
SET grade ="B"
WHERE marks >=60 AND marks <70;

SELECT * FROM student;

