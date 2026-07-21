package com.framework.config;

public final class EnvConfig {

    private EnvConfig() {}

    public static String baseUrl() {
        return Secrets.get("BASE_URL");
    }

    public static String username() {
        return Secrets.get("TEST_USERNAME");
    }

    public static String password() {
        return Secrets.get("TEST_PASSWORD");
    }

    public static String invalidUsername() {
        return Secrets.get("TEST_INVALID_USERNAME");
    }

    public static String invalidPassword() {
        return Secrets.get("TEST_INVALID_PASSWORD");
    }
}