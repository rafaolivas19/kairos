export const formatYYMMDDHHMM = (d: Date) => {
  const dd = String(d.getDate()).padStart(2, '0')
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const yy = String(d.getFullYear()).slice(-2)
  const hh = String(d.getHours()).padStart(2, '0')
  const min = String(d.getMinutes()).padStart(2, '0')
  return `${yy}${mm}${dd}${hh}${min}`
}

export const formatYYMMDDHHMMSS = (d: Date) => {
  const base = formatYYMMDDHHMM(d)
  const ss = String(d.getSeconds()).padStart(2, '0')
  return `${base}${ss}`
}
