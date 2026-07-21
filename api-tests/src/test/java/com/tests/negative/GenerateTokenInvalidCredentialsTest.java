package com.tests.negative;

import com.framework.config.SpecFactory;
import com.framework.models.GenerateTokenRequest;

import com.framework.testdata.UserData;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class GenerateTokenInvalidCredentialsTest {

    @Test
    void shouldFailForInvalidCredentials() {

        GenerateTokenRequest request = UserData.invalidCredentials();

        Response response = given()
                        .spec(SpecFactory.requestSpec())
                        .body(request)
                        .when()
                        .post("/Account/v1/GenerateToken");

        assertEquals(200, response.statusCode());
        assertEquals("Failed", response.jsonPath().getString("status"));
    }
}