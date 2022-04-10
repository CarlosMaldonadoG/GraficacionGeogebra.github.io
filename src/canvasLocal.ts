export class CanvasLocal {
    //atributos
    protected graphics: CanvasRenderingContext2D;
    protected rWidth:number;
    protected rHeight:number;
    protected maxX: number;
    protected maxY: number;
    protected pixelSize: number;
    protected centerX: number;
    protected centerY: number;
        
    public constructor(g: CanvasRenderingContext2D, canvas: HTMLCanvasElement, rW : number, rH : number){
      this.graphics = g;
      this.rWidth = rW;
      this.rHeight= rH;
      this.maxX = canvas.width - 1
      this.maxY = canvas.height - 1;
      this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
      this.centerX = this.maxX/2;
      this.centerY = this.maxY/2;
    }
    
    iX(x: number):number{return Math.round(this.centerX + x/this.pixelSize);}
    iY(y: number): number{ return Math.round(this.centerY - y / this.pixelSize); }
    
    drawLine(x1: number, y1: number, x2: number, y2:number) {
        this.graphics.beginPath();
        this.graphics.moveTo(x1, y1);
        this.graphics.lineTo(x2, y2);
        this.graphics.closePath();
        this.graphics.stroke();
      }
      fx(x : number): number{
        return x * x;
      }
      paint() {
        this.drawLine(this.iX(-10), this.iY(0), this.iX(10), this.iY(0));
        this.drawLine(this.iX(0), this.iY(-10), this.iX(0), this.iY(10));
     
        this.graphics.strokeStyle = 'lightgray';
        for(let j = -10; j <= 10; j += 0.2){
          let numUno = Number(j.toFixed(1));
          if(!(Number.isInteger(numUno))){
            this.drawLine(this.iX(-10), this.iY(numUno), this.iX(10), this.iY(numUno));
            this.drawLine(this.iX(numUno), this.iY(-10), this.iX(numUno), this.iY(10));
          }
        } 
        
        this.graphics.strokeStyle = 'black';
        this.graphics.font = 'bold 11px serif';
        this.graphics.fillStyle = 'brown';
        for(let i = -10; i <= 10; i++){
          this.drawLine(this.iX(i), this.iY(-10), this.iX(i), this.iY(10));
          this.graphics.fillText("" + i,this.iX(i - 0.3), this.iY(-0.3));
          this.drawLine(this.iX(-10), this.iY(i), this.iX(10), this.iY(i));
          this.graphics.fillText("" + i, this.iX(-0.3), this.iY(i - 0.3));
        }
        
        this.graphics.strokeStyle = 'red';
        for(let x = -3; x <= 3; x += 0.1){
          this.drawLine(this.iX(x), this.iY(this.fx(x)), this.iX(x + 0.1), this.iY(this.fx(x + 0.1)))
        }
    }
}