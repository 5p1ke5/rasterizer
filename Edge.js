class Edge
{
    //Wants two vertexes.
    constructor(vOne, vTwo)
    {
        this.vOne = vOne;
        this.vTwo = vTwo;
    }

    //returns tangent of vertex one to vertex two.
    tan()
    {
        return this.vTwo.subtract(this.vOne); 
    }

    //normalizes the tangent and returns it.
    normalizedTan()
    {
        return this.tan().norm();
    }

    //Normalizes the tangent and gets a line perendicular.
    perpendicular()
    {
        return this.normalizedTan().perpendicular();
    }

    //Makes pixels in a line along the edge, returns those pixels in an array.
    getPixels()
    {
        //Array of pixels to return once populated.
        let pixels = [];

        //Calculate the inverse of the edge.
        let tangent = this.normalizedTan();
        let absX = Math.abs(tangent.x);
        let absY = Math.abs(tangent.y);
        let inverse = 1 / Math.max(absY, absX);

        let offTangent = new Vertex2D(tangent.x * inverse, tangent.y * inverse);
        let steps = this.tan().getLength() / offTangent.getLength();

        let x = this.vOne.x;
        let y = this.vOne.y;

        //Populates the array with pixels along the edge.
        let count = 0;
        while (count < steps)
        {
            count++;
            pixels.push
            (
                new Pixel(Math.round(x), Math.round(y), undefined, 255, 255, 255)
            );
            x += offTangent.x;
            y += offTangent.y;
        }

        return pixels;
    }
}