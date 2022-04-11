function GetVerdictWeather (props) {
    const {degrees} = props;
if (degrees >= 18){
    return <h1>Сегодня тепло</h1>
}else if (degrees < 18){
    return <h1>Сегодня холодно</h1>
}
}
export default GetVerdictWeather
