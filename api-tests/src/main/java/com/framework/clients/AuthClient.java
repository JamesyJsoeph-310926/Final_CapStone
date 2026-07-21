package com.framework.clients;

import com.framework.config.SpecFactory;
import com.framework.models.GenerateTokenRequest;
import com.framework.utils.Log;

import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class AuthClient {

    public Response generateToken(
            GenerateTokenRequest request) {

        Log.step("Generating token");

        return given()
                .spec(SpecFactory.requestSpec())
                .body(request)
                .when()
                .post("/Account/v1/GenerateToken");
    }
}