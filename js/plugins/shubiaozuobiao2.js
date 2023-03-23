/*:
 * @help 获取鼠标在屏幕上的即时坐标，变量等于movex或movey即可获得对应数值。
 */


var movex; var movey;                     //用来接受鼠标位置的全局变量
function mousemove(e)
{
       e=e  || window.event;
       if(e.pageX || e.pageY)
       {
                movex = Graphics.pageToCanvasX(e.pageX);
                movey = Graphics.pageToCanvasY(e.pageY); 
       }             
}    

document.onmousemove = mousemove;