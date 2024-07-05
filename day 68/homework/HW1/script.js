// 1
function getCurrentDate() {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();
    return `${month}/${day}/${year}`;
}

console.log(getCurrentDate());

// 2
function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

console.log(getCurrentTime());

// 3
function getDayOfWeek(number) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[number % 7];  // Adjust for 0-6 range
}

console.log(getDayOfWeek(1)); // Output: "Sunday"

// 4
function daysBetweenDates(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
    const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
    return diffDays;
}

const date1 = new Date('2023-07-01');
const date2 = new Date('2024-07-01');
console.log(daysBetweenDates(date1, date2)); // Output: 366 (leap year)

// 5
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const date = new Date();
console.log(formatDate(date));

// 6
function compareDates(date1, date2) {
    if (date1 < date2) {
        return "Date1 is earlier";
    } else if (date1 > date2) {
        return "Date2 is earlier";
    } else {
        return "Both dates are the same";
    }
}

const compareDate1 = new Date('2023-07-01');
const compareDate2 = new Date('2024-07-01');
console.log(compareDates(compareDate1, compareDate2)); // Output: "Date1 is earlier"

// 7
function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

console.log(getDaysInMonth(2, 2024)); // Output: 29 (leap year)

// 8
function timeSince(date) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    const intervals = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
        { label: 'minute', seconds: 60 },
        { label: 'second', seconds: 1 }
    ];
    
    for (const interval of intervals) {
        const count = Math.floor(seconds / interval.seconds);
        if (count >= 1) {
            return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
        }
    }
    return 'just now';
}

const pastDate = new Date('2023-06-01');
console.log(timeSince(pastDate));

// 9
function daysUntilNextBirthday(birthday) {
    const now = new Date();
    const nextBirthday = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate());
    if (nextBirthday < now) {
        nextBirthday.setFullYear(now.getFullYear() + 1);
    }
    return Math.floor((nextBirthday - now) / (1000 * 60 * 60 * 24));
}

const birthday = new Date('2000-07-01');
console.log(daysUntilNextBirthday(birthday));

// 10
function calculateAge(birthday) {
    const now = new Date();
    let age = now.getFullYear() - birthday.getFullYear();
    const monthDiff = now.getMonth() - birthday.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthday.getDate())) {
        age--;
    }
    return age;
}

const birthDate = new Date('2000-07-01');
console.log(calculateAge(birthDate));
