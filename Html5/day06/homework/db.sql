use web1806;
create table yaopin(
    id int primary key auto_increment,
    name varchar(255),
    price decimal(10,2)
);
create table kucun(
    id int primary key auto_increment,
    yid int,
    bank int
);
create table xiaoshou(
    id int primary key auto_increment,
    yid int,
    sales decimal(10,2)
);

insert into yaopin values(null,"六味地黄丸",99);
insert into yaopin values(null,"999 感冒灵",88);
insert into yaopin values(null,"阿莫西林",14);
insert into yaopin values(null,"泻立停",25);
insert into kucun values(null,1,900);
insert into kucun values(null,2,50);
insert into kucun values(null,3,40000);
insert into kucun values(null,4,3);
insert into xiaoshou values(null,1,3000.00);
insert into xiaoshou values(null,2,42000.00);
insert into xiaoshou values(null,3,300.00);
insert into xiaoshou values(null,4,66080.00);

select y.id,y.name,x.sales from yaopin y inner join xiaoshou x on y.id = x.yid;