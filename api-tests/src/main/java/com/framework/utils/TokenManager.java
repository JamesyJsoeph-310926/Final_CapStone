package com.framework.utils;

import com.framework.clients.AuthClient;
import com.framework.models.GenerateTokenResponse;
import com.framework.testdata.UserData;
import io.restassured.response.Response;

public final class TokenManager {

    private static String token;

    private TokenManager() {}

    public static String getToken() {
        if (token == null || token.isBlank()) {
            Response response = new AuthClient().generateToken(UserData.validCredentials());
            token = response.as(GenerateTokenResponse.class).token();
        }
        return token;
    }

    public static void clearToken() {
        token = null;
    }
}