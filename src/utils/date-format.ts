


export const blogDateToDate = (blogDate: string) => {
    const [day, month, year] = blogDate.split('/').map(Number);
    const date = new Date(year, month - 1, day);
}

export const blogDateToFormatDate = (blogDate: string, langCode: string): string => {
    // Dividir la fecha en partes (día, mes, año)
    const [day, month, year] = blogDate.split('/').map(Number);

    // Verificar si la fecha es válida
    if (!day || !month || !year) {
        throw new Error("Invalid date format. Expected 'DD/MM/YYYY'.");
    }

    // Meses en español e inglés
    const months = {
        ES: [
            "enero", "febrero", "marzo", "abril", "mayo", "junio",
            "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
        ],
        EN: [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ]
    };

    // Seleccionar el idioma (por defecto inglés)
    const selectedLanguage = langCode === "ES" ? "ES" : "EN";
    const monthName = months[selectedLanguage][month - 1]; // Ajustar índice del mes

    // Retornar la fecha formateada
    return `${day} ${monthName}, ${year}`;
};