DROP DATABASE catpdb;
CREATE DATABASE catpdb;
use catpdb;

-- CREATE TABLE [테이블명]([물리테이블]);
-- SELECT * FROM [테이블명]

-- CREATE VIEW view_plist AS
-- (SELECT [칼럼명1] as [별명2], [칼럼명2] as [별명2], [칼럼명3] as [별명4], [칼럼명5] as [별명5]
-- FROM [테이블명1]
-- 	LEFT JOIN [테이블명2]
-- 		ON [동일값칼럼1(칼럼1)] = [동일값칼럼2(칼럼5)]
-- ORDER BY [칼럼1]);

-- 외래키 설정
-- ALTER TABLE (테이블명)
-- ADD CONSTRAINT FK_PSEQ
-- FOREIGN KEY (p_fseq)
-- REFERENCES tbl_fridge(f_seq);


CREATE TABLE tbl_user(
u_seq	INT	AUTO_INCREMENT	PRIMARY KEY,
u_id	VARCHAR(35)	NOT NULL	,
u_pw	VARCHAR(255)	NOT NULL	,
u_name	VARCHAR(35)	NOT NULL	,
u_image	VARCHAR(255)		,
u_best	INT		,
u_coin	INT		,
u_fish	INT		,
u_role	VARCHAR(35)		,
u_level	INT	NOT NULL	,
u_exp	INT		);

CREATE TABLE tbl_score(
s_seq	INT	AUTO_INCREMENT	PRIMARY KEY,
s_score	INT	NOT NULL	,
s_useq	INT	NOT NULL	);

CREATE TABLE tbl_bag(
b_seq	INT	AUTO_INCREMENT	PRIMARY KEY,
b_iseq	VARCHAR(125)	NOT NULL	,
b_iname	VARCHAR(125)	NOT NULL	,
b_quan	INT	NOT NULL	,
b_iimage	VARCHAR(225)		,
b_imanual	VARCHAR(225)		,
b_useq	INT	NOT NULL	);

SELECT * FROM tbl_cat;
CREATE TABLE tbl_cat(
c_seq	INT	AUTO_INCREMENT	PRIMARY KEY,
c_level	INT	NOT NULL	,
c_exp	INT		,
c_image	VARCHAR(225)		,
c_image1	VARCHAR(225)		,
c_image2	VARCHAR(225)		,
c_image3	VARCHAR(225)		,
c_image4	VARCHAR(225)		,
c_image5	VARCHAR(225)		,
c_image6	VARCHAR(225)		,
c_ox	INT		,
c_useq	INT	NOT NULL	);
CREATE TABLE tbl_friends(
f_seq	INT	AUTO_INCREMENT	PRIMARY KEY,
f_fuseq	INT	NOT NULL	,
f_ulevel	INT	NOT NULL	,
u_best	INT		,
f_ox	INT		,
f_useq	INT	NOT NULL	);
CREATE TABLE tbl_achieve(
a_seq	INT	AUTO_INCREMENT	PRIMARY KEY,
a_name	VARCHAR(125)	NOT NULL	,
a_quan	INT		,
a_ox	INT		,
a_useq	INT	NOT NULL	);
CREATE TABLE tbl_item(
i_seq	INT	AUTO_INCREMENT PRIMARY KEY,
i_name	VARCHAR(125)	NOT NULL,
i_manual	VARCHAR(225)	,
i_image	VARCHAR(225)	);