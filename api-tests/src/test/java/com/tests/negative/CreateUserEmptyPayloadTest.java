package com.tests.negative;

import com.framework.clients.UserClient;
import com.framework.models.CreateUserRequest;
import com.framework.testdata.UserData;

import io.restassured.response.Response;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CreateUserEmptyPayloadTest {

    private final UserClient userClient = new UserClient();

    @Test
    void shouldFailForEmptyPayload() {

        CreateUserRequest request = UserData.emptyUser();

        Response response = userClient.createUser(request);
        assertEquals(400, response.statusCode());
    }
}