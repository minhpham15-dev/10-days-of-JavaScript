function getDayName(dateString) {
    let dayName;
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    dayName = days[new Date(dateString).getUTCDay()];
    return dayName;

    //Sử dụng Intl.DateTimeFormat
    //let dayName = new Date(dateString);

    //return new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(dayName);
}
