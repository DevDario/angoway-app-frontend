export function formatDate(date){
  const options = {
    hour: "2-digit",
    minute: "2-digit",
  };
  const dateObj = new Date(date)
  return dateObj.toLocaleString("pt-BR", options);
}


export function formatTimestamp(timestamp){
  const date = new Date(timestamp);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  return date.toLocaleString("pt-BR", options);
}