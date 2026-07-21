package com.framework.models;

public record Book(String isbn, String title, String subTitle, String author, String publish_date, String publisher, int pages, String description, String website) {
}