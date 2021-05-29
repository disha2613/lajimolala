class Package{
    constructor(x, y, width, height) {
        var options = {
            'restitution':1.0,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }

    show(){
    var pos = this.body.position;

    packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

    rectMode(CENTER);
    fill(180);
    rect(pos.x , pos.y, this.width, this.height);
    Matter.Body.translate(packageBody,{x:-20, y:0});

	if(keyCode === DOWN_ARROW){
		Matter.Body.setStatic(packageBody,false);
	}
  
    packageSprite.x= packageBody.position.x;
    packageSprite.y= packageBody.position.y;
  
    }
}