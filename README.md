# سامانه خدمات دانشجویی

سیستم مدیریت وظایف و خدمات دانشجویی با معماری Multi-Page Application (MPA)

## ویژگی‌ها

- ✅ سیستم احراز هویت با RBAC
- ✅ پنل مدیریت با قابلیت‌های کامل
- ✅ داشبورد کارمندان با تایمر معکوس زنده
- ✅ ضبط و پخش دستورات صوتی
- ✅ چک‌لیست برای هر تسک
- ✅ آپلود و دانلود فایل‌ها
- ✅ طراحی RTL کامل با فونت وزیرمتن
- ✅ یکپارچگی با GitHub API به عنوان دیتابیس

## ساختار پروژه

```
/
├── index.html              # صفحه ورود
├── admin/
│   └── dashboard.html      # پنل مدیریت
├── employee/
│   ├── dashboard.html      # داشبورد کارمند
│   └── task-details.html   # جزئیات تسک
└── database/
    ├── users.json          # اطلاعات کاربران
    └── tasks.json          # اطلاعات تسک‌ها
```

## نصب و راه‌اندازی

1. این ریپازیتوری را کلون کنید
2. در فایل‌های HTML، مقادیر `GITHUB_CONFIG` را با اطلاعات خود جایگزین کنید:
   ```javascript
   const GITHUB_CONFIG = {
       owner: 'YOUR_GITHUB_USERNAME',
       repo: 'YOUR_REPO_NAME',
       token: 'YOUR_PERSONAL_ACCESS_TOKEN'
   };
   ```
3. فایل‌های `database/users.json` و `database/tasks.json` را در ریپازیتوری خود آپلود کنید
4. پروژه را روی GitHub Pages فعال کنید

## اطلاعات ورود آزمایشی

**مدیر:**
- نام کاربری: `admin`
- رمز عبور: `admin123`

**کارمند:**
- نام کاربری: `employee1`
- رمز عبور: `emp123`

## تکنولوژی‌ها

- HTML5
- Tailwind CSS (CDN)
- Vanilla JavaScript (ES6+)
- GitHub REST API
- MediaRecorder API

## مجوز

MIT License