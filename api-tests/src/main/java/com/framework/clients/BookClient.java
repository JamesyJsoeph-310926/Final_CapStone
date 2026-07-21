package com.framework.clients;

import com.framework.config.SpecFactory;
import com.framework.utils.Log;
import io.restassured.response.Response;
import static io.restassured.RestAssured.given;

public class BookClient {

    public Response getBooks() {

        Log.step("Getting books");

        return given()
                .spec(SpecFactory.requestSpec())
                .when()
                .get("/BookStore/v1/Books");
    }
}