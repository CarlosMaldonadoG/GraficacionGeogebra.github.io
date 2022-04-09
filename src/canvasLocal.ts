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
    
        
    public constructor(g: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
      this.graphics = g;
      this.rWidth = 24.0;
      this.rHeight= 20.0;
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
        /*this.drawLine(this.iX(-10), this.iY(0), this.iX(10), this.iY(0));
        this.drawLine(this.iX(0), this.iY(-10), this.iX(0), this.iY(10));
        this.drawLine(this.iX(-5), this.iY(0), this.iX(0), this.iY(5));*/
         
        this.graphics.strokeStyle = 'black';
        for(let i = -10; i <= 10; i++){
          this.drawLine(this.iX(i), this.iY(-10), this.iX(i), this.iY(10));
          this.graphics.fillText(i + "", this.iX(i), this.iY(-0.3));
          this.drawLine(this.iX(-10), this.iY(i), this.iX(10), this.iY(i));
          this.graphics.fillText(i + "", this.iX(-0.2), this.iY(i));
        } 
        
        this.graphics.strokeStyle = 'red';
        for(let x = -3; x <= 3; x += 0.1){
          this.drawLine(this.iX(x), this.iY(this.fx(x)), this.iX(x + 0.1), this.iY(this.fx(x + 0.1)))
        }

        this.graphics.strokeStyle = 'lightgray';
        for(let j = -10; j <= 10; j += 0.2){
          this.drawLine(this.iX(-10), this.iY(j), this.iX(10), this.iY(j));
          this.drawLine(this.iX(j), this.iY(-10), this.iX(j), this.iY(10));
        }
    }
}