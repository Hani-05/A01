import java.time.LocalDateTime;

public class Shape {
    private double area;
    private LocalDateTime creationTime;

    public Shape() {
        creationTime = LocalDateTime.now();
    }

    public double getArea() {
        return area;
    }

    public void setArea(double area) {
        this.area = area;
    }

    public LocalDateTime getCreationTime() {
        return creationTime;
    }
}

//Square Class

public class Square extends Shape {
    private double sideLength;

    public Square() {
        super();
    }

    public Square(double sideLength) {
        super();
        this.sideLength = sideLength;
        setArea(sideLength * sideLength);
    }

    public double getSideLength() {
        return sideLength;
    }

    public void setSideLength(double sideLength) {
        this.sideLength = sideLength;
        setArea(sideLength * sideLength);
    }

    
    public String toString() {
        return "Square [sideLength=" + sideLength + ", area=" + getArea() + ", creationTime=" + getCreationTime() + "]";
    }
}

//LinkedListNode class (for building the linked list):
java

public class LinkedListNode {
    public Square data;
    public LinkedListNode next;

    public LinkedListNode(Square square) {
        this.data = square;
        this.next = null;
    }
}

//LinkedList class:

public class LinkedList {
    private LinkedListNode head;

    public void insert(Square square) {
        LinkedListNode newNode = new LinkedListNode(square);
        if (head == null) {
            head = newNode;
        } else {
            LinkedListNode current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    public void display() {
        LinkedListNode current = head;
        while (current != null) {
            System.out.println(current.data.toString());
            current = current.next;
        }
    }
}
