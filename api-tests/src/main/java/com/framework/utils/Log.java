package com.framework.utils;

import io.qameta.allure.Allure;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public final class Log {

    private static final Logger log = LoggerFactory.getLogger(Log.class);
    private Log() {}

    public static void step(String message) {
        log.info("[STEP] {}", message);
        Allure.step(message);
    }

    public static void pass(String message) {
        log.info("[PASS] {}", message);
        Allure.step("PASS : " + message);
    }

    public static void fail(String message) {
        log.error("[FAIL] {}", message);
        Allure.step("FAIL : " + message);
    }

    public static void info(String key, Object value) {
        String safeValue = isSensitive(key) ? "[MASKED]" : String.valueOf(value);
        log.info("{} : {}", key, safeValue);
        Allure.step(key + " = " + safeValue);
    }

    private static boolean isSensitive(String key) {
        if (key == null) {
            return false;
        }
        String k = key.toLowerCase();
        return k.contains("password")
                || k.contains("token")
                || k.contains("secret")
                || k.contains("auth")
                || k.contains("cookie")
                || k.contains("apikey")
                || k.contains("jwt");
    }
}