class Vertex3D 
{
    constructor (x, y, z) 
    {
        [this.x, this.y, this.z] = [x, y, z]
    }

    subtract(otherVertex)
    {
        return new Vertex3D (this.x - otherVertex.x, this.y - otherVertex.y, this.z - otherVertex.z);
    }

    add(otherVertex)
    {
        return new Vertex3D (this.x + otherVertex.x, this.y + otherVertex.y, this.z + otherVertex.z);
    }

    scale(scalar)
    {
        return new Vertex3D (this.x * scalar, this.y * scalar, this.z * scalar);
    }

    norm()
    {
        return new Vertex3D (this.x / this.getLength(), this.y / this.getLength(), this.z / this.getLength());
    }

    clone()
    {
        return new Vertex3D(this.x, this.y, this.z);
    }


    getLength()
    {
        return Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z));
    }

    dotProduct(otherVertex)
    {
        return this.x * otherVertex.x + this.y * otherVertex.y + this.z * otherVertex.z;
    }
    
    crossProduct(otherVertex)
    {
        let x = this.y * otherVertex.z - this.z * otherVertex.y;
        let y = this.z * otherVertex.x - this.x * otherVertex.z;
        let z = this.x * otherVertex.y - this.y * otherVertex.x;
        
        return new Vertex3D(x, y, z);
    }
}