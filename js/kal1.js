 // Funkcja do wygenerowania kalendarza
 function generateCalendar(year, month, tableId, captionId) {
    const table = document.getElementById(tableId);
    const caption = document.getElementById(captionId);

    // Ustaw datę kalendarza na pierwszy dzień miesiąca
    const currentDate = new Date(year, month, 1);

    // Ustaw caption na nazwę miesiąca
    const monthNames = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    caption.textContent = monthNames[month] + " " + year;

   

    // Ustal dzień tygodnia pierwszego dnia w miesiącu (0 - niedziela, 1 - poniedziałek, ..., 6 - sobota)
    const firstDayOfWeek = currentDate.getDay();

    // Oblicz liczbę dni w miesiącu
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

    let date = 1;
    
    if (table && table.tBodies && table.tBodies[0]) {
        // Tworzenie wiersza w tabeli
        const row = table.tBodies[0].insertRow();
         // Wypełnij kalendarz danymi
    for (let i = 0; i < 42; i++) { // 6 tygodni x 7 dni
        const cell = row.insertCell();
        if (i >= firstDayOfWeek && date <= lastDayOfMonth) {
            cell.textContent = date;
            date++;

            // Zaznacz dzisiejszą datę
            const today = new Date();
            if (year === today.getFullYear() && month === today.getMonth() && date - 1 === today.getDate()) {
                cell.classList.add("today");
            }
        }
        if (i % 7 === 6) {
            row = table.tBodies[0].insertRow();
        }
    }
        // Pozostała część kodu do wypełniania kalendarza
        // ...
    } else {
        console.error("Nie znaleziono tabeli lub jej ciała.");
    }
   
}

// Pobierz obecny rok i miesiąc
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();

// Wywołaj funkcję generującą kalendarze
generateCalendar(currentYear, currentMonth - 1, "calendarBody1", "lastMonthCaption");
generateCalendar(currentYear, currentMonth, "calendarBody2", "currentMonthCaption");
generateCalendar(currentYear, currentMonth + 1, "calendarBody3", "nextMonthCaption");