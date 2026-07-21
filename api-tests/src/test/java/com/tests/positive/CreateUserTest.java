package com.tests.positive;

import com.framework.clients.UserClient;
import com.framework.models.CreateUserRequest;
import com.framework.models.CreateUserResponse;
import com.framework.testdata.UserData;

import io.restassured.response.Response;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class CreateUserTest {

    private final UserClient userClient = new UserClient();

    @Test
    void shouldCreateUserSuccessfully() {
        CreateUserRequest request = UserData.validCreateUser();
        Response response = userClient.createUser(request);

        assertEquals(201, response.statusCode());
        CreateUserResponse user = response.as(CreateUserResponse.class);
        assertNotNull(user.userID());
        assertEquals(request.userName(), user.username());
    }
}