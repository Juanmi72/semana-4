import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
dayjs.extend(relativeTime);
await import('dayjs/locale/es-us.js');;
dayjs.locale('es-us');


// Humanizarfechas
function humanizarFecha(date) {
    const wrappedDate = dayjs(date);
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));   
    const currentYear = wrappedDate.year() === dayjs().year();
    if (!currentYear) {
        return wrappedDate.format("MMM DD, YYYY")
    } else if (daysDiff <= 30) {
        return wrappedDate.fromNow()
    } else {
        return wrappedDate.format("MMMM DD")
    }
}

document.querySelector(".time").innerHTML = "Creado: " + humanizarFecha(dayjs("2023-04-27"));



