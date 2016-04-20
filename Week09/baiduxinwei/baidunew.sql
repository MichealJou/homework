/*
 Navicat MySQL Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50626
 Source Host           : localhost
 Source Database       : baidunew

 Target Server Type    : MySQL
 Target Server Version : 50626
 File Encoding         : utf-8

 Date: 04/20/2016 08:19:33 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `t_admin`
-- ----------------------------
DROP TABLE IF EXISTS `t_admin`;
CREATE TABLE `t_admin` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `sex` int(11) NOT NULL DEFAULT '1',
  `real_name` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `t_admin`
-- ----------------------------
BEGIN;
INSERT INTO `t_admin` VALUES ('1', 'admin', 'michaeljou@163.com', '1', '超级管理', 'e10adc3949ba59abbe56e057f20f883e');
COMMIT;

-- ----------------------------
--  Table structure for `t_category`
-- ----------------------------
DROP TABLE IF EXISTS `t_category`;
CREATE TABLE `t_category` (
  `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `cate_name` varchar(50) NOT NULL,
  `create_time` date DEFAULT NULL,
  `sort` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `t_category`
-- ----------------------------
BEGIN;
INSERT INTO `t_category` VALUES ('11', '推荐', '0000-00-00', '1'), ('12', '百家', '0000-00-00', '2'), ('13', '本地', '0000-00-00', '3'), ('15', '图片', '0000-00-00', '4'), ('16', '娱乐', '0000-00-00', '5'), ('17', '社会', '0000-00-00', '6'), ('18', '军事', '0000-00-00', '7'), ('19', '女人', '0000-00-00', '8'), ('20', '搞笑', '0000-00-00', '9'), ('23', '科技', '0000-00-00', '10');
COMMIT;

-- ----------------------------
--  Table structure for `t_category_info`
-- ----------------------------
DROP TABLE IF EXISTS `t_category_info`;
CREATE TABLE `t_category_info` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(40) NOT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `cate_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cate_id` (`cate_id`),
  CONSTRAINT `info_cate_id` FOREIGN KEY (`cate_id`) REFERENCES `t_category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `t_category_info`
-- ----------------------------
BEGIN;
INSERT INTO `t_category_info` VALUES ('5', '习近平：提高新闻舆论的传播力', '/Uploads/2016-02-22/56c9e2447a6e2.jpg', '中共中央总书记、国家主席、中央军委主席习近平19日在北京主持召开党的新闻舆论工作座谈会并发表重....', '0000-00-00 00:00:00', null, '11'), ('6', '证监会主席履新前一天在干啥', '/Uploads/2016-02-22/56c9e30e8d508.jpg', '在北京市通州区，身穿长款黑色大衣的刘士余接到通知，提前离开了在此间举行的行政副中心建设发展基金...', '0000-00-00 00:00:00', null, '11');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
