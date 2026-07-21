package com.tests.edgeCase;

import com.framework.config.SpecFactory;

import io.restassured.response.Response;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class CreateUserEmptyPayloadTest {

    @Test
    void shouldFailForEmptyPayload() {

        Response response = given()
                        .spec(SpecFactory.requestSpec())
                        .body("{}")
                        .when()
                        .post("/Account/v1/GenerateToken");

        assertEquals(400, response.statusCode());
    }
}