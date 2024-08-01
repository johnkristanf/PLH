
export function FormattedDateNow(){
    const padZero = (num: number) => (num < 10 ? '0' + num : num);

    const now = new Date();
    
    const month = padZero(now.getMonth() + 1);
    const day = padZero(now.getDate());
    const year = now.getFullYear();
    
    let hours = now.getHours();
    const minutes = padZero(now.getMinutes());
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    const strTime = `${padZero(hours)}:${minutes} ${ampm}`;
    
    return `${month}/${day}/${year} ${strTime}`;
}