CREATE USER freelance IDENTIFIED BY "websitedbpssd" DEFAULT TABLESPACE USERS QUOTA UNLIMITED ON USERS;
GRANT CONNECT, RESOURCE TO freelance;

SHOW CON_NAME;

ALTER SESSION SET CONTAINER = XEPDB1;
ALTER USER freelance DEFAULT TABLESPACE USERS QUOTA UNLIMITED ON USERS;
SELECT username, default_tablespace FROM dba_users WHERE username = 'FREELANCE';
SELECT sys_context('USERENV','SESSION_USER') AS me, sys_context('USERENV','CON_NAME') AS container FROM dual;
SELECT owner, table_name FROM all_tables WHERE table_name LIKE 'ENQUIRIES%';
SELECT * FROM FREELANCE.ENQUIRIES_ENQUIRY ORDER BY CREATED_AT DESC;

SELECT id, username, email, first_name, is_active, is_superuser, date_joined
FROM FREELANCE.AUTH_USER ORDER BY date_joined DESC;

SELECT owner, table_name FROM all_tables WHERE owner = 'FREELANCE' ORDER BY table_name;