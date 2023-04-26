export const changeDateToInputFormat = (date: Date) => {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join('-');
}

export const changeDateToLocalFormat = (date: Date) => {
    return date.toLocaleDateString(
        undefined,
        {
            month: "2-digit",
            day: "2-digit",
            year: "numeric"
        }
    )
}

function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }