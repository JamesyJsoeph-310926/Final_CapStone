package com.tests.positive;

import com.framework.clients.BookClient;
import com.framework.models.BooksResponse;

import io.restassured.response.Response;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class GetBooksTest {

    private final BookClient bookClient = new BookClient();

    @Test
    void shouldGetBooksSuccessfully() {

        Response response = bookClient.getBooks();

        assertEquals(200, response.statusCode());
        BooksResponse books = response.as(BooksResponse.class);
        assertFalse(books.books().isEmpty());
    }
}