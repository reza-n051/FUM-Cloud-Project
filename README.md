# FUM-Cloud-Project
این برنامه ، یک برنامه ساده برای یادگیری داکر می باشد.

این برنامه از 3 سرویس زیر تشکیل شده است:

1.MongoDB:

2.Reverse Proxy(NginX):

3.Main App(Node js):

نحوه راه اندازی:

1.پس از اطمینان از نصب داکر دستور زیر را وارد کنید:

docker compose up -d

2.جهت تست برنامه از دستورات زیر استفاده کنید:

curl --request GET http://localhost:8082/test -H "Content-Type: application/json"

curl --request POST http://localhost:8082/test -d "{\"name\":\"Test1\",\"txt\":\"txt txt txt\"}" -H "Content-Type: application/json"

توجه کنید که هدف یادگیری است به همین علت برای نشان دادن برخی قابلیت ها مانند محدودیت منابع و استارت دوباره برنامه و ... باگ هایی در برنامه وجود دارد.

برای اجرای درست پس از اجرای کانیتنر ها ابتدا صبر کنید(تا سرویس ها به طور کامل راه اندازی شوند) سپس دستور دوم و در نهایت دستور اول را اجرا کنید.
