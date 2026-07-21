package com.tests.edgeCase;

import com.framework.clients.BookClient;

import io.restassured.response.Response;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class BooksResponseNotEmptyTest {

    private final BookClient bookClient = new BookClient();

    @Test
    void shouldContainBooks() {
        Response response = bookClient.getBooks();

        assertEquals(200, response.statusCode());
        assertTrue(response.jsonPath().getList("books").size() > 0);
    }
}