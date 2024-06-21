function getFormattedValue (time){
    const minute = `${Math.trunc(time/60) <10 ? `0${Math.trunc(time/60)}` : Math.trunc(time/60) }`
    const seconds = `${time % 60 < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60)}`;

    return `${minute}:${seconds}`
}

export default getFormattedValue;