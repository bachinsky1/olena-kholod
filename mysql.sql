-- --------------------------------------------------------
-- Сервер:                       127.0.0.1
-- Версія сервера:               5.7.39 - MySQL Community Server (GPL)
-- ОС сервера:                   Win64
-- HeidiSQL Версія:              12.3.0.6589
-- --------------------------------------------------------

-- Dumping structure for таблиця olena.categories
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table olena.categories: ~2 rows (приблизно)
DELETE FROM `categories`;
INSERT INTO `categories` (`id`, `name`) VALUES
	(1, 'Laptops'),
	(2, 'Tablets'),
	(3, 'Smartphones');

-- Dumping structure for таблиця olena.goods
DROP TABLE IF EXISTS `goods`;
CREATE TABLE IF NOT EXISTS `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(512) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `price` float NOT NULL,
  `count` int(11) NOT NULL DEFAULT '0',
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_goods_categories` (`category_id`),
  CONSTRAINT `FK_goods_categories` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table olena.goods: ~14 rows (приблизно)
DELETE FROM `goods`;
INSERT INTO `goods` (`id`, `name`, `description`, `price`, `count`, `date`, `category_id`) VALUES
	(1, 'Apple MacBook A1534 12"', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus quam ac erat consectetur, ultricies pretium metus interdum. Ut vel finibus nisl, eget eleifend lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse et eu.', 1593, 10, '2023-05-16 07:56:47', 1),
	(2, 'Sony Vaio Flip 15', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus, enim quis scelerisque maximus, velit neque hendrerit mauris, vel consectetur leo ex vitae urna. Aliquam sodales elit vitae odio molestie mollis. Vestibulum a efficitur ex vestibulum.', 1074, 5, '2023-05-16 07:57:12', 1),
	(3, 'Lenovo Yoga 3 Pro', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at cursus purus. Nunc sapien arcu, faucibus a condimentum vitae, posuere in nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur pharetra lectus.', 1449.36, 7, '2023-05-16 07:57:39', 1),
	(4, 'Lenovo Yoga 3 Pro', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin vel tortor vitae aliquet. Sed volutpat tincidunt odio sed posuere. Maecenas ultricies nibh vel tempor blandit. Pellentesque ac enim libero. Sed et dignissim justo. Nam accumsan.', 1119, 0, '2023-05-16 07:58:19', 1),
	(5, 'Xiaomi Mi Pad 64Gb Wi-Fi', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac facilisis velit. Nunc imperdiet vestibulum ex, sit amet varius erat porttitor a. Proin vestibulum, lorem nec luctus feugiat, elit dolor euismod nunc, sed congue nibh metus ac ligula sapien.', 178, 0, '2023-05-16 07:58:50', 2),
	(6, 'enovo Yoga Tablet 3-X50 10" 2/16Gb LTE (ZA0K0025UA) Black', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim porta efficitur. Nullam et dui diam. Phasellus sem erat, congue et tempor sit amet, ullamcorper quis orci. Class aptent taciti sociosqu ad litora torquent per conubia egestas.', 296, 6, '2023-05-16 07:59:18', 2),
	(7, 'Lenovo Tab3 7 Essential 710F Wi-Fi 8Gb', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis ante condimentum varius lobortis. Integer ex augue, mollis sit amet nibh sed, iaculis molestie urna. Integer euismod laoreet nibh, vel fermentum enim efficitur venenatis. Nam accumsan.', 85, 2, '2023-05-16 07:59:49', 2),
	(8, 'Alcatel Onetouch GO Watch One Size', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in tincidunt massa. Suspendisse auctor nec nisi et dignissim. Nunc eget ligula sem. Aliquam nec urna ultricies, aliquet nisi ac, mollis nunc. Aliquam commodo maximus risus, vehicula mollis duis.', 180, 3, '2023-05-16 08:00:17', 2),
	(9, 'Huawei 42mm Stainless Steel', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in ligula accumsan, varius urna ac, dictum sem. Nullam ac sem non velit feugiat egestas. Etiam ut mauris nec ex tincidunt vulputate id consectetur diam. Curabitur at lacus enim. Nulla porta ante.', 370, 4, '2023-05-16 08:00:43', 3),
	(10, 'Apple Watch Series 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus sollicitudin lorem eget varius. Nullam condimentum diam eget tincidunt suscipit. Mauris consequat tempor turpis cursus dignissim. Duis luctus sagittis sapien non rhoncus orci aliquam.', 458.7, 2, '2023-05-16 08:01:27', 3),
	(11, 'Xiaomi Mi6', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec neque sem. Nulla volutpat, nisi ac convallis tincidunt, neque ex lobortis tortor, sit amet commodo ex orci a arcu. Proin sagittis feugiat accumsan. Pellentesque sollicitudin nunc molestie.', 480, 1, '2023-05-16 08:01:54', 3),
	(12, 'Apple iPhone 8 Plus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus sem. Fusce in tortor magna. Suspendisse facilisis neque id arcu elementum, ac finibus elit convallis. Cras fringilla, neque non dapibus porta, eros erat tempor libero, et porta tellus.', 1151.7, 2, '2023-05-16 08:02:25', 3),
	(13, 'Samsung Galaxy A8', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin massa tellus, fringilla in nisi in, ullamcorper pretium lectus. Praesent nunc tellus, eleifend eu risus id, tristique bibendum augue. Curabitur velit sem, malesuada vulputate dapibus in fusce.', 555, 8, '2023-05-16 08:02:56', 3),
	(14, 'Samsung Galaxy S7 Duos', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum luctus nunc, quis posuere ipsum commodo nec. In imperdiet massa porta ante vehicula, at tincidunt eros facilisis. Pellentesque purus magna, consectetur ut lobortis et, volutpat ac.', 700, 4, '2023-05-16 08:03:21', 3);

