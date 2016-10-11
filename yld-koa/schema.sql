DROP DATABASE IF EXISTS yld_koa;
###数据库
CREATE DATABASE IF NOT EXISTS yld_koa
  DEFAULT CHARSET utf8;
USE yld_koa;

#问题表
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

#评论表
CREATE TABLE `comment` (
  `id`          INT UNSIGNED         NOT NULL AUTO_INCREMENT,
  `content`     VARCHAR(255)         NOT NULL,
  `status`      ENUM ('1', '0')      NOT NULL,
  `type`        ENUM ('0', '1', '2') NOT NULL, # 类型：0，文字，1，图片，2，语音
  `price`       INT                  NOT NULL, # 价格，单位是分
  `user_id`     INT                  NOT NULL,
  `question_id` INT                  NOT NULL,
  `created_at`  DATETIME             NOT NULL,
  `updated_at`  DATETIME             NOT NULL,
  PRIMARY KEY ('id')
)
  ENGINE = innodb
  DEFAULT CHARACTER SET utf8;

#订单表
CREATE TABLE `order` (
  `id`          INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `status`      ENUM ('0', '1'), # 0：未支付， 1：已支付
  `user_id`     INT          NOT NULL,
  `question_id` INT          NOT NULL,
  `created_at`  DATETIME     NOT NULL,
  `updated_at`  DATETIME     NOT NULL,
  PRIMARY KEY (`id`)
)
  ENGINE = innodb
  DEFAULT CHARACTER SET utf8;

CREATE TABLE `user` (
  `id`         INT UNSIGNED            NOT NULL AUTO_INCREMENT,
  `sns_id`     INT UNSIGNED            NOT NULL,
  `sns_type`   ENUM ('wb', 'wx', 'qq') NOT NULL,
  `open_id`    VARCHAR(128)            NOT NULL,
  `nickname`   VARCHAR(64)             NOT NULL,
  `avatar`     VARCHAR(255)            NOT NULL,
  `created_at` DATETIME                NOT NULL,
  `updated_at` DATETIME                NOT NULL,
  PRIMARY KEY (`id`)
)
  ENGINE = innodb
  DEFAULT CHARACTER SET utf8;

INSERT INTO `question` VALUES (1, 'aaaa', '1', 1, now(), now());
INSERT INTO `question` VALUES (2, 'bbbb', '1', 1, now(), now());
INSERT INTO `question` VALUES (3, 'cccc', '1', 1, now(), now());