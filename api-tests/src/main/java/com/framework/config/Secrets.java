package com.framework.config;

import java.io.FileInputStream;
import java.util.Properties;

public final class Secrets {

    private static final Properties props = new Properties();

    static {
        try {
            props.load(new FileInputStream("secrets.local.properties"));
        } catch (Exception e) {
            throw new RuntimeException("Unable to load secrets", e);
        }
    }

    private Secrets() {
    }

    public static String get(String key) {
        String env = System.getenv(key.toUpperCase().replace(".", "_"));
        return env != null ? env : props.getProperty(key);
    }
}