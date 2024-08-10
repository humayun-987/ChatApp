export const getTimeFromDateString = (dateString) => {
    // Create a new Date object from the date string
    const date = new Date(dateString);
    
    // Extract hours and minutes
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    // Format hours and minutes as 'HH:mm' (24-hour format)
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    
    return formattedTime;
}