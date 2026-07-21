package com.framework.models;

public record GenerateTokenResponse(String token, String expires, String status, String result) {
}