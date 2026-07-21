package com.framework.testdata;

import com.framework.config.EnvConfig;
import com.framework.models.CreateUserRequest;
import com.framework.models.GenerateTokenRequest;

public final class UserData {

    private UserData() {
    }

    public static CreateUserRequest validCreateUser() {
        return new CreateUserRequest(EnvConfig.username(), EnvConfig.password());
    }

    public static CreateUserRequest emptyUser() {
        return new CreateUserRequest("", "");
    }

    public static GenerateTokenRequest validCredentials() {
        return new GenerateTokenRequest(EnvConfig.username(), EnvConfig.password());
    }

    public static GenerateTokenRequest invalidCredentials() {
        return new GenerateTokenRequest(EnvConfig.invalidUsername(), EnvConfig.invalidPassword());
    }
}