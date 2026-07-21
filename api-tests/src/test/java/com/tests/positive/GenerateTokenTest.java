package com.tests.positive;

import com.framework.clients.AuthClient;
import com.framework.models.GenerateTokenResponse;
import com.framework.testdata.UserData;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class GenerateTokenTest {

    private final AuthClient authClient = new AuthClient();

    @Test
    void shouldGenerateTokenSuccessfully() {

        Response response = authClient.generateToken(UserData.validCredentials());
        assertEquals(200, response.statusCode());

        GenerateTokenResponse tokenResponse = response.as(GenerateTokenResponse.class);
        assertNotNull(tokenResponse.token());
    }
}