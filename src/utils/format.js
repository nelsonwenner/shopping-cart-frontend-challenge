const locale = 'pt-BR'
const moneyFormatter = new Intl.NumberFormat(locale, {
  minimumFractionDigits: 2
})

export function formatMoney(number) {
  return moneyFormatter.format(number)
}
