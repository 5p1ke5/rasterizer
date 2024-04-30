class Vertex2D 
{
    constructor (x, y) 
    {
        this.x = x;
        this.y = y;
    }

    clone()
    {
        return new Vertex2D(this.x, this.y);
    }

    subtract(otherVertex)
    {
        return new Vertex2D (this.x - otherVertex.x, this.y - otherVertex.y);
    }

    add(otherVertex)
    {
        return new Vertex2D (this.x + otherVertex.x, this.y + otherVertex.y);
    }

    scale(scalar)
    {
        return new Vertex2D (this.x * scalar, this.y * scalar);
    }

    getLength()
    {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }

    norm()
    {
        return new Vertex2D (this.x / this.getLength(), this.y / this.getLength());
    }

    perpendicular()
    {
        console.log("Getting perp 2D...");
        return new Vertex2D (-this.y, this.x);
    }

    dotProduct(otherVertex)
    {
        return this.x * otherVertex.x + this.y * otherVertex.y;
    }
}