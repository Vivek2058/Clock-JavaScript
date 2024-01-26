const hourHand=document.getElementById("hour");
const minutHand=document.getElementById("minut");
const secHand=document.getElementById("second");

function calculateClock()
{
    const date=new Date();
    const hour=date.getHours();
    const minut=date.getMinutes();
    const sec=date.getSeconds();
    console.log(hour)
    const a=(hour-15)*30+(minut/2);
    const b=(minut*6)-90;
    const c=(sec*6)-90;
    
    hourHand.style.transform=`rotate(${a}deg)`;
    minutHand.style.transform=`rotate(${b}deg)`;
    secHand.style.transform=`rotate(${c}deg)`;
}
setInterval(calculateClock,1000);