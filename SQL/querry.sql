USE [BuilderHeroes];
GO

DELETE FROM Heroes
DBCC CHECKIDENT (Heroes, RESEED, 0)
DELETE FROM UserAccounts
DBCC CHECKIDENT (UserAccounts, RESEED, 0)
DELETE FROM Containers
DBCC CHECKIDENT (Containers, RESEED, 0)

INSERT INTO Containers
	([Name], Capacity)
VALUES
	('Backpack', '90'),
	('Chest', '250'),
	('Himself', '250')


INSERT INTO UserAccounts
	(Mail,LastName,FirstName,[Login],[Password])
-- INSERT INTO student(student_id, first_name, last_name, birth_date, section_id, year_result, course_id)
VALUES
	('truc@machin.com', 'Luc', 'Skywalker', 'LSK', '1234'),
	('essay@bidule.com', 'John', 'Doe', 'JDO', '4657'),
	('tentative@email.com', 'Star', 'Lord', 'SLO', 'totolepabo94'),
	('lautre@adress.com', 'Tira', 'Missou', 'TMI', '0x3328D6655E798DE4F'),
	('test@mail.com', 'Jean', 'Neymar', 'JNE', 'password')




INSERT INTO Heroes
	(UserAccount,
	[Name],
	FirstName,
	Gender,
	Race,
	Experience,
	[Level],
	Health,
	Strength,
	Dexterity,
	Constitution,
	Intelligence,
	Wisdom,
	Charisma)
VALUES
	('1',
		'Gandoulf',
		'Legris',
		'Male',
		'Humain',
		'1456',
		'3',
		'100',
		'8',
		'12',
		'10',
		'18',
		'17',
		'16'),
	('1',
		'Saké',
		'Frodon',
		'Male',
		'hobit',
		'1456',
		'3',
		'100',
		'8',
		'12',
		'10',
		'18',
		'17',
		'16'),
	('2',
		'Vodar',
		'Dark',
		'Male',
		'Humain',
		'1456',
		'3',
		'100',
		'8',
		'12',
		'10',
		'18',
		'17',
		'16'),
	('3',
		'Lucky',
		'Ducky',
		'Male',
		'Humain',
		'1456',
		'3',
		'100',
		'8',
		'12',
		'10',
		'18',
		'17',
		'16'),
	('4',
		'Himmelswanderer',
		'Yennakin',
		'Male',
		'Humain',
		'1456',
		'3',
		'100',
		'8',
		'12',
		'10',
		'18',
		'17',
		'16')

