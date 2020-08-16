export default function convertHournToMinutes(time: string) {
  //8:00 e trnasformar em number
  const [ hour, minutes ] = time.split(':').map(Number);
  
  const timeInMinutes = (hour * 60) + minutes;
  return timeInMinutes

}