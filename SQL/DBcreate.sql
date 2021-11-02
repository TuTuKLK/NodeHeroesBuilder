CREATE DATABASE [BuilderHeroes];

USE [BuilderHeroes];
GO

CREATE TABLE UserAccount (
    UserID INTEGER PRIMARY KEY IDENTITY(1,1),
	Mail VARCHAR(64),
    [LastName] VARCHAR(50),
    [FirstName] VARCHAR(50),
    [Login] VARCHAR(50) UNIQUE NOT NULL,
    [Password] VARBINARY(32) NOT NULL	
)


GO

CREATE TABLE Heroes (
    HeroeID INTEGER PRIMARY KEY IDENTITY(1,1),
    UserAccount INTEGER Foreign KEY REFERENCES Account (UserID),
    [Name] VARCHAR(50) NOT NULL,
    FirstName VARCHAR(50),
    Gender VARCHAR(50),
    Race VARCHAR(50),
    Experience INTEGER,
    [Level] INTEGER,
    Health INTEGER,
    Strength INTEGER,
    Dexterity INTEGER,
    Constitution INTEGER,
    Intelligence INTEGER,
    Wisdom INTEGER,
    Charisma INTEGER
)

GO

CREATE TABLE Containers(
    ContainerID INTEGER PRIMARY KEY IDENTITY(1,1),
    [Name] VARCHAR(50) NOT NULL,
    Capacity INTEGER
)

GO

CREATE TABLE Items (
    ItemID INTEGER PRIMARY KEY IDENTITY(1,1),
    [Type] VARCHAR(50) NOT NULL,
    [Name] VARCHAR(50) NOT NULL,
    [Weight] INTEGER,
    Amount INTEGER
)

GO


CREATE TABLE ItemContain (
    ItemID INTEGER Foreign KEY REFERENCES Items (ItemID),
    HeroeID INTEGER Foreign KEY REFERENCES Heroes (HeroeID),
    ContainerID INTEGER Foreign KEY REFERENCES Containers (ContainerID) NULL,
    Amount INTEGER
)

