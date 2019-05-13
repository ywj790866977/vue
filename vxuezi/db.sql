create database web1806 charset=utf8;
use web1806;
create table xz_user(
    uid int primary key auto_increment,
    uname varchar(25),
    upwd varchar(32)

);
insert into xz_user values(
    null,'tom',md5('123')
);
create table xz_imagelist(
    id int primary key auto_increment,
    img_url varchar(255),
    title varchar(50)
);
insert into xz_imagelist values(
    null,
    'http://127.0.0.1:3000/img/banner2.png',
    '图片2'
);
insert into xz_imagelist values(
    null,
    'http://127.0.0.1:3000/img/banner2.png',
    '图片2'
);
insert into xz_imagelist values(
    null,
    'http://127.0.0.1:3000/img/banner3.png',
    '图片3'
);
insert into xz_imagelist values(
    null,
    'http://127.0.0.1:3000/img/banner4.png',
    '图片4'
);
select img_url from xz_imagelist;

create table xz_news(
    id int primary key auto_increment,
    title varchar(255),
    content varchar(2000),
    click int,
    img_url varchar(255),
    price decimal(10,2),
    ctime datetime
);
insert into xz_news values(null,"123","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"321","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"523","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"sdf","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"1123","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"166","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"1112","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"x44","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"6zxv","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"12656","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"34vc","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"166sdf","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"xcygre6","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"125dfv","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"34fdg","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"123","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"112365","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"dfg4","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"125","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"1642","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"jjj34","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"234","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"235","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"98j8","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"235sd","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"325x","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"cvd4","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"7cg","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"1236d","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"784","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"12df3","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"12ghh3","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"121323","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
insert into xz_news values(null,"127563","312",0,"http://127.0.0.1:3000/img/banner.png",0,now());
update  xz_news set content='<h1> Translate between 103 languages by typing</h1><h3>laji</h3><img src="http://localhost:3000/img/banner1.png" style="width:100%" />' where id=1;
#评论表
create table xz_comment(
    id int primary key auto_increment,
    nid int,
    ctime datetime,
    content varchar(50),
    username varchar(25),
    isdel int
);
insert into xz_comment values(null,1,now(),'111','tom',0);
insert into xz_comment values(null,1,now(),'133','tom',0);
insert into xz_comment values(null,1,now(),'121','tom',0);
insert into xz_comment values(null,1,now(),'1cds','tom',0);
insert into xz_comment values(null,1,now(),'1123','tom',0);
insert into xz_comment values(null,1,now(),'1v12','tom',0);
insert into xz_comment values(null,1,now(),'532','tom',0);
insert into xz_comment values(null,1,now(),'1st3','tom',0);
insert into xz_comment values(null,1,now(),'2311','tom',0);
insert into xz_comment values(null,1,now(),'124a1','tom',0);

insert into xz_comment values(null,2,now(),'24s1','tom',0);
insert into xz_comment values(null,2,now(),'5541','tom',0);
insert into xz_comment values(null,2,now(),'112','tom',0);
insert into xz_comment values(null,2,now(),'1612','tom',0);
insert into xz_comment values(null,2,now(),'542','tom',0);
insert into xz_comment values(null,2,now(),'5541','tom',0);
insert into xz_comment values(null,2,now(),'112','tom',0);
insert into xz_comment values(null,2,now(),'1612','tom',0);
insert into xz_comment values(null,2,now(),'542','tom',0);
insert into xz_comment values(null,2,now(),'542','tom',0);


select `id`,`nid`,`ctime`,`content`,`username`,`isdel` from xz_comment where nid=1  order by ctime desc limit 1,5
