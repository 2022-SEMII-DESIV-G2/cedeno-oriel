package com.example;
import static spark.Spark.*;

/**
 * Hello world!
 */
public final class App {
    private App() {
    }

    /**
     * Says hello to the world.
     * @param args The arguments of the program.
     */
    public static void main(String[] args) {
        //System.out.println("Hello World!");
        get("/hello", (req, res) -> "Hello World");
    }
}
