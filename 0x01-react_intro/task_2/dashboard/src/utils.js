export const getFullYear = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return currentYear;
}

export const getFooterCopy = (isIndex) => {
    if (isIndex) {
        return "Holberton School"
    } else {
        return "Holberton School main dashboard"
    }
}

export const getLatestNotification= () => {
    return "<strong>Urgent requirement</strong> - complete by EOD"
}