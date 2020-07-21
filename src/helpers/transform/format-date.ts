export default function formatDate(date: Date | string) {
    if (typeof date === 'string') {
        return formatDate(new Date(Date.parse(date)));
    }

}