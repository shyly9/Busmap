-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th5 18, 2023 lúc 05:15 PM
-- Phiên bản máy phục vụ: 8.0.31
-- Phiên bản PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `busmap`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `t1`
--

DROP TABLE IF EXISTS `t1`;
CREATE TABLE IF NOT EXISTS `t1` (
  `STT` int NOT NULL,
  `matram` varchar(4) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`STT`),
  KEY `matram` (`matram`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `t1`
--

INSERT INTO `t1` (`STT`, `matram`) VALUES
(1, 'B001'),
(2, 'B002'),
(3, 'B003'),
(4, 'B004'),
(5, 'B005'),
(6, 'B006'),
(7, 'B007'),
(8, 'B008'),
(9, 'B009'),
(10, 'B010'),
(11, 'B011'),
(12, 'B012'),
(13, 'B013'),
(14, 'B014'),
(15, 'B015'),
(16, 'B016'),
(17, 'B017'),
(18, 'B018'),
(19, 'B019'),
(20, 'B020'),
(21, 'B021'),
(22, 'B022'),
(23, 'B023'),
(24, 'B024'),
(25, 'B025'),
(26, 'B026'),
(27, 'B027'),
(28, 'B028'),
(29, 'B029'),
(30, 'B030'),
(31, 'B031'),
(32, 'B032'),
(33, 'B033'),
(34, 'B034'),
(35, 'B035'),
(36, 'B036'),
(37, 'B037'),
(38, 'B038');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `t2`
--

DROP TABLE IF EXISTS `t2`;
CREATE TABLE IF NOT EXISTS `t2` (
  `STT` int NOT NULL,
  `matram` varchar(4) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`STT`),
  KEY `matram` (`matram`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `t4`
--

DROP TABLE IF EXISTS `t4`;
CREATE TABLE IF NOT EXISTS `t4` (
  `STT` int NOT NULL,
  `matram` varchar(4) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`STT`),
  KEY `matram` (`matram`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `t6`
--

DROP TABLE IF EXISTS `t6`;
CREATE TABLE IF NOT EXISTS `t6` (
  `STT` int NOT NULL,
  `matram` varchar(4) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`STT`),
  KEY `matram` (`matram`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `t7`
--

DROP TABLE IF EXISTS `t7`;
CREATE TABLE IF NOT EXISTS `t7` (
  `STT` int NOT NULL,
  `matram` varchar(4) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`STT`),
  KEY `matram` (`matram`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `t8`
--

DROP TABLE IF EXISTS `t8`;
CREATE TABLE IF NOT EXISTS `t8` (
  `STT` int NOT NULL,
  `matram` varchar(4) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`STT`),
  KEY `matram` (`matram`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `t11`
--

DROP TABLE IF EXISTS `t11`;
CREATE TABLE IF NOT EXISTS `t11` (
  `STT` int NOT NULL,
  `matram` varchar(4) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`STT`),
  KEY `matram` (`matram`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `t12`
--

DROP TABLE IF EXISTS `t12`;
CREATE TABLE IF NOT EXISTS `t12` (
  `STT` int NOT NULL,
  `matram` varchar(4) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`STT`),
  KEY `matram` (`matram`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tramxebuyt`
--

DROP TABLE IF EXISTS `tramxebuyt`;
CREATE TABLE IF NOT EXISTS `tramxebuyt` (
  `matram` varchar(4) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tentram` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lat` float NOT NULL,
  `lng` float NOT NULL,
  PRIMARY KEY (`matram`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tramxebuyt`
--

INSERT INTO `tramxebuyt` (`matram`, `tentram`, `lat`, `lng`) VALUES
('B001', 'Ngã 3 - Trần Quý Cáp - Trần Hưng Đạo', 13.7751, 109.233),
('B002', '278 Trần Hưng Đạo', 13.7771, 109.229),
('B003', 'Công an Trần Hưng Đạo', 13.7793, 109.225),
('B004', 'Sở Điện Lực', 13.7805, 109.223),
('B005', 'Cây xăng ông Tề', 13.7818, 109.221),
('B006', 'Liên đoàn lao động tỉnh', 13.7835, 109.217),
('B007', '792 Trần Hưng Đạo', 13.7846, 109.213),
('B008', 'Ngã 3 Tháp Đôi', 13.7856, 109.21),
('B009', 'Cầu Đôi', 13.7869, 109.205),
('B010', 'Ngã 3 Võ Thị Sáu - Trần Hưng Đạo', 13.7883, 109.199),
('B011', 'Ngã 3 Ông Thọ', 13.7896, 109.195),
('B012', 'XD Trung Hậu', 13.7914, 109.192),
('B013', 'Trạm xe khách Nhơn Phú', 13.7935, 109.189),
('B014', 'Trường Cao đẳng Bình Định', 13.7955, 109.182),
('B015', 'Tịnh xá Quan Âm', 13.7958, 109.174),
('B016', 'Bệnh viện tâm thần', 13.796, 109.169),
('B017', 'Công viên Long Vân', 13.7951, 109.164),
('B018', 'Ngã 3 Long Vân', 13.7941, 109.159),
('B019', 'Trường THPT Hùng Vương', 13.7939, 109.153),
('B020', 'Ngã 3 Phú Tài', 13.7937, 109.15),
('B021', 'Bến xe 2/9', 13.7901, 109.148),
('B022', 'Ngã 3 Hầm Dầu', 13.787, 109.148),
('B023', 'DN Duyên Hải', 13.7831, 109.148),
('B024', 'Ngã 3 Cây Duối', 13.7791, 109.149),
('B025', 'C.ty Quốc Thắng', 13.7748, 109.149),
('B026', 'Cà phê Hương Cau', 13.7695, 109.149),
('B027', 'Trường TH Bùi Thị Xuân', 13.7661, 109.15),
('B028', 'Chợ Phú Tài', 13.7641, 109.15),
('B029', 'Nhà thờ Phú Tài', 13.7604, 109.15),
('B030', 'Nghĩa trang Bùi Thị Xuân', 13.7565, 109.151),
('B031', 'C.ty Sơn Hải', 13.7532, 109.151),
('B032', 'C.ty COSEVCO', 13.7497, 109.151),
('B033', 'Ngã 4 Long Mỹ', 13.7454, 109.152),
('B034', 'Dốc ông Phật', 13.7385, 109.153),
('B035', 'Trường Lâm Nghiệp', 13.7321, 109.157),
('B036', 'Suối Dứa', 13.7291, 109.159),
('B037', 'Bến Bùi Thị Xuân', 13.7251, 109.16),
('B038', 'Suối Mơ', 13.7006, 109.176),
('B039', 'Chợ Lớn', 13.7728, 109.239),
('B040', '90 Tăng Bạt Hổ', 13.7732, 109.232),
('B041', '114 Tăng Bạc Hổ', 13.7733, 109.23),
('B042', '286 Lê Hồng Phong', 13.7756, 109.227),
('B043', '04 Nguyễn Thái Học', 13.7758, 109.223),
('B044', '162 Nguyễn Thái Học', 13.7723, 109.219),
('B045', '364 Nguyễn Thái Học', 13.7661, 109.215),
('B046', 'Doanh trại quân đội', 13.7634, 109.217),
('B047', 'Ngã 5 Ngô Mây', 13.7616, 109.22),
('B048', 'Trường ĐH Quy Nhơn', 13.7583, 109.219),
('B049', 'BV Quân Y 13', 13.7505, 109.215),
('B050', 'Bưu điện Lam Sơn', 13.7482, 109.214),
('B051', 'Ngã 4 Mai Hắc Đế', 13.7501, 109.212),
('B052', 'Bến xe Quy Nhơn', 13.7537, 109.21),
('B053', 'Ngã 5 Hồ Le', 13.7556, 109.208),
('B054', 'Nnghĩa trang liệt sĩ', 13.7583, 109.206),
('B055', 'Chợ Xóm Tiêu', 13.7622, 109.202),
('B056', 'C.ty cổ phần Vận Tải', 13.7654, 109.199),
('B057', 'Nhà máy ô tô - Mô tô', 13.7722, 109.188),
('B058', 'Vườn rau an toàn', 13.7791, 109.184),
('B059', 'C.ty nguyên liệu giấy', 13.7843, 109.18),
('B060', 'Xí nghiệp than đá', 13.79, 109.175),
('B061', 'Công viên Long Vân', 13.7942, 109.164);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `t1`
--
ALTER TABLE `t1`
  ADD CONSTRAINT `t1_ibfk_1` FOREIGN KEY (`matram`) REFERENCES `tramxebuyt` (`matram`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `t2`
--
ALTER TABLE `t2`
  ADD CONSTRAINT `t2_ibfk_1` FOREIGN KEY (`matram`) REFERENCES `tramxebuyt` (`matram`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `t4`
--
ALTER TABLE `t4`
  ADD CONSTRAINT `t4_ibfk_1` FOREIGN KEY (`matram`) REFERENCES `tramxebuyt` (`matram`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `t6`
--
ALTER TABLE `t6`
  ADD CONSTRAINT `t6_ibfk_1` FOREIGN KEY (`matram`) REFERENCES `tramxebuyt` (`matram`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `t7`
--
ALTER TABLE `t7`
  ADD CONSTRAINT `t7_ibfk_1` FOREIGN KEY (`matram`) REFERENCES `tramxebuyt` (`matram`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `t8`
--
ALTER TABLE `t8`
  ADD CONSTRAINT `t8_ibfk_1` FOREIGN KEY (`matram`) REFERENCES `tramxebuyt` (`matram`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `t11`
--
ALTER TABLE `t11`
  ADD CONSTRAINT `t11_ibfk_1` FOREIGN KEY (`matram`) REFERENCES `tramxebuyt` (`matram`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `t12`
--
ALTER TABLE `t12`
  ADD CONSTRAINT `t12_ibfk_1` FOREIGN KEY (`matram`) REFERENCES `tramxebuyt` (`matram`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
