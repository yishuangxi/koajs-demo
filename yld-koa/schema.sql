DROP DATABASE IF EXISTS yld_koa;
###数据库
CREATE DATABASE IF NOT EXISTS yld_koa
  DEFAULT CHARSET utf8;
USE yld_koa;

CREATE TABLE `question` (
  `id`         INT UNSIGNED    NOT NULL AUTO_INCREMENT,
  `content`    VARCHAR(255)    NOT NULL,
  `status`     ENUM ('1', '0') NOT NULL,
  `user_id`    INT             NOT NULL,
  `created_at` DATETIME        NOT NULL,
  `updated_at` DATETIME        NOT NULL,
  PRIMARY KEY (`id`)
)
  ENGINE = innodb
  DEFAULT CHARACTER SET utf8;

INSERT INTO `question` VALUES (1, 'aaaa', '1', 1, now(), now());
INSERT INTO `question` VALUES (2, 'bbbb', '1', 1, now(), now());
INSERT INTO `question` VALUES (3, 'cccc', '1', 1, now(), now());