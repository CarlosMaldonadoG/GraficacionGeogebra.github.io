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
      this.rWidth = 6;
      this.rHeight= 4;
      this.maxX = canvas.width - 1
      this.maxY = canvas.height - 1;
      this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
      this.centerX = this.maxX/2;
      this.centerY = this.maxY/2;
    }
    drawLine(x1: number, y1: number, x2: number, y2:number) {
        this.graphics.beginPath();
        this.graphics.moveTo(x1, y1);
        this.graphics.lineTo(x2, y2);
        this.graphics.closePath();
        this.graphics.stroke();
      }
      paint() {
    

        this.drawLine(100.5,100, 500,100.5);
        this.drawLine(500, 100, 300, 400);
        this.drawLine(300, 400, 100,100);
    }
}