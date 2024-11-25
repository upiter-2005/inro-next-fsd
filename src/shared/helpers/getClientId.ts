export const getClientId = () => {

    let match = document.cookie.match('(?:^|;)\\s*_ga=([^;]*)');
    let raw = (match) ? decodeURIComponent(match[1]) : null;
    if (raw)
    {
    match = raw.match(/(\d+\.\d+)$/);
    }
    let gacid = (match) ? match[1] : null;
    if (gacid)
    {
        return gacid ;
    }
}