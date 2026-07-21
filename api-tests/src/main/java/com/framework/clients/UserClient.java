package com.framework.clients;

import com.framework.config.SpecFactory;
import com.framework.models.CreateUserRequest;
import com.framework.utils.Log;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class UserClient {

    public Response createUser(CreateUserRequest request) {

        Log.step("Creating user : " + request.userName());

        Response response = given()
                        .spec(SpecFactory.requestSpec())
                        .body(request)
                        .when()
                        .post("/Account/v1/User");

        Log.info("Status Code", response.statusCode());
        return response;
    }
}