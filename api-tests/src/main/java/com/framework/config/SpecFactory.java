package com.framework.config;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;

public final class SpecFactory {

    private SpecFactory() {}

    public static RequestSpecification requestSpec() {

        return new RequestSpecBuilder()
                .setBaseUri(EnvConfig.baseUrl())
                .setContentType(ContentType.JSON)
                .build();
    }

    public static RequestSpecification authenticatedSpec(String token) {

        return new RequestSpecBuilder()
                .setBaseUri(EnvConfig.baseUrl())
                .setContentType(ContentType.JSON)
                .addHeader("Cookie", "token=" + token)
                .build();
    }
}