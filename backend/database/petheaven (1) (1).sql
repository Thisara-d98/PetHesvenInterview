-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 11, 2022 at 06:16 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `petheaven`
--

-- --------------------------------------------------------

--
-- Table structure for table `adoptee`
--

CREATE TABLE `adoptee` (
  `adopteeID` int(11) NOT NULL,
  `petID` int(11) NOT NULL,
  `adopterID` int(11) NOT NULL,
  `adoptedDate` date NOT NULL,
  `adoptedAge` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `adopter`
--

CREATE TABLE `adopter` (
  `adopterID` int(10) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `dob` date NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `vkey` varchar(100) NOT NULL,
  `verified` int(11) NOT NULL DEFAULT 0,
  `income` float NOT NULL,
  `adoptees` varchar(100) NOT NULL,
  `kids` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `adopterdetails`
--

CREATE TABLE `adopterdetails` (
  `adopterID` varchar(255) NOT NULL,
  `yourname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `adoptrequests`
--

CREATE TABLE `adoptrequests` (
  `RequestID` int(11) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `phonenumber` varchar(10) NOT NULL,
  `income` int(11) NOT NULL,
  `isanyPet` varchar(255) NOT NULL,
  `typeofPet` varchar(255) NOT NULL,
  `kidsinHome` varchar(255) NOT NULL,
  `additionalDetails` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `adoptrequests`
--

INSERT INTO `adoptrequests` (`RequestID`, `fullname`, `phonenumber`, `income`, `isanyPet`, `typeofPet`, `kidsinHome`, `additionalDetails`) VALUES
(1, 'Isuru Sampath', '0776551234', 65000, '1', '1', '1', 'Friendly environment for animals'),
(2, 'Lahiru Sampath', '0781778990', 125000, '1', '1', '1', 'take care of pet'),
(25, 'Tachini nusharee', '0765832274', 760000, '2', '3', '1', 'we are friendly family'),
(26, 'Manuka dewanarayana', '0705541234', 260000, '1', '1', '2', 'town home'),
(27, 'Sandaruwan Gamage ss', '0412256780', 90000, '1', '2', '2', 'Kind family'),
(28, 'Nuwan gunawardana', '0754321129', 89000, '1', '2', '1', 'Village home with play space'),
(29, 'Tharindu Dilshan', '0714521877', 35000, '1', '2', '2', 'Kind family for animals'),
(30, 'tharinduwa', '0765543111', 56000, '1', '1', '1', 'friendly'),
(31, '', '', 0, '1', '1', '1', '');

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `appoinmentID` int(11) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phonenumber` varchar(255) NOT NULL,
  `petname` varchar(255) NOT NULL,
  `symptoms` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `calander`
--

CREATE TABLE `calander` (
  `calanderID` int(11) NOT NULL,
  `apointmentID` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `checkadopter`
--

CREATE TABLE `checkadopter` (
  `RequestID` int(11) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `phonenumber` varchar(255) NOT NULL,
  `income` int(11) NOT NULL,
  `isanyPet` varchar(255) NOT NULL,
  `additionalDetails` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `checkadopter`
--

INSERT INTO `checkadopter` (`RequestID`, `fullname`, `phonenumber`, `income`, `isanyPet`, `additionalDetails`) VALUES
(1, 'thisara hewage', '0765505177', 23450, '', 'No pets in home'),
(2, 'tharindu hewagamage', '0723778991', 78000, '', 'We have enough space for pets'),
(3, 'tharindu hewagamage', '0723778991', 78000, '', 'We have enough space for pets'),
(14, 'sandu silva', '0705505177', 55000, '[object Object]', 'no '),
(15, 'sandusi silva', '0705505177', 55000, '[object Object]', 'things are complicated'),
(16, 'samantha', '0774358900', 70000, '[object Object]', 'nope'),
(17, 'Kamal selvan', '0416672333', 38000, '[object Object]', 'Have all facilities needed for pets'),
(18, 'Ajith silva', '0752309866', 45000, '[object Object]', 'no details'),
(19, 'thisa', '5678', 23000, '[object Object]', 'hiii'),
(20, 'hedrick', 'khan', 345000, '[object Object]', 'nothing'),
(21, 'Asitha kavinda Muthumala', '0765511786', 120000, '', 'Friendly environment');

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `doctorID` int(11) NOT NULL,
  `NIC` varchar(20) NOT NULL,
  `address` varchar(100) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `qualification` varchar(255) NOT NULL,
  `lisence` varchar(50) NOT NULL,
  `User_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`doctorID`, `NIC`, `address`, `mobile`, `fullname`, `qualification`, `lisence`, `User_ID`) VALUES
(3, '854165778V', '23/A,Kotte road,Rajagiriya', '0701234567', 'JanakaSri', 'MBBS-Pera', '2014/Vet/001', 17);

-- --------------------------------------------------------

--
-- Table structure for table `donation`
--

CREATE TABLE `donation` (
  `donationID` int(11) NOT NULL,
  `donator` varchar(100) NOT NULL,
  `date` date NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp(),
  `amount` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `empID` int(10) NOT NULL,
  `NIC` varchar(12) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `dob` date NOT NULL,
  `email` varchar(100) NOT NULL,
  `empType` varchar(25) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `equipment`
--

CREATE TABLE `equipment` (
  `equipID` int(11) NOT NULL,
  `storeID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `about` varchar(255) CHARACTER SET utf8 NOT NULL,
  `quantity` int(10) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feedbackID` int(11) NOT NULL,
  `comment` int(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `inquiry`
--

CREATE TABLE `inquiry` (
  `inquiryID` int(11) NOT NULL,
  `adopterID` int(11) NOT NULL,
  `message` int(255) NOT NULL,
  `type` int(20) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `log`
--

CREATE TABLE `log` (
  `logID` int(11) NOT NULL,
  `loggedTime` time NOT NULL,
  `loggedOutTime` time NOT NULL,
  `date` date NOT NULL,
  `userID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `medicalstatus`
--

CREATE TABLE `medicalstatus` (
  `medID` int(11) NOT NULL,
  `petID` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `details` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `medicine`
--

CREATE TABLE `medicine` (
  `medicineID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` float NOT NULL,
  `description` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `storeID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `medorder`
--

CREATE TABLE `medorder` (
  `medorderID` int(11) NOT NULL,
  `presID` int(11) NOT NULL,
  `doctorID` int(11) NOT NULL,
  `patientID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `notificationID` int(11) NOT NULL,
  `adopterID` int(11) NOT NULL,
  `message` int(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `orderID` int(11) NOT NULL,
  `itemID` int(11) NOT NULL,
  `quantity` int(10) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `patientID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `age` varchar(50) NOT NULL,
  `weight` varchar(50) NOT NULL,
  `adopterID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `paymentID` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `amount` float NOT NULL,
  `orderID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `pet`
--

CREATE TABLE `pet` (
  `petID` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `image` blob NOT NULL,
  `type` varchar(10) NOT NULL,
  `breed` varchar(50) NOT NULL,
  `color` varchar(50) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `age` varchar(50) NOT NULL,
  `about` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `receivedate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pet`
--

INSERT INTO `pet` (`petID`, `name`, `image`, `type`, `breed`, `color`, `gender`, `age`, `about`, `status`, `receivedate`) VALUES
(16, 'navi', 0x433a5c66616b65706174685c7374726179646f672e6a7067, 'Dog', 'redwet', 'black', 'Female', '3 yrs', 'Good anime', 1, '2021-03-11'),
(17, 'Roy', 0x433a5c66616b65706174685c7765626170702e6a7067, 'Cat', 'Kitten', 'Red', 'Male', '2 yrs', 'Great', 1, '2021-03-11'),
(18, 'Huyya', 0x433a5c66616b65706174685c61646d696e2075736563617365202831292e6a7067, 'Dog', 'Boxer', 'Brown White', 'Female', '3 years', 'friendly animal ', 1, '2021-03-11'),
(22, 'Kura', 0x433a5c66616b65706174685c7374726179646f672e6a7067, 'Cat', 'mixed', 'black and white', 'Female', '2 years', 'Beautiful animal', 1, '2021-03-11'),
(23, '', '', 'Dog', '', '', 'Male', '', '', 1, '2021-03-11'),
(24, 'sasz', 0x433a5c66616b65706174685c7374726179646f672e6a7067, 'Dog', 'pomenarian', 'brown', 'Male', '3 years', 'no about', 1, '2021-03-11'),
(25, '', '', 'Dog', '', '', 'Male', '', '', 1, '2021-03-11'),
(26, '', '', 'Dog', '', '', 'Male', '', '', 1, '2021-03-11'),
(27, '', '', 'Dog', '', '', 'Male', '', '', 1, '2021-03-11'),
(28, '', '', 'Dog', '', '', 'Male', '', '', 1, '2021-03-11'),
(29, '', '', 'Dog', '', '', 'Male', '', '', 1, '2021-03-11'),
(30, '', '', 'Dog', '', '', 'Male', '', '', 1, '2021-03-11');

-- --------------------------------------------------------

--
-- Table structure for table `petpost`
--

CREATE TABLE `petpost` (
  `petID` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `pettoolstore`
--

CREATE TABLE `pettoolstore` (
  `Toolstore_ID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `number` varchar(11) NOT NULL,
  `Street` varchar(255) NOT NULL,
  `City` varchar(255) NOT NULL,
  `User_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pettoolstore`
--

INSERT INTO `pettoolstore` (`Toolstore_ID`, `name`, `number`, `Street`, `City`, `User_ID`) VALUES
(1, 'Paw Baw Fairy Store', '77', 'Kolonnawa Road', 'Gothatuwa', 20);

-- --------------------------------------------------------

--
-- Table structure for table `pharmacy`
--

CREATE TABLE `pharmacy` (
  `Pharmacy_ID` int(11) NOT NULL,
  `User_ID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Number` varchar(255) NOT NULL,
  `Street` varchar(255) NOT NULL,
  `City` varchar(255) NOT NULL,
  `Registration_number` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pharmacy`
--

INSERT INTO `pharmacy` (`Pharmacy_ID`, `User_ID`, `Name`, `Number`, `Street`, `City`, `Registration_number`) VALUES
(1, 21, 'Aradhana Pharmacy', '20/A', 'Nugegoda Rd', 'Pitakotte', '2012/Med/PH/001');

-- --------------------------------------------------------

--
-- Table structure for table `prescription`
--

CREATE TABLE `prescription` (
  `presID` int(11) NOT NULL,
  `patientID` int(11) NOT NULL,
  `medicine` varchar(255) NOT NULL,
  `dosage` varchar(100) NOT NULL,
  `duration` varchar(50) NOT NULL,
  `doctorID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `store`
--

CREATE TABLE `store` (
  `storeID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `registerno` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `type` varchar(20) CHARACTER SET utf8 NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `contact` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `User_ID` int(10) NOT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `Email` varchar(500) DEFAULT NULL,
  `User_name` varchar(500) DEFAULT NULL,
  `User_type` varchar(20) DEFAULT NULL,
  `Email_verify` tinyint(1) NOT NULL DEFAULT 0,
  `Email_verify_token` text NOT NULL,
  `Profole_picture` varchar(1024) NOT NULL,
  `is_deleted` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`User_ID`, `Password`, `Email`, `User_name`, `User_type`, `Email_verify`, `Email_verify_token`, `Profole_picture`, `is_deleted`) VALUES
(1, '$2b$10$o2j2sFq4RRWWXiaxxj0wDODkhoQ54rt.yIaToS2jSBdnjJmrS/I4e', 'sandaruwangamage0825@gmail.com', 'Sandaruwan', 'Doctor', 1, 'sandaruwangamage', 'sandaruwangamagenjhyu', 0),
(8, '$2b$10$6yUlhFVe8lN9pCxz9DjfVeNfLjlcnCsFco0cMPpLb1ijTUbPiiixe', 'sandaruwangamage1997@gmail.com', 'Sandaruwan', 'Doctor', 1, '70f62a0f6ad04f32107f276cfdce7fd7baea331fcc788e179ede721228d46e178b758e03beac26c01a3fac88b602d83557c3d50676d41a1ac29d6f21d74691a8', 'sandaruwangamagenjhyu', 0),
(14, '$2b$10$81mp1EOE62frEHnwtegMlOjcGzDpC/7txELy3oLcB6qpzU8JqqlxG', 'sandaruwangamagegs@gmail.com', 'Kumar', 'Pet adopter', 1, '7660304bb2d00233cab43cb07989507ed18767cf962e730b5dd70927b75f2356389ce744d98da2dcfbcbc3b88859ca6c6a954ec5e7c397443b1e230b74d09385', 'huytgfertewaskio', 0),
(16, '$2b$10$D.P1jdJ8tkbY5WdPC5/VyeFDDa.MJ7PHhuqxjKu.9QweVB/2zPDt2', 'thisarad582@gmail.com', 'Thisara', 'Pet Adopter', 127, '958307e55d26de4a0eae15c5cf05b9e733f30ebed0e06f3859b7d4dd810fd386e9a071ddcf9813ec8d52d5bfa2415164c54664209b1fee92c07cad769c68e301', 'Thisara', 0),
(17, '$2b$10$PHByZAxaTEv4DrXPRKlHIusf5wkSNtSKwEQCZUCDIMO7LJkToE/EG', 'srimaljanaka@gmail.com', 'JanakaSri', 'Doctor', 6, '6df2d0328ace46daad7541430d33941ccc6da1e58b1c987c8de23bda15262dc910f1fa9084b1405284109b080bf2ede3157b8b69be378798a9bb85cae63f8b7b', 'JanakaSri', 0),
(18, '$2b$10$gLrvxxY9z5WfzagPLm3ggOj9dAjVza0Ftvm50HNdD.Z/wOtYRTPnK', 'sasi@gmail.com', 'sasi', 'Admin', 0, 'd4ca0999c6d77cf5c89bd1f1a67314fd006649c1537bd165fb18b37095cc110f3a1ac25aca82d3af69b115e8da961f627ab51009aa0e27f7d3bdcc6ceeb67471', 'sasi', 0),
(19, '$2b$10$/a6cLeA2pqtVKLY1Or.4Eu0wTu0ceECJ3Sip32XdnE/1f8rU7UyRO', 'manu@gmail.com', 'Manuka', 'Pet Adopter', 0, 'a18eddb57877f79e14934921d224163155d8a2275f420417aa68324e53e9d88d78589b9d9fba661ee2e2792355820a2dd511e7f14407bc5d1296b3271b648309', 'Manuka', 0),
(20, '$2b$10$7v84XvEK9neD3jzDSCuc7OrV6jSoPf3r.tUGUncF092m01IcFZEie', 'sandaruwangamagenu@gmail.com', 'Sandaruwan', 'Pet Tool Store', 22, '22ffa316ee33c07cea33c9e84518ac670a6e22e0710e307625483fb160b64bdee5d471e9a7c8b02a48c7b0c3b3483075c4051629b297c4ecd26f489e642a0f52', 'Sandaruwan', 0),
(21, '$2b$10$FBmZ.ew2mXfiFFR65fPiY.toV.voftyjsGnjSPjIKPTPbyARol.fe', 'sandaruwangamageggss@gmail.com', 'Aradhana', 'pharmacy', 127, '505a2799ee1d73b81fe7dca680a86a94f40974ed8adfd29e4661d30c912b3679b0e4e396d37e3da0d058871a453317d7028860568bb4d2c9097c6906e41a47ed', 'Aradhana', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adoptee`
--
ALTER TABLE `adoptee`
  ADD PRIMARY KEY (`adopteeID`);

--
-- Indexes for table `adopter`
--
ALTER TABLE `adopter`
  ADD PRIMARY KEY (`adopterID`);

--
-- Indexes for table `adoptrequests`
--
ALTER TABLE `adoptrequests`
  ADD PRIMARY KEY (`RequestID`);

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`appoinmentID`);

--
-- Indexes for table `calander`
--
ALTER TABLE `calander`
  ADD PRIMARY KEY (`calanderID`);

--
-- Indexes for table `checkadopter`
--
ALTER TABLE `checkadopter`
  ADD PRIMARY KEY (`RequestID`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`doctorID`),
  ADD KEY `User_ID` (`User_ID`);

--
-- Indexes for table `donation`
--
ALTER TABLE `donation`
  ADD PRIMARY KEY (`donationID`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`empID`);

--
-- Indexes for table `equipment`
--
ALTER TABLE `equipment`
  ADD PRIMARY KEY (`equipID`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedbackID`);

--
-- Indexes for table `inquiry`
--
ALTER TABLE `inquiry`
  ADD PRIMARY KEY (`inquiryID`);

--
-- Indexes for table `log`
--
ALTER TABLE `log`
  ADD PRIMARY KEY (`logID`);

--
-- Indexes for table `medicalstatus`
--
ALTER TABLE `medicalstatus`
  ADD PRIMARY KEY (`medID`);

--
-- Indexes for table `medicine`
--
ALTER TABLE `medicine`
  ADD PRIMARY KEY (`medicineID`);

--
-- Indexes for table `medorder`
--
ALTER TABLE `medorder`
  ADD PRIMARY KEY (`medorderID`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`notificationID`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`orderID`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`patientID`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`paymentID`);

--
-- Indexes for table `pet`
--
ALTER TABLE `pet`
  ADD PRIMARY KEY (`petID`);

--
-- Indexes for table `petpost`
--
ALTER TABLE `petpost`
  ADD PRIMARY KEY (`petID`);

--
-- Indexes for table `pettoolstore`
--
ALTER TABLE `pettoolstore`
  ADD PRIMARY KEY (`Toolstore_ID`),
  ADD KEY `User_ID` (`User_ID`);

--
-- Indexes for table `pharmacy`
--
ALTER TABLE `pharmacy`
  ADD PRIMARY KEY (`Pharmacy_ID`);

--
-- Indexes for table `prescription`
--
ALTER TABLE `prescription`
  ADD PRIMARY KEY (`presID`);

--
-- Indexes for table `store`
--
ALTER TABLE `store`
  ADD PRIMARY KEY (`storeID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`User_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adoptee`
--
ALTER TABLE `adoptee`
  MODIFY `adopteeID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `adopter`
--
ALTER TABLE `adopter`
  MODIFY `adopterID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `adoptrequests`
--
ALTER TABLE `adoptrequests`
  MODIFY `RequestID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `appoinmentID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `calander`
--
ALTER TABLE `calander`
  MODIFY `calanderID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `checkadopter`
--
ALTER TABLE `checkadopter`
  MODIFY `RequestID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `doctorID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `donation`
--
ALTER TABLE `donation`
  MODIFY `donationID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `empID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `equipment`
--
ALTER TABLE `equipment`
  MODIFY `equipID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedbackID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inquiry`
--
ALTER TABLE `inquiry`
  MODIFY `inquiryID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `log`
--
ALTER TABLE `log`
  MODIFY `logID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `medicalstatus`
--
ALTER TABLE `medicalstatus`
  MODIFY `medID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `medicine`
--
ALTER TABLE `medicine`
  MODIFY `medicineID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `medorder`
--
ALTER TABLE `medorder`
  MODIFY `medorderID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `notificationID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `orderID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `patientID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `paymentID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pet`
--
ALTER TABLE `pet`
  MODIFY `petID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `petpost`
--
ALTER TABLE `petpost`
  MODIFY `petID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pettoolstore`
--
ALTER TABLE `pettoolstore`
  MODIFY `Toolstore_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pharmacy`
--
ALTER TABLE `pharmacy`
  MODIFY `Pharmacy_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `prescription`
--
ALTER TABLE `prescription`
  MODIFY `presID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `store`
--
ALTER TABLE `store`
  MODIFY `storeID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `User_ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `doctor`
--
ALTER TABLE `doctor`
  ADD CONSTRAINT `doctor_ibfk_1` FOREIGN KEY (`User_ID`) REFERENCES `user` (`User_ID`);

--
-- Constraints for table `pettoolstore`
--
ALTER TABLE `pettoolstore`
  ADD CONSTRAINT `pettoolstore_ibfk_1` FOREIGN KEY (`User_ID`) REFERENCES `user` (`User_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
