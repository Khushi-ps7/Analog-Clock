function clockrun(){
    const hourhand = document.getElementById("hourhand");
    const minutehand = document.getElementById("minutehand");
    const secondhand = document.getElementById("secondhand");
    
    const time = new Date();
    const hour = time.getHours() ;
    const minute = time.getMinutes();
    const second = time.getSeconds();

    const hdegree = (hour * 30) + (0.5 * minute);
    const mdegree = (minute * 6) ;
    const sdegree = (second * 6) ;

    hourhand.style.transform =`rotate(${hdegree}deg)`;
    minutehand.style.transform = `rotate(${mdegree}deg)`;
    secondhand.style.transform = `rotate(${sdegree}deg)`;
    setTimeout(clockrun , 1000);
}
clockrun();