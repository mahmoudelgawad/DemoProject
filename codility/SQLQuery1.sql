--select recipient as 'account_name'
--from transfers
--group by recipient
--having sum(amount) > 1024




--select recipient as account_name
--from (
--  select * 
--    , row_number() over (
--        partition by recipient
--        order by amount desc
--        ) as rn
--  from transfers
--  ) as i
--where rn < 4
--group by recipient
--having sum(amount)>=1024